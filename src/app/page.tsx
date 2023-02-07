import { EB_Garamond } from '@next/font/google'
// import styles from './page.module.css'

const fontTitle = EB_Garamond({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className={fontTitle.className}>AngelOn Shop</h1>
    </main>
  )
}
