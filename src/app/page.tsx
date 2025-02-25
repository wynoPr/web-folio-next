import { GradientBg } from '@/components/gradientBg/GradientBg';
import './intro.scss'
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <section className='main intro'>
        <GradientBg />
        <div className='intro_info'>
          <Image
            className='intro_logo'
            src='https://res.cloudinary.com/drskdhhht/image/upload/v1737472508/Recurso_1_fyhhqy.png'
            alt='Luis Pomar | Wyno logo'
            width={300}
            height={210}
            quality={80}
          />
          <h1 className='intro_title hl f-w'>Luis Pomar</h1>
          <p className='intro_head f-faint f-tags f-it'>A GATHERING OF WORKS, FROM YESTERDAY AND TODAY. SOME CRAFTED FOR THE PRESENT, OTHERS FOR THE FUTURE. RANGING FROM WEB DESIGN AND FRONT-END DEVELOPMENT TO PHOTOGRAPHY AND BRANDING PROJECTS.</p>

        </div>
      </section>
    </>
  );
}
