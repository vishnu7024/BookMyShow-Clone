import React from "react" 
import "./Header2.css"
import { Link } from "react-router-dom"

const Header2 = () => {
    return (
        <div>
            <div className="header2">
                <div className="header2Left">
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Play</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Sports</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Activities</span></Link>

                </div>
                {/* <div className="header2Right">
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                </div> */}

            </div>
            
        </div>
    )
}

export default Header2