import { getData } from '@/api/getData';
import './work.scss'
import { CardWork } from '@/components/cardWork/CardWork';



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


export default async function WorkPage() {

  //petición sacar datos de api

  const work = await getData();

  
  //  console.log(work[0] );

  //

  return (
    <>
      <section className={'main'} >
        <div className='work_head'>
          <h1 className='hl'>RECENT</h1>
          <h1 className='hl'>WORK</h1>
          <p className='work_head_p f-faint f-tags f-it'>A GATHERING OF WORKS, FROM YESTERDAY AND TODAY. SOME CRAFTED FOR THE PRESENT, OTHERS FOR THE FUTURE. RANGING FROM WEB DESIGN AND FRONT-END DEVELOPMENT TO PHOTOGRAPHY AND BRANDING PROJECTS.</p>
        </div>
        <div className='work_gallery'>
          {work.length > 0 && work.map((work: WorkItem, i: number) =>
            <CardWork key={i} size={i == 0 && 2} i={i} info={work} />
          )}
        </div>
      </section>
    </>
  );
}