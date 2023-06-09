import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Main</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main>
				<h1>Main</h1>
			</main>
		</>
	);
}
