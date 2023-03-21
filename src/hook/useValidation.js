import { useState } from "react"

export default function(){
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorName, setErrorName] = useState('')
    const [errorDateCheckIn, setErrorDateCheckIn] = useState('');
    const [errorDateCheckOut, setErrorDateCheckOut] = useState('');

    function regValidation(val, type, label){
        const regexVal = /.+@[^@]+\.[^@]{2,}$/
        const regexval2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        const regexVal3 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/
        const regexval4 = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/

    
        if(!regexVal.test(val) && val != '' && type == 'email'){
          setErrorEmail('error email')
        }else if(val == '' && type == 'email'){
          setErrorEmail('Fill the email')
        }else if(regexVal.test(val) && type == 'email'){
          setErrorEmail('')
        }

        if(!regexval2.test(val) && val != '' && type == 'password'){
          setErrorPass('Ooopss!!! Minimum eight characters, at least one letter, one number and one special character:')
      }else if(val == '' && type == 'password'){
        setErrorPass('Fill the password')
      }else if(regexval2.test(val) && type == 'password'){
          setErrorPass('')
      }
      if(!regexVal3.test(val) && val != '' && type == 'text'){
        setErrorName('Invalid Username')
      }else if(val == '' && type == 'text'){
        setErrorName('Fill the Username')
      }else if(regexVal3.test(val) && type == 'text'){
        setErrorName('')
      }
      if(!regexval4.test(val) && val != '' && type == 'text' && label == 'Check In'){
        setErrorDateCheckIn('not valid date')
    }else if(val == '' && type == 'text' && label == 'Check In'){
      setErrorDateCheckIn('Fill the date')
    }else if(regexval4.test(val) && type == 'text' && label == 'Check In'){
      setErrorDateCheckIn('')
    }

   if(!regexval4.test(val) && val != '' && type == 'text' && label == 'Check Out'){
      setErrorDateCheckOut('not valid date')
  }else if(val == '' && type == 'text' && label == 'Check Out'){
    setErrorDateCheckOut('Fill the date')
  }else if(regexval4.test(val) && type == 'text' && label == 'Check Out'){
    setErrorDateCheckOut('')
  }
      }

      return{
      item:{
        func:regValidation,
        email:errorEmail,
        pass:errorPass,
        name:errorName,
        date:errorDateCheckIn,
        date1:errorDateCheckOut
      }}
      
}