import styles from './HomeComp.module.scss'


const HomeComp = (props) =>{
    return(
        <div className={styles.img} style={{backgroundImage:`url(${props.room.img})`, height:props.room.height}}>
            

        </div>
    )
}

export default HomeComp