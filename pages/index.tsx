import Image from 'next/image';
import FeaturedPosts from '@/components/home/FeaturedPost';
import Head from 'next/head';
import NavButton from '@/components/NavButton';
import { getFeaturedPosts } from '@/utils/Post-Util';
import HomeIntro from '@/components/home/HomeIntro';

export default function Home(props) {
  return (
    <main className={`flex min-h-screen flex-col items-center w-full `}>
      <Head>
        <title>홈 페이지</title>
        <meta name = "description" content = "phnml1" />
      </Head>
      <HomeIntro />
      <div className='w-full md:w-4/5'>
       <div className='w-auto ml-8 mt-8 text-xl font-bold'>Featured Posts</div>
       <div className="w-full flex flex-col justify-center items-center flex-1 gap-16 mt-8 md:flex-row">
        {
          props.posts.map((post,i) => 
            <FeaturedPosts key={i} post = {post}/>
          )
        }
        </div>
        <div className='w-full flex mt-16 mb-16 justify-center'>
          <NavButton link="/posts" content="More Posts"/>
        </div>
      </div>
    </main>
  );
}
export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();
  
  return {
    props: {
      posts: FeaturedPosts,
    }
  }
}

