import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodayPage } from "./pages/TodayPage";

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
);

export default App;
