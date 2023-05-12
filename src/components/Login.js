import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div>
            <div className="login-container">
                <form className="form-container">
                    <h1 className="login-title-container">LOGIN</h1>
                        <div className="username-container">
                            <label className="username-label-container">USERNAME</label>
                            <input type="text" name="username" className="username-input-container"/>
                        </div>
                        <div className="password-container">
                            <label className="password-label-container">PASSWORD</label>
                            <input type="password" name="password" className="password-input-container"/>
                        </div>
                        <button className="button-container">
                            LOGIN
                        </button>
                        <div className="sign-up-link-container">
                            Don't have an account? <Link to='/sign-up'>Sign up here</Link>
                        </div>
                </form>

            </div>
        </div>
     );
}
 
export default Login;