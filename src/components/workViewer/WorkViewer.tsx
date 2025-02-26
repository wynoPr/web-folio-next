'use client'
import Image from 'next/image';
import './workViewer.scss'
import Link from 'next/link';
import { IoIosClose, IoLogoGithub, IoLogoYoutube } from 'react-icons/io';
import { IoLogoVercel } from 'react-icons/io5';
import { MdHttp } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



interface WorkItem {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  photos: { alt: string; url: string }[];
  description: string;
  tags: string[];
  date: string;
  links: { name: string; url: string }[];
  show: boolean;
  template?: number;
  iframe?: string;
}

interface WorkViewerProps {
  data: WorkItem;
}

export const WorkViewer = ({ data }: WorkViewerProps) => {

  const [isClosing, setIsClosing] = useState(false);
  
  const router = useRouter()

    const handleGoBack = () => {
      setIsClosing(true)
      setTimeout(() => {
        if(sessionStorage.getItem('lastPosition') == '/work'){
          router.back();
          
          console.log('uso back');
          
        } else {
          router.push('/work')
        }
      }, 700);

      
    };

  // https://www.instagram.com/reel/C1jsGiFo9NE/?utm_source=ig_embed&amp;utm_campaign=loading
  return (

    <>
      <section className={!isClosing ? 'workViewer' : 'workViewer goback'}>
        <div className={`workViewer1_content`} >
          {data.photos[1] && (
            data.photos[1].url.includes("youtube") ? (
              <iframe
                className="workViewer1_img1"
                width="560"
                height="315"
                style={{ pointerEvents: "none" }}
                src={`${data.photos[1].url}?autoplay=1&mute=1&loop=1&controls=0&vq=hd1080&playlist=${data.photos[1].url.match(/embed\/([^?]+)/)?.[1] || ""}`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <Image
                className="workViewer1_img1"
                src={data.photos[1].url}
                alt={data.title}
                width={1600}
                height={900}
                quality={80}
              />
            )
          )}
          <div className={`workViewer1_text`}>
            <h1 className='h1' >{data.title}</h1>
            <div className={`workViewer1_tags`}>
              {data.tags.map((work, i) =>
                <span className='tag f-tags' key={i}>{work}</span>
              )}
            </div>
            <h2 className='h4 f-it f-faint' >{data.subtitle}</h2>
            <p className='p-b'>{data.description}</p>
            <nav className={`workViewer1_externalLink`}>
              {data.links.map((link, i) => (
                <>
                  {link &&
                    <>
                      {link.name.includes('youtube') && <Link key={i} href={link.url} className='link icon'><IoLogoYoutube /></Link>}
                      {link.name.includes('vercel') && <Link key={i} href={link.url} className='link icon'><IoLogoVercel /></Link>}
                      {link.name.includes('github') && <Link key={i} href={link.url} className='link icon'><IoLogoGithub /></Link>}
                      {link.name.includes('other') && <Link key={i} href={link.url} className='link icon'><MdHttp /></Link>}
                    </>
                  }
                </>
              ))}
            </nav >
          </div>
          {data.photos[0].url.includes('cloudinary') &&
            <Image
              className={`workViewer1_img2`}
              src={data.photos[0].url}
              alt={data.title}
              width={1600}
              height={900}
              quality={80} />}
          <div className={`workViewer1_gallery`}>
            {[2, 3, 4].map(index => {
              const photo = data.photos && data.photos[index]; // Verifica si data.photos tiene los elementos
              if (photo && photo.url && photo.url.includes('cloudinary')) {
                return (
                  <Image
                    key={index}
                    className={`workViewer1_img3`}
                    src={photo.url}
                    alt={data.title}
                    width={1600}
                    height={900}
                    quality={80}
                  />
                );
              }
              return null;
            })}

          </div>
          {data.iframe && 
            <iframe className='workViewer1_iframe'
            title="Inline Frame Example" 
            src={data.iframe} 
            allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}>
            </iframe> }
        </div>
      </section>
        <button  onClick={handleGoBack} className={!isClosing ? 'workViewer_close btt_round' : 'workViewer_close btt_round goback'}><IoIosClose size={40} /></button>
      <div className='black_screen' style={{ zIndex: '8' }}></div>
    </>

  )
}
