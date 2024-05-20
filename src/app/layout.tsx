import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RecoilRootProvider from '../common/utils/recoilProvider';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'PINTING',
  description: 'HELLO PINTING',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
