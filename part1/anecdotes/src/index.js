import React, { useState } from "react";
import ReactDOM from "react-dom";

const Score = ({ score }) => {
  return <p>has {score} votes</p>;
};

const Vote = ({ id, points, setPoints, max, setMax }) => {
  const handleVotes = id => {
    const newPoints = {
      ...points,
    };
    newPoints[id] += 1;
    console.log(newPoints);
    setPoints(newPoints);
    if (newPoints[id] >= newPoints[max]) setMax(id);
  };

  return <button onClick={() => handleVotes(id)}>vote</button>;
};

const Button = ({ setValue, length }) => {
  const randomInt = length => Math.floor(Math.random() * Math.floor(length));
  return (
    <button onClick={() => setValue(randomInt(length))}>next anecdote</button>
  );
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    props.anecdotes.map(() => {
      return 0;
    })
  );
  const [max, setMax] = useState(0);

  const length = props.anecdotes.length;
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <Score score={points[selected]} />
      <Vote
        id={selected}
        points={points}
        setPoints={setPoints}
        max={max}
        setMax={setMax}
      />
      <Button setValue={setSelected} length={length} />
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[max]}</div>
      <Score score={points[max]} />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
