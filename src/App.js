import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import Footer from './Components/Footer'
import Calculator from './Components/Calculator';
import './style/style.css';
import Details from './Components/Details';

function App() {

  const [theme, setTheme] = useState('light');
  const [isLight, setIsLight] = useState(true);

const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
    setIsLight(false);
  } else {
    setTheme('light');
    setIsLight(true);
  }
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div id="content">
        <GlobalStyles />
        <Calculator 
          theme={theme === 'light' ? lightTheme : darkTheme}
          toggleTheme={toggleTheme} 
          isLight={isLight} />
        <Details />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;