import './App.css';
import Header from './components/Header';
import PortalCalc from './pages/PortalCalc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsefulLinksPage from './pages/UsefulLinksPage';
import MainUpdates from './pages/MainUpdates';
import Food from './pages/Food';
function App() {
  return (
    <>
      <BrowserRouter basename='/minecraft-apps'>
      {/* I had to add basename to allow refresh on other pages */}
      <Header>
        <Routes>
          <Route path='/' element={<PortalCalc />} />
          <Route path='/PortalCalc' element={<PortalCalc />} />
          <Route path='/UsefulLinksPage' element={<UsefulLinksPage />} />
          <Route path='/MainUpdates' element={<MainUpdates />} />
          <Route path='/Food' element={<Food />} />
          <Route path='*' element={<PortalCalc />} /> {/* Catch-all route */}
        </Routes>
      </Header>
    </BrowserRouter>
    </>
  );
}

export default App;
