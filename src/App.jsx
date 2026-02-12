import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/LandingPage/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import DoctorPage from './pages/DoctorPage';
// import DepartmentPage from './pages/DepartmentPage';
import OrthoPage from './pages/OrthoPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <FloatingButtons />
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/careers' element={<CareersPage />} />
            <Route path='/doctor' element={<DoctorPage />} />
            {/* <Route path='/department' element={<DepartmentPage />} /> */}
            <Route path='/orthopedics' element={<OrthoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
