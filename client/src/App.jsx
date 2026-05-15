import { Routes, Route, Navigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SubMainPage from "./pages/SubMainPage";
import Dashboard from "./pages/Dashboard";
import Service from "./components/Service";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Job from "./components/Job";
import JobPost from "./components/JobPost";
import Blogs from "./components/Blogs";
import BlogsDetails from "./components/BlogsDetails";



const PrivateRoute = ({ children }) => {
  const user = sessionStorage.getItem("hously_user");
  if (!user) return <Navigate to="/" replace />;
  return children;
};

function App() {
  return (
    <Routes>
      {/* ── Public Routes ───────────────────────────────────── */}
      <Route path="/"                  element={<MainPage />} />
      <Route path="/technology"        element={<SubMainPage />} />
      <Route path="/home"              element={<Home />} />
      <Route path="/services"          element={<Service />} />
      <Route path="/about"             element={<About />} />
      <Route path="/blogs"             element={<Blogs />} />
      <Route path="/blogs/:id"         element={<BlogsDetails />} />
      <Route path="/contact"           element={<Contact />} />
      <Route path="/career"            element={<Career />} />
      <Route path="/career/job"        element={<Job />} />
      <Route path="/career/job-detail" element={<JobPost />} />

      {/* ── Private Route (Admin Dashboard) ─────────────────── */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* ── Catch-all → redirect home ────────────────────────── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
