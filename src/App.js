import { BrowserRouter as Router, HashRouter, Routes, Route, Link } from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import Form from './pages/Form';
import ModifyTodo from './pages/ModifyTodo';

function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path=":task" element={<ModifyTodo />} />
        <Route path="form" element={<Form />} />
        <Route path="modifytodo" element={<ModifyTodo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
