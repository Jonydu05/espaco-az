import type { Metadata } from 'next';
import '../styles/index.scss';
import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: 'Espaço AZ',
  description: 'Espaço AZ | Saúde é beleza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
