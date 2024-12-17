import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Exemple pour une page d'accueil, à adapter selon ton projet.
import Programs from "./pages/Programs";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
