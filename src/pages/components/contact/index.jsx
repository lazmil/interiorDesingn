import { useState } from 'react'
import useValidation from '../../../hook/useValidation';
import styles from './Contact.module.scss'


const Contact = () =>{
    const [inp, setInp] = useState('')
    const [inp2, setInp2] = useState('')
    const [inp3, setInp3] = useState('')
    const [type1, setType1] = useState('email')
    const [type2, setType2] = useState('password')
    const [type3, setType3] = useState('text')
    const {item} = useValidation()
    return(
        <div className={styles.contact}>
            <h1 className={styles.name2}>
                <b>Contact.</b></h1>
                <hr className={styles.span}/>
                <p className={styles.text}>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>

                <label className={styles.label} htmlFor="1">Username</label>
                <input className={styles.input} name='1' type="text"onChange={(e) =>{ 
                  setInp3(e.target.value)
                  setType3(e.target.type)
                  }}/>
                  
                  <h5 className={styles.item}>{item.name}</h5>

                  <label className={styles.label} htmlFor="2">Email</label>
                <input className={styles.input} name='2' type="email" onChange={(e) =>{ 
                  setInp(e.target.value)
                  setType1(e.target.type)
                  }}/>

                <h5 className={styles.item}>{item.email}</h5>
                
                <label className={styles.label} htmlFor="1">Password</label>
                <input className={styles.input} name='3' type="password" onChange={(e)=> {
                  setInp2(e.target.value)
                  setType2(e.target.type)
                }}/>

                <h5 className={styles.item}><br />
                  {item.pass}
                  </h5>
                <button onClick={()=>{ 
                item.func(inp,type1)
                item.func(inp2,type2)
                item.func(inp3, type3)
                  }} className={styles.btn}>Send a Message</button>
        
        </div>
    )
}

export default Contact