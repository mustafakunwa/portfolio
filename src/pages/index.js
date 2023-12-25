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
        <meta name="description" content="My name's Mustafa. I'm a web designer and developer based in Pune, india.
      I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes Nodejs, Nestjs, React, NextJs, Redux, Bootstrap, Ant Design, Material UI, MongoDB, Mysql, PostgreSQL, Firebase, Cloudinary, etc." />
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
