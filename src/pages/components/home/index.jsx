import HomeComp from './home-components';
import styles from './Home.module.scss';
import { rooms } from './util';



const Home = () =>{
    return(
        <div className={styles.home}>

            <h1 className={styles.name}>
                <b>Interior Design</b></h1>
            <h1 className={styles.name2}>
                <b>Showcase.</b></h1>
                <hr className={styles.span}/>

                <div className={styles.images}>
                    {rooms.map(el => <HomeComp key={el.id} room={el}/>)}
                </div>
                
        </div>
    )
}

export default Home