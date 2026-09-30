import { Link } from 'react-router-dom';

export default function Home() {
	return <main className="home-page">
		<div className="eyebrow">Kade Government Hospital <span>•</span> A safe place to be heard</div>
		<h1>Client Relations<br /><em>Office</em></h1>
		<p className="intro">Please select the appropriate statement form. Your statement will be submitted securely to the Client Relations Office.</p>
		<div className="choice-grid">
			<Link className="choice-card" to="/client-statement"><span className="choice-number">01</span><strong>Client Statement</strong><small>For patients, visitors, and clients</small><span className="arrow">→</span></Link>
			<Link className="choice-card staff" to="/staff-statement"><span className="choice-number">02</span><strong>Staff Statement</strong><small>For hospital staff members</small><span className="arrow">→</span></Link>
		</div>
	</main>;
}
