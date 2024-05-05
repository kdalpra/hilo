import './App.css';
import Header from './components/Header'
import * as React from "react"
const {useState} = React;

function App() {

  if(localStorage.length < 1){
    localStorage.setItem('bal','200')
  }

  var tempBal = 200

  if(localStorage.length > 0){
    tempBal = parseFloat(localStorage.getItem('bal')).toFixed(2)
  }
  
  const cards = [ "1c.png","2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","11c.png","12c.png", "13c.png",
  "l1.png","l2.png","l3.png","l4.png","l5.png","l6.png","l7.png","l8.png","l9.png","l10.png","l11.png","l12.png","l13.png",
  "p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png","p9.png","p10.png","p11.png","p12.png","p13.png",
  "s1.png","s2.png","s3.png","s4.png","s5.png","s6.png","s7.png","s8.png","s9.png","s10.png","s11.png","s12.png","s13.png"
]
  const [leftCard, setLeft] = useState("blank.png") 
  const [leftNum, setLeftNum]= useState(100)
  const [rightNum, setRightNum]= useState(100)
  const [rightCard, setRight] = useState("blank.png")
  const [midCard, setMidCard] = useState("blank.png")
  const [win, setWin] = useState(0)
  const [lose, setLose] = useState(0)
  const [bal, setBal] = useState(tempBal)
  const [btnPopup, setBtnPopup] = useState(false)
  const [myArray, setMyArray] = useState([]);
  const [hasBet,setHasBet] = useState(true)

  if(localStorage.length < 1){
    localStorage.setItem('bal','200')
  }

  const restartFun = () => {
    setBtnPopup(true)
  }

  const resetFun = () =>{
    setBal(parseFloat(200).toFixed(2))
    localStorage.setItem('bal', '200.00')
    setMyArray([])
    setLeft("blank.png")
    setRight("blank.png")
    setMidCard("blank.png")
    setRightNum(100)
    setLeftNum(100)
    setBtnPopup(false)
    setWin(0)
    setLose(0)
   
  }

  const testFun1 = (num, OU) => {
    if(OU === "over"){
      if(myArray.length < 50){ //3 cards left
        var newNum = Math.floor(Math.random() * 52)
        while(myArray.includes(newNum)){
          newNum =  Math.floor(Math.random() * 52)
        }
        console.log("first" + newNum)
        setMyArray(oldArray => [...oldArray, newNum]);
        setLeftNum((newNum%13)+1)
        setLeft(cards[newNum])
  //2nd card
        var newNum2 = Math.floor(Math.random() * 52)
        while(myArray.includes(newNum2)){
          newNum2 =  Math.floor(Math.random() * 52)
        }
        console.log("second" + newNum2)
        setMyArray(oldArray => [...oldArray, newNum2]);
        setRightNum((newNum2%13)+1)
        setRight(cards[newNum2])
        setMidCard("blank.png")

        setHasBet(false)
  
      }
      else{
        setMyArray([])
        console.log("done.")
        setMidCard("blank.png")
        setRight("blank.png")
        setLeft("blank.png")
        setHasBet(true)
      }

      
    }
    if(OU==="under" && !hasBet){
      setHasBet(true)
      var newNum3 = Math.floor(Math.random() * 52)
        while(myArray.includes(newNum3)){
          newNum3 =  Math.floor(Math.random() * 52)
        }
        setMyArray(oldArray => [...oldArray, newNum3]);
        setMidCard(cards[newNum3])
        if( (leftNum < ((newNum3%13)+1) && (((newNum3%13)+1) < rightNum)) || (leftNum>((newNum3%13)+1) && ((newNum3%13)+1) > rightNum)){
          localStorage.setItem('bal', (parseFloat(bal) + 100).toString() )
          setBal((parseFloat(bal) + 100).toFixed(2))
          setWin(win+1)
        }
        else{
          localStorage.setItem('bal', (parseFloat(bal) - 100).toString() )
          setBal((parseFloat(bal)-100).toFixed(2))
          setLose(lose+1)
        }
        
    }
   
   


}

  return (
    <div className="container">
      <Header 
      fun1={testFun1} 
      leftC={leftCard} 
      rightC = {rightCard} 
      midC = {midCard}
      wins = {win} 
      loses={lose} 
      balance = {bal} 
      res = {restartFun} 
      pup={btnPopup} 
      setPup = {setBtnPopup} 
      rest = {resetFun}
      
      ></Header>
      <a target="_blank" rel= "noreferrer" href="https://play.google.com/store/apps/details?id=wildsteelerfan.tkou"><img src="./ps.png" className="notcard" alt="google play store" ></img></a> 
    </div> 
    
  );
}

export default App;
