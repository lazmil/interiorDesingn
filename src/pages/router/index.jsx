import styles from './Router.module.scss'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import Services from '../components/services';
import Designers from '../components/designers';
import Packages from '../components/packages';
import Contact from '../components/contact';


const Router = () => (

    <div className={styles.router}>
        <Routes>
            <Route path='/' element={<Home />} index />
            <Route path='/services' element={<Services />} />
            <Route path='/designers' element={<Designers />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    </div>
)

export default Router