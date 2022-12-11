import React from 'react';
import useServies from '../useServies/useServies';
const mystyle={
    width:'500px',
    margin:'auto'
}
const Mangement = () => {
    const {services, setServices}=useServies()
    const handledelete=(id)=>{
        const confirmdelete=window.confirm('You are sure delete data')
        if(confirmdelete){
            // /user/:id
            const url=`http://localhost:5001/servies/${id}`
            fetch(url,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.deletedCount >0){
                const userdata=services.filter(u=>u._id !== id)
                setServices(userdata)
               }
            })
        }
    }
    return (
        <div style={mystyle}>
            <h1>Hello mangement</h1>
            <div>
                {services.map(u=><div key={u._id}>{u.name}
                || <button onClick={()=>handledelete(u._id)}>Delete user</button>
                </div>)}
            </div>
        </div>
    );
};

export default Mangement;