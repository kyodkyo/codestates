import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import axios from 'axios';
import { Text } from '../atoms/Text';
import { dark } from '../../style/theme';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const AddAnswer = () => {
  const navigate = useNavigate();
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;

  const [body, setBody] = useState<any>('');
  const [author, setAuthor] = useState<string>('');

  const editorRef = useRef<any>();

  const toggleDarkMode = () => {
    const el = document.getElementsByClassName('toastui-editor-defaultUI')[0];
    if (mode === 'light') el.classList.remove('toastui-editor-dark');
    else el.classList.add('toastui-editor-dark');
  };

  useEffect(() => {
    toggleDarkMode();
  }, [mode]);

  // 작성자 내용
  const submit = async () => {
    const { data } = await axios.post('http://localhost:3001/que', {
      body,
      author,
    });

    alert('작성완료');
    setBody('');
    setAuthor('');
    navigate('/');
  };

  // const submit = () => {
  //   console.log(title);
  //   console.log(body);
  // };

  // toast ui 내용 가져와서 body에 저장하기
  const handleChangeInput = () => {
    setBody(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <StyledAdd>
      <div className="add--question">
        <div className="question--container">
          <div className="title">
            <h1>
              <Text>Your Answer</Text>
            </h1>
            <input
              type="text"
              placeholder="작성자 입력"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>

        <Editor
          ref={editorRef}
          onChange={handleChangeInput}
          placeholder="내용을 입력해주세요."
          initialValue=" "
          theme={mode === 'dark' ? 'dark' : ''}
          previewStyle="vertical" // 미리보기 스타일 지정
          height="400px" // 에디터 창 높이
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
          autofocus={false}
        ></Editor>
        <div className="btn--div">
          <Button className="button" onClick={submit}>
            <Text>PostYourAnswer</Text>
          </Button>
        </div>
      </div>
    </StyledAdd>
  );
};

export default AddAnswer;

const StyledAdd = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  @media (max-width: 640px) {
    padding: 20px 20px 30px;
  }

  .add--question {
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    /* width: 95%; */
    /* max-width: 800px; */
    height: 100%;
    /* box-shadow: 1px 1px 1px; */
    margin-top: 30px;
    margin-bottom: 15px;
    border: 1px solid ${({ theme }) => theme.mode.divider};
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    font-size: 0.9rem;
    @media (max-width: 640px) {
      margin-top: 26px;
    }

    h1 {
      font-weight: 500;
      margin-bottom: 10px;
    }

    input {
      margin: 5px 0px;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      outline: none;
    }
  }

  .btn--div {
    display: flex;
    justify-content: end;
  }

  .button {
    max-width: fit-content;
    margin: 10px 0px;
  }
`;
