import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../store/auth-context';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function UserPage() {
  
  const AuthCtx = useContext(AuthContext);
  const profile = AuthCtx.profile;    
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState();


  useEffect(() => {

    const getUserProfile = async()=> {
      // Add json token to the header. It will be authentified by the server
      const token = localStorage.hasOwnProperty('player-stats') 
      ? localStorage.getItem('player-stats') : "";
      const authHeader = "Bearer " + token;
      const { REACT_APP_BASE_URL } = process.env;
      try {
        const response = await fetch(`${REACT_APP_BASE_URL}/user`, {
          method: 'GET',
          headers: {
            Authorization: authHeader
          }
        });
        const json = await response.json();
        setUser(json?.result);
      } catch {
        setError(true)
      }
    }
    getUserProfile();
  }, []);



  return (
    <>
    <div className="hidden lg:flex w-full pr-6 mt-8">
      <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
          <div className="relative w-full">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
              </div>
              <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
          </div>
      </div>
      <div className="w-1/2 hidden lg:flex">
          <div className="w-full flex items-center pl-8 justify-end">
              <div className="h-full w-20 flex items-center justify-center border-r border-l">
                  <div className="relative cursor-pointer text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                      <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                  </div>
              </div>
              <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                  </svg>
              </div>
              <div 
                className="flex items-center relative cursor-pointer" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                  <div className="rounded-full">
                      {isDropdownOpen ? (
                          <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                              <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                  <div className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <circle cx={12} cy={7} r={4} />
                                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                      </svg>
                                      <span className="text-sm ml-2">My Profile</span>
                                  </div>
                              </li>
                              <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                  <div className="flex items-center" onClick={() => AuthCtx.logout()}>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                          <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                      </svg>
                                      <span className="text-sm ml-2">Log out</span>
                                  </div>
                              </li>
                          </ul>
                      ) : (
                          ""
                      )}
                      <div className="relative">
                        <p className="text-gray-600 dark:text-gray-400 font-bold">
                          {profile?.firstName.charAt(0).toUpperCase()}{profile?.lastName.charAt(0).toUpperCase()}
                        </p>
                          {/* <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-6 mb-0 mr-0 m-auto" /> */}
                      </div>
                  </div>
                  <p className="text-gray-800 text-sm mx-3">{`${profile.firstName} ${profile.lastName}`}</p>
                  <div className="cursor-pointer text-gray-600">
                      <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                      </svg>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div aria-label="form" tabIndex="0" className="focus:outline-none xl:w-10/12 w-full px-8">
      {/* User Information */}
      <h1 tabIndex="0" className="mt-12 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Your profile</h1>
      <div className="w-full py-6 flex flex-wrap items-center justify-center">
        <div className="mt-16 flex justify-between border-b border-gray-200 pb-16">
            <div className="w-full md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                <div className="md:flex-col">
                    <label className="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder={user?.firstName} />
                </div>
                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={user?.lastName}/>
                </div>
                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800" id="lastName">Email</label>
                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={user?.email}/>
                </div>
                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800" id="lastName">Phone</label>
                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={user?.phone}/>
                </div>
            </div>
        </div>
      </div>
    </div>
    {user?.players?.map((player, index) => {

        const performance = {
            dribbling: 0,
            passing: 0,
            shooting: 0,
            tackling: 0,
            aggression: 0,
            concentration: 0,
            leadership: 0,
            teamwork: 0,
            decisions: 0,
            endurance: 0,
            acceleration: 0,
            jumping: 0,
            sprint30m: 0
        };
        let ppNumber = 0;
        player?.assignments?.forEach(assignment => {
            assignment.player_performances?.forEach(pp => {
            ppNumber ++;
            performance.dribbling += pp.dribbling;
            performance.passing  += pp.passing;
            performance.shooting += pp.shooting;
            performance.tackling  += pp.tackling;
            performance.aggression += pp.aggression;
            performance.concentration += pp.concentration;
            performance.leadership += pp.leadership;
            performance.teamwork += pp.teamwork;
            performance.decisions += pp.decisions;
            performance.endurance += pp.endurance;
            performance.acceleration += pp.acceleration;
            performance.jumping += pp.jumping;
            performance.sprint30m += pp.sprint30m;
            });
        });
        // Average

        performance.dribbling = performance.dribbling / ppNumber;
        performance.passing  = performance.passing  / ppNumber;
        performance.shooting = performance.shooting  / ppNumber;
        performance.tackling  = performance.tackling  / ppNumber;
        performance.aggression = performance.aggression  / ppNumber;
        performance.concentration = performance.concentration  / ppNumber;
        performance.leadership = performance.leadership  / ppNumber;
        performance.teamwork = performance.teamwork  / ppNumber;
        performance.decisions = performance.decisions  / ppNumber;
        performance.endurance = performance.endurance  / ppNumber;
        performance.acceleration = performance.acceleration  / ppNumber;
        performance.jumping = performance.jumping  / ppNumber;
        performance.sprint30m = performance.sprint30m  / ppNumber;

        let data =  [];
        for (const [key, value] of Object.entries(performance)) {
            data.push({name:  key, value: value})
        }


      return <div key={index}>
      <div aria-label="form" tabIndex="0" className="focus:outline-none xl:w-10/12 w-full px-8">
        {/* Player Information */}
        <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Player Information</h1>
        <div className="w-full py-6 flex flex-wrap items-center justify-center">
            <div className="mt-16 flex justify-between border-b border-gray-200 pb-16">
                <div className="w-full md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:flex-col">
                        <label className="text-sm leading-none text-gray-800" id="firstName">First name</label>
                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder={player?.firstName} />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label className="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={player?.lastName}/>
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label className="text-sm leading-none text-gray-800" id="lastName">Birth year</label>
                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={player?.birthYear}/>
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label className="text-sm leading-none text-gray-800" id="lastName">Home club</label>
                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={player?.homeClub}/>
                    </div>
                </div>
            </div>
        </div>
        {data?.length > 0 && <h1 tabIndex="0" className="mt-12 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Player performance</h1>}
      </div>
      {data?.length > 0 &&
        <div className="flex flex-wrap w-full items-center justify-center mt-16">
          <BarChart width={1000} height={500} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis/>
          <Tooltip/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="value" fill="#8884d8" barSize={30} />
        </BarChart>
        </div>
      }
    </div>

    })}
    </>
  );

}

export default UserPage;