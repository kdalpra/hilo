import React from 'react'
import Button from './Button'
import Popup from './Popup'

const Header = ({fun1, leftC, rightC, midC, wins, loses, balance, profit, col, res,pup, setPup, rest}) => {
    return (
        <header>
            <div className= "div2">
    
                <img src="./ou.png" className="notcard" alt="main logo" onClick = {()=> res()}></img>
                <h2 className = "bal">${balance}</h2>
                </div>

            <Button color='green' text='Next' cn="top" fun={fun1} num="50" oU="over"/>
            
            <Popup trigger = {pup} setTrigger= {setPup} restartTrig = {rest}>
                <h3>Are you sure you want to restart?</h3>
            </Popup>


            <div className= "mdiv">
                <img className="cards" src={leftC} alt={leftC}></img>
                <img className="cards" src={midC} alt={midC}></img>
                <img className="cards" src={rightC} alt ={rightC}></img>
                </div>

            <Button color='red' text='Bet' cn="btn" fun={fun1} num="51" oU="under"/>
            
            <h2>W-L</h2>
            <h2>{wins}-{loses}</h2>
            <hr></hr>
            
        </header>
    )
}

export default Header
