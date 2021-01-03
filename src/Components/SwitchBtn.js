import React from 'react'
import { ReactComponent as IconDarkToLight } from '../assets/lightbulb_d_l.svg';
import { ReactComponent as IconLightToDark } from '../assets/lightbulb_l_d.svg';


const SwitchBtn = ({ theme, toggleTheme, isLight }) => {
  
  return (
    <div className="toggle-btn">
  <label htmlFor="toggle-theme" className={`theme-${isLight}`}>
    <input type="checkbox" id="toggle-theme" checked={isLight} onChange={toggleTheme} />
    { isLight ? <IconDarkToLight /> : <IconLightToDark />}
  </label>
</div>
  );
};


export default SwitchBtn;