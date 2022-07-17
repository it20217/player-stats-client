import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

/** Styling */

/** Components */
import  ToggleSwitch  from '../../components/ToggleSwitch/ToggleSwitch'

function SignUp3(props) {

  const [gdprData, SetGdprData] = useState(false);

  useEffect(()=> {
    props.setGDPR({["dataProtectionAccepted"]: gdprData});

  }, [gdprData]);

  
  return(
    
    <>
    <div className="py-12 px-4">
      <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
        <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
          <div>
            <p className="text-xl font-semibold leading-tight text-gray-800 text-center">
              Consent agreement
            </p>
            <div className="flex items-center justify-center gap-2 pt-5">
              <div className>
                <p className="text-sm text-gray-500 font-semibold leading-none border rounded-full w-8 h-8 flex justify-center items-center text-center">
                  1
                </p>
              </div>
              <div>
                <svg
                  width={186}
                  height={2}
                  viewBox="0 0 186 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:block md:block hidden"
                >
                  <line
                    x1="8.74228e-08"
                    y1={1}
                    x2={186}
                    y2="1.00002"
                    stroke="#E5E7EB"
                    strokeWidth={2}
                  />
                </svg>
                <svg
                  width={82}
                  height={2}
                  viewBox="0 0 82 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden md:hidden block"
                >
                  <line
                    x1="-8.74228e-08"
                    y1={1}
                    x2={82}
                    y2="0.999993"
                    stroke="#E5E7EB"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold leading-none border rounded-full w-8 h-8 flex justify-center items-center text-center">
                  2
                </p>
              </div>
              <div>
                <svg
                  width={186}
                  height={2}
                  viewBox="0 0 186 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:block md:block hidden"
                >
                  <line
                    x1="8.74228e-08"
                    y1={1}
                    x2={186}
                    y2="1.00002"
                    stroke="#E5E7EB"
                    strokeWidth={2}
                  />
                </svg>
                <svg
                  width={82}
                  height={2}
                  viewBox="0 0 82 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden md:hidden block"
                >
                  <line
                    x1="-8.74228e-08"
                    y1={1}
                    x2={82}
                    y2="0.999993"
                    stroke="#E5E7EB"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div>
                <p className="bg-slate-700 text-white text-sm font-semibold border rounded-full w-8 h-8 flex justify-center items-center">
                  3
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:justify-center md:gap-32 justify-between items-center gap-x-3">
            <div className="text-xs text-start text-gray-600 md:ml-3 ml-1">
              Your Profile
            </div>
            <div className="text-xs font-medium text-center text-gray-800 md:ml-6 ml-6">
              Add Player
            </div>
            <div className="text-xs text-right text-gray-600">
              Consent agreement
            </div>
          </div>
          <div className="pt-5">

          </div>
          <div>
            <div className="mt-16 lg:block md:hidden hidden">
              <div className="flex container w-full justify-center my-24">
                <ToggleSwitch onToggleStatusChange={()=> SetGdprData(!gdprData)}/>
                <p className="my-auto ml-8">General Data Protection Regulation (GDPR) consent</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 pt-4">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1279 3.34088C12.4574 3.67038 12.4574 4.20462 12.1279 4.53412L7.66199 9L12.1279 13.4659C12.4574 13.7954 12.4574 14.3296 12.1279 14.6591C11.7984 14.9886 11.2641 14.9886 10.9346 14.6591L5.87213 9.59662C5.54262 9.26712 5.54262 8.73288 5.87213 8.40338L10.9346 3.34088C11.2641 3.01137 11.7984 3.01137 12.1279 3.34088Z"
                      fill="#334155"
                    />
                  </svg>
                    <Link 
                      to="/login"
                      className="text-slate-700 font-medium"
                  >
                    Back to Login
                  </Link>
                </div>
                <div className="flex gap-5 pt-4">
                  <button 
                    className="text-slate-700 border border-slate-700 px-3 py-3 rounded font-medium hover:bg-slate-50"
                    onClick={()=> {props.setGDPR(gdprData); props.prevStep()}}
                  >
                    Previous Step
                  </button>
                  <button
                    className="text-white border border-slate-700 bg-slate-700 px-6 py-3 rounded font-medium hover:bg-slate-800"
                    onClick={()=> {props.submit()}}
                    disabled={false}
                  >
                    Submit
                    <svg
                      className="mt-1 float-right flex justify-center items-center"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden md:block block pt-4">
            <button 
                className="text-white border border-slate-700 bg-slate-700 px-6 py-3 rounded font-medium w-full hover:bg-slate-800"
                onClick={()=> props.submit()}
                disabled={false}
              >
                Submit
                <svg
                  className="float-right flex justify-center items-center"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                to="/signup_2"
                className="text-slate-700 border border-slate-700 px-6 py-3 rounded font-medium w-full mt-4 hover:bg-slate-50"
                onClick={()=> {props.setGDPR(gdprData); props.prevStep()}}
              >
                Previous Step
              </button>
              <div className="flex justify-center items-center gap-3 pt-4">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1279 3.34088C12.4574 3.67038 12.4574 4.20462 12.1279 4.53412L7.66199 9L12.1279 13.4659C12.4574 13.7954 12.4574 14.3296 12.1279 14.6591C11.7984 14.9886 11.2641 14.9886 10.9346 14.6591L5.87213 9.59662C5.54262 9.26712 5.54262 8.73288 5.87213 8.40338L10.9346 3.34088C11.2641 3.01137 11.7984 3.01137 12.1279 3.34088Z"
                    fill="#334155"
                  />
                </svg>
                <Link 
                  to="/login"
                  className="text-slate-700 font-medium"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUp3;