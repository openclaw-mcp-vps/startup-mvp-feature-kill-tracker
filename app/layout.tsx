import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MVP Feature Kill Tracker — Track Which Features Drive Retention',
  description: 'Monitor feature usage vs retention correlation, get automated kill recommendations, and calculate development waste. Built for early-stage startup founders and PMs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bfb448f1-4d0e-427b-8eb4-dc33d5c40c2b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
