import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons"
import logo from '../assets/logo.svg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line} from 'recharts';
import { getBreaksData } from "../scripts/queries/getBreaks"
import Login from '../components/Login'

const Home = () => {

    const [start, setStart] = useState(false)
    const [duration, setDuration] = useState(1500)
    const [key, setKey] = useState(0);
    const [isBreak, setBreak] = useState(false)
    const [tabStyle, setTabStyle] = useState({backgroundColor: "#FF5733", width:'100px', height: '50px', position:'absolute', top: 6, left: 8, borderRadius: '25px'})
    const [showLogin, setShowLogin] = useState(false) // YOU NEED TO EDIT THIS BEFORE BEING DONE
    const [breakData, setBreakData] = useState([])
    const [sessionData, setSessionData] = useState([])
    useEffect(() => {
        // check if already authed user
        //if (localStorage.getItem('username')) setShowLogin(false)

        const getData = async () => { 
            const breaksData = await getBreaksData() // get all of our data
            console.log(breaksData.data)
            setBreakData(breaksData.data)
        }
        getData()
    }, [])

    


    const PlayButton = ({ running }) => {
        return (
            <>
                {!running ? (
                    <FontAwesomeIcon class="icons" icon={faCirclePlay} />
                ) : (
                    <FontAwesomeIcon class="icons" icon={faPause} style={{width:'35px',marginLeft:'7px',marginTop:'-5.2px'}}/>
                )}
            </>
        )
    }

    const BChart = () => {
        const bData = [
            {
            name: 'Session 1',
            breaks: 5,
            },
            {
            name: 'Session 2',
            breaks: 3,
            },
            {
            name: 'Session 3',
            breaks: 1,
            },
            {
            name: 'Session 4',
            breaks: 0,
            },
            {
            name: 'Session 5',
            breaks: 7,
            },
            {
            name: 'Session 6',
            breaks: 3,
            },
        ];

        return (
            <div className="bchart-container">
                <h1>Number of Breaks Per Session</h1>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                    width={500}
                    height={300}
                    data={bData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="breaks" fill="#FF5733" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }

    const LChart = () => { 
    }

    const renderTime = ({remainingTime}) => {
        let minutes,seconds
        minutes = Math.floor(remainingTime / 60)
        seconds = remainingTime % 60
        return (
            <div>
                <p className="timeLabel">{minutes+" : "+seconds}</p>
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
            {showLogin && (
                <Login />
            )}
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
                    <CountdownCircleTimer className="timerIco animated"
                        isPlaying={start}
                        duration={duration}
                        colors={isBreak ? '#4CC0FF' : '#FF5733'}
                        strokeWidth="8"
                        key={key}
                        size={300}
                        trailStrokeWidth={0.25}
                        strokeLinecap={"round"}
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
            <BChart />
        </div>
        
    ) 
}

export default Home