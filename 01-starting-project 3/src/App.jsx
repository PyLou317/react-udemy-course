import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import calculateInvestmentResults from './util/investment.js';

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 1,
  });

  const inputIsValid = input.duration >= 1;

  function handleInputChange(inputIdentifier, newInput) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newInput,
      };
    });
  }

  const annualData = calculateInvestmentResults(input);

  return (
    <div>
      <Header />
      <main>
        <div id="user-input">
          <div className="input-group">
            <UserInput
              name="initialInvestment"
              label="Initial Investment"
              onChangeInput={handleInputChange}
              value={input.initialInvestment}
            />
            <UserInput
              name="annualInvestment"
              label="Annual Investment"
              onChangeInput={handleInputChange}
              value={input.annualInvestment}
            />
          </div>
          <div className="input-group">
            <UserInput
              name="expectedReturn"
              label="Expected Return"
              onChangeInput={handleInputChange}
              value={input.expectedReturn}
            />
            <UserInput name="duration" label="Duration" onChangeInput={handleInputChange} value={input.duration} />
          </div>
        </div>
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {!inputIsValid && (
              <tr>
                <td className="center" colSpan="5">
                    Duration must be greater than 1 to see results.
                </td>
              </tr>
            )}
            {inputIsValid && <Results datas={annualData} className="center" />}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
