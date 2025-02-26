'use client';
import Link from 'next/link';
import './navy.scss'
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const Navy = () => {

    const location = usePathname();

    // console.log(location);
    
    const params = useParams()

    useEffect(() => {
      if (typeof window !== "undefined") {
        if (params.id) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }
    }, [params.id]);

    useEffect(() => {
    
      return () => {
        sessionStorage.setItem('lastPosition', location);
        sessionStorage.setItem('scrollPosition', window.scrollY.toString())
      }
    }, [location])
    
    

  return (
    <div  className='nav_intro'>
        <Link href='/' className={`h2 link ${location == '/' ? 'active' : ''}` }>Home</Link>
        <Link href='/work' className={`h2 link ${location.includes('/work') ? 'active' : ''}`}>Work</Link>
        <Link href='/about' className={`h2 link ${location.includes('/about') ? 'active' : ''}`}>About</Link>
        {/* <Link href='/cv' className={`h2 link ${location.includes('/cv') ? 'active' : ''}`}>C.V.</Link> */}
    </div>
  )
}
