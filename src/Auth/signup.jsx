import signupLogo from '../assets/signupLogo.svg';
import usernameLogo from '../assets/usernameLogo.svg';
import passwordLogo from '../assets/passwordLogo.svg';
import emailLogo from '../assets/emailLogo.svg'
const Signup = () =>{
    return(
        <>
        <section className="w-screen h-screen bg-authBackgroundImg bg-no-repeat bg-cover bg-authBackground flex justify-center items-center">
            <form action="" className="flex flex-col items-center px-5 w-340px ">
                <img className='mb-16' src={signupLogo} alt="Login" />
                <div className="w-full h-11 rounded-lg flex items-center px-3 gap-5 border-1 border-main mb-5">
                    <img src={usernameLogo} alt="" />
                <input className='bg-transparent h-inherit outline-none border-0 text-white placeholder:text-main' type="text" name='username' placeholder='USERNAME' />
                </div>
                <div className="w-full h-11 rounded-lg flex items-center px-3 gap-5 border-1 border-main mb-5">
                    <img src={emailLogo} alt="" />
                <input className='bg-transparent h-inherit outline-none border-0 text-white placeholder:text-main' type="text" name='email' placeholder='EMAIL' />
                </div>
                <div className="w-full h-11 rounded-lg flex items-center px-3 gap-5 border-1 border-main mb-5">
                    <img src={passwordLogo} alt="" />
                <input className='bg-transparent h-inherit outline-none border-0 text-white placeholder:text-main' type="text" name='password' placeholder='PASSWORD' />
                </div>
                <button className='bg-main text-black h-14 text-2xl rounded-lg w-full mt-5' type='submit'>Signup</button>
                <p className='text-sm text-white mt-3'>Already have an account? <a className='text-main' href="#">Sign in</a></p>
                
            </form>
        </section>
        </>
    );
}

export default Signup;