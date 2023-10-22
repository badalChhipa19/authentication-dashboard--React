import { Route, Routes } from "react-router-dom";

import Authentication from "./routers/authentication/authentication.component.jsx";
import Dashboard from "./routers/dashboard/dashboard.component.jsx";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
