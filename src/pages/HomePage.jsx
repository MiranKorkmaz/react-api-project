import React, {useState, useEffect} from 'react'

export default function HomePage() {
    const [customerList, setCustomerList] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("JS3-webb21");
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        fetch(url, {
            headers: headers,
        })
        .then((res) => res.json())
        .then((data) => setCustomerList(data.results));
    }

    return (
        <div>
            
        </div>
    )
}
