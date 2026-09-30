import { Link } from 'react-router-dom';
export default function NotFound() { return <main className="empty-page"><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="primary-button link-button" to="/">Return to home</Link></main>; }
