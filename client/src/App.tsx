import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import BackGround from './style/background';
import { useDarkMode } from './hooks/useDarkMode';
import { dark, light, fontWeights, fontSizes } from './style/theme';

import Header from './components/blocks/Header';

const Home = React.lazy(() => import('./components/pages/Home'));

const QuestionsPage = React.lazy(
  () => import('./components/pages/ji/QuestionsPage')
);

const QuestionPage = React.lazy(
  () => import('./components/pages/han/QuestionPage')
);

function App() {
  const [themeMode, toggleTheme] = useDarkMode();

  const theme =
    themeMode === 'light'
      ? { mode: light, fontSizes, fontWeights }
      : { mode: dark, fontSizes, fontWeights };

  // Redux Toolkit 사용법
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BackGround>
          <Header themeMode={themeMode} toggleTheme={toggleTheme}></Header>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/question" element={<QuestionPage />} />
            </Routes>
          </Suspense>
        </BackGround>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
