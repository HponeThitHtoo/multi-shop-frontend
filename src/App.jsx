import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import SharedLayout from "./pages/SharedLayout";
import SignUpPage from "./pages/user/SignUpPage";
import SignInPage from "./pages/user/SignInPage";
import ActivationPage from "./pages/user/ActivationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route
          path="activation/:activation_token"
          element={<ActivationPage />}
        />
      </Route>
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default WrappedApp;
