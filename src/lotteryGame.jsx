import  { useState } from "react";

 function LotteryChecker() {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [message, setMessage] = useState("");

  const checkLottery = () => {
    const num1 = parseInt(digit1) || 0;
    const num2 = parseInt(digit2) || 0;
    const num3 = parseInt(digit3) || 0;
    const sum = num1 + num2 + num3;

    if (sum === 15) {
      setMessage("Congratulations! You won the lottery!");
    } else {
      setMessage("Sorry, better luck next time!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lottery Checker</h1>
      <div>
        <input
          type="number"
          max="9"
          min="0"
          value={digit1}
          onChange={(e) => setDigit1(e.target.value)}
          placeholder="Digit 1"
        />
        <input
          type="number"
          max="9"
          min="0"
          value={digit2}
          onChange={(e) => setDigit2(e.target.value)}
          placeholder="Digit 2"
        />
        <input
          type="number"
          max="9"
          min="0"
          value={digit3}
          onChange={(e) => setDigit3(e.target.value)}
          placeholder="Digit 3"
        />
      </div>
      <button onClick={checkLottery} style={{ margin: "10px", padding: "5px 15px" }}>
        Check
      </button>
      <h2>{message}</h2>
    </div>
  );
}

export default LotteryChecker;
