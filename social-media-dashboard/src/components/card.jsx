import { useState } from 'react'

const Card = ( {user, icon, followers, inc,handleTotal} ) => {
    const formatNumber = (number) => {
        let string = String(number).slice(0, 2);
        number = Number(string)
        return number
    }
    const [follows, setFollowers] = useState(followers)

    const handleClick = (e) => {
        if (e.target.innerHTML === '+') {
            setFollowers(curr => {
                handleTotal(1)
                return curr + 1
            })
        } else if (e.target.innerHTML === '-') {
            setFollowers(curr => {
                handleTotal(-1)
                return curr - 1
            })
        }
    } 

    return (
           
            <section className="platform" key={user.id}>
                <div className="icon" >
                    <img src={icon} alt=""></img>
                    <p>{user.name}</p>
                </div>
                <div className="followers" onClick={(e) => handleClick(e)}>
                    <button className="update-followers-button">-</button>
                    {follows >= 10000 ? formatNumber(follows) + "K" : follows}
                    
                    <button className="update-followers-button" onClick={inc}>+</button>
                </div>
                <div className="subscribers">
                    F O L O W E R S
                </div>
                <div>
                    <span className={user.difference > 0 ? 'trend-ascend' : 'trend-descend'}>{user.difference > 0 ? '▲' : '▼'}</span>
                    {user.difference > 0 ? user.difference : user.difference * -1}
                </div>
            </section>
        )


}

export default Card;