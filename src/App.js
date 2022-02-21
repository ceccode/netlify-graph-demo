import React, { useState } from "react";
import ViewPackageDownload from "./components/ViewPackageDownload";
import "./App.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const PORT = process.env.REACT_APP_FUNCTIONS_PORT;

const App = () => {
  const [count, setCount] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const function_name = "getDownloadLastMonth";

    const base_url =
      process.env.NODE_ENV === "development" ? `${BASE_URL}:${PORT}` : ``;

    const url = `${base_url}/.netlify/functions/${function_name}`;

    let response = await fetch(url);
    let data = await response.json();

    setCount(
      data.getDownloadLastMonthData.npm.package.downloads.lastMonth.count
    );
  };

  return (
    <div className="App">
      <main className="App-main">
        <p>React-cookie-law package</p>
        <form onSubmit={handleSubmit}>
          <button>View last month downloads</button>
        </form>
        <ViewPackageDownload count={count} />
      </main>
    </div>
  );
};

export default App;
