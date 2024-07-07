"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NewComp = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(`/${path}`);
  }

  return (
    <div>
      <h1 className='heading'>Main page</h1>
      <div>
        <Link href="/login">Go to login page</Link>
      </div>
      <div>
        <Link href="/about">Go to about page</Link>
      </div>
      <div>
        <button onClick={() => navigateTo('login')}>Go to login page</button>
      </div>
      <div>
        <button onClick={() => navigateTo('about')}>Go to about page</button>
      </div>
    </div>
  );
}

export default NewComp;
