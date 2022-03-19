import React, { useContext } from 'react'
import './Toggle.css'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined'
import { ThemeContext } from '../../context'
const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }

  return (
    <div className='t'>
      <WbSunnyOutlinedIcon className='t-icon' style={{ color: 'black' }} />
      <Brightness3OutlinedIcon className='t-icon' style={{ color: 'black' }} />
      <div
        className='t-button'
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}

export default Toggle
