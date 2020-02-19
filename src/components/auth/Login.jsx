import React from 'react';

const Login = () => {
    const onChange = e => {
        console.log(e.target.value);
    }
    
    return ( 
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Sign in</h1>
                <form

                >
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <button className="btn btn-primary btn-block">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;