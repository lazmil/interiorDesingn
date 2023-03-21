import styles from './Services.module.scss'


const Services = () =>{
    return(
        <div className={styles.service}>

             <h1 className={styles.name2}>
                <b>Services.</b></h1>
                <hr className={styles.span}/>

                <p className={styles.text}>We are a interior design service that focus on what's best for your home and what's best for you!</p>
                <p className={styles.text}>Some text about our services - what we do and what we offer.
                    We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
}

export default Services