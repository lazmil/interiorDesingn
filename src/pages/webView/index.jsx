import Router from '../router'
import WebFooter from './webFooter'
import WebHeader from './webHeader'
import styles from './WebView.module.scss'


const WebView = () =>{
    return(
        <div className={styles.WebView}>
            <div className={styles.web} >

            <WebHeader/>
            <Router/>
            <WebFooter/>
            </div>
           
            
        </div>
    )
}

export default WebView