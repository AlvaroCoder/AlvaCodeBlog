import Link from 'next/link';
import React from 'react'
import {getPosts, getPostsDetails} from  '../../services/getPosts'
function PostDetails({ post }) {

  return (
    <div>
      <h1>{post.heading} </h1>
      <Link href='/'>Go back Home</Link>
    </div>
    )
}

export default PostDetails;

export async function getStaticProps({ params }) {
  let slug = params.slug
  const data = await getPostsDetails(slug);
  return {
    props : {post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getPosts() || [];
  const paths = posts.map(({slug})=>({params : {slug}}))
  return {
    paths : paths,
    fallback : false
  }
}