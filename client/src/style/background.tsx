import styled from "styled-components";

const BackGround = styled.section`
  background-color: ${({ theme }) => theme.mode.mainBackground};
  transition: 0.3s;
  height: 100%;
  border: 1px solid transparent;
  flex: 1 1 auto;
  margin-top: 64px;
`;

export default BackGround;
