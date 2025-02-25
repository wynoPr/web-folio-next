import React from 'react'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
    <h1 className='footer_h h2 f-spicy'>Luis.pomar.petin@gmail.com</h1>
      <nav className='footer_nav'>
        <a className='link h2 active' href='https://www.linkedin.com/in/luiso-pomar/'>LinkedIn</a>
        <a className='link h2 active' href='https://www.behance.net/luispomarr'>Behance</a>
        <a className='link h2 active' href='https://github.com/wynoPr'>GitHub</a>
        <a className='link h2 active' href='https://vercel.com/wynoprs-projects'>Vercel</a>
      </nav>
    </footer>
  )
}
