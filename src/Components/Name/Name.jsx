import { useState } from "react"

export const Name = () => {
  const [value, setValue] = useState();
  const [result, setResult] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleClick = () => {
    setResult(value);
  }

  return (
    <>
      <div className="name">
        <h2>Nhập Họ Tên</h2>
        <div className="inner-input">
          <input type="text" id="name" name="name" className="text-name" placeholder="Nhập tên của bạn..." onChange={handleChange} />
          <button className="btn" onClick={handleClick}>Click</button>
        </div>
        <h3>
          Tên của bạn là: <span className="result">{result ? result : "Vui lòng nhập tên của bạn!!"}</span>
        </h3>
      </div>
    </>
  );
}