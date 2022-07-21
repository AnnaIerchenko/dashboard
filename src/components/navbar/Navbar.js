import './navbar.scss'
import { ChatBubbleOutlineOutlined, SearchOutlined } from '@mui/icons-material'
import { LanguageOutlined } from '@mui/icons-material'
import { DarkModeOutlined } from '@mui/icons-material'
import { FullscreenExitOutlined } from '@mui/icons-material'
import { NotificationsNoneOutlined } from '@mui/icons-material'
import { ListAltOutlined } from '@mui/icons-material'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'


const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined 
                className="icon"
                onClick={() => dispatch({type: "TOGGLE"})}
                />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListAltOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img 
              src= "https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="ava"
              className='avatar'
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar