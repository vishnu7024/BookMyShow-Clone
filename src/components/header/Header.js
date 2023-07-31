import React, { useState } from "react" 
import "./Header.css"
import { Link } from "react-router-dom"
import {auth, provider } from "../firebase/firebase";
// import {Login} from "react"
import { signInWithPopup } from "@firebase/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { selectUserName, selectUserPhoto, setUserLoginDetails } from "../../features/user/userSlice";

// import 'firebase/auth';
export const Searchbar = () =>{
  const [input, setInput] = useState("")
  
}


const Header = () => {

  // const Dispatch = useDispatch()
  // const history = useHistory()
  // const username = useSelector(selectUserName);
  // const userPhoto = useSelector(selectUserPhoto);


  const handleAuth = () => {
  
    signInWithPopup(auth, provider).then((result) =>{
      console.log(result);
    }).catch((error) => {
      alert(error.message)
    })
  }
    return (
        <div>
                <div className="header">
                    
                <div className="headerLeft">
                    <Link to="/"> <img className="header_icon" src="https://asset.brandfetch.io/id4J58sqa_/id3secYmRE.svg" /></Link>
                    
                   
                    {/* <span className="searchbar">
                    <i class="bi bi-search">Search for Movie, Event, Plays, Sport and Activities</i>
                    </span> */}
                    

                    <section className="searchbar">
                    {/* <h2>Search Your Favourite Movie</h2> */}
                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <input type="text"  placeholder="Search Your Favour......." />
                        
                      </div>
                    </form>
                    
                  </section>
                </div>
                <div className="right_side">
                   
                   <button className="login" onClick={handleAuth}>
                    Sign in
                   </button>

                    <span className="list">
                    <i class="bi bi-list"></i>
                    </span>

                </div>
                 
            </div>
      <div>
      
      </div>
      </div>
     
                 
    )
}

export default Header