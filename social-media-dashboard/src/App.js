import React from 'react';
import './App.css';
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from './components/Header';
import Card from './components/card';
import { useState } from 'react'

function App() {

    const [users, setUsers] = useState(data.users)
        
    return (
        <div className="root">
            <Header users={users}/>
            {users.map((x, i)=>
            <Card user={x} icon={data.icon} key={i} followers={x.followers}/>
            )}

            <AddNewCard></AddNewCard>
        </div>
    )
}


export default App;
