import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>This is the home page!</h1>
            <Link to='/other'>Other Page</Link>
        </div>
    )
}

export default Home