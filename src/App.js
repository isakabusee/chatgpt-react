import './App.css';
import { useState, useEffect } from 'react';

function App() {

const [message, setMessage ] = useState(null);

const getMessages = async () => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      message: "hello how are you?"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }
    try {
      const response = await fetch("http://localhost:8000/completions", options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
    } 
    catch (error) {
      console.log(error)
    }
}

  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history"></ul>
        <nav><p>Made by Isaac Busee</p></nav>
      </section>
      <section className="main">
        <h1>IsaacGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit" onClick={getMessages}>➤</div>
          </div>
          <p className="info">
            Chat GPT Mar 14 Version. Free Research Preview.
            Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
