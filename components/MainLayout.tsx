import React from 'react'
import Link from "next/link";
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link href="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link href="/about">About</Link>
  //       </li>
  //       <li>
  //         <Link href="/category">Category</Link>
  //       </li>
  //       <li>
  //         <Link href="/jenis">Jenis</Link>
  //       </li>
  //       <li>
  //         <Link href="/menu">Menu</Link>
  //       </li>
  //       <li>
  //         <Link href="/stok">Stok</Link>
  //       </li>
  //     </ul>

  //     {children}
  //   </div>
  // );
  return (
    <div className='bg-grey-600 aspect-square'>
      <MainHeader/>
      {children}
    </div>
  );
};

export default MainLayout

// rafce