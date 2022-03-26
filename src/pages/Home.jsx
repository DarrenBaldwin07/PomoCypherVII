import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useCountdown } from 'react-countdown-circle-timer'
import { render } from "@testing-library/react"

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
    
    const renderTime = ({remainingTime}) => {
        return (
            <p id="time-label">Remaining Time: {remainingTime}</p>
        )
    }

    
    return (
        <div>
            <h1>This is the home page!</h1>
            <h1>{pomoLength}:{secondsLeft}</h1>
            <button onClick={() => setIsActive(true)}>Start</button>
            <Link to='/other'>Other Page</Link>
            <CountdownCircleTimer id="timer-ico"
                isPlaying
                duration={25}
                colors={['#FF5733']}
                strokeWidth="1"
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => ({ shouldRepeat: true, delay: 1 })}
            >

                {renderTime}
            </CountdownCircleTimer>
        </div>
    ) 
}

export default Home