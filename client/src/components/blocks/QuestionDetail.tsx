import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { NavLink, useNavigate } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import { Text } from '../atoms/Text';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { useDeleteQuestion } from '../../react-query/hooks/questionPage/useDeleteQuestion';
import { useParams } from 'react-router-dom';

interface Question {
  title: string;
  contents: string;
}
// class="toastui-editor-dark"
// class="toastui-editor-l"

const QuestionView = ({ title, contents }: Question) => {
  const [isEditing, setIsEditing] = useState(true);
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;

  const deleteQuestion = useDeleteQuestion();
  const params = useParams();

  const toggleDarkMode = () => {
    const dark = document.getElementsByClassName('toastui-editor-dark')[0];
    const light = document.getElementsByClassName('toastui-editor-l')[0];
    if (mode === 'light' && dark) {
      dark.classList.remove('toastui-editor-dark');
      dark.classList.add('toastui-editor-l');
    } else if (mode === 'dark' && light) {
      light.classList.remove('toastui-editor-l');
      light.classList.add('toastui-editor-dark');
    }
  };

  useEffect(() => {
    toggleDarkMode();
  }, [mode]);

  if (isEditing) {
    return (
      <StyledView>
        <div className="title--container">
          <h2 className="title">
            <Text fontSize="xl">{title}</Text>
          </h2>
          <NavLink to="/add-question">
            <Button className="add-button" bold="bold" paddingSize="0px 10px">
              Ask Question
            </Button>
          </NavLink>
        </div>
        <div className="body--container">
          <div className="body">
            <Viewer
              initialValue={contents}
              theme={mode === 'dark' ? 'dark' : 'l'}
            />
          </div>
          <div className="edit" onClick={() => setIsEditing}>
            <span className="miniButton">
              <Text fontWeight="bold">EDIT</Text>
            </span>
            <span
              className="miniButton"
              onClick={() => deleteQuestion(params.id)}
            >
              <Text fontWeight="bold">DELETE</Text>
            </span>
          </div>
        </div>
      </StyledView>
    );
  } else {
    return (
      <StyledAdd>
        <div className="add--question">
          <div className="add--title">
            <h1>
              <Text>Edit a public question</Text>
            </h1>
          </div>
          <div className="question--container">
            <div className="title">
              <h3>
                <Text>Title</Text>
              </h3>

              <small>
                <Text>
                  Be specific and imagine you’re asking a question to another
                  person
                </Text>
              </small>
              <input type="text" placeholder="제목입력" />
              <div className="title">
                <h3>
                  <Text>Body</Text>
                </h3>
                <small>
                  <Text>
                    Include all the information someone would need to answer
                    your question
                  </Text>
                </small>
              </div>
            </div>
            <Editor
              placeholder="내용을 입력해주세요."
              initialValue=" "
              previewStyle="vertical" // 미리보기 스타일 지정
              height="400px" // 에디터 창 높이
              autofocus={false}
              initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'image', 'link'],
                ['code', 'codeblock'],
              ]}
            ></Editor>
            <div className="btn--div">
              <Button
                className="button"
                onClick={() => {
                  // setVisible(!visible);
                  setIsEditing(!isEditing);
                }}
              >
                Cancel
              </Button>
              <Button className="button">EDIT</Button>
            </div>
          </div>
        </div>
      </StyledAdd>
    );
  }
};

export default QuestionView;

const StyledView = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .add-button {
    width: 130px;
  }
  Button {
    height: 35px;
  }

  .title--container {
    display: flex;
    padding: 20px 20px 30px;
    height: 100%;
    justify-content: space-between;
    margin-top: 20px;
  }

  .title {
    margin-top: 20px;
  }

  .body {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .edit {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
  }

  .miniButton {
    margin-left: 10px;
    border: 1px solid ${({ theme }) => theme.mode.themeIcon};
    border-radius: 5px;
    padding: 0 10px;
    cursor: pointer;
  }

  .miniButton span {
    cursor: pointer;
  }

  .body--container {
    border: 1px solid ${({ theme }) => theme.mode.divider};
    margin-bottom: 15px;
  }
`;

const StyledAdd = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 640px) {
    padding: 20px 20px 30px;
  }

  .add--question {
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 30px;
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .add--title {
    display: flex;
    width: 100%;

    h1 {
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 20px;
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

    h3 {
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
    margin: 10px 4px;
  }
`;
