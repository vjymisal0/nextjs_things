"use client";
import React, { useState } from 'react';
import custom from './custom.module.css'
import style from './style.module.css'

const NewComp = () => {

  const [color, setColor] = useState("gray")

  return (
    <div>
      <h1 className={color == "red" ? style.red : style.gray}>Fetch Data with API in client component</h1>
      <button onClick={() => { setColor("red") }}>Click to change color of above text</button>
      <h1>Hello this is inline css integration in Next.js</h1>
    </div>
  );
}

export default NewComp;
