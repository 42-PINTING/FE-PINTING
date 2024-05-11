import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RecoilRootProvider from '../common/utils/recoilProvider';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Pinting',
  description: 'Pinting',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
