import styled from 'styled-components';
import Card from './Card';
import { media } from '../../style/media';
import { Text } from './Text';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';

interface Props {
  title: string;
  user: string;
  date: string;
}

const getKST = (date: string) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);
  return newDate.toISOString().replace('T', ' ').substring(0, 19);
};

const Comment = ({ title, user, date }: Props) => {
  const mode = useSelector((state: RootState) => state.darkMode.mode) as string;
  const deleteOnClick = () => {
    console.log('코멘트 삭제');
  };

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

  return (
    <StyledComment>
      <div>
        <Text>
          <Viewer initialValue={title} theme={mode === 'dark' ? 'dark' : 'l'} />
        </Text>
      </div>
      <span className="info">
        <Text className="user">{user}</Text>
        <Text>{getKST(date)}</Text>
      </span>
      <div className="edit">
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

  .edit {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }

  .delete {
    margin-left: 5px;
  }
`;
