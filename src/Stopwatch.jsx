import {useState, useEffect} from 'react'

export default function Stopwatch(){
    const [time, setTime]=useState(0)
    const [isRunning, setRunning]=useState(false)

    useEffect(()=>{
        let intervalId;

        if(isRunning){
            intervalId = setInterval(()=>{
                setTime((prev)=>prev+1)
            }, 1000)
        }else{
            clearInterval(intervalId)
        }

        return ()=> clearInterval(intervalId)
    },[isRunning])

    //If true make false, if false make true
    const startStop = ()=>{
        setRunning((prev)=>!prev)
    }

    const reset = ()=>{
        setRunning(false)
        setTime(0)
    }

    const formatTime = (sec)=>{
        const min = Math.floor(sec/60)
        const remainingSec = sec % 60

        return `${min}:${remainingSec < 10 ? "0" : ""}${remainingSec}`
    }

    return (
        <div style={{
            border: "1px solid black",
            height: "150px",
            width: "15%",
            borderRadius: "5px",
            margin: "auto",
            textAlign: "center"
        }}>
            <h3>Stopwatch</h3>
            <p>Time: {formatTime(time)}</p>
            <button onClick={startStop}>{isRunning?"Stop":"Start"}</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}