import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { RecipeList } from "./pages/RecipeList";
import { RecipeDetail } from "./pages/RecipeDetail";
import Header from "./components/Header";
import { Register } from "./pages/Register";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/recipe" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
