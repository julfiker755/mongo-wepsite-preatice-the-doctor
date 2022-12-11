import React, { useState } from 'react';
const mystyle={
        width: "500px",
        height: "800px",
        margin: "auto"
}

const Addservies = () => {
    const [name,setname]=useState('')
    const [price,setprice]=useState('')
    const [description,setdis]=useState('')
    const [img,setimg]=useState('')
    const handlefrom=(e)=>{
        e.preventDefault()
        const data={name,price,description,img}
        console.log(data)
        fetch('http://localhost:5001/servies', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='box' style={mystyle}>
            <h1>Add servies</h1>
            <hr/><hr/>
            <form onSubmit={handlefrom}>
            <h2>Name</h2>
            <h1><input onChange={e=>setname(e.target.value)} type="text"/></h1>
            <h2>Image URL</h2>
            <h1><input onChange={e=>setimg(e.target.value)} type="text"/></h1>
            <h2>Price</h2>
            <h1><input onChange={e=>setprice(e.target.value)} type="text"/></h1>
            <h2>Description</h2>
            <h1><textarea onChange={e=>setdis(e.target.value)} id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea></h1>
            <button>Submit</button>
            </form>
        </div>
    );
};

export default Addservies;