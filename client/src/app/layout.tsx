import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChakraLayout from '@/components/providers/ChakraLayout'
import ReduxLayout from '@/components/providers/ReduxLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AppSite',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}
       style={{backgroundColor:'rgb(240,240,240'}}>
        <ChakraLayout>
          <ReduxLayout>
            {children}
          </ReduxLayout>
        </ChakraLayout>
      </body>
    </html>
  )
}
