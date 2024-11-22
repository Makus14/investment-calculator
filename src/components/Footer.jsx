import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Footer({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const isAllDataFilled =
    initialInvestment > 0 &&
    annualInvestment > 0 &&
    expectedReturn > 0 &&
    duration > 0;

  const generateRows = () => {
    const rows = [];
    let resultCalculations = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
    for (let i = 0; i < duration; i++) {
      let data = resultCalculations[i];
      rows.push(
        <tr key={i}>
          <td>{data.year}</td>
          <td>{formatter.format(data.valueEndOfYear)}</td>
          <td>{formatter.format(data.interest)}</td>
          <td>{formatter.format(data.totalInterest)}</td>
          <td>{formatter.format(data.valueEndOfYear - data.totalInterest)}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <>
      {!isAllDataFilled ? (
        <p style={{ textAlign: "center" }}>Input data.</p>
      ) : (
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
      )}
    </>
  );
}
