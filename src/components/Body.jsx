export default function Body({
  duration,
  expectedReturn,
  initialInvestment,
  annualInvestment,
  onDurationChange,
  onExpectedReturnChange,
  onInitialInvestmentChange,
  onAnnualInvestmentChange,
}) {
  const handleDurationChange = (event) => {
    let newDuration = Number(event.target.value);

    if (newDuration < 0) newDuration = 0;
    if (newDuration > 20) newDuration = 20;

    onDurationChange(newDuration);
  };

  const handleExpectedReturnChange = (event) => {
    let newExpectedReturn = Number(event.target.value);

    if (newExpectedReturn < 0) newExpectedReturn = 0;
    if (newExpectedReturn > 100) newExpectedReturn = 100;

    onExpectedReturnChange(newExpectedReturn);
  };

  const handleInitialInvestmentChange = (event) => {
    let newInitialInvestment = Number(event.target.value);

    if (newInitialInvestment < 0) newInitialInvestment = 0;
    if (newInitialInvestment > 10000) newInitialInvestment = 100000;

    onInitialInvestmentChange(newInitialInvestment);
  };

  const handleAnnualInvestmentChange = (event) => {
    let newAnnualInvestment = Number(event.target.value);

    if (newAnnualInvestment < 0) newAnnualInvestment = 0;
    if (newAnnualInvestment > 100000) newAnnualInvestment = 100000;

    onAnnualInvestmentChange(newAnnualInvestment);
  };

  return (
    <div id="user-input">
      <div id="input-group ">
        <label id="label">INITIAL INVESTMENT</label>
        <input
          id="input"
          placeholder="0"
          type="number"
          step="1"
          onChange={handleInitialInvestmentChange}
          value={initialInvestment}
          min="0"
          max="100000"
        ></input>
      </div>
      <div id="input-group ">
        <label id="label">ANNUAL INVESTMENT</label>
        <input
          id="input"
          placeholder="0"
          type="number"
          step="1"
          onChange={handleAnnualInvestmentChange}
          value={annualInvestment}
          min="0"
          max="100000"
        ></input>
      </div>
      <div id="input-group ">
        <label id="label">EXPECTED RETURN</label>
        <input
          id="expected-return-input"
          style={{
            padding: "8px",
            fontSize: "16px",
            textAlign: "left",
          }}
          type="number"
          placeholder="0"
          step="1"
          onChange={handleExpectedReturnChange}
          value={expectedReturn}
          min="0"
          max="100"
        />
      </div>
      <div id="input-group">
        <label id="label">DURATION</label>
        <input
          id="input"
          type="number"
          step="1"
          placeholder="0"
          onChange={handleDurationChange}
          value={duration}
          min="0"
          max="20"
        />
      </div>
    </div>
  );
}
