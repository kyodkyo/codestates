import styled from 'styled-components';
import Card from './Card';
import { media } from '../../style/media';
import { Text } from './Text';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  title: string;
  user: string;
  date: string;
}

// 날짜 변환 로직
const getKST = (date: string) => {
  const newDate = new Date(date);
  //newDate.setHours(newDate.getHours() + 9);
  return newDate.toISOString().replace('T', ' ').substring(0, 19);
};

const Question = ({ title, user, date }: Props) => {
  return (
    <StyledQuestion>
      <h2>
        <Text fontSize="lg">{title}</Text>
      </h2>
      <span className="info">
        <Text className="user">{user}</Text>
        <Text>{getKST(date)}</Text>
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

  h2 {
    margin-bottom: 15px;
  }

  div {
    margin-bottom: 10px;
  }

  h2 span {
    margin-bottom: 15px;
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

    ${media.custom('992px')} {
      display: none;
    }
  }

  .small {
    display: none;

    ${media.custom('992px')} {
      display: block;
    }
  }
`;
