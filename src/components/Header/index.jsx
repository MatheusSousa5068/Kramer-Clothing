import Logo from '../../assets/logo.svg'
import user from '../../assets/user.svg'

import './style.css'

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" id="logo" />

            <div className="container">
                <ul>
                    <li><button className='selected'>Home</button></li>
                    <li><button>Kits</button></li>
                    <li><button>Plans</button></li>
                    <li><button>Free Trial</button></li>

                    
                </ul>

                <img src={user} alt="" id="user" />
            </div>
        </header>
    )
}

export default Header
