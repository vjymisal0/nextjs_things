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
      <h1>Fetch Data with API in client component</h1>
      <Link href="/productlist">Go to products list</Link>
    </div>
  );
}

export default NewComp;
