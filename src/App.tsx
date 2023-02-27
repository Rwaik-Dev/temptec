import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from './Pages/HomePage';
import Theme from './Styles/Themes/Theme';

const App: React.FC = () => {
 
  return (
    <ThemeProvider theme={Theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App;
