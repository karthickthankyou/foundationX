import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@foundation/ui/src/index.css'

import { AuthProvider } from '@foundation/ui/src/components/molecules/authProvider'
import { Container } from '@foundation/ui/src/components/atoms/container'
import { Footer } from '@foundation/ui/src/components/organisms/Footer'
import { Navbar } from '@foundation/ui/src/components/organisms/Navbar'
import { ThemeProvider } from '@foundation/ui/src/components/organisms/ThemeProvier'
import { Toaster } from '@foundation/ui/src/components/molecules/Toaster/Toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foundation X | Karthick Ragavendran',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
          <Footer />
        </Container>
      </body>
    </html>
  )
}
