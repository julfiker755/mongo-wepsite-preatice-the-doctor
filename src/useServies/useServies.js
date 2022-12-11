import React, { useEffect, useState } from 'react';

const useServies = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5001/servies')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return {services,setServices}

};

export default useServies;