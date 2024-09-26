import './globals.css';
import {Header} from '@/ui/Header/Header';
import Head from 'next/head';

export const metadata = {
    title: 'Lumos',
    description: 'Lumos App',
}

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </Head>
        <body>
        <Header/>
        {children}
        <div id={'modal-root'}></div>
        </body>
        </html>
    );
}
