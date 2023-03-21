import PackComp from './packages-components'
import styles from './Packages.module.scss'
import { col } from './util'


const Packages = () =>{
    return(
        <div className={styles.packages}>
            <h1 className={styles.name2}>
                <b>Packages.</b></h1>
                <hr className={styles.span}/>

                <p className={styles.text}>Some text our prices. Lorem ipsum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure</p>

                <div className={styles.columns}>
                {col.map(el => <PackComp key={el.id} columnn={el}/>)}
                </div>
                
        </div>
    )
}

export default Packages