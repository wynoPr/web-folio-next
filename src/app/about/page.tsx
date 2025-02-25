import Link from 'next/link';
import './cv.scss'
import { getCV } from '@/api/getCV';
import Image from 'next/image';

interface Language {
  img: string;
  name: string;
  lvl: string;
}

interface Experience {
  name: string;
  time: string;
  role: string;
  info: string;
  img: string;
}

interface CV {
  id: number;
  created_at: number;
  pp: string;
  cv: string;
  lang: Language[];
  exp: Experience[];
  img: string
}

export default async function CVPage() {

  const cvData = await getCV();


  return (
    <div className={'main cv'} >
      <section className='cv_head'>
        <h1 className='hl'>ABOUT ME</h1>
        <p className='cv_head_p f-faint h1 f-spicy f-it'>Hi, I'm Luis Pomar</p>
        <Image height={400} width={300} alt='Luis Pomar Picture' src={cvData[0].img} />

        <p className='cv_head_ph h1 f-it'>
          I am a Galician Full Stack Web Developer and Graphic Designer specializing in UX/UI Design, Universal Design, inclusion, and disability.
        </p>
        <p className='cv_head_pq h4 f-faint f-it'>
          "It's important to consider the majority and aesthetic trends, but we must not forget that design is for everyone, and we should facilitate access to as many people as possible."
        </p>

      </section>
      <nav className='cv_nav'>
        <Link className='h3 link bg-n' href={'/about#Profile'}>Professional Profile</Link>
        <Link className='h3 link bg-n' href={'/about#Experience'}>Work Experience</Link>
        <Link className='h3 link bg-n' href={'/about#Education'}>Education</Link>
        <Link className='h3 link bg-n' href={'/about#Languages'}>Languages</Link>
        <a className='h3 link bg-n' href={cvData[0].cv} target="_blank" rel="noopener noreferrer">Download PDF</a>
      </nav>
      <section className='cv_cont'>
        <article className='cv_art' id='Profile'>
          <h1 className='h1'>Professional Profile</h1>
          <p className='p-b cv_contt_card_p'>
            {cvData[0].pp}
          </p>
        </article>
        <article className='cv_art' id='Experience'>
          <h1 className='h1'>Work Experience</h1>
          {cvData[0].exp.reverse().map((exp: Experience, i: number) =>
            <div className='cv_expcard' key={i}>
              <Image
                width={200}
                height={200}
                quality={80}
                alt={exp.name + ' Logo'}
                src={exp.img} />
              <div>
                <h2 className='h2'>{exp.name}</h2>
                <h3 className='h4 f-faint'>{exp.time}</h3>
                <h4 className='h3 f-it f-faint'>{exp.role}</h4>
                <p className='p-b'>{exp.info}</p>
              </div>
            </div>
          )}
        </article>
        <article className='cv_art' id='Education'>
          <h1 className='h1'>Education</h1>
          <h2 className='h2 f-it'>University Degree</h2>
          <ul>
            <li className='h3'>Bachelor's Degree in Multimedia and Graphic Design.<span className='h4 f-faint'> ESNE.</span></li>
            <li className='h4 f-faint'>May 17 - Mar. 24</li>
          </ul>
          <h2 className='h2 f-it'>Further Studies</h2>
          <ul>
            <li className='h3 '>Bootcamp Full Stack Development.<span className='h4 f-faint'> Upgrade hub.</span></li>
            <li className='h4 f-faint'>Mar. 24 - May 24</li>
            <li className='h3'>Master Digital Product Design: UX Research & UI Design.<span className='h4 f-faint'> Udemi.</span></li>
            <li className='h4 f-faint'>May 23</li>
            <li className='h3'>UX Writing Course<span className='h4 f-faint'> Udemi.</span></li>
            <li className='h4 f-faint'>Mar. 23</li>
            <li className='h3'>Personal skills and employability<span className='h4 f-faint'> U.O.I.</span></li>
            <li className='h4 f-faint'>Sept. 19 - Jan. 20</li>
          </ul>
        </article>
        <article className='cv_art_row' id='Languages'>
          <h1 className='h1'>Languages</h1>
          {cvData[0].lang.reverse().map((lang: Language, i: number) =>
            <div className='cv_langcard' key={i}>
              <Image
                width={200}
                height={200}
                quality={80}
                alt={lang.name + ' Flag'}
                src={lang.img} />
              <h3 className='h3'>{lang.name}</h3>
              <h4 className='h4 f-faint'>{lang.lvl}</h4>
            </div>
          )}
        </article>

        <a className='h3 btt' href={cvData[0].cv} target="_blank" rel="noopener noreferrer">Download PDF</a>
      </section>
    </div>
  );
}