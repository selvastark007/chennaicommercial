import React, { lazy, Suspense, useState, useEffect } from 'react';

const API_URL = "https://chennai-commercials-admin-mern.vercel.app/api/v2/properties";




const Apidesc = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    
        fetch(API_URL)
        .then(response => response.json())
        .then(response => {
            const {body} = response
            setData(body)
        })
      }, []);
  return (
    <div>
    <h1>My App</h1>
    {data.map(dat => {
        return(
            <p>{data.titile}</p>
        )
    })}
  </div>
  )
}

export default Apidesc