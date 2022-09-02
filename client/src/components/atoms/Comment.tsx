import styled from "styled-components";
import Card from "./Card";
import { media } from "../../style/media";
import { Text } from "./Text";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

interface Props {
  title: string;
  user: string;
  date: string;
}

// 날짜 변환 로직
// const getKST = (date: string) => {
//   const newDate = new Date(date);
//   newDate.setHours(newDate.getHours() + 9);
//   return newDate.toISOString().replace('T', ' ').substring(0, 16);
// };

const Comment = ({ title, user, date }: Props) => {
  const html = "답변 내용";

  const deleteOnClick = () => {
    console.log("삭제");
  };

  return (
    <StyledComment>
      <div>
        <Text>
          <Viewer initialValue={html} />
        </Text>
      </div>
      <span className="info">
        <Text className="user">{user}</Text>
        <Text>{date}</Text>
      </span>
      <div className="edit">
        {/* <span>
          <Text>Edit</Text>
        </span> */}
        <span className="delete" onClick={deleteOnClick}>
          <Text>Delete</Text>
        </span>
      </div>
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.mode.themeIcon};

  span {
    cursor: pointer;
  }

  h2 {
    margin-bottom: 15px;
  }

  div {
    margin-bottom: 10px;
  }

  .info {
    display: flex;
    justify-content: flex-end;
  }

  .user {
    margin-right: 10px;
  }

  .big {
    display: block;

    ${media.custom("992px")} {
      display: none;
    }
  }

  .small {
    display: none;

    ${media.custom("992px")} {
      display: block;
    }
  }

  .edit {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }

  .delete {
    margin-left: 5px;
  }
`;
