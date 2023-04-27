import { useState } from 'react'
import './App.css'

import CookieConsent from 'react-cookie-consent'

import Header from './components/Header'
import Form from './components/Form'
import Main from './components/Main'
import Carrossel from './components/Carrossel'
import PlanCard from './components/PlanCard'
import Footer from './components/Footer'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function App() {

    const [cookie, setCookie] = useState(false)

    const setCookieTrue = () => {
        setCookie(true)
    }

    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className={cookie ? 'notOpened' : ''}>
            <Header />
            <Main />
            <Carrossel />
            <PlanCard />
            <Form />
            <Footer />
            {/* 
            <CookieConsent debug={true} buttonClasses="button-cookie" overlay //onAccept={setCookieTrue}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
    */}

            <Modal show={show} onHide={handleClose} backdrop={'static'}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    We use cookies to enhance your browsing experience. Cookies
                    are small text files that help us personalize your
                    experience by remembering your preferences and optimizing
                    the site's performance.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" id="success" onClick={handleClose}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default App
