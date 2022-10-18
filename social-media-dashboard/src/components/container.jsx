import { useState } from 'react'
import data from '../sampleData';
import Header from './Header';
import Card from './card';
const Container = (props ) => {
 
const allUsers=props.users    
const[total, setTotal]=useState(allUsers.map(user => user.followers).reduce((a, b) => a + b ))

const handleTotal=(incrdec)=>{
let newTotal=total+incrdec
    setTotal(newTotal)
}
console.log("TOTAL: ",total)
    return (
           
          <div>
            <Header users={total}/>
            {props.users.map((x, i)=>
            <Card user={x} icon={data.icon} key={i} followers={x.followers} handleTotal={handleTotal}/>
            )}

          </div>
        )


}

export default Container;