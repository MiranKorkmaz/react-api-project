import React, {useState, useEffect} from "react";

export default function ProductDetail(props) {
  const [customerDetail, setCustomerDetail] = useState(null)

  useEffect(() => {
    const url = "https://frebi.willandskill.eu/api/v1/customers/{id}/"
    fetch(url)
    .then(res => res.json())
    .then( data => setCustomerDetail(data))
  }, [])

  return (
    <div>
      {props.id}
      {customerDetail && (
        <>
          {customerDetail.name}
        </>

      )}
    </div>
  );
}
