import { NavLink } from 'react-router-dom'
import styles from './WebHeader.module.scss'


const WebHeader = () =>{
    return(
        <div className={styles.header}>

            <h3 className={styles.name}>
                <b>Company <br />
                 Name</b>
            </h3>

                <NavLink to={'/'} className={styles.link}>Home</NavLink>
                <NavLink to={'/services'} className={styles.link}>Services</NavLink>
                <NavLink to={'/designers'} className={styles.link}>Designers</NavLink>
                <NavLink to={'/packages'} className={styles.link}>Packages</NavLink>
                <NavLink to={'/contact'} className={styles.link}>Contact</NavLink>
        </div>
    )
}

export default WebHeader