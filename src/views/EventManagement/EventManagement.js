
import { useState, useEffect, useContext } from 'react';
import styles from './EventManagement.module.scss'
import AuthContext from '../../store/auth-context';


function EventManagement() {

  const AuthCtx = useContext(AuthContext);
  const userId = AuthCtx?.profile.userId;

  const [events, setEvents] = useState();
  const [dataset, setDataset] = useState({
    users: [],
    trainers: [],
    venues: [],
    players: []
  })
  const [reload, setReload] = useState(false);
  const [showNewEventForm, setShowNewEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: "",
    event_type_id: 0, 
    user_id: 0,
    venue_id: 0,
    count: 0 
  });
  const [newAssignment, setNewAssignment] = useState({
    event_id: 0, 
    user_id: 0,
    player_id: 0
  });
  const [error, setError] = useState();

  const getDate  = (date) => {
    const newDate = new Date(date).toISOString().slice(0, 10).replaceAll('-', '/');
    return newDate;
  }


  /** Code block begins. User data submit to database */
  async function submitNewEvent() {
    const response = await fetch("http://localhost:4000/POST/event", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    })

    if (response.ok) {
      console.log("New Event created");

    } else {
      console.log("Fail to save a new Event!!!");
    }
  }
  /** Code block ends. */
  /** Code block begins. Player assignment submit to database */
  async function submitNewAssignment() {
    const response = await fetch("http://localhost:4000/POST/assignment", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAssignment)
    })

    if (response.ok) {
      console.log("New Assignment created");

    } else {
      console.log("Fail to assign player");
    }
  }

  async function removeAssignment(assignmentId) {
    const response = await fetch(`http://localhost:4000/DELETE/assignments/${assignmentId}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })

    if (response.ok) {
      console.log("Assignment removed");

    } else {
      console.log("Fail to remove assignment");
    }
  }

  /** Code block ends. */

  console.log(dataset, "!!!!")
  

  useEffect(()=> {
    const getEvents = async()=> {
      try {
        const response = await fetch('http://localhost:4000/events');
        const json = await response.json();
        setEvents(json?.result);
        
      } catch {
          /** Catches errors both in fetch and response.json */
        setError({ code: 500, message: "Unable to get events data. Please try again later." });
      }
    }
    getEvents();
  }, [reload])

  useEffect(()=> {
    const getUsers = ()=> {
      try {
        fetch('http://localhost:4000/events/dataset')
        .then(res => res.json())
        .then(data =>       
          setDataset({
          users: data.result.users || [],
          trainers: data.result.trainers || [],
          venues: data.result.venues || [],
          players: data.result.players || []
        }))
      } catch {
          /** Catches errors both in fetch and response.json */
        setError({ code: 500, message: "Unable to get users data. Please try again later." });
      }
    }
    getUsers();
  }, []);

  console.log(dataset)

  console.log("newAssignment", newAssignment);
  return(
      <div className="py-12 min-h-screen">
      <p className="text-left ml-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Sport events</p>
        <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
            {/* Header - code block begins */}
            <div className="flex flex-col lg:flex-row p-8 justify-between items-start lg:items-stretch w-full">
                <div className="w-full lg:w-1/4 xl:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                    <div className="w-full relative mb-2 lg:mb-0 lg:mr-4">
                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                        </div>
                        
                        <label htmlFor="search" className="hidden" />
                        <input id="search" className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 dark:border-gray-200 rounded border" placeholder="Search" />
                    </div>
                </div>
                <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="relative w-full lg:w-1/4 my-2 lg:my-0 lg:mx-2 xl:mx-4 z-10">
                        <div className="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                        <select aria-label="Selected tab" className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                            <option selected className="text-sm text-gray-600 dark:text-gray-400">
                                Representatives
                            </option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                        </select>
                    </div>
                    <div className="relative w-full lg:w-1/4 my-2 lg:my-0 lg:mx-2 xl:mx-4 z-10">
                        <div className="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        <select aria-label="Selected tab" className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded text-gray-600  dark:text-gray-400  appearance-none bg-transparent">
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                            <option selected className="text-sm text-gray-600 dark:text-gray-400">
                                Status Reports
                            </option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                        </select>
                    </div>
                    <div className="relative w-full lg:w-1/4 my-2 lg:my-0 cursor-pointer lg:mx-2 xl:mx-4 z-0 border focus:border-gray-800 border-gray-300 dark:border-gray-200 rounded p-2">
                        <div className="z-0 w-10 px-2 absolute inset-0 m-auto z-0 border-l mr-0 flex items-center text-slate-700">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="icon cursor-pointer icon-tabler icon-tabler-calendar-event" 
                              width={20} 
                              height={20} 
                              viewBox="0 0 24 24" 
                              strokeWidth="1.5" 
                              stroke="currentColor" 
                              fill="none" 
                              strokeLinecap="round" 
                              strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                <line x1={16} y1={3} x2={16} y2={7} />
                                <line x1={8} y1={3} x2={8} y2={7} />
                                <line x1={4} y1={11} x2={20} y2={11} />
                                <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            <input type="date" className="absolute right-0 z-10 opacity-0 cursor-pointer" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Schedule Dates</p>
                    </div>
                    <button 
                      className="focus:shadow-outline-gray border border-transparent w-auto lg:w-1/4 my-2 lg:my-0 lg:ml-2 xl:ml-4 bg-slate-700 transition focus:outline-none focus:border-gray-800 focus:shadow-outline-gray duration-150 ease-in-out hover:bg-slate-600 rounded text-white px-6 py-2 text-sm"
                      onClick={()=> {setShowNewEventForm(!showNewEventForm)}}
                    >
                        Add Sport Event
                    </button>
                </div>
            </div>
            {/* Header - code block ends */}
            {/* Table - code block begins */}
            <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
              <table className="w-full bg-white dark:bg-gray-800 rounded">
                  <thead>
                    <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 bg-slate-100">
                      <th className="whitespace-nowrap pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Date</th>
                      <th className="whitespace-nowrap text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Time</th>
                      <th className="whitespace-nowrap text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Event type</th>
                      <th className="whitespace-nowrap text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Trainer</th>
                      <th className="whitespace-nowrap text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Venue</th>
                      <th className="whitespace-nowrap text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"> Players selected</th>
                      <th className="whitespace-nowrap text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Action</th>
                      <td className="pr-8">
                        <button className="whitespace-nowrap w-32 opacity-0 bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm cursor-default">
                          Select players
                        </button>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                      { showNewEventForm &&
                        <tr className="w-full h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">

                          <td className="py-16 pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <div className="flex flex-col">
                              <label className="mb-3 text-sm leading-none text-gray-800">Date</label>
                              <input 
                                type="datetime-local" 
                                tabIndex={0} 
                                aria-label="Select date" 
                                className="bg-slate-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" 
                                value={newEvent.date}
                                onChange={(e)=> {setNewEvent({...newEvent, date: e.target.value})}}
                              />
                            </div>
                          </td>
                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            {/* <div className="flex flex-col">
                              <label className="mb-3 text-sm leading-none text-gray-800">Time</label>
                              <input type="datetime-local" tabIndex={0} aria-label="Enter email Address" className="w-32 bg-slate-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" defaultValue=" " placeholder="09:00AM" />
                            </div> */}
                          </td>
                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <div className="flex flex-col">
                              <label className="mb-3 text-sm leading-none text-gray-800">Event type</label>
                              
                              <select 
                                type="text" 
                                tabIndex={0} 
                                aria-label="Training type" 
                                className="w-40 bg-slate-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" 
                                onChange={(e)=> {setNewEvent({...newEvent, event_type_id: e.target.value})}}
                                value={newEvent.event_type_id}
                              > 
                                <option value={" "}>{" "}</option>
                                <option value={1}>Training</option>
                                <option value={3}>Game</option>
                                <option value={2}>Assessment</option>
                              </select>
                            </div>
                          </td>
                          <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <div className="flex flex-col">
                              <label className="mb-3 text-sm leading-none text-gray-800">Trainer</label>
                              <select
                                type="text"
                                name="trainer"
                                placeholder="Select trainer"
                                className="w-48 bg-slate-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                value={newEvent.user_id}
                                onChange={(e)=> {setNewEvent({...newEvent, user_id: e.target.value})}}
                              >
                                <option key={999} value={" "}>{" "}</option>
                                {dataset?.trainers?.map((trainer, index)=> {
                                  return <option value={trainer.id} key={index}>{trainer.id}. {trainer.firstName} {trainer.lastName}</option>
                                })}
                              </select>
                            </div>
                          </td>
                          <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <div className="flex flex-col">
                              <label className="mb-3 text-sm leading-none text-gray-800">Venue</label>
                              <select
                                type="text"
                                name="venue"
                                placeholder="Select trainer"
                                className="w-48 bg-slate-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                value={newEvent.venue_id}
                                onChange={(e)=> {setNewEvent({...newEvent, venue_id: e.target.value})}}
                              >
                                <option key={999} value={" "}>{" "}</option>
                                {dataset?.venues?.map((venue, index)=> {
                                  return <option key={index} value={venue.id}>{venue.id}. {venue.name}</option>
                                  })}
                              </select>
                            </div>
                          </td>
                          <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            
                          </td>
                          
                          <td className="pr-8 text-right">
                            <button 
                              className="mt-6 border border-transparent focus:outline-none px-5 py-3 text-sm whitespace-nowrap focus:shadow-outline-gray border border-transparent bg-slate-700 transition focus:outline-none focus:border-gray-800 focus:shadow-outline-gray duration-150 ease-in-out hover:bg-slate-600 rounded text-white"
                              onClick={()=> {submitNewEvent();setReload(!reload);setShowNewEventForm(false)}}
                            >
                              New Event
                            </button>
                          </td>
                      </tr>
                    }
                  {events?.length > 0 
                  ? <>
                    {events.map((event, index)=> {
                      return <>
                        <tr key={index} className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                          <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          {getDate(event.date)}
                          </td>
                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                          <td className="pr-6">
                            <div className="w-full flex justify-start items-center h-full">
                              
                                {event.event_type_id === 1 
                                ? <div className="bg-transparent text-gray-800 dark:text-gray-100 border border-gray-300 rounded-full text-sm leading-3 py-2 px-5">
                                    Training
                                  </div>
                                : event.event_type_id === 2
                                ? <div className="bg-red-200 text-slate-600 rounded-full text-sm leading-3 py-2 px-5">
                                    Assessment
                                  </div>
                                : event.event_type_id === 3
                                ?
                                  <div className="bg-yellow-200 text-slate-700 rounded-full text-sm leading-3 py-2 px-5">
                                    Game
                                  </div>
                                : <div className="bg-transparent text-gray-800 dark:text-gray-100 border border-gray-300 rounded-full text-sm leading-3 py-2 px-5">
                                    Other
                                  </div>
                                }
                            </div>
                          </td>
                          {dataset?.users?.map(user => {
                            if (user.id === event.userId) {
                              return <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {user.firstName} {user.lastName}
                                </td>
                              }
                          })}
                          {dataset?.venues?.map(venue => {
                            if(venue.id === event.venue_id){
                              return <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                {venue.name}
                              </td>
                            }
                          })}
                            <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                              {/* {assignments?.filter((item) => item.event_id === event.event_id)?.length || 0} */}
                              {events[index]?.assignments.length}
                            </td>
                          
                          <td className="text-sm pr-6 whitespace-nowrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <div className="flex items-center">
                              <button className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-slate-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                    <line x1={16} y1={5} x2={19} y2={8} />
                                  </svg>
                                </div>
                              </button>
                              <button className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-slate-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </div>
                              </button>
                              <button className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </td>
                          <td className="pr-8 text-right">
                            <button 
                              className="whitespace-nowrap bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-slate-700 px-5 py-1 text-sm"
                              onClick={()=> {
                                const newEvents = [...events];
                                newEvents[index].isOpen = !newEvents[index].isOpen;
                                setEvents(newEvents);
                                setShowNewEventForm(false);
                              }}
                            >
                              Select players
                            </button>
                          </td>
                      </tr>
                      {events[index].isOpen &&
                      
                        <tr className="w-full h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out relative">

                          <td className="py-16 pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            {events[index]?.assignments?.length > 0 && 
                              <>
                                <label className="text-base font-medium leading-none text-gray-800">Selected players:</label>
                                {events[index].assignments.map(assignment => {
                                  const player = dataset?.players?.filter(player => player.id === assignment.player_id)[0];
                                  if (player) {
                                    return <div className="flex mt-3"> 
                                      <div className="flex items-center whitespace-nowrap w-32 text-base"> 
                                        {player.firstName} {player.lastName}  
                                      </div>
                                      <button 
                                        onClick={() => {
                                          removeAssignment(assignment.assignment_id);
                                          setReload(!reload);
                                        }} 
                                        className="rounded border border-transparent focus:outline-none focus:border-gray-800  focus:shadow-outline-gray mx-10" href="javascript: void(0)">
                                        <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={7} x2={20} y2={7} />
                                            <line x1={10} y1={11} x2={10} y2={17} />
                                            <line x1={14} y1={11} x2={14} y2={17} />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                          </svg>
                                        </div>
                                      </button>
                                    </div>
                                  }
                                })}
                              </>
                            }
                            
                          </td>
                          <td className="pr-8 text-right">
                            {/* Do not show select dropdown if all players are selected for an event */}
                            {dataset?.players?.length !== events[index]?.assignments?.length && 
                              <div className="flex flex-col">
                                <label className="mb-8 text-base leading-none text-gray-800"> </label>
                                <div className="flex">
                                  <select
                                    type="text"
                                    name="venue"
                                    placeholder="Select trainer"
                                    className="bg-slate-100 text-sm font-medium leading-none text-gray-800 py-2 px-5 border rounded border-gray-200"
                                    onChange={(e)=> {setNewAssignment({...newAssignment, event_id: events[index].id, player_id: parseInt(e.target.value), user_id: events[index].user_id})}}
                                  >
                                    <option key={999} value={" "}>{" "}</option>
                                    {dataset?.players?.map((player, player_index)=> {
                                      /** Show unselected for an event players */
                                      if(events[index]?.assignments?.filter(assignment => assignment.player_id === player.id)?.length === 0) {
                                        return <option key={player_index} value={player.id}>{player.id}. {player.firstName} {player.lastName}</option>
                                      }
                                    })}
                                  </select>
                                  <button 
                                  className="ml-6 border border-transparent focus:outline-none px-5 py-2 text-sm focus:shadow-outline-gray border border-transparent bg-slate-700 transition focus:outline-none focus:border-gray-800 focus:shadow-outline-gray duration-150 ease-in-out hover:bg-slate-600 rounded text-white whitespace-nowrap"
                                  onClick={()=> {
                                    submitNewAssignment();
                                    setReload(!reload);
                                  }}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            }
                          </td>
                          <div 
                            className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-200 transition duration-150 ease-in-out" 
                            onClick={()=> {
                              const newEvents = [...events];
                              newEvents[index].isOpen = false;
                              setEvents(newEvents);
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                      </tr>
                    }
                    </>
                    })}
                    </>
                    :<div>No data available</div>
                  }
                  </tbody>
              </table>
            </div>
            {/* Table - code block ends */}
        </div>
        {/* Pagination - code block begins */}
        <div className="mx-auto container pt-8 flex justify-center sm:justify-end items-center">
          <a className="mr-2 sm:mr-5 rounded border border-transparent focus:outline-none focus:border-gray-800 text-gray-600 focus:shadow-outline-gray" href="javascript: void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left text-gray-800 dark:text-gray-100" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
          </a>
          <p className="text-gray-800 dark:text-gray-100 fot-normal text-base">Page</p>
          <label htmlFor="selectedPage" className="hidden" />
          <input id="selectedPage" type="text" className="bg-white dark:bg-gray-800 w-8 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:shadow-outline-gray focus:border focus:border-indigo-700 font-normal flex items-center text-base border-gray-300 rounded border" defaultValue={1} />
          <p className="text-gray-800 dark:text-gray-100 fot-normal text-base">of 20</p>
          <a className="mx-2 sm:mx-5 rounded border border-transparent focus:outline-none focus:border-gray-800 text-gray-600 focus:shadow-outline-gray" href="javascript: void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </a>
          <label htmlFor="totalPage" className="hidden" />
          <input id="totalPage" type="text" className="bg-white dark:bg-gray-800 w-10 px-2 mr-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:shadow-outline-gray focus:border focus:border-indigo-700 font-normal flex items-center text-base border-gray-300 rounded border" defaultValue={30} />
          <p className="-mt-1 text-gray-800 dark:text-gray-100 fot-normal text-base">per page</p>
        </div>
        {/* Pagination - code block ends */}
      </div> 
  )
}

export default EventManagement;