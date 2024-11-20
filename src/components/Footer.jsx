export default function Footer({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= duration; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>Investment Value {i}</td>
          <td>Interest (Year) {i}</td>
          <td>Total Interest {i}</td>
          <td>Invested Capital {i}</td>
        </tr>
      );
    }
    return rows;
  };

  function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1, // year identifier
        interest: interestEarnedInYear, // the amount of interest earned in this year
        valueEndOfYear: investmentValue, // investment value at end of year
        annualInvestment: annualInvestment, // investment added in this year
      });
    }

    return annualData;
  }

  return (
    <table id="result">
      <thead id="thead">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="tbody">{generateRows()}</tbody>
    </table>
  );
}
