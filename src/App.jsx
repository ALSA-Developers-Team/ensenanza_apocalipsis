import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./views/Login";
import { supabase } from "./supabase/client";
import Home from "./views/Home";
import CourseView from "./views/CourseView";
import PublicView from "./views/PublicView";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("a", session);
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<PublicView />}>
        <Route path="courses/:courseId" element={<CourseView />} />
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
