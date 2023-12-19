import { Fragment, useState } from 'react';
import Head from 'next/head';
import CategorySwiper from '@/components/posts/CategorySwiper';
import PostsContents from '@/components/posts/PostsContents';
import { useRouter } from 'next/router';
import { getPostsByCategory, getCategory } from '@/utils/Post-Util';
import { transformCategory } from '@/utils/Utils';

export default function PostsCategoryPage(props) {

  return (
    <Fragment>
      <Head>
        <title>{props.currentCategory}</title>
        <meta name="description" content="모든 포스트 보여주기" />
      </Head>
      <div className="w-full flex flex-col items-center md:w-4/5">
        <div className="w-full flex justify-center mt-4">
          <CategorySwiper content={props.categorys} />
        </div>
        <div className="mt-16 text-3xl font-extrabold w-full ml-10 mb-12">{props.currentCategory} (39)</div>
        <PostsContents contents = {props.posts}/>
      </div>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { category } = params;
  const categorys = transformCategory(getCategory());
  const postData = getPostsByCategory(category);
  return {
    props: {
        posts: postData,
        categorys: categorys,
        currentCategory: category
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const categorys = getCategory();

  return {
    paths: categorys.map(category => ({params: {category:category}})),
    fallback: false,
  }
  
}