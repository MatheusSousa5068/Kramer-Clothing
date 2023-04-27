import * as React from 'react'
import Logo from '../../assets/logo.svg'
import user from '../../assets/user.svg'

import './style.css'

function Header() {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <header>
            <img src={Logo} alt="logo" id="logo" />

            <div className="container">
                <ul className='ul'>
                    <li>
                        <button className="nav-btn selected">Home</button>
                    </li>
                    <li>
                        <button className='nav-btn'>Kits</button>
                    </li>
                    <li>
                        <button className='nav-btn'>Plans</button>
                    </li>
                    <li>
                        <button className='nav-btn'>Free Trial</button>
                    </li>
                </ul>
                <div className="dropdown">
                    <button id="btn_user" onClick={handleOpen}>
                        <img src={user} alt="" id="user" />

                        {open ? (
                            <ul className="menu ul" >
                                <li className="menu-item" id="sigin">
                                    <button>Sign In</button>
                                </li>
                                <li className="menu-item" id="signup">
                                    <button>Sign Up</button>
                                </li>
                            </ul>
                        ) : null}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
