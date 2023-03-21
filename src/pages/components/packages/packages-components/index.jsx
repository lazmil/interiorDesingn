import styles from './PackComp.module.scss';
import classNames from 'classnames';


function PackComp(props){

    const col = props.columnn
    const btnn = col.btnClass
    return(
        <ul className={styles.column}>
            <li className={styles.name} style={{backgroundColor:col.color}} >{col.name}</li>
            <li className={styles.word}>{col.word1}</li>
            <li className={styles.word}>{col.word2}</li>
            <li className={styles.word}>{col.word3}</li>
            <li className={styles.word}>{col.word4}</li>
            <li className={styles.word}>{col.word5}</li>
            <li className={styles.word}>
                <h2 className={styles.price}>{col.price}</h2>
                <span className={styles.span}>{col.span}</span>
            </li>
            <li className={styles.btn}>
                <button className={classNames(styles.button, styles.btnn)} >{col.btn}</button>
            </li>
        </ul>
    )
}

export default PackComp
