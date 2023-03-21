import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MobileHeader.module.scss'


const MobileHeader = ({ setTabindex }) => {

    const [display, setDisplay] = useState('none')

    function block1() {
        setDisplay('block')
    }
    function block2() {
        setDisplay('none')
    }


    return (
        <div className={styles.mobileHeader}>

            <p className={styles.title}>
                <button onClick={block1} className={styles.icon}>☰</button>
                Company Name
            </p>


            <div style={{ display: display }} className={styles.header} >
                <button onClick={block2} className={styles.btn}>Close Menu</button>
                <h3 className={styles.name}>
                    <b>Company <br />
                        Name</b>
                </h3>
                <p onClick={() => {
                    setTabindex(1)
                    setDisplay('none')
                }} className={styles.link}>Home</p>
                <p onClick={() => {
                    setTabindex(2)
                    setDisplay('none')
                }} className={styles.link}>Services</p>
                <p onClick={() => {
                    setTabindex(3)
                    setDisplay('none')
                }} className={styles.link}>Designers</p>
                <p onClick={() => {
                    setTabindex(4)
                    setDisplay('none')
                }} className={styles.link}>Packages</p>
                <p onClick={() => {
                    setTabindex(5)
                    setDisplay('none')
                }} className={styles.link}>Contact</p>
            </div>
        </div>
    )
}

export default MobileHeader
