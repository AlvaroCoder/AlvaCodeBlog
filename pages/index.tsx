import Link from 'next/link';
import {Header, SearchBar} from '../components'
import { getPosts } from "../services";

function CardContentBlog({heading , description,url}) {
  return (
    <div key={heading} className='w-[50%] mt-10 p-5 border-2'>
      <Link href={`/posts/${url}`}><h1 className='text-xl font-serif font-bold'>{heading}</h1></Link>
      <p>{description}</p>
    </div>
  )
}

export default function HomePage({content})  {  
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header></Header>      
      <SearchBar></SearchBar>
      {
        content.map((val)=>CardContentBlog(val))
      }
    </div>
  );
}
export async function getStaticProps() {
  const content =( await getPosts()) || []
   return {
    props : { content }
   }
}