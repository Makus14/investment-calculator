import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  let initialInvestment = 10000;
  let annualInvestment = 1200;
  let expectedReturn = 6;
  let duration = 10;

  return (
    <>
      <Header />
      <Body />
      <Footer
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  );
}

export default App;
