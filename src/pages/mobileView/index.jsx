
import { useState } from 'react'
import Contact from '../components/contact'
import Designers from '../components/designers'
import Home from '../components/home'
import Packages from '../components/packages'
import Services from '../components/services'
import Router from '../router'
import MobileFooter from './MobileFooter'
import MobileHeader from './mobileHeader'
// import styles from './MobileView.module.scss'


const MobileView = () => {
    const [tabIndex, setTabIndex] = useState(1)
    console.log(tabIndex);
    return (
        <div>
            <MobileHeader setTabindex={setTabIndex} />
            {tabIndex == 1 ? <Home /> : null}
            {tabIndex == 2 ? <Services /> : null}
            {tabIndex == 3 ? <Designers /> : null}
            {tabIndex == 4 ? <Packages /> : null}
            {tabIndex == 5 ? <Contact /> : null}

            <MobileFooter />

        </div>
    )
}

export default MobileView