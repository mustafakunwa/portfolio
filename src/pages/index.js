import React from 'react';
import {
  About, Contacts, Education,
  Experience, Landing, Navbar, Projects, Skills
} from '../components';
import BackToTop from '../components/back-to-top/back-to-top';
import ChangeTheme from '../components/change-theme/change-theme';
import Head from 'next/head'

function HomePage() {

  return (
    <>
      <Head>
        <title>Mustafa Portfolio</title>
      </Head>
      <BackToTop />
      <ChangeTheme />
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contacts />
    </>
  )
}

export default HomePage
