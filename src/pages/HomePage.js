import { useRef } from 'react'
import { Typography, Button, Divider, List, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faAt, faHammer } from '@fortawesome/free-solid-svg-icons'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import SkillList from '../components/SkillList'
import { sidenavTabs } from '../utils'
import HobbySection from '../components/HobbySection'
import MeLol from '../assets/MeLol.png'
import CV from '../assets/Sean_Rooney_CV.pdf'

const HomePage = () => {
  //const aboutMeRef = useRef(null)
  const refs = {
    aboutMeRef: useRef(null),
    portfolioRef: useRef(null),
    cvRef: useRef(null),
    hobbiesRef: useRef(null),
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        scrollSnapAlign: 'center',
        overflowY: 'none',
      }}
    >
      <div
        style={{
          flex: 0.15,
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          backgroundColor: '#6c51a4',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            flex: 0.4,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            style={{ fontWeight: 'bold', color: 'white' }}
            variant="h6"
          >
            Sean Rooney
          </Typography>
          <div
            style={{
              borderRadius: '50%',
              marginBottom: 20,
              backgroundColor: 'white',
              textAlign: 'center',
              height: 210,
              width: 150,
            }}
          >
            <img
              style={{ borderRadius: '50%', height: '100%', width: '100%' }}
              src={MeLol}
            ></img>
          </div>
          {/* <Typography
            variant="body2"
            style={{ textAlign: 'center', color: 'white' }}
          >
            Welcome to my website! 
          </Typography> */}
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              columnGap: 10,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <a href="https://www.linkedin.com/in/seanrooneymsc/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                color="blue"
                style={{
                  backgroundColor: 'white',
                  padding: 4,
                  borderRadius: '50%',
                }}
              />
            </a>
            <a href="https://github.com/seanRoo">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{
                  backgroundColor: 'white',
                  padding: 4,
                  borderRadius: '50%',
                }}
              />
            </a>
            <a href="mailto:sean.rooney67@gmail.com?subject=Really%20impressed%20by%20your%20website%20Sean!">
              <FontAwesomeIcon
                icon={faAt}
                size="lg"
                style={{
                  backgroundColor: 'white',
                  padding: 4,
                  borderRadius: '50%',
                }}
              />
            </a>
          </div>
        </div>
        <Divider fullWidth style={{ backgroundColor: 'white' }} />
        <div style={{ flex: 0.55, display: 'flex', justifyContent: 'center' }}>
          <List>
            {sidenavTabs.map((tab) => (
              <Button
                style={{
                  textTransform: 'none',
                  width: '100%',
                  height: 50,
                  marginBottom: 16,
                }}
                onClick={() =>
                  refs[`${tab.ref}`].current.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
              >
                <ListItem style={{ paddingLeft: 12 }}>
                  <FontAwesomeIcon
                    icon={tab.icon}
                    size="lg"
                    color="white"
                    style={{ minWidth: 24, width: 42 }}
                  />
                  <Typography
                    style={{ color: 'white', fontWeight: 'bold' }}
                    component="body1"
                  >
                    {tab.text}
                  </Typography>
                </ListItem>
              </Button>
            ))}
          </List>
        </div>
      </div>
      <div
        style={{
          flex: 0.85,
          flexDirection: 'column',
          display: 'flex',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            flex: 0.55,
            backgroundColor: '#fafafa',
          }}
        >
          <div
            ref={refs.aboutMeRef}
            style={{ display: 'flex', flexDirection: 'row', padding: 40 }}
          >
            <div
              style={{ flex: 0.65, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ flex: 0.5 }}>
                <Typography style={{ fontWeight: 'bold' }} variant="h3">
                  Sean Rooney
                </Typography>
                <Typography
                  style={{ fontSize: 20 }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Software Engineer
                </Typography>
                <Typography variant="body1" gutterBottom>
                  I'm a young software engineer currently mastering my craft and
                  working in front-end development but would be interested in
                  going full-stack at some point in my career. I'm a huge
                  advocate of learning by doing and tend to pick up new skills
                  quickly, whether it's new techniques, languages or frameworks.
                  Check out my list of projects or CV below!
                </Typography>
              </div>
              <div style={{ flex: 0.5, display: 'flex' }}>
                <Button
                  variant="contained"
                  style={{
                    height: 40,
                    margin: '15px 8px 0px 0px',
                    textTransform: 'none',
                    backgroundColor: '#6c51a4',
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  <a
                    href="https://github.com/seanRoo"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <FontAwesomeIcon
                      icon={faHammer}
                      size="lg"
                      style={{
                        marginRight: 12,
                        color: 'white',
                      }}
                    />
                    View Projects
                  </a>
                </Button>
                <a
                  href="/Sean_Rooney_CV.pdf"
                  download
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      height: 40,
                      margin: '15px 8px 0px 8px',
                      width: 100,
                      textTransform: 'none',
                      fontSize: 16,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      size="lg"
                      style={{
                        padding: 4,
                        borderRadius: '50%',
                        marginRight: 12,
                      }}
                    />
                    CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.45 }} ref={refs.portfolioRef}>
          <div
            style={{
              padding: 40,
            }}
          >
            <div style={{ marginBottom: 36 }}>
              <div
                style={{
                  borderLeft: '6px solid #6c51a4',
                  marginBottom: 16,
                }}
              >
                <Typography
                  style={{ fontWeight: 'bold', marginLeft: 14 }}
                  variant="h4"
                >
                  What I do
                </Typography>
              </div>
              <Typography variant="body1">
                I have nearly three years of industry experience but I feel like
                the side projects I work on in my spare time have really helped
                in raising my skill level and familiarity with other popular
                tech in the industry. Take a look below for the (mostly web-dev
                related) stuff I've gained good knowledge in since beginning my
                Computer Science journey in 2014.
              </Typography>
            </div>
            <SkillList />
          </div>
        </div>
        <div ref={refs.cvRef} style={{ padding: 40, paddingTop: 10 }}>
          <div
            style={{
              borderLeft: '6px solid #6c51a4',
              marginBottom: 20,
            }}
          >
            <Typography
              style={{ fontWeight: 'bold', marginLeft: 14 }}
              variant="h4"
            >
              What I've done
            </Typography>
          </div>
          <Document
            file={CV}
            onLoadSuccess={() => console.log('yo')}
            style={{ display: 'inline' }}
          >
            <Page pageNumber={1} style={{ display: 'inline' }} />
          </Document>
        </div>
        <div ref={refs.hobbiesRef} style={{ marginBottom: 14 }} />
        <HobbySection />
      </div>
    </div>
  )
}
export default HomePage
