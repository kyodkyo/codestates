import styled from 'styled-components';

const Card = styled.section`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.mode.card};
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

export default Card;
