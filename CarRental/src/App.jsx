import { Routes, Route } from 'react-router-dom';

// LAYOUTS
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// PUBLIC PAGES
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Car from './pages/Cars';
import About from './pages/About';
import Contact from './pages/Contact';

// ADMIN PAGES (Inside src/pages/admin/)
import Dashboard from './pages/admin/Dashboard';
import Team from './pages/admin/Team';
import Invoices from './pages/admin/Invoices';
import Calendar from './pages/admin/Calendar';

// CHART PAGES (Inside src/pages/admin/chart/)
import Bar from './pages/admin/charts/Bar';
import Geography from './pages/admin/charts/Geography';
import Line from './pages/admin/charts/Line';
import Pie from './pages/admin/charts/Pie';

const App = () => {
  return (
    <Routes>
      {/* ========================================== */}
      {/* PUBLIC ROUTES (Uses Layout)                */}
      {/* ========================================== */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ========================================== */}
      {/* ADMIN ROUTES (Uses AdminLayout)            */}
      {/* ========================================== */}
      <Route element={<AdminLayout />}>
        {/* Main Management Pages */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/team" element={<Team />} />
        <Route path="/admin/invoices" element={<Invoices />} />
        <Route path="/admin/calendar" element={<Calendar />} />

        {/* Charts Section */}
        <Route path="/admin/bar" element={<Bar />} />
        <Route path="/admin/geography" element={<Geography />} />
        <Route path="/admin/line" element={<Line />} />
        <Route path="/admin/pie" element={<Pie />} />
      </Route>

      {/* 404 - FALLBACK */}
      <Route path="*" element={
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        </div>
      } />
    </Routes>
  );
};

export default App;