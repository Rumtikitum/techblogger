import React from 'react'

function Login() {
    return (
        <div>
            <form className="login-form">
                <div>
                    <label htmlFor="email-login">email:</label>
                    <input type="text" id="email-login" />
                </div>
                <div>
                    <label htmlFor="password-login">password:</label>
                    <input type="password" id="password-login" />
                </div>
                <div>
                    <button type="submit">login</button>
                </div>
                </form>

                <form class="signup-form">
                <div>
                    <label for="username-signup">username:</label>
                    <input type="text" id="username-signup" />
                </div>
                <div>
                    <label for="email-signup">email:</label>
                    <input type="text" id="email-signup" />
                </div>
                <div>
                    <label for="password-signup">password:</label>
                    <input type="password" id="password-signup" />
                </div>
                <div>
                    <button type="submit">signup</button>
                </div>
                </form>
        </div>
    )
}

export default Login
