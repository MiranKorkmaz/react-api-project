import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 3rem;
`

const Card = styled.div`
    background-color: rgba(239,236,229);
    width: 320px;
    border-radius: 4px;
    height: 200px;
    padding: 6px 12px;
    display: block;
    font-size: 18px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

`


export default function CustomerList(props) {

    const [deleteInfo, setDeleteInfo] = useState({})

    function handleOnDelete(id) {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("JS3-webb21")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        fetch(url, {
            headers: headers,
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => setDeleteInfo(data))
    }


    return (
        <Wrapper>
            {props.customer.map((customer) => {
                return (
                    <Card key={customer.id}>
                        <div>
                              <strong>Customer</strong>   
                        <p>
                            <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
                        </p>
                        <button className="btn btn-danger" onClick={(e) => handleOnDelete(customer.id)}>Delete</button>
                        </div>
                    </Card>
                )
            })}
        </Wrapper>
    )
}
