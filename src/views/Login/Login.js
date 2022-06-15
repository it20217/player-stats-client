

function Login() {

  return(
    <div className="mx-auto flex justify-center md:items-center relative md:h-full">
        <form id="login" className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-2 sm:px-0">
          
          <div className="pt-16 px-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold dark:text-gray-100 leading-tight">Football Academy</h3>
          </div>
          <div className="mt-12 w-full px-2 sm:px-6">
              <div class="flex flex-col mt-5">
                  <label for="email" className="text-lg font-semibold dark:text-gray-100 leading-tight">Email</label>
                  <input required name="email" id="email" class="h-10 px-2 w-full rounded mt-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow" type="email" />
              </div>
              <div className="flex flex-col mt-5">
                  <label for="password" className="text-lg font-semibold dark:text-gray-100 fleading-tight">Password</label>
                  <input required name="password" id="password" class="h-10 px-2 w-full rounded mt-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow" type="password" />
              </div>
          </div>
          <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
              <div className="flex items-center">
                  <input id="rememberme" name="rememberme" className="focus:outline-none focus:ring-2 focus:ring-slate-600 w-3 h-3 mr-2 bg-white dark:bg-slate-600" type="checkbox" />
                  <label for="rememberme" className="text-xs dark:text-gray-100">Remember Me</label>
              </div>
              <a className="text-xs text-slate-700 focus:outline-none focus:underline focus:text-gray-800 hover:text-gray-800">Forgot Password?</a>
          </div>
          <div class="px-2 mb-16 sm:mb-56 md:mb-16 sm:px-6">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-slate-100 w-full bg-slate-700 transition duration-150 ease-in-out hover:bg-slate-800 hover:text-yellow-400 rounded text-white px-8 py-3 text-sm mt-6">Login</button>
              <p className="mt-16 text-xs text-center dark:text-gray-100">Don’t Have An Account? <a class="focus:underline text-slate-700 focus:outline-none focus:text-gray-800 hover:text-gray-800">Sign Up</a></p>
          </div>
        </form>
      </div>
  )
}

export default Login;