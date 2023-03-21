import styles from './DesComp.module.scss';


function DesComp(props){
    return(
        <div className={styles.descomp}>

            <div className={styles.desimg} style={{backgroundImage:`url(${props.design.img})`}}/>

            <div className={styles.texts}>

            <h3 className={styles.name}>{props.design.name}</h3>
            <p className={styles.prof}>{props.design.profession}</p>
            <p className={styles.text}>{props.design.text}</p>

            </div>



        </div>
    )
}
export default DesComp
