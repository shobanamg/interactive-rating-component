import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 0;
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  @media screen and (max-width: 600px) {
    padding: 5%;
    width: 100%;
  }
`;

export default AppWrapper;
