import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider'
import AuthContext from '../../store/auth-context';

function PlayerEvaluation() {

  const AuthCtx = useContext(AuthContext);
  const { REACT_APP_BASE_URL } = process.env;
  const profile = AuthCtx?.profile;
  const { eventId , assignmentId } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState();
  const [selectedEvent, setSelectedEvent] = useState(eventId);
  const [selectedAssignment, setSelectedAssignment] = useState({
    event_id: 0,
    firstName: "",
    homeClub: "",
    id: 0,
    lastName: "",
    player_id: 0
  });
  const [pp, setPP] = useState({
    assignment_id: 0,
    user_id: profile?.userId,
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
  });
  const [error, setError] = useState();

  useEffect(()=> {
    const getEvents = async()=> {
      try {
        const response = await fetch(`${REACT_APP_BASE_URL}/assignments/dataset`);
        const json = await response.json();
        setEvents(json?.result?.events);
      } catch {
          /** Catches errors both in fetch and response.json */
        setError({ code: 500, message: "Unable to get events data. Please try again later." });
      }
    }
    getEvents();
  }, []);

  /** Save player performance */
  async function submitNewPP() {
    const response = await fetch(`${REACT_APP_BASE_URL}/POST/pp`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pp)
    })

    if (response.ok) {
      console.log("New player performance created");

    } else {
      console.log("Fail to save a new player performance!!!");
    }
  }
  
  return( 
  <div aria-label="form" tabIndex="0" className="focus:outline-none xl:w-10/12 w-full px-8">
    {/* Section 1 - Scout Information */}
    <div className="w-full py-12 flex flex-wrap items-center justify-center">
      <div className="mt-16 flex justify-between border-b border-gray-200 pb-16">
        <div className="w-1/2">
          <div className="flex items-center">
              <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Scout Information</h1>
          </div>
          <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
          <div className="w-1/2 md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div className="md:flex-col">
                <label className="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder={profile.firstName} />
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label className="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder={profile.lastName}/>
            </div>
          </div>
      </div>
    </div>
    {/* Section 2 - Select Event */}
    <div className="w-full py-12 flex flex-wrap items-center justify-center">
      <div className="w-full flex justify-between border-b border-gray-200 pb-16">
        <div className="w-1/2">
          <div className="flex items-center">
              <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Select event</h1>
          </div>
          <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
        {events?.length > 0
        ? 
          <div className="w-1/2">
            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              <select
                type="text"
                name="venue"
                value={selectedEvent}         
                placeholder="Select trainer"
                className="w-1/2 bg-slate-100 text-sm font-medium leading-none text-gray-800 py-3 px-10 border rounded border-gray-200"
                onChange={(e)=> {
                    if (e.target.value?.length > 0) {
                      setSelectedEvent(parseInt(e.target.value)); 
                      navigate(`/playerevaluation/${parseInt(e.target.value)}`);
                    } else {
                      setSelectedEvent(undefined); 
                      navigate(`/playerevaluation`);
                    }
                    setSelectedAssignment(undefined); 
                    setPP({...pp, assignment_id: 0});
                  }}
                >
                <option key={999} value={""}>{" "}</option>
                {events?.map((event, index) => {
                  return <option key={index} value={event.id}>{event.name}</option>
                })}
              </select>
            </div>
          </div>
        : <div> No event data available </div>
        }
      </div>
    </div>
    {/* Section 3 - Select Assignment */}
    <div className="w-full py-12 flex flex-wrap items-center justify-center">
      <div className="w-full flex justify-between border-b border-gray-200 pb-16">
        <div className="w-1/2">
          <div className="flex items-center">
              <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Select assignment</h1>
          </div>
          <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
          <div className="w-1/2">
            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
              {events?.length > 0
              ? 
                <select
                  type="text"
                  name="venue"
                  value={selectedAssignment?.id || ""}
                  placeholder="Select trainer"
                  className="w-1/2 bg-slate-100 text-sm font-medium leading-none text-gray-800 py-3 px-10 border rounded border-gray-200"
                  onChange={(e)=> {
                      if (e.target.value?.length > 0) {
                        const assignment = events?.filter((event) => event.id == selectedEvent)[0]?.assignments?.filter(assignment => assignment.id == e.target.value)[0];
                        setSelectedAssignment(assignment); 
                        setPP({...pp, assignment_id: assignment.id});
                        navigate(`/playerevaluation/${selectedEvent}/assignment/${parseInt(e.target.value)}`);
                      } else {
                        setSelectedAssignment(undefined); 
                        navigate(`/playerevaluation/${selectedEvent}`);
                        setPP({...pp, assignment_id: 0});
                      }
                    }}
                  >
                  <option key={999} value={""}>{" "}</option>
                  {events?.filter((event) => event.id == selectedEvent)[0]?.assignments?.map((assignment, index) => {
                    return <option key={index} value={assignment.id}>{`${assignment.firstName} ${assignment.lastName}`}</option>
                  })}
                </select>
              : <div> No players assigned to the event </div>
              }
            </div>
        </div>
      </div>
    </div>
     {/* Section 4 - Selected player information */}
    <div className="w-full flex flex-wrap items-center justify-center">
      <div className="w-full lg:flex justify-between border-b border-gray-200 pb-16">
        <div className="w-1/2" >
          <div className="flex items-center">
            <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Player Information</h1>
          </div>
          <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
        <div className="w-1/2">
          <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div className="md:w-64">
                <label className="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" value={selectedAssignment?.firstName || ""} readOnly/>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label className="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" value={selectedAssignment?.lastName || ""} readOnly/>
            </div>
          </div>
          <div className="md:flex items-center lg:ml-24 mt-8">
            <div className="md:w-64">
                <label className="text-sm leading-none text-gray-800" id="emailAddress">Player Team</label>
                <input type="text" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" value={selectedAssignment?.homeClub || ""} readOnly/>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                <label className="text-sm leading-none text-gray-800" id="lastName">Player id</label>
                <input type="id" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" value={selectedAssignment?.player_id || ""} readOnly/>
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Section 5 - performance values */}
    <div className="w-full flex flex-wrap items-center justify-center">
      <div className="w-full py-16 lg:flex justify-between pb-16">
        <div className="w-1/3">
            <div className="flex items-center">
              <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Evaluation</h1>
            </div>
            <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
        </div>
        <div className="w-2/3">
          {/* Dribbling */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Dribbling</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, dribbling: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.dribbling}</h1>
          </div>
          {/* Passing */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Passing</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, passing: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.passing}</h1>
          </div>
          {/* Shooting */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Shooting</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, shooting: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.shooting}</h1>
          </div>
          {/* Tackling */}
          <div className="md:flex lg:ml-24 mt-16">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Tackling</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, tackling: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.tackling}</h1>
          </div>
          {/* Aggression */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Aggression</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, aggression: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.aggression}</h1>
          </div>
          {/* Concentration */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Concentration</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, concentration: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.concentration}</h1>
          </div>
          {/* Leadership */}
          <div className="md:flex lg:ml-24 mt-16">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Leadership</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, leadership: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.leadership}</h1>
          </div>
          {/* Teamwork */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Teamwork</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, teamwork: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.teamwork}</h1>
          </div>
          {/* Decisions */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Decisions</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, decisions: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.decisions}</h1>
          </div>
          {/* Endurance */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Endurance</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, endurance: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.endurance}</h1>
          </div>
          {/* Acceleration */}
          <div className="md:flex lg:ml-24 mt-16">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Acceleration</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, acceleration: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.acceleration}</h1>
          </div>
          {/* Jumping */}
          <div className="md:flex lg:ml-24 mt-8">
            <div className="md:w-64">
              <label className="text-base font-medium leading-none text-gray-800" id="emailAddress">Jumping</label>
            </div>
            <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
              <Slider callback={(data) => setPP({...pp, jumping: data})}/>
            </div>
            <h1 className="ml-10 focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">{pp.jumping}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="my-16 flex flex-wrap items-center justify-center">
      <button 
        className="focus:shadow-outline-gray border border-transparent w-auto lg:w-1/4 my-2 lg:my-0 lg:ml-2 xl:ml-4 bg-slate-700 transition focus:outline-none focus:border-gray-800 focus:shadow-outline-gray duration-150 ease-in-out hover:bg-slate-600 rounded text-white px-6 py-3 text-sm"
        style={{cursor: "pointer"}}
        disabled={!selectedEvent || selectedAssignment?.event_id === 0}
        onClick={submitNewPP}
      >
          Submit
      </button>
    </div>
  </div>

  )
}

export default PlayerEvaluation;