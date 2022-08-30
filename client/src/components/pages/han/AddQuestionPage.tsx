import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { Text } from '../../atoms/Text';
// type Titles = { title: string; setTitle: string };

const AddQuestionPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<any>('');
  const [body, setBody] = useState<any>('');
  const [author, setAuthor] = useState<string>('');

  const editorRef = useRef<any>();

  // 제목 , 내용 post요청하기
  const submit = async () => {
    const { data } = await axios.post('http://localhost:3001/que', {
      title,
      body,
      author,
    });

    alert('작성완료');
    setTitle('');
    setBody('');
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
        <div className="add--title">
          <h1>
            <Text>Ask a public question</Text>
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
            <input
              type="text"
              placeholder="작성자 입력"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="제목입력"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="title">
              <h3>
                <Text>Body</Text>
              </h3>

              <small>
                <Text>
                  Include all the information someone would need to answer your
                  question
                </Text>
              </small>
            </div>
          </div>
          <Editor
            ref={editorRef}
            onChange={handleChangeInput}
            placeholder="내용을 입력해주세요."
            initialValue=" "
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
          ></Editor>
          <div className="btn--div">
            <Button className="button" onClick={submit}>
              Review your question
            </Button>
          </div>
        </div>
      </div>
    </StyledAdd>
  );
};

export default AddQuestionPage;

const StyledAdd = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  @media (max-width: 640px) {
    padding: 20px 20px 30px;
  }

  .add--question {
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    /* width: 95%; */
    /* max-width: 800px; */
    height: 100%;
    /* box-shadow: 1px 1px 1px; */
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
    margin: 10px 0px;
  }
`;
