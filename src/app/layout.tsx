import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'
import MyWagmiProvider from './providers/MyWagmiProvider'
import ClientOnlyProvider from './providers/ClientOnlyProvider'

const ubuntu = Ubuntu_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vouch',
  description: 'Credit worthiness micro-rollup that provides reputation as a service!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <MyWagmiProvider>
          <ClientOnlyProvider>{children}</ClientOnlyProvider>
        </MyWagmiProvider>
      </body>
    </html>
  );
}