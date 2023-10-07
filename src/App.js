import {Route,Routes} from "react-router-dom";
import './App.css';
import POSSystem from "./components/POSSystem"

function App() {
  return (
    <Routes>
      <Route path="/" element={<POSSystem/>}/>
      <Route path="/*" element={<POSSystem/>}/>
    </Routes>
  );
}

export default App;
