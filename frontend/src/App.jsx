import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* USER PAGES */

import Home from "./pages/Home";
import About from "./pages/About";
import Domains from "./pages/Domains";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import EventPayment from "./pages/EventPayment";
import Membership from "./pages/Membership";

/* ADMIN PAGES */

import AdminKey from "./pages/AdminKey";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";

import AdminDashboard from "./admin/pages/AdminDashboard";
import ManageEvents from "./admin/pages/ManageEvents";
import VerifyPayments from "./admin/pages/VerifyPayments";
import Members from "./admin/pages/Members";
import Users from "./admin/pages/Users";
import Certificates from "./admin/pages/Certificates";

/* AUTH */

import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/auth/AdminRoute";

function App() {

  return (

    <Router>

      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

        <Navbar />

        <main className="flex-grow pt-20">

          <Routes>

            {/* USER ROUTES */}

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/domains" element={<Domains />} />

            <Route path="/events" element={<Events />} />

            <Route path="/team" element={<Team />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/blog" element={<Blog />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/membership"
              element={
                <ProtectedRoute>
                  <Join />
                </ProtectedRoute>
              }
            />

            <Route
              path="/event-payment/:id"
              element={
                <ProtectedRoute>
                  <EventPayment />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/join"
              element={
                <ProtectedRoute>
                  <Membership />
                </ProtectedRoute>
              }
            />

            {/* ADMIN */}

            <Route path="/admin-key" element={<AdminKey />} />

            <Route path="/admin-login" element={<AdminLogin />} />

            <Route path="/admin-signup" element={<AdminSignup />} />

            <Route
              path="/admin/users"
              element={<Users />}
            />

            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/events"
              element={
                <AdminRoute>
                  <ManageEvents />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/payments"
              element={
                <AdminRoute>
                  <VerifyPayments />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/members"
              element={
                <AdminRoute>
                  <Members />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/certificates"
              element={
                <AdminRoute>
                  <Certificates />
                </AdminRoute>
              }
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </Router>

  );

}

export default App;