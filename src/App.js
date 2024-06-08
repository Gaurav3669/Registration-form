import FormComponent from './Components/form-components';
import './App.css';
import UserPanel from "./UserPanel"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
   <Router>
    
   <div className="App">
   <Routes>
   <Route path="/" element={<FormComponent/>}/>
   <Route path="/userpanel" element={<UserPanel/>}/>
   </Routes></div></Router> 
  );
}

export default App;
