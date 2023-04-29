import React from "react";
import Star from "../images/icon-star.svg";
import {
  QuestionDiv,
  RatingsCardWrapper,
  RatingsDiv,
  StarDiv,
  SubmitBtn,
} from "./RatingCard.styled";

const RatingsCard = ({ rate, setRate, setSubmitted }) => {
  const ratesArray = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <RatingsCardWrapper>
      <StarDiv>
        <img src={Star} alt="star" />
      </StarDiv>

      <QuestionDiv>
        <h4>How did we do?</h4>
        <p>Please let us know how we did with your support</p>
        <p>request. All feedback is appreciated to help us</p>
        <p>improve our offering!</p>
      </QuestionDiv>

      <RatingsDiv>
        {ratesArray.map((userRate) => (
          <div
            key={userRate}
            onClick={() => setRate(userRate)}
            className={`rating ${userRate === rate ? "active" : "null"}`}
          >
            {userRate}
          </div>
        ))}
      </RatingsDiv>

      <SubmitBtn>
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </SubmitBtn>
    </RatingsCardWrapper>
  );
};

export default RatingsCard;
