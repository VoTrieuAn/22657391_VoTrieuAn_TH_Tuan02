import { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Vui lòng nhập số hợp lệ!");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Không thể chia cho 0!";
        break;
      default:
        res = "Phép toán không hợp lệ!";
    }
    setResult(res);
  };
  return (
    <>
      <div className="calculator">
        <h2>Máy Tính</h2>
        <div className="inner-input">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Nhập số thứ nhất"
            className="input"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Nhập số thứ hai"
            className="input"
          />
        </div>
        <div className="inner-radio">
          <input type="radio" id="operator" name="operator" onClick={() => handleCalculate("+")} />
          <label htmlFor="operator">+</label>
          <input type="radio" id="operator" name="operator" onClick={() => handleCalculate("-")} />
          <label htmlFor="operator">-</label>
          <input type="radio" id="operator" name="operator" onClick={() => handleCalculate("*")} />
          <label htmlFor="operator">*</label>
          <input type="radio" id="operator" name="operator" onClick={() => handleCalculate("/")} />
          <label htmlFor="operator">/</label>
        </div>
        <h3>Kết quả: {result !== null ? (<span className="result">{result}</span>) : (<span className="result">Chưa có kết quả</span>)}</h3>
      </div>
    </>
  );
}