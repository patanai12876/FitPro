import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FitPro Gym - Your Fitness Journey Starts Here',
  description: 'Premium gym facilities, expert trainers, and personalized fitness programs',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <Navbar />
        <main className="animate-pageEnter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
