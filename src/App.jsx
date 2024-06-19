import './App.css';
import Header from './components/Header';
import PortalCalc from './pages/PortalCalc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
function App() {
  return (
    <>
      <BrowserRouter basename='/minecraft-apps'>
      {/* I had to add basename to allow refresh on other pages */}
      <Header>
        <Routes>
          <Route path='/' element={<PortalCalc />} />
          <Route path='/PortalCalc' element={<PortalCalc />} />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3' element={<Page3 />} />
          <Route path='/Page4' element={<Page4 />} />
          <Route path='*' element={<PortalCalc />} /> {/* Catch-all route */}
        </Routes>
      </Header>
    </BrowserRouter>
    </>
  );
}

export default App;
