import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import BackGround from './style/background';

// Redux Toolkit import
import { useDispatch, useSelector } from 'react-redux';
import { testActions } from './store/test-slice';
import { RootState } from './store';

import { useDarkMode } from './hooks/useDarkMode';
import { dark, light, fontWeights, fontSizes } from './style/theme';

import Header from './components/blocks/Header';
import Button from './components/atoms/Button';
import { Text } from './components/atoms/Text';

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
  const dispatch = useDispatch();
  const testMessage = useSelector((state: RootState) => state.test.text);
  const testHandler1 = () => {
    dispatch(testActions.test('1'));
  };

  const testHandler2 = () => {
    dispatch(testActions.test('2'));
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BackGround>
          <Header themeMode={themeMode} toggleTheme={toggleTheme}></Header>
          <div>
            <Text fontSize="xxl">{testMessage}</Text>
            <Button onClick={testHandler1}>1</Button>
            <Button onClick={testHandler2}>2</Button>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
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
