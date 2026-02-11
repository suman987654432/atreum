import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/LandingPage/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import DoctorPage from './pages/DoctorPage';
// import DepartmentPage from './pages/DepartmentPage';
import OrthoPage from './pages/OrthoPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
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
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
