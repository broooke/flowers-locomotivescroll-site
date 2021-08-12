import React, { useEffect, useRef, useState } from 'react'
import "../styles/reset.css"
import About from '../components/About';
import Featured from '../components/Featured';
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import CustomCursor from '../CustomCursor/'
import "../styles/home.scss";
import useLocoScroll from '../hooks/useLocoScroll';

function Home() {
    const [preloader, setPreloader] = useState(true)

    useLocoScroll(!preloader)
    
    const [timer, setTimer] = useState(3)
    const id = useRef(null)

    const clear = () => {
        window.clearInterval(id.current)
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((timer) => timer - 1)
        }, 1000)
    }, [])

    useEffect(() => {
        if (timer === 0) {
            clear()
        }
    }, [timer])

    return (
        <> 
            <CustomCursor />

            {preloader ? (
                <div className="loader-wrapper absolute">
                    <h1>Flirty flowers</h1>
                    <h2>Gaydenko Nikita</h2>
                </div> 
            ) : ( 
                <div className="main-container" id="main-container"
                    data-scroll-container
                >
                    <Navbar />
                    <Header />
                    <Featured />
                    <About />
                    <Gallery />
                    <Footer />
                </div>
            )
            }
        </>
    )
}

export default Home