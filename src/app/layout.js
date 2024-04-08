import Header from '~/src/app/ui/Header/Header'
import { montserrat } from './lib/fonts';
import './globals.css'

export const metadata = {
  title: 'OMICHH',
  description: 'Olimpiada Mexicana de Informática en Chihuahua',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
