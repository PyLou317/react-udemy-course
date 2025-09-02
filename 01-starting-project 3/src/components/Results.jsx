import { formatter } from '../util/investment.js';

export default function Results({ datas }) {
  console.log(datas);

  const initialInvestment = datas[0].valueEndOfYear - datas[0].interest - datas[0].annualInvestment;
  return (
    <>
      {datas.map((yearData) => {
        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
        return (
          <tr key={yearData.year}>
            <td className="center">{yearData.year}</td>
            <td className="center">{formatter.format(yearData.valueEndOfYear)}</td>
            <td className="center">{formatter.format(yearData.interest)}</td>
            <td className="center">{formatter.format(totalInterest)}</td>
            <td className="center">{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      })}
    </>
  );
}
