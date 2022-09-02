<<<<<<< HEAD
import styled from "styled-components";
import Card from "./Card";
import { media } from "../../style/media";
import { Text } from "./Text";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
=======
import styled from 'styled-components';
import Card from './Card';
import { media } from '../../style/media';
import { Text } from './Text';
>>>>>>> dev

interface Props {
  title: string;
  user: string;
  date: string;
}

// 날짜 변환 로직
<<<<<<< HEAD
const getKST = (date: string) => {
  const newDate = new Date(date);
  //newDate.setHours(newDate.getHours() + 9);
  return newDate.toISOString().replace("T", " ").substring(0, 19);
};
=======
// const getKST = (date: string) => {
//   const newDate = new Date(date);
//   newDate.setHours(newDate.getHours() + 9);
//   return newDate.toISOString().replace('T', ' ').substring(0, 16);
// };
>>>>>>> dev

const Question = ({ title, user, date }: Props) => {
  return (
    <StyledQuestion>
      <h2>
        <Text fontSize="lg">{title}</Text>
      </h2>
      <span className="info">
        <Text className="user">{user}</Text>
<<<<<<< HEAD
        <Text>{getKST(date)}</Text>
=======
        <Text>{date}</Text>
>>>>>>> dev
      </span>
    </StyledQuestion>
  );
};

export default Question;

const StyledQuestion = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.mode.themeIcon};

  span {
    cursor: pointer;
  }
<<<<<<< HEAD

=======
>>>>>>> dev
  h2 {
    margin-bottom: 15px;
  }

  div {
    margin-bottom: 10px;
  }

<<<<<<< HEAD
  h2 span {
    margin-bottom: 15px;
  }

=======
>>>>>>> dev
  .info {
    display: flex;
    justify-content: flex-end;
  }
<<<<<<< HEAD

=======
>>>>>>> dev
  .user {
    margin-right: 10px;
  }

  .big {
    display: block;
<<<<<<< HEAD

    ${media.custom("992px")} {
=======
    ${media.custom('992px')} {
>>>>>>> dev
      display: none;
    }
  }

  .small {
    display: none;
<<<<<<< HEAD

    ${media.custom("992px")} {
=======
    ${media.custom('992px')} {
>>>>>>> dev
      display: block;
    }
  }
`;
