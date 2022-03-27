import { useState } from 'react'

const Login = () => {
    const [inputVal, setInputVal] = useState('')
    const [show, setShow] = useState(true)



    const saveUser = () => {
        if (inputVal != '') {
            localStorage.setItem('username', inputVal)
            setShow(false)
            document.body.style.overflow = ""
        }
       return
    }
    return (
        <>
            {show && (
                <div className='loginContainer'>
                    <div className='loginCard'>
                        <div className="loginLayout">
                            <h3 className='loginText'>Login or create a username bellow.</h3>
                            <input onChange={(e) => setInputVal(e.target.value)} className='loginInput' type="text" placeholder="yourSickUsername"/>
                            <button onClick={saveUser} className='submitBtn'>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Login