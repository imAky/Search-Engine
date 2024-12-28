import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Google Clone',
  description:
    'An open source Google clone built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
     <head>
        {/* Add the meta tag for Cryptomus verification */}
      <meta name="cryptomus" content="86dbc56d" />
      </head>
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
