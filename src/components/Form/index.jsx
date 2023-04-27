import * as React from 'react'
import './style.css'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function Form() {
    const notify = () => {
        toast.success('Email sent. Check your inbox.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })

        handleClose()
    }

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div id="form-container">
            <h2 id="FreeTrial">FREE TRIAL</h2>

            <div className="form">
                <form>
                    <div id="d1">
                        <input
                            type="text"
                            name="First Name"
                            id="first-name"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="Last Name"
                            id="last-name"
                            placeholder="Last Name"
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />

                    <div id="d2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" id="terms-label">
                            I agree with the{' '}
                            <span id="terms-and-conditions">
                                Terms and Conditions
                            </span>
                            .
                        </label>
                    </div>

                    <button id="submit" type="button" onClick={handleClickOpen}>
                        Submit
                    </button>

                    <div>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="confirm-dialog-title">{'Confirm free-trial?'}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Thank you for your interest in our
                                    product/service! Please note that after the
                                    free trial period ends, you will receive an
                                    email from us with instructions on how to
                                    confirm your payment to continue using our
                                    product/service.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button id="btn-disagree" onClick={handleClose}>Disagree</Button>
                                <Button id="btn-agree" onClick={notify}>Agree</Button>
                            </DialogActions>
                        </Dialog>

                        <ToastContainer toastStyle={{ backgroundColor: "white"}} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
