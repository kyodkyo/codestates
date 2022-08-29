import React, { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import BackGround from './style/background';
import { dark, light, fontWeights, fontSizes } from './style/theme';

import GlobalStyles from './style/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { hamburgerMenuActions } from './store/hamburgerMenu-slice';
import { RootState } from './store';
import { darkModeActions } from './store/darkMode-slice';

import Header from './components/blocks/Header';
import SideMenu from './components/blocks/SideMenu';
import Loading from './components/atoms/Loading';
import Footer from './components/blocks/Footer';

const Home = React.lazy(() => import('./components/pages/Home'));
const QuestionsPage = React.lazy(
  () => import('./components/pages/ji/QuestionsPage')
);
const QuestionPage = React.lazy(
  () => import('./components/pages/han/QuestionPage')
);

function App() {
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;
  const dispatch = useDispatch();

  const theme =
    mode === 'light'
      ? { mode: light, fontSizes, fontWeights }
      : { mode: dark, fontSizes, fontWeights };

  useLayoutEffect(() => {
    // useEffect 는 화면 깜박임 발생
    const localTheme = window.localStorage.getItem('theme');
    localTheme && dispatch(darkModeActions.change());
  }, []);

  const sideMenuHandler = () => {
    dispatch(hamburgerMenuActions.close());
  };

  // Redux Toolkit 사용법
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header></Header>
        <SideMenu />
        <BackGround onClick={sideMenuHandler}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/question" element={<QuestionPage />} />
            </Routes>
          </Suspense>
        </BackGround>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
