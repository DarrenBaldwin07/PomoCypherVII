import { Link } from "react-router-dom"
import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons"
import logo from '../assets/logo.svg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart} from 'recharts';


let sessionCount = 0;
let numPauses = 0;

let bData = [
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

let lData = [
    {
        name: '3-20-22',
        sessions: 5,
      },
      {
        name: '3-21-22',
        sessions: 10,
      },
      {
        name: '3-22-22',
        sessions: 3,
      },
      {
        name: '3-23-22',
        sessions: 2,
      },
      {
        name: '3-24-22',
        sessions: 0,
      },
      {
        name: '3-25-22',
        sessions: 1,
      },
      {
        name: '3-26-22',
        sessions: 0,
      },
]

const Home = () => {
    const [start, setStart] = useState(false)
    const [duration, setDuration] = useState(5)
    const [key, setKey] = useState(0);
    const [isBreak, setBreak] = useState(false)
    const [isLongBreak, setLongBreak] = useState(false)
    const [tabStyle, setTabStyle] = useState({backgroundColor: "#FF5733", width:'100px', height: '50px', position:'absolute', top: 6, left: 8, borderRadius: '25px'})
    let chartWidth = "90%";

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

    const BChart = ({data}) => {

        return (
            <div className="chart-container">
                <h1>Number of Pauses Per Session</h1>
                <h4>Pauses Today: {numPauses}</h4>
                <p>Breaks are important, but don't get distracted! Try to make it all the way through the sessions you start.</p>
                <ResponsiveContainer width={chartWidth} aspect={3} className="chart">
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
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
                        <Tooltip cursor={{fill:"#383D4D"}}/>
                        <Bar dataKey="breaks" fill="#FF5733" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
  
    }

    const LChart = ({data}) => {
    
        return (
            <div className="chart-container">
                <h1>Number of Sessions Per Day</h1>
                <h4>Sessions Today: {sessionCount}</h4>
                <p>Pro tip: Try to push yourself and go one more session than the previous day!</p>
                
                <ResponsiveContainer width={chartWidth} aspect={3} className="chart">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
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
                    <Line type="monotone" dataKey="sessions" stroke="#FF5733" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )

    }

    let numPas = 0;
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
        sessionCount++
        console.log(sessionCount)
        bData.push(
            {
                name: "Session " + sessionCount,
                breaks: 0
            }
        )
        lData[lData.length-1].sessions++;
        setDuration(3)
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
        setDuration(5)
        setTabStyle({backgroundColor: "#FF5733", width:'100px', height: '50px', position:'absolute', top: 6, left: 8, borderRadius: '25px'})
        setBreak(false)
    }

    const longBreak = () => {
        setStart(false)
        sessionCount++
        bData.push(
            {
                name: "Session " + sessionCount,
                breaks: 0
            }
        )
        lData[lData.length-1].sessions++;
        console.log(sessionCount)
        setTabStyle({backgroundColor: "#4CC0FF", width:'110px', height: '50px', position:'absolute', top: 6, left: 222, borderRadius: '25px'})
        setKey(key+1)
        setDuration(10)
        setBreak(true)
    }

    return (
        <div>
            <Link className="link" to="/">
            <nav>
                <h1>Pomo.</h1>
                <img className='logo' src={logo} alt="" />
            </nav>

            </Link>
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
                            numPauses++;
                            bData[bData.length-1].breaks++;
                            console.log(bData[bData.length-1].breaks)

                        }
                    }}><PlayButton className='startBtn' running={start}/>
                    </div>
                    <div className="resetBtnDiv" onClick={() => {
                        setKey(key + 1) 
                        setStart(false)
                    }}><FontAwesomeIcon class="icons resetBtn" icon={faArrowRotateLeft} /></div>
                </div>
            </div>
            <div className="spacer"></div>
            <LChart data={lData}/>
            <BChart data={bData}/>
        </div>
        
    ) 
}

export default Home