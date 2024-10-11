import type { Metadata } from 'next';
import { Lato, Roboto } from 'next/font/google';
import '../styles/index.scss'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
  subsets: ['latin'],
});

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
      <body className={`${roboto.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
