import { useRef, useState, useEffect } from 'react'
import { Typography, Button, Divider, List, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faFileAlt,
  faAt,
  faHammer,
  faSearchMinus,
  faSearchPlus,
} from '@fortawesome/free-solid-svg-icons'
import SkillList from '../components/SkillList'
import { sidenavTabs } from '../utils'
import HobbySection from '../components/HobbySection'
import MeLol from '../assets/MeLol.png'
import CV from '../assets/Sean_Rooney_CV.pdf'
import { Document, Page, pdfjs } from 'react-pdf'

const Sidenav = ({ handleClick, isMobile }) => {
  return (
    <>
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            backgroundColor: '#6c51a4',
            height: '100%',
          }}
        >
          <div
            style={{
              flex: 0.2,
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
          <div
            style={{ flex: 0.55, display: 'flex', justifyContent: 'center' }}
          >
            <List>
              {sidenavTabs.map((tab) => (
                <Button
                  style={{
                    textTransform: 'none',
                    width: '100%',
                    height: 50,
                    marginBottom: 16,
                  }}
                  onClick={() => handleClick(tab)}
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
      )}
    </>
  )
}

export default Sidenav
