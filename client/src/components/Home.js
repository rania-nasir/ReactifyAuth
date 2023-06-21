import React from "react"
import mernlogo from "../Images/mernLogo.png"

const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5 center">WELCOME HOME</p>
                    <h1 className="pt-4 center">WE ARE MERN DEVELOPER</h1>
                    <div className="center pt-5">
                        <img className="App-logo App-logo-spin" src={mernlogo} alt='mernlogo' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home