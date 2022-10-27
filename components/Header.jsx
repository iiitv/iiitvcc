import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import easterEgg from './easterEgg'

export default function Header({ pageTitle, description }) {
  
  const [wid, setWid] = React.useState('')
  const openNav = () => setWid('100%')
  const closeNav = () => setWid('0%')
  
  useEffect(()=>{
    console.log(easterEgg, "font-family:monospace");
  }
  ,[]);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>IIITV Coding Club</title>
      </Head>

      <header>
        <Link href="/"><img className="nav-img" draggable="false" src="/media/cc_logo.png" alt="logo" /></Link>
        <div className="nav-title">Coding Club</div>
        <nav>
          <ul className="nav__links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/members">Members</Link>
            </li>
            <li>
              <Link href="/Contact_page">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <p onClick={openNav} className="menu cta">Menu</p>
      </header>

      <div style={{ width: wid }} className="overlay">
        <a className="close" onClick={closeNav}>&times;</a>
        <div className="overlay__content">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/members">Members</Link>
          <Link href="/Contact_page">contact us</Link>
        </div>
      </div>
    </React.Fragment>
  )
}