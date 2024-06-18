import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import RecoilRootProvider from '@/global/utils/recoilProvider';
import SetProfile from '@/global/components/SetProfile';
import MswProvider from '@/global/utils/mswProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'PINTING',
  description: 'HELLO PINTING',
};

// dev 모드에서는 토큰에 [key : pintingAccessToken, value : 아무값] 을 넣으면 로그인 상태로 간주
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
