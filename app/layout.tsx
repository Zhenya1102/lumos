import './globals.css';
import {Header} from '@/ui/Header/Header';

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <div id={'modal-root'}></div>
        </body>
        </html>
    );
}
