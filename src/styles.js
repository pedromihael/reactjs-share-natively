import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
  justify-content: center;

  button {
    height: 5vh;
    width: 80vw;
    border: none;
    box-shadow: none;
    border-radius: 15px;
    background: #0c9454;
    color: #ffffff;
    font-weight: 700;

    @media (min-width: 700px) {
      width: 30vw;
    }
  }

  video {
    width: 80vw;

    @media (min-width: 700px) {
      width: 30vw;
    }
  }
`;
