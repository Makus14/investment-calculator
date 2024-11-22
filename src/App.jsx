import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [duration, setDuration] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);

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
