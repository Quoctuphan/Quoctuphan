
import './login.css'

function Login() {
    // bg-blend-overlay
    return ( 
        <div className="main w-screen h-screen">
            <div className='container-login'>
                    <div className='img-login'>
                        <img className='img-item-login' alt='image' src="https://p1.liveauctioneers.com/dist/images/SignupLadySmall.png"/>
                    </div>
                    <div className='content-login'>
                        <div className='header-login'>
                            <div className='text-login'>
                            <h2>Welcome to LiveAuctioneers!</h2>
                            </div>
                            <button className='btn-close'>
                                   x 
                            </button>
                        </div>
                        <div className='body-login'>
                        <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-light leading-6 text-gray-900">EMAIL ADDRESS / USERNAME</label>
                            <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-light leading-6 text-gray-900">
                            PASSWORD</label>
                            </div>
                            <div className="mt-1">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Log in</button>
                        </div>
                        <div className="text-sm flex justify-center">
                                <a href="#" className="font-semibold text-teal-600 hover:text-teal-800">Forgot password?</a>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have an account?
                        <a href="#" className="font-semibold leading-6 text-teal-600 hover:text-teal-800">join</a>
                        </p>
                 </div>
                    </div>
            </div>
        </div>
            
     );
}

export default Login;
