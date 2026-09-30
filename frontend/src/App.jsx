import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ClientStatement from './pages/ClientStatement';
import StaffStatement from './pages/StaffStatement';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

export default function App() { return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/client-statement" element={<ClientStatement />} /><Route path="/staff-statement" element={<StaffStatement />} /><Route path="/success" element={<Success />} /><Route path="*" element={<NotFound />} /></Routes><footer>Client Relations Office · Kade Government Hospital</footer></>; }
