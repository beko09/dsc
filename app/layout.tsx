import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] })


export const metadata = {
  title: 'DSC',
  description: 'Design system with components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* prevent some extension select element error suppressHydrationWarning={true}  */}
      {/* disable this extension => LocatorJS | ClickUp: Tasks, Screenshots, Email, Time | ColorZilla */}
      <body className={montserrat.className}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main >
          <Navbar />
          <div className='app'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
