import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

const Home = () => {
    return (
        <div>
            <nav>
                <h1>Pomo.</h1>
                <img className='logo' src={logo} alt="" />
            </nav>
            <div className='landingContainer'>
                <div className="heroSection">
                    <div className="subHeroSection">
                        <h1 className="heroText">The ultimate pomodoro timer.</h1>
                        <h3 className="subHeroText">Built to track and improve your productivity through insightful data analytics.</h3>
                    </div>
                    <Link className='callToActionBtn' to='/pomodoro'>Give it a try!</Link>
                </div>
            </div>
        </div>

    ) 
}

export default Home