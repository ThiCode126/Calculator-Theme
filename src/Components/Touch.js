import React from 'react';
import SwitchBtn from './SwitchBtn';

const Touch = ({handleTouch, theme, toggleTheme, isLight}) => {
  
  const touches = [
    "AC", "C","/",
    7, 8, 9,  "*", 
    4, 5, 6, "-", 
    3, 2, 1,  "+",
    "Del", 0, ".", "="];


  return (
    <div className="grid-body">
      <div className={`tch tch-theme`} >
    <SwitchBtn 
      theme={theme}
      toggleTheme={toggleTheme} 
      isLight={isLight}
      />
  </div>
      
    {touches.map((tch, k) => {
      return (
        <div
          type="button"
          key={k}
          className={`tch tch-${tch}`}
          onClick={() => handleTouch(tch)}
        >
          {tch}
        </div>
      );
    })}
    </div>
  )
                                
}

export default Touch