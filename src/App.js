import React from "react"
import "./App.css"
import CountDown from "./components/CountDown"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDown duration={60} initialActive={false} toDo={"countdown"} />
      </header>
    </div>
  )
}

export default App
