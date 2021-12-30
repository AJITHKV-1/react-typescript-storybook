import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles.css";
import LogInPage from "../pages/login";
import Signup from "../pages/signup";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*"><Redirect to="/404" /></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
