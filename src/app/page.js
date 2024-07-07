import React from 'react';
import about from './about/page'
const NewComp = () => {
  return (
    <div>
      <h1>new component</h1>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <NewComp />
      <h1>hello</h1>
      
    </div>
  );
}