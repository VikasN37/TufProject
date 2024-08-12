import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/Quiz/Quiz.page";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/quiz"} />} />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
