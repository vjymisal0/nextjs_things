import { Inter } from "next/font/google"
const inter = Inter
  ({
    weight: '100',
    subsets: ['latin'],
    display: 'swap',
  })
const NewComp = () => {

  return (
    <div>
      {/* <Image src={Profile} alt="your internet fucked you" />
      <img src={Profile.src}
        alt="cant load bitchj" /> */}

      <h1 className={inter.className}>
        Font with Link tag in next js
      </h1>
    </div>
  );
}

export default NewComp;
