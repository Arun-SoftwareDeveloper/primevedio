// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Directory from "./Directory";
// import RegisterForm from "./Components/RegisterForm";
// import LoginForm from "./Components/LoginForm";
// import ForgotPasswordForm from "./Components/ForgotPasswordForm";
// import WebSeries from "./Components/WebSeries";
// import ResetPassword from "./Components/ResetPassword";
// import MoviesContainer from "./Components/MoviesContainer";
// import WebSeriesContainer from "./Components/WebSeriesContainer";
// import SidebarContainer from "./Components/SidebarContianer";
// function App() {
//   return (
//     <div className="container app-container mt-4">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Directory />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
//           <Route path="/resetPassword" element={<ResetPassword />} />
//           <Route path="/webSeries" element={<WebSeriesContainer />} />
//           <Route path="/movies" element={<MoviesContainer />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import PrimeDashboard from "./Components/PrimeDashboard";

function App() {
  return (
    <div>
      <PrimeDashboard />
    </div>
  );
}

export default App;
