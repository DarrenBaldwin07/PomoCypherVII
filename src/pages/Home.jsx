import { Link } from "react-router-dom"
const Home = () => {
    const startTimer = () => {
        console.log('CLICKED')
    }
    return (
        <div>
            <h1>This is the home page!</h1>
            <button onClick={startTimer}>Start</button>
            <Link to='/other'>Other Page</Link>
        </div>
    ) 
}

export default Home