import { Link } from 'react-router-dom';
import HospitalLogo from './HospitalLogo';

export default function Header() { return <header className="site-header"><Link to="/" className="brand"><HospitalLogo /><span><strong>Kade Government Hospital</strong><small>Client Relations Office</small></span></Link></header>; }
