import "./App.css";
//import { OpenAIApi } from "openai";
//import OptionSelection from "./components/OptionSelection";
//import Translation from "./components/Translation";
//import { arrayItems } from "./AIOptions";
//import { useState } from "react";
//import { Configuration } from "dotenv";

function App() {
  /*const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  /*const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");*/
   console.log(import.meta.env.Open_AI_Key);
  /*const selectOption = (option) => {
    setOption(option);
  };

  const generate= async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={generate} setInput={setInput} result={result} />
      )}
    </div>
  );*/
}

export default App;