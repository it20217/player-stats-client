import { useNavigate } from 'react-router-dom';
import SignUp from '../SignUp/SignUp'

function UserPage() {
  let navigate = useNavigate();
  return(
    <div className="flex-col items-center justify-between w-full">
      <div 
        className="text-left mx-auto mt-8 w-1/2 rounded shadow bg-white dark:bg-gray-800" 
        onClick={()=>navigate('/userprofile')}
      >
        <div className="text-slate-700 ml-8 py-12 text-2xl font-semibold italic " >
          User management
        </div>
      </div>
      <div 
        className="text-left mx-auto mt-8 w-1/2 rounded shadow bg-white dark:bg-gray-800" 
        onClick={()=>navigate('/playerprofile')}
      >
        <div className="text-slate-700 ml-8 py-12 text-2xl font-semibold italic">
          Player management
        </div>
      </div>
      <div 
        className="text-left mx-auto mt-8 w-1/2 rounded shadow bg-white dark:bg-gray-800" 
        onClick={()=>navigate('/events')}
      >
        <div className="text-slate-700 ml-8 py-12 text-2xl font-semibold italic">
          Event management
        </div>
      </div>
    </div>
  )
}

export default UserPage;