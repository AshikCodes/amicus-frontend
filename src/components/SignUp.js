const SignUp = () => {
    return ( 
        <div>
            <div className="sign-up-container">
                <form className="sign-up-form-container">
                    <h1 className="sign-up-title-container">SIGN UP</h1>
                        <div className="sign-up-firstname-container">
                            <label className="firstname-label-container">FIRST NAME</label>
                            <input type="text" name="firstname" className="firstname-input-container"/>
                        </div>
                        <div className="sign-up-lastname-container">
                            <label className="lastname-label-container">LAST NAME</label>
                            <input type="text" name="lastname" className="lastname-input-container"/>
                        </div>
                        <div className="email-container">
                            <label className="email-label-container">LAST NAME</label>
                            <input type="text" name="lastname" className="email-input-container"/>
                        </div>
                        <div className="sign-up-password-container">
                            <label className="password-label-container">PASSWORD</label>
                            <input type="password" name="password" className="sign-up-password-input-container"/>
                        </div>
                        <div className="retype-password-container">
                            <label className="retype-password-label-container">RETYPE PASSWORD</label>
                            <input type="password" name="retype-password" className="retype-password-input-container"/>
                        </div>
                        <button className="button-container">
                            SIGN UP
                        </button>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;