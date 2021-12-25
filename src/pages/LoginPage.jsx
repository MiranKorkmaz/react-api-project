import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading } from '../components/Heading'

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {email, password}
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            localStorage.setItem("JS3-webb21", token)
            navigate("/home")
        })
    } 
    return (
        <div>
            <form onSubmit={handleOnSubmit} className="d-flex flex-column align-content-center">
                <Heading>
                <h2>Login</h2>
                </Heading>
                <div className="row mb-2 mt-2">
                    <label htmlFor="email">Email</label>
                    <input 
                        required
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                </div>
                <div className="row mb-2 mt-2">
                    <label htmlFor="password">Password</label>
                    <input 
                        required
                        name="password"
                        type="password"
                        minLength="8"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>
                <div className="row mb-2 mt-4">
                <button className="btn btn-primary" type="submit">Login</button>
                </div>
                
            </form>
        </div>
    )
}
