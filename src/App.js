
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />

    </Routes>
    </>
  );
}


export default App;
