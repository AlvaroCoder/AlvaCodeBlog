import { useState } from 'react';
import {Header, SearchBar} from '../components'

export default function HomePage()  {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header></Header>      
      <SearchBar></SearchBar>

    </div>
  );
}
export async function getStaticProps() {
  
}