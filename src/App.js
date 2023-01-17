import { useState, createElement } from "react";

function App() {
  const [markup, setMarkup] = useState([]);

  const Element = () => {
    return [...markup];
  };

  const handleOnChange = (event) => {
    if (event.target.value.includes("/p")) {
      setMarkup((markup) => [
        ...markup,
        <input
          placeholder="jsk"
          value={event.target.value}
          onChange={(event) => handleOnChange(event)}
        />,
      ]);
      console.log(markup[0]);
    }
  };

  return (
    <div>
      <input onChange={(event) => handleOnChange(event)} />
      {createElement(Element)}
    </div>
  );
}

export default App;
