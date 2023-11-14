import './globals.scss'

export const metadata = {
  title: 'Mars project',
  description: 'Test task for true.code',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
