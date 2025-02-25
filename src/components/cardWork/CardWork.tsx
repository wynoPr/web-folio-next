import Image from 'next/image';
import React from 'react'
import './cardWork.scss'
import Link from 'next/link';


interface WorkItem {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  photos: { alt: string; url: string }[];
  description: string;
  tags: "UX/UI" | "Front-End Development" | "Branding" | "Photo" | "Illustration" | "Animation" | "3D" | "Product Design" | "Camera Operator" | "Video Production"[];
  date: string;
  links: { name: string; url: string }[];
  show: boolean;
}

interface CardWorkProprops{
  size: number|false;
  i: number;
  info:WorkItem;
}


export const CardWork = ({size, i, info}: CardWorkProprops) => {
  return (
    <Link
      id={`${info.id}`}
      className={size == 2 ? `x2 ${i}` : `x1 ${i}`}
      href={`/work/${info.slug}`}
      scroll={false}>
        {size == 2 && <h3 className="h3 f-reverse">: Latest proyect</h3>}
        <figure
          className={size == 2 ? "cardWork_x2" : "cardWork"}
        >
          <Image 
            className="cardWork_img"
            src={info.photos[0].url} 
            alt={info.title}
            width={400}
            height={300}
            quality={80}/>
          <figcaption className="cardWork_title h2">{info.title}</figcaption>
          <figcaption className="cardWork_date h3 f-w f-it">
            {" "}
            · {info.date.substring(2, 4)}
          </figcaption>
        </figure>
      </Link>
  )
}
