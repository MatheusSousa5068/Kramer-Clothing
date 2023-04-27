import React from 'react'

import './style.css'

import amegans from '../../assets/amegans.svg'

function Main(props) {
    return (
        <div id="main-container">
            <div className="main-text">
                <h2 id="subs-h2">A SUBSCRIPTION CLOTHING SERVICE</h2>

                <p id="subs-p">
                    Bring your personal stylist to your doorstep and make
                    fashion effortless and enjoyable.
                </p>

                {/* 
                <div className="email-main">
                    <input type="text" name="" id="" />

                    <button>get started</button>
                </div>
                */}
            </div>

            <div className="main-pictures">
                <img src={amegans} alt="" />
            </div>
        </div>
    )
}

export default Main
