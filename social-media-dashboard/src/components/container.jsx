// const Container = (data) => {
	
// 	const [total,setTotal] = useState(0)
	
// 	const setTotalFollows=()=>{
		
// 		setTotal(total+1)
// 	}

// 	return(
// 	<>
// 	<Header total={total}/>

// 	<UserCards setTotal={setTotalFollows()}  total={total}/>

// 	</>
// 	)
// }

import Header from "./Header"
import Card from "./card"
import {useState} from 'react'

// data jon az app js bol passozlod a userCardnak
const Container=({user})=>{

	const [total,setTotal]=useState(0)
	
	const setTotalFollows=(incdec)=>{   // az incdec increment decrement az egy szam amit passzolsz 1 vagy -1
		
		setTotal(total+incdec)
	}

	return(
	<>
	<Header total={total}/>
	<Card setTotal={setTotal}  total={setTotalFollows}  user={user}/>  
     {/* //itt at passzolod a funkciot mint propt a user cardnak */}
	</>
	)
}

// const UserCards=(props)=>{
// 	//itt hasznalod a funkciot amit passzoltal a containerbol hogy modifikald a totalt
// 	const handleclick=(incrdec)=>{
// 		props.setTotalFollows(incrdec)
// 	}
// 	// itt  amapping funkcio
	
// 	a mapping funkcion belul mikor increseUser()
// 	ird be onClick={handleclick(-1)}

// }
export default Container