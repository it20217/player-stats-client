import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context';

function Login() {

  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  async function loginUser() {
    const response = await fetch("http://localhost:4000/login", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
    const data = await response.text();

    if (response.ok) {
      AuthCtx.login(JSON.parse(data).result);
      navigate('/user');
    } else {
      AuthCtx.logout();
      setLoginStatus("error");
    }
  }

  return(
    <div className="mx-auto flex justify-center md:items-center relative md:h-full">
        <div id="login" className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-2 sm:px-0">
          
          {/* Error message  */}
            {loginStatus === "error" ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <div className="font-bold">Authentication failed!</div>
                <div className="block sm:inline ml-2">Wrong username or password</div>
                <div 
                  className="absolute top-3 bottom-0 right-0 px-4 py-3" 
                  onClick={()=>{setLoginStatus("")}}
                >
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </div>
              </div>
             : <div></div>
            }

          <div className="pt-16 px-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold dark:text-gray-100 leading-tight">Football Academy</h3>
          </div>
          <div className="mt-12 w-full px-2 sm:px-6">
              {/* Username  */}
              <div className="flex flex-col mt-5">
                  <label htmlFor="email" className="text-lg font-semibold dark:text-gray-100 leading-tight">Email</label>
                  <input 
                    required name="email" 
                    id="email" 
                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow" 
                    type="email" 
                    onChange={e => setEmail(e.target.value)}
                  />
              </div>
              {/* Password */}
              <div className="flex flex-col mt-5">
                  <label htmlFor="password" className="text-lg font-semibold dark:text-gray-100 fleading-tight">Password</label>
                  <input 
                    required name="password" 
                    id="password" 
                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                  />
              </div>
          </div>
          {/* Remember me */}
          <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
              <div className="flex items-center">
                  <input id="rememberme" name="rememberme" className="focus:outline-none focus:ring-2 focus:ring-slate-600 w-3 h-3 mr-2 bg-white dark:bg-slate-600" type="checkbox" />
                  <label htmlFor="rememberme" className="text-xs dark:text-gray-100">Remember Me</label>
              </div>
              <a className="text-xs text-slate-700 focus:outline-none focus:underline focus:text-gray-800 hover:text-gray-800">Forgot Password?</a>
          </div>
          {/* Login button */}
          <div className="px-2 mb-16 sm:mb-56 md:mb-16 sm:px-6">
              <button
                type="submit" 
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-slate-100 w-full bg-slate-700 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-yellow-400 rounded text-white px-8 py-3 text-sm mt-6"
                onClick={ () => {loginUser()} }
              >
                Login
              </button>
              <p className="mt-16 text-xs text-center dark:text-gray-100">
                Don’t Have An Account? 
                <Link 
                  to='/signup'
                  className="mx-4 focus:underline text-slate-700 focus:outline-none focus:text-gray-800 hover:text-gray-800"
                >
                  Sign Up
                </Link>
              </p>
          </div>
        </div>
      </div>
  )
}

export default Login;