import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import { Text } from "../../atoms/Text";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useAddQuestion } from "../../../react-query/hooks/addQuestionPage/useAddQuestion";

const AddQuestionPage = () => {
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;
  const navigate = useNavigate();
  const [title, setTitle] = useState<any>("");
  const [body, setBody] = useState<any>("");
  const [author, setAuthor] = useState<string>("");

  const editorRef = useRef<any>();

  const addQuestion = useAddQuestion();

  // 제목 , 내용 post요청하기
  const submit = async () => {
    const { data } = await axios.post("http://localhost:3001/que", {
      title,
      body,
      author,
    });

    alert("작성완료");
    setTitle("");
    setBody("");
    navigate("/");
  };

  // toast ui 내용 가져와서 body에 저장하기
  const handleChangeInput = () => {
    setBody(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <StyledAdd mode={mode}>
      <div className="add--question">
        <div className="add--title">
          <h1>
            <Text fontSize="lg" fontWeight="semiBold">
              Ask a public question
            </Text>
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
            theme={mode === "dark" ? "dark" : ""}
            previewStyle="vertical" // 미리보기 스타일 지정
            height="auto" // 에디터 창 높이
            initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
            toolbarItems={[
              // 툴바 옵션 설정
              ["heading", "bold", "italic", "strike"],
              ["hr", "quote"],
              ["ul", "ol", "task", "indent", "outdent"],
              ["table", "image", "link"],
              ["code", "codeblock"],
            ]}
          ></Editor>
          <div className="btn--div">
            <Button
              className="button"
              onClick={() =>
                addQuestion({
                  title,
                  userNumber: Number(author),
                  contents: body,
                })
              }
            >
              Review your question
            </Button>
          </div>
        </div>
      </div>
    </StyledAdd>
  );
};

export default AddQuestionPage;

const StyledAdd = styled.div<{ mode: string }>`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  h1 {
    margin: 20px 0 10px;
  }

  .add--question {
    max-width: 800px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    width: 95%;
    /* max-width: 800px; */
    height: 100%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .add--title {
    display: flex;
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    margin: 15px 0;

    h3 {
      font-weight: 500;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    input {
      margin: 5px 0;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      outline: none;
    }
  }

  .btn--div {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: end;
  }

  .button {
    max-width: fit-content;
    margin: 10px 0;
  }
`;
