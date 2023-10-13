import { Route, Routes } from "react-router-dom";

import Authentication from "./routers/authentication/authentication.component.jsx";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
