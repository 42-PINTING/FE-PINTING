import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import RecoilRootProvider from '@/utils/recoilProvider';
import SetProfile from '@/_globalComponents/SetProfile';
import MswProvider from '@/utils/mswProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'PINTING',
  description: 'HELLO PINTING',
};

// TODO: login 시 atom에 프로필 저장
// TODO: 자동 로그인 기능
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className} style={{ margin: 0, border: 0 }}>
        <RecoilRootProvider>
          <MswProvider>
            <SetProfile>{children}</SetProfile>
          </MswProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
