import { useState } from 'react'
import './registration.css'

function Registration()
{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const details = (e) =>
    {
        e.preventDefault()
        console.log(email)
    }


    return(
        <>
            <div className="class-registration-form">
                <form onSubmit={details}>
                    <h1>Registration</h1>

                    <div className="class-email">
                        <label htmlFor="email"> Email </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="name@gmail.com" name="email" />                        
                    </div>

                    <div className="class-password">
                        <label htmlFor="password"> Password </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="*****" name="password" />                        
                    </div>
                    
                    <div className="class-firstname">
                        <label htmlFor="firstName"> First Name </label>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName" />                        
                    </div>

                    <div className="class-lastname">
                        <label htmlFor="lastName"> Last Name </label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" />                        
                    </div>

                    <button className="class-registration-button" type="submit" > Sign-Up </button>

                    <div className="class-login-link">
                        <p> Already have an account? <a href="/login"> Login </a> </p>
                    </div>
                </form>
            </div>                
        </>
    )
}

export default Registration