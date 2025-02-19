import { useState } from "react";

export const TabButton = () => {
  const [result, setResult] = useState();

  const obj = {
    javascript: "Đây là javascript",
    reactJs: "Đây là reactJs",
    viteJs: "Đây là viteJS",
    nextJs: "Đây là nextJS",
  }

  const handleClick = (type) => {
    switch (type) {
      case "javascript":
        setResult(obj.javascript);
        break;
      case "reactJs":
        setResult(obj.reactJs);
        break;
      case "viteJs":
        setResult(obj.viteJs);
        break;
      case "nextJs":
        setResult(obj.nextJs);
        break;
    }
  }

  return (
    <>
      <div className="tab-button">
        <h2>Tab Button</h2>
        <div className="inner-button">
          <button onClick={() => { handleClick("javascript") }} className="btn">
            Javascript
          </button>
          <button onClick={() => { handleClick("reactJs") }} className="btn">
            ReactJS
          </button>
          <button onClick={() => { handleClick("viteJs") }} className="btn">
            ViteJS
          </button>
          <button onClick={() => { handleClick("nextJs") }} className="btn">
            NextJS
          </button>
        </div>
        <div className="result">
          {result}
        </div>
      </div>
    </>
  );
}
