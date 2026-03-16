import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SpecialtyPage from './pages/SpecialtyPage';
import DoctorsPage from './components/DoctorsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <FloatingButtons />
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/department/:slug' element={<SpecialtyPage />} />
            <Route path='/doctors' element={<DoctorsPage />} />
            {/* <Route path='/orthopedics' element={<Navigate to="/department/orthopedics" replace />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
