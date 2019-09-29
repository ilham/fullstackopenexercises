import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ value, setValue, text }) => (
  <button onClick={() => setValue(value + 1)}>{text}</button>
);
const Statistic = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic value={good} text="good" />
          <Statistic value={neutral} text="neutral" />
          <Statistic value={bad} text="bad" />
          <Statistic value={all} text="all" />
          <Statistic
            value={(good * 1 + neutral * 0 + bad * -1) / all}
            text="average"
          />
          <Statistic value={(good * 100) / all + " %"} text="positive" />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} setValue={setGood} text="good" />
      <Button value={neutral} setValue={setNeutral} text="neutral" />
      <Button value={bad} setValue={setBad} text="good" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
