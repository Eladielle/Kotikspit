import Navigation from '../../components/navigation/navMainPage'
import '../contacts/contacts.css'
export default function Contacts(): JSX.Element {
	return (
		<>
			<Navigation />
			<div className="bg-contacts flex-col py-40 px-40 text-5xl font-bold text-white mb-10">
				<h1>CONTACTS:</h1>
				<p>:::::::::::::::::</p>
				<br />
				<p>
					<p className="text-primary">&quot;BEYOND REALMS 29 Ltd.&quot;</p>
					<br /> Phone: +49 69 12345678
					<br /> Email: beyondrealms@gmail.com
					<br />
					The Matrix Building, unit 7,
					<br /> Musterstrasse 777,
					<br />
					Frankfurt am Main,
					<br /> Germany
				</p>
			</div>
		</>
	)
}
