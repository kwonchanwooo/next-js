import Head from 'next/head';

export default function Layout(props) {
	return (
		<>
			<Head>
				<title>Dcodelab</title>
				<link rel='icon' href='favicon.ico' />
			</Head>
			<section className={`sub ${props.tit}`}>
				<h1>{props.tit}</h1>
				{props.children}
			</section>
		</>
	);
}
