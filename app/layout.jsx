import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'], 
  display: 'swap' 
})

export const metadata = {
  title: 'Sezer Gümüş | Web Developer',
  description: 'A showcase of my work'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
