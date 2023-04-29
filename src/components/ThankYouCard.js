import React from "react";
import thankYouImg from "../images/illustration-thank-you.svg";
import {
  AppreciationDiv,
  SelectedRating,
  ThankYouCardWrapper,
  ThankYouImgWrapper,
} from "./ThankYouCard.styled";

const ThankYouCard = ({ rate, handleClick }) => {
  return (
    <ThankYouCardWrapper onClick={handleClick}>
      <ThankYouImgWrapper>
        <img src={thankYouImg} alt="thankYou" />
      </ThankYouImgWrapper>

      <SelectedRating>
        <p>You selected {rate} out of 5</p>
      </SelectedRating>

      <AppreciationDiv>
        <h4>Thank you!</h4>
        <p>We appreciate you taking the time to give a rating.</p>
        <p>If you ever need more support, don't hesitate to</p>
        <p>get in touch!</p>
      </AppreciationDiv>
    </ThankYouCardWrapper>
  );
};

export default ThankYouCard;
