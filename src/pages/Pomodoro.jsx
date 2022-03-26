import { Link } from "react-router-dom"
import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons"
import logo from '../assets/logo.svg'

const Home = () => {

    const [start, setStart] = useState(false)
    const [duration, setDuration] = useState(1500)
    const [key, setKey] = useState(0);
    const [isBreak, setBreak] = useState(false)
    const [isLongBreak, setLongBreak] = useState(false)
    const [tabStyle, setTabStyle] = useState({backgroundColor: "#FF5733", width:'100px', height: '50px', position:'absolute', top: 6, left: 8, borderRadius: '25px'})

    const PlayButton = ({ running }) => {
        return (
            <>
                {!running ? (
                    <FontAwesomeIcon class="icons" icon={faCirclePlay} />
                ) : (
                    <FontAwesomeIcon class="icons" icon={faPause} style={{width:'30px'}} />
                )}
            </>
        )
    }


    let numPas = 0;
    const renderTime = ({remainingTime}) => {
        let minutes,seconds
        minutes = Math.floor(remainingTime / 60)
        seconds = remainingTime % 60
        return (
            <div>
                <p className="timeLabel">{minutes+":"+seconds}</p>
            </div>
        )
    }

    const processBreak = () => {
        setDuration(300)
        setKey(key+1) // reset the timer
        setBreak(true) // we are no starting a break
        setStart(false) // stop the timer 
        setTabStyle({backgroundColor: "#4CC0FF", width:'110px', height: '50px', position:'absolute', top: 6, left: 112, borderRadius: '25px'})
        return {
            delay:1
        }
    }

    const pomo = () => {
        setStart(false)
        setKey(key+1)
        setDuration(1500)
        setTabStyle({backgroundColor: "#FF5733", width:'100px', height: '50px', position:'absolute', top: 6, left: 8, borderRadius: '25px'})
        setBreak(false)
    }

    const longBreak = () => {
        setStart(false)
        setTabStyle({backgroundColor: "#4CC0FF", width:'110px', height: '50px', position:'absolute', top: 6, left: 222, borderRadius: '25px'})
        setKey(key+1)
        setDuration(900)
        setBreak(true)
    }

    return (
        <div>
            <nav>
                <h1>Pomo.</h1>
                <img className='logo' src={logo} alt="" />
            </nav>
            <div className='pomoContainer'>
                <div className='modeBar'>
                    <div className='indicator' style={tabStyle}></div>
                    <div className='mode' onClick={pomo}>Pomodoro</div>
                    <div className='mode' onClick={processBreak}>Short Break</div>
                    <div className='mode' onClick={longBreak}>Long Break</div>
                </div>
                <div>
                    <CountdownCircleTimer className="timerIco"
                        isPlaying={start}
                        duration={duration}
                        colors={isBreak ? '#4CC0FF' : '#FF5733'}
                        strokeWidth="10"
                        key={key}
                        size={250}
                        colorsTime={[0]} 
                        onComplete={() => {
                            return isBreak ? pomo() : processBreak()
                        }}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
                <div className="button-container">
                    <div className='startBtnDiv' onClick={() => {
                        if(!start) {
                            setStart(true)
                        } else {
                            setStart(false)
                        }
                    }}><PlayButton className='startBtn' running={start}/>
                    </div>
                    <div className="resetBtnDiv" onClick={() => {
                        setKey(key + 1) 
                        setStart(false)
                    }}><FontAwesomeIcon class="icons resetBtn" icon={faArrowRotateLeft} /></div>
                </div>
            </div>
        </div>
        
    ) 
}

export default Home