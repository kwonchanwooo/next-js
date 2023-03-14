import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
	return (
		<>
			<Head>
				<title>Dcodelab</title>
				<link rel='icon' href='favicon.ico' />
			</Head>

			<Header />
			<section className={`sub ${props.tit}`}>
				<h1>{props.tit}</h1>
				{props.children}
			</section>
		</>
	);
}
