import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineDownload, AiOutlineHome, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
export default function Home() {
  const [resume, setResume] = useState({})
  const [theme, setTheme] = useState('dark')
  const Data = async () => {
    await fetch('/api/bryce-robinson')
      .then(response => response.json())
      .then(data => setResume(data))
      .then((err) => console.error(err))
  }
  const year = new Date().getFullYear()
  useEffect(() => {
    Data()
  }, [])
  return (
    <>
      <Head>
        <title>Bryce Robinson {'|'} Front End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="theme-color" content="#E6F6CD"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div id='name-and-title'>
          <h1 id='name'>{resume.name}</h1>
          <h2>{resume.title}</h2>
          <div className='flex-apart'>
          <button onClick={() => window.open('https://github.com/codebybryce/my-resume/raw/main/Bryce%20Robinson.pdf')}>
              <div className='flex-and-left-center'>
                <AiOutlineDownload />
                <p style={{ color: 'var(--dark-primary)' }}>Download</p>
              </div>
            </button>
            <div >
              <Link href='/api/bryce-robinson'><a id='api-link'>api/bryce-robinson</a></Link>
            </div>
          </div>
        </div>
        <div id='contact-info' className='content'>
          <h3>Contact Info</h3>
          <ul id='contact-info' aria-label='Contact Information'>
            <li>
              <div className='flex-and-left-center'>
                <AiOutlineMail /> {" "} {resume.email}
              </div>
            </li>
            <li>
              <div className='flex-and-left-center'>
                <AiOutlinePhone />{" "}{resume["phone-number"]}
              </div>
            </li>
            <li>
              <div className='flex-and-left-center'>
                <AiOutlineHome />{" "}{resume.address}
              </div>
            </li>
            <li>
              <div className='flex-and-left-center'>
                <AiOutlineLinkedin /> <a href={resume.linkedIn}>linked In
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div id='summary' className='content'>
          <h3>
            Summary
          </h3>
          {resume.summary}
        </div>
        <div id='tech-skills' className='content'>
          <h3>Technical Skills</h3>
          {resume.technicalSkills?.map((val, key) => {
            return (
              <div className='inner-content' key={key}>
                <h4>
                  {val.title}
                </h4>
                <ul className='flex-area'>
                  {val.skills.map((i) => {
                    return (
                      <>
                        <li className='boxed-item'>{i}</li>
                      </>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <div id='work-experience' className='content'>
          <h3>
            Work Experience
          </h3>
          {resume["work-experience"]?.map((val, key) => {

            return (
              <>
                <div key={key} className='inner-content'>
                  <div>
                    <h4>
                      {val.position}
                    </h4>
                    <p>
                      {val.company}
                    </p>
                    <p className="italics">
                      {val.dates}
                    </p>
                  </div>
                  <ul>
                    {val.description.map((val, key) => {
                      return (<li key={key} >{val}</li>)
                    })}
                  </ul>
                </div>
              </>
            )
          })}
        </div>
        <div id='other-experience' className='content'>
          <h3>Other Professional Experience</h3>
          {resume.Other?.map((val, key) => {
            return (
              <div className='inner-content' key={key}>
                <h4>
                  {val.title}
                </h4>{val.description}
              </div>
            )
          })}
        </div>
        <div id='education' className='content'>
          <h3>Education</h3>
          {resume.Education?.map((val, key) => {
            return (
              <div className='inner-content' key={key} >
                <h4>
                  {val.school}
                </h4>
                {val.studies}{" "}
                {val.dates}
              </div>
            )
          })}
        </div>
        <footer>
          Made with React and Next JS <br />
          copyright © {year} codebybryce
        </footer>
      </main>
    </>
  )
}
