import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getConfig } from "./services/config.service";

interface Config {
  data: Data;
  loading: boolean;
}

interface Data {
  name: string;
  error: any;
}
function App() {
  const [config, setConfig] = useState({ loading: true, data: {} });
  // const { loading, data } = config as Config;

  useEffect(() => {
    async function getConfigAsync() {
      const { data } = await getConfig();
      setConfig({ data } as Config);
    }

    getConfigAsync();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          {loading && "Getting config from server..."}
          {data.error && "Error getting config from server"}
          {data.name && `The client is: ${data.name}`}
        </p> */}
      </header>
    </div>
  );
}

export default App;
