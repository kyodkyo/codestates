import { ChakraProvider } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './chakra';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from './react-query/queryClient';

import { ThemeProvider } from 'styled-components';
import BackGround from './style/background';
import { dark, light, fontWeights, fontSizes } from './style/theme';

import GlobalStyles from './style/GlobalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { hamburgerMenuActions } from './store/ui-slice/hamburgerMenu-slice';
import { SearchMenuActions } from './store/ui-slice/SearchMenu-slice';

import Header from './components/blocks/Header';
import SideMenu from './components/blocks/SideMenu';
import Loading from './components/atoms/Loading';
import Footer from './components/blocks/Footer';
import SearchBar from './components/blocks/SearchBar';

const Home = React.lazy(() => import('./components/pages/Home'));
const QuestionsPage = React.lazy(
  () => import('./components/pages/ji/QuestionsPage')
);
const QuestionPage = React.lazy(
  () => import('./components/pages/han/QuestionPage')
);

const AddQuestionPage = React.lazy(
  () => import('./components/pages/han/AddQuestionPage')
);

const SignUpPage = React.lazy(
  () => import('./components/pages/han/SignUpPage')
);

const LoginPage = React.lazy(() => import('./components/pages/han/LoginPage'));

function App() {
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;
  const dispatch = useDispatch();

  const GlobalTheme =
    mode === 'light'
      ? { mode: light, fontSizes, fontWeights }
      : { mode: dark, fontSizes, fontWeights };

  const sideMenuHandler = () => {
    dispatch(hamburgerMenuActions.close());
    dispatch(SearchMenuActions.close());
  };

  // Redux Toolkit 사용법
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={GlobalTheme}>
          <GlobalStyles />
          <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Header />
              <SideMenu />
              <SearchBar />
              <BackGround onClick={sideMenuHandler}>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/questions" element={<QuestionsPage />}>
                      <Route
                        path="/questions/:searchWord"
                        element={<QuestionsPage />}
                      />
                    </Route>
                    <Route path="/question/:id" element={<QuestionPage />} />
                    <Route path="/add-question" element={<AddQuestionPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                  </Routes>
                </Suspense>
              </BackGround>
              <Footer />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </ChakraProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
