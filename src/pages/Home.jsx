import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
const Home = () => {
    const defaultTimer = {
        seconds: '00',
        minutes: '00',
        hours: '00',
    }

    const [isActive, setIsActive] = useState(false)
    const [pomoLength, setPomoLength] = useState(25)
    const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60)
    useEffect(() => {
        if (isActive) {
            setInterval(() => {

                setSecondsLeft(secondsLeft - 1)
            }, 1000)
        }
    }, [isActive, secondsLeft])
    

    
    return (
        <div>
            <h1>This is the home page!</h1>
            <h1>{pomoLength}:{secondsLeft}</h1>
            <button onClick={() => setIsActive(true)}>Start</button>
            <Link to='/other'>Other Page</Link>
            <div id="base-timer">
            <svg viewbox="0 0 100 100">
                <g id="back-circle">
                    <circle id="front-circle" r = "45" cx = "50" cy = "50"></circle>
                    <path
                        id="path-remaining"
                        stroke-dasharray="283"
                        class="base-timer__path-remaining ${remainingPathColor}"
                        d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                        "
                    ></path>
                </g>
            </svg>
            </div>
            
        </div>
    ) 
}

export default Home