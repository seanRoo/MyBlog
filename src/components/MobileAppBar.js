import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Sidenav from './Sidenav'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { sidenavTabs } from '../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

const MobileAppBar = ({ handleSidenavClick }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const classes = useStyles()
  return (
    <div>
      {/* <SwipeableDrawer
        anchor="top"
        open={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
        onOpen={() => setDrawerIsOpen(true)}
      >
        <Sidenav
          handleClick={(tab) => {
            setDrawerIsOpen(false)
            handleSidenavClick(tab)
          }}
        />
      </SwipeableDrawer> */}
      <AppBar style={{ backgroundColor: '#6c51a4' }} position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerIsOpen(true)}
          >
            <MenuIcon />
          </IconButton> */}
          {sidenavTabs.map((tab) => (
            <IconButton
              style={{ marginRight: 4 }}
              onClick={() => {
                setDrawerIsOpen(false)
                handleSidenavClick(tab)
              }}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                size="md"
                color="white"
                style={{ minWidth: 24, width: 42 }}
              />
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(4),
  },
}))

export default MobileAppBar
