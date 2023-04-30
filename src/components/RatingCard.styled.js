import styled from "styled-components";

export const RatingsCardWrapper = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;700&display=swap');

  font-family: 'Overpass', sans-serif;
  width: 24rem;
  height: 24rem;
  border-radius: 30px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  padding: 2rem;
`;

export const StarDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #262e38;
`;

export const QuestionDiv = styled.div`
  h4 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 0;
  }

  p {
    margin: 10px 0 0;
    color: #969fad;
  }
`;

export const RatingsDiv = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .rating {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #262e38;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: #fc7614;
    }

    &.active {
      background: #7c8798;
    }
  }
`;

export const SubmitBtn = styled.div`
  margin-top: 2rem;

  button {
    width: 100%;
    height: 3.5rem;
    background: #fc7614;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 22.5px;
    cursor: pointer;
    border: none;

    &:hover {
      background: #fff;
      color: #fc7614;
    }
  }
`;
