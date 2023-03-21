import DesComp from './designers-components'
import styles from './Designers.module.scss'
import { people } from './util'


const Designers = () =>{
    return(
        <div className={styles.designers}>

        <h1 className={styles.name2}>
           <b>Designers.</b></h1>
           <hr className={styles.span}/>

           <p className={styles.text}>The best team in the world.</p>
           <p className={styles.text}>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p className={styles.text}><b>Our designers are thoughtfully chosen:</b></p>

            <div className={styles.people}>
            {people.map(el => <DesComp key={el.id} design={el}/>)}
            </div>


   
   </div>
    )
}

export default Designers