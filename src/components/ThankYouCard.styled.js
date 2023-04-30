import styled from "styled-components";
import {RatingsCardWrapper} from "./RatingCard.styled";

export const ThankYouCardWrapper = styled(RatingsCardWrapper)`
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
