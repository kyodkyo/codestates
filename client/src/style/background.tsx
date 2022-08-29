import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const BackGround = styled.div`
  background-color: ${({ theme }) => theme.mode.mainBackground};
  transition: 0.3s;
  height: 100%;
  border: 1px solid transparent;
`;

export default BackGround;
