import styled from "styled-components";

export const ThankYouCardWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;700&display=swap");

  font-family: "Overpass", sans-serif;
  width: 24rem;
  height: 24rem;
  border-radius: 30px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ThankYouImgWrapper = styled.div`
  max-width: 100%;
`;

export const SelectedRating = styled.div`
  background: #262e38;
  border-radius: 22.5px;
  width: 65%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  p {
    color: #fc7614;
    font-size: 1.2rem;
  }
`;

export const AppreciationDiv = styled.div`
  h4 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
    color: #969fad;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
