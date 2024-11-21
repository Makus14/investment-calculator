import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [duration, setDuration] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [initialInvestment, setInitialInvestment] = useState();
  const [annualInvestment, setAnnualInvestment] = useState();

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  const handleExpectedReturnChange = (newExpectedReturn) => {
    setExpectedReturn(newExpectedReturn);
  };

  const handleInitialInvestmentChange = (newInitialInvestment) => {
    setInitialInvestment(newInitialInvestment);
  };

  const handleAnnualInvestment = (newAnnualInvestment) => {
    setAnnualInvestment(newAnnualInvestment);
  };

  return (
    <>
      <Header />
      <Body
        duration={duration}
        expectedReturn={expectedReturn}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        onDurationChange={handleDurationChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestment}
      />
      <Footer
        duration={duration}
        expectedReturn={expectedReturn}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
      />
    </>
  );
}

export default App;
