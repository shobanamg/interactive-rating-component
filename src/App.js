import React, { useState } from "react";
import RatingsCard from "./components/RatingsCard";
import ThankYouCard from "./components/ThankYouCard";
import AppWrapper from "./App.styled";

function App() {
  const [rate, setRate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick=() => {
    setSubmitted(false);
    setRate(null);
  }

  return (
    <AppWrapper>
      {submitted ? (
        <ThankYouCard rate={rate} handleClick={handleClick} />
      ) : (
        <RatingsCard
          rate={rate}
          setRate={setRate}
          setSubmitted={setSubmitted}
        />
      )}
    </AppWrapper>
  );
}

export default App;
