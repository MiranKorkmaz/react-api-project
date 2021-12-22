import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerList(props) {
    return (
        <div>
            {props.customer.map(customer => {
                return (
                <>
                    <ul>
                    <p><strong>Customer</strong></p>   
                    <li>
                        <p>
                            <Link to={"/home/:id"}>{customer.name}</Link>
                        </p>
                    </li>
                    </ul>
                </>
                )
            })}
        </div>
    )
}
