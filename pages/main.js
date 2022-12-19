import styles from '../styles/Home.module.css'
import { ActionCard, Features2x2, HeroLayout2, MarketingPricing } from '../src/ui-components'
import { NavBar2 } from '../src/ui-components'
import { CommentCard } from '../src/ui-components'
import { Footer } from '../src/ui-components'
import Descripting from '../src/ui-components/Descripting'
export default function Main() {
  return (
    <>
    <div className={styles.nav}>
    <NavBar2 />
    </div>
    <div className={styles.main}>
      <HeroLayout2/> 
      <Features2x2/>
      <MarketingPricing/>

      <div className={styles.instagram}>
      {/* <ActionCardCollection/> */}
      </div>
    </div>
      <Footer className={styles.footer}/>
    
    </>
  )
}