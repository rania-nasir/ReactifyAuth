import { useEffect, React, useState } from "react"
import mernlogo from "../Images/mernLogo.png"

const Home = () => {

    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState("");

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log('data = ' + data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);

    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="mt-5 pt-5 wel center">WELCOME</p>
                    <h1 className="pt-1 center">{userName}</h1>
                    <h3 className="pt-3 center">{show ? 'Happy, To See You Back' : 'We Are The MERN Developer'}</h3>
                    <div className="center mt-5 pt-4">
                        <img className="App-logo App-logo-spin" src={mernlogo} alt='mernlogo' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home