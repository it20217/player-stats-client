import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {IoHomeOutline} from 'react-icons/io5'
import {FiUser} from 'react-icons/fi'
import {IoFootballOutline} from 'react-icons/io5'
import {GiSoccerField} from 'react-icons/gi'
import styles from './Sidebar.module.scss'

function Sidebar() {
  let navigate = useNavigate();
  const [sideBar, setsideBar] = useState();

  return(
    <div>
      <div className="sm:block hidden border-r border-gray-200 bg-white relative w-96 h-full z-20 mt-10">
        <div className=" h-full w-full">
          {/* gradient background when active add classes bg-gradient-to-r from-slate-100 to-white */}
          
          {/* Home menu button */}
          <div 
            className="ml-4 border-l-4 hover:border-slate-700 py-2 cursor-pointer border-transparent group bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center"
            onClick={()=> navigate('/user')}
          >
            <div className="text-2xl ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
              <IoHomeOutline/>
            </div>
            <div className="whitespace-nowrap text-sm leading-none group-hover:text-slate-700 text-slate-700">
              Home
            </div>
          </div>
          {/* User management menu button */}
          <div 
            className="mt-4 ml-4 border-l-4 hover:border-slate-700 py-2 cursor-pointer border-transparent group bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center"
            onClick={()=> navigate('/usermanagement')}
          >
            <div className="text-2xl ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
              <FiUser/>
            </div>
            <div className="whitespace-nowrap text-sm leading-none text-slate-700 group-hover:text-slate-700">
              User management
            </div>
          </div>
          {/* Player management */}
          <div 
            className="mt-4 ml-4 border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center"
            onClick={()=> navigate('/playermanagement')}
          >
            <div className="text-2xl ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
              <IoFootballOutline/>
            </div>
            <div className="whitespace-nowrap text-sm leading-none text-slate-700 group-hover:text-slate-700">
              Player management
            </div>
          </div>
          {/* Player evaluation */}
          <div 
            className="mt-4 ml-4 border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center"
            onClick={()=> navigate('/playerevaluation')}
          >
            <div className="text-2xl ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
              <IoFootballOutline/>
            </div>
            <div className="whitespace-nowrap text-sm leading-none text-slate-700 group-hover:text-slate-700">
              Player evaluation form
            </div>
          </div>
          {/* Event management menu button */}
          <div 
            className="mt-4 ml-4 border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center"
            onClick={()=> navigate('/events')}
          >
            <div className="text-2xl ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
              <GiSoccerField/>
            </div>
            <div className="whitespace-nowrap text-sm leading-none text-slate-700 group-hover:text-slate-700">
              Event management
            </div>
          </div>
          {/* Settings menu button */}
          <div className="mt-4 ml-4 border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center">
            <div className="ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.0001 8.25C11.2584 8.25 10.5334 8.46993 9.91668 8.88199C9.29999 9.29404 8.81935 9.87971 8.53552 10.5649C8.25169 11.2502 8.17743 12.0042 8.32212 12.7316C8.46682 13.459 8.82397 14.1272 9.34842 14.6517C9.87286 15.1761 10.541 15.5333 11.2685 15.6779C11.9959 15.8226 12.7499 15.7484 13.4351 15.4645C14.1204 15.1807 14.706 14.7001 15.1181 14.0834C15.5301 13.4667 15.7501 12.7417 15.7501 12C15.7471 11.0064 15.3511 10.0542 14.6484 9.35163C13.9458 8.64901 12.9937 8.25297 12.0001 8.25ZM20.0963 12C20.0944 12.3504 20.0687 12.7003 20.0194 13.0472L22.3018 14.8341C22.4012 14.9161 22.4682 15.0309 22.4908 15.1578C22.5133 15.2847 22.4901 15.4155 22.4251 15.5269L20.266 19.2544C20.2004 19.3647 20.0979 19.4484 19.9767 19.4907C19.8555 19.5329 19.7232 19.5311 19.6032 19.4855L16.9196 18.4073C16.3608 18.8377 15.7493 19.1948 15.0999 19.47L14.6987 22.3191C14.6762 22.4467 14.6101 22.5625 14.5117 22.6468C14.4133 22.7311 14.2887 22.7786 14.1591 22.7812H9.841C9.71381 22.7788 9.59121 22.7333 9.49322 22.6521C9.39523 22.571 9.32763 22.459 9.30147 22.3345L8.90022 19.4855C8.24907 19.2134 7.63711 18.8557 7.08054 18.4219L4.39694 19.5C4.27698 19.5457 4.14477 19.5476 4.02354 19.5054C3.90231 19.4632 3.79984 19.3796 3.73413 19.2694L1.57507 15.5423C1.51008 15.431 1.4868 15.3002 1.50938 15.1733C1.53196 15.0464 1.59894 14.9316 1.69835 14.8495L3.98069 13.0627C3.93201 12.7105 3.90633 12.3555 3.90382 12C3.90577 11.6496 3.93145 11.2997 3.98069 10.9528L1.69835 9.16594C1.59894 9.08386 1.53196 8.96911 1.50938 8.84219C1.4868 8.71527 1.51008 8.58446 1.57507 8.47312L3.73413 4.74563C3.79976 4.63528 3.90221 4.55161 4.02344 4.50934C4.14467 4.46707 4.27693 4.46891 4.39694 4.51453L7.08054 5.59266C7.63934 5.16235 8.25086 4.80524 8.90022 4.53L9.30147 1.68094C9.32393 1.55332 9.39001 1.43746 9.48842 1.35316C9.58682 1.26886 9.71145 1.22135 9.841 1.21875H14.1591C14.2863 1.22123 14.4089 1.26675 14.5069 1.34788C14.6049 1.42901 14.6725 1.54097 14.6987 1.66547L15.0999 4.51453C15.7519 4.78639 16.3646 5.14408 16.9219 5.57812L19.6032 4.5C19.7232 4.45434 19.8554 4.45243 19.9766 4.49461C20.0978 4.53679 20.2003 4.62036 20.266 4.73062L22.4251 8.45813C22.4901 8.56946 22.5133 8.70027 22.4908 8.82719C22.4682 8.95411 22.4012 9.06886 22.3018 9.15094L20.0194 10.9378C20.0681 11.2898 20.0938 11.6446 20.0963 12Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="whitespace-nowrap text-sm leading-none text-slate-700 group-hover:text-slate-700">
              Settings
            </div>
          </div>
        </div>
      </div>

      {/* ******************* */}

      {/* mobile Navigation */}
      <div className="relative px-4 py-5 flex justify-between w-full sm:hidden">
          {sideBar ? (
              <button 
                onClick={() => setsideBar(!sideBar)} 
                aria-label="close nav bar" 
                role="button" 
                tabIndex={0} 
                onkeypress="{sidebarHandler(false)}" 
                className="right-0 mr-4 mt-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 absolute" id="cross" 
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
          ) : (
              <button onClick={() => setsideBar(!sideBar)} aria-label="open nav bar" role="button" className="right-0 mr-4 mt-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 absolute " id="menu">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10H3" stroke="#E5E7EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 6H3" stroke="#E5E7EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 14H3" stroke="#E5E7EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 18H3" stroke="#E5E7EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </button>
          )}
          
      </div>
      <div className={
          sideBar 
        ? 
          "border-r border-gray-200 bg-white sm:relative h-full z-20 sm:hidden px-4 transition duration-150 ease-in-out absolute w-full top-30 transform translate-x-0" 
        : 
          "border-r border-gray-200 bg-white sm:relative h-full z-20 sm:hidden px-4 transition duration-150 ease-in-out absolute w-full top-30 transform -translate-x-full"}
      >
          <div>
              <div className="mt-3 w-full">
                  <div>
                      <div className="border-l-4 border-slate-700 py-2 cursor-pointer bg-gradient-to-r from-slate-100 to-white flex items-center">
                          <div className="ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
                              
                          </div>
                          <p className="text-sm leading-none  group-hover:text-slate-700 text-slate-700">Home</p>
                      </div>
                  </div>
                  <div className="mt-4">
                      <div className="border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center">
                          <div className="ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M1.5 19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V10.4062H1.5V19.5ZM4.59375 13.0312C4.59375 12.9318 4.63326 12.8364 4.70359 12.7661C4.77391 12.6958 4.86929 12.6562 4.96875 12.6562H9.28125C9.38071 12.6562 9.47609 12.6958 9.54642 12.7661C9.61674 12.8364 9.65625 12.9318 9.65625 13.0312V16.0312C9.65625 16.1307 9.61674 16.2261 9.54642 16.2964C9.47609 16.3667 9.38071 16.4062 9.28125 16.4062H4.96875C4.86929 16.4062 4.77391 16.3667 4.70359 16.2964C4.63326 16.2261 4.59375 16.1307 4.59375 16.0312V13.0312ZM21.75 3.75H2.25C2.05109 3.75 1.86032 3.82902 1.71967 3.96967C1.57902 4.11032 1.5 4.30109 1.5 4.5V7.59375H22.5V4.5C22.5 4.30109 22.421 4.11032 22.2803 3.96967C22.1397 3.82902 21.9489 3.75 21.75 3.75Z"
                                      fill="currentColor"
                                  />
                              </svg>
                          </div>
                          <p className="text-sm leading-none text-gray-600 group-hover:text-slate-700">User management</p>
                      </div>
                  </div>
                  <div className="mt-4">
                      <div className="border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center">
                          <div className="ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 23.25H2.25V14.25H6V23.25ZM16.5 23.25H12.75V9.75H16.5V23.25ZM21.75 23.25H18V4.5H21.75V23.25ZM11.25 23.25H7.5V0.75H11.25V23.25Z" fill="currentColor" />
                              </svg>
                          </div>
                          <p className="text-sm leading-none text-gray-600 group-hover:text-slate-700">Player management</p>
                      </div>
                  </div>
                  <div className="mt-4">
                      <div className="border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center">
                          <div className="ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.125 12C8.98896 12 10.5 10.489 10.5 8.625C10.5 6.76104 8.98896 5.25 7.125 5.25C5.26104 5.25 3.75 6.76104 3.75 8.625C3.75 10.489 5.26104 12 7.125 12Z" fill="currentColor" />
                                  <path d="M10.9688 13.875C9.64875 13.2047 8.19187 12.9375 7.125 12.9375C5.03531 12.9375 0.75 14.2191 0.75 16.7812V18.75H7.78125V17.9967C7.78125 17.1061 8.15625 16.2131 8.8125 15.4688C9.33609 14.8744 10.0692 14.3227 10.9688 13.875Z" fill="currentColor" />
                                  <path d="M15.9375 13.5C13.4967 13.5 8.625 15.0075 8.625 18V20.25H23.25V18C23.25 15.0075 18.3783 13.5 15.9375 13.5Z" fill="currentColor" />
                                  <path d="M15.9375 12C18.2157 12 20.0625 10.1532 20.0625 7.875C20.0625 5.59683 18.2157 3.75 15.9375 3.75C13.6593 3.75 11.8125 5.59683 11.8125 7.875C11.8125 10.1532 13.6593 12 15.9375 12Z" fill="currentColor" />
                              </svg>
                          </div>
                          <p className="text-sm leading-none text-gray-600 group-hover:text-slate-700">Event management</p>
                      </div>
                  </div>
                  <div className="mt-4">
                    <div className="border-l-4 hover:border-slate-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-slate-100 hover:to-white flex items-center">
                      <div className="ml-4 mr-3 text-gray-400 group-hover:text-slate-700">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.0001 8.25C11.2584 8.25 10.5334 8.46993 9.91668 8.88199C9.29999 9.29404 8.81935 9.87971 8.53552 10.5649C8.25169 11.2502 8.17743 12.0042 8.32212 12.7316C8.46682 13.459 8.82397 14.1272 9.34842 14.6517C9.87286 15.1761 10.541 15.5333 11.2685 15.6779C11.9959 15.8226 12.7499 15.7484 13.4351 15.4645C14.1204 15.1807 14.706 14.7001 15.1181 14.0834C15.5301 13.4667 15.7501 12.7417 15.7501 12C15.7471 11.0064 15.3511 10.0542 14.6484 9.35163C13.9458 8.64901 12.9937 8.25297 12.0001 8.25ZM20.0963 12C20.0944 12.3504 20.0687 12.7003 20.0194 13.0472L22.3018 14.8341C22.4012 14.9161 22.4682 15.0309 22.4908 15.1578C22.5133 15.2847 22.4901 15.4155 22.4251 15.5269L20.266 19.2544C20.2004 19.3647 20.0979 19.4484 19.9767 19.4907C19.8555 19.5329 19.7232 19.5311 19.6032 19.4855L16.9196 18.4073C16.3608 18.8377 15.7493 19.1948 15.0999 19.47L14.6987 22.3191C14.6762 22.4467 14.6101 22.5625 14.5117 22.6468C14.4133 22.7311 14.2887 22.7786 14.1591 22.7812H9.841C9.71381 22.7788 9.59121 22.7333 9.49322 22.6521C9.39523 22.571 9.32763 22.459 9.30147 22.3345L8.90022 19.4855C8.24907 19.2134 7.63711 18.8557 7.08054 18.4219L4.39694 19.5C4.27698 19.5457 4.14477 19.5476 4.02354 19.5054C3.90231 19.4632 3.79984 19.3796 3.73413 19.2694L1.57507 15.5423C1.51008 15.431 1.4868 15.3002 1.50938 15.1733C1.53196 15.0464 1.59894 14.9316 1.69835 14.8495L3.98069 13.0627C3.93201 12.7105 3.90633 12.3555 3.90382 12C3.90577 11.6496 3.93145 11.2997 3.98069 10.9528L1.69835 9.16594C1.59894 9.08386 1.53196 8.96911 1.50938 8.84219C1.4868 8.71527 1.51008 8.58446 1.57507 8.47312L3.73413 4.74563C3.79976 4.63528 3.90221 4.55161 4.02344 4.50934C4.14467 4.46707 4.27693 4.46891 4.39694 4.51453L7.08054 5.59266C7.63934 5.16235 8.25086 4.80524 8.90022 4.53L9.30147 1.68094C9.32393 1.55332 9.39001 1.43746 9.48842 1.35316C9.58682 1.26886 9.71145 1.22135 9.841 1.21875H14.1591C14.2863 1.22123 14.4089 1.26675 14.5069 1.34788C14.6049 1.42901 14.6725 1.54097 14.6987 1.66547L15.0999 4.51453C15.7519 4.78639 16.3646 5.14408 16.9219 5.57812L19.6032 4.5C19.7232 4.45434 19.8554 4.45243 19.9766 4.49461C20.0978 4.53679 20.2003 4.62036 20.266 4.73062L22.4251 8.45813C22.4901 8.56946 22.5133 8.70027 22.4908 8.82719C22.4682 8.95411 22.4012 9.06886 22.3018 9.15094L20.0194 10.9378C20.0681 11.2898 20.0938 11.6446 20.0963 12Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="text-sm leading-none text-gray-600 group-hover:text-slate-700">Settings</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar;