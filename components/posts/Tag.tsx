import Link from "next/link";

interface TagProps {
  name: string 
}
const Tag:React.FC<TagProps> = (props) => {
  return (
    <Link href={`/posts/${props.name}`} className='w-fit h-fit px-2 py-1 transition-all bg-gray-100 rounded-lg text-sm dark:bg-dark-secondary dark:hover:text-white hover:bg-tag-hover dark:hover:bg-tag-dark-hover'>
      {props.name}
    </Link>
  )

}
export default Tag;