import React from 'react'
import './style.css'

function Form() {
    return (
        <div id="form-container">
            <h2 id="free-trial">Free Trial</h2>

            <div className="form">
                <form>
                    <div id="d1">
                        {' '}
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
                            I agree with the Terms and Conditions.
                        </label>
                    </div>

                    <button id="submit" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form
