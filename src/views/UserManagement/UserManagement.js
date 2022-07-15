import { useState, useEffect } from 'react';

function UserManagement() {

  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const created  = (date) => {
    const newDate = new Date(date).toISOString().slice(0, 10).replaceAll('-', '/');
    return newDate;
  }

  const firstLetter = (firstName) => {
    const letter = firstName.charAt(0).toUpperCase();
    return letter;
  }

  useEffect(()=> {
    const getUsers = async()=> {
      try {
        const response = await fetch('http://localhost:4000/users');
        const json = await response.json();
        console.log('users', json.result);
        setUsers(json.result);
        
      } catch {
          /** Catches errors both in fetch and response.json */
        setError({ code: 500, message: "Unable to get users data. Please try again later." });
      }
    }
    getUsers();
  }, [])


  return(
    <>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Users</p>
            <div className="md:flex items-center mt-6 lg:mt-0">
              <div className="flex items-center">
                <button className="px-2.5 py-2.5 mr-3 bg-slate-700 hover:bg-slate-600 rounded focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path d="M15 3.3335H4.99998C4.07951 3.3335 3.33331 4.07969 3.33331 5.00016V6.66683C3.33331 7.5873 4.07951 8.3335 4.99998 8.3335H15C15.9205 8.3335 16.6666 7.5873 16.6666 6.66683V5.00016C16.6666 4.07969 15.9205 3.3335 15 3.3335Z" stroke="#FAFAFA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11.6665H4.99998C4.07951 11.6665 3.33331 12.4127 3.33331 13.3332V14.9998C3.33331 15.9203 4.07951 16.6665 4.99998 16.6665H15C15.9205 16.6665 16.6666 15.9203 16.6666 14.9998V13.3332C16.6666 12.4127 15.9205 11.6665 15 11.6665Z" stroke="#FAFAFA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="px-2.5 py-2.5 mr-4 bg-white border hover:bg-gray-100 rounded border-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path d="M7.49998 3.3335H4.16665C3.70641 3.3335 3.33331 3.70659 3.33331 4.16683V7.50016C3.33331 7.9604 3.70641 8.3335 4.16665 8.3335H7.49998C7.96022 8.3335 8.33331 7.9604 8.33331 7.50016V4.16683C8.33331 3.70659 7.96022 3.3335 7.49998 3.3335Z" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8334 3.3335H12.5C12.0398 3.3335 11.6667 3.70659 11.6667 4.16683V7.50016C11.6667 7.9604 12.0398 8.3335 12.5 8.3335H15.8334C16.2936 8.3335 16.6667 7.9604 16.6667 7.50016V4.16683C16.6667 3.70659 16.2936 3.3335 15.8334 3.3335Z" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.49998 11.6665H4.16665C3.70641 11.6665 3.33331 12.0396 3.33331 12.4998V15.8332C3.33331 16.2934 3.70641 16.6665 4.16665 16.6665H7.49998C7.96022 16.6665 8.33331 16.2934 8.33331 15.8332V12.4998C8.33331 12.0396 7.96022 11.6665 7.49998 11.6665Z" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8334 11.6665H12.5C12.0398 11.6665 11.6667 12.0396 11.6667 12.4998V15.8332C11.6667 16.2934 12.0398 16.6665 12.5 16.6665H15.8334C16.2936 16.6665 16.6667 16.2934 16.6667 15.8332V12.4998C16.6667 12.0396 16.2936 11.6665 15.8334 11.6665Z" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
                  <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 17.5L12.5 12.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input type="text" className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500" placeholder="Search" />
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                <button className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-slate-700 hover:bg-slate-600 focus:outline-none rounded">
                  <p className="text-sm font-medium leading-none text-white">Add User</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
          <table className="w-full whitespace-nowrap bg-slate-100">
            <thead>
              <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-4">#</th>
                <th className="font-normal text-left pl-11">Name</th>
                <th className="font-normal text-left pl-10">Age</th>
                <th className="font-normal text-left">Created</th>
                <th className="font-normal text-left">Role</th>
                <th className="font-normal text-left">Status</th>
                <th className="font-normal text-left w-32">Actions</th>
              </tr>
            </thead>
              {users?.length > 0 
                ? 
                <tbody className="w-full">
                  {users.map((user, index)=> {
                    
                    return <tr className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                      <td className="pl-4">{user.id}</td>
                      <td className="pl-11">
                        <div className="flex items-center">
                          {/* <img className="shadow-md rounded-full w-10 h-10 mr-3" src="https://cdn.tuk.dev/assets/templates/olympus/invoice.png" /> */}
                          {/* Code block starts */}
                          <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-md mr-4 relative flex justify-center items-center bg-gray-100 dark:bg-gray-800 shadow-md">
                            <div className="h-2 w-2 bg-green-400 rounded-full absolute right-0 top-0 -mr-1 -mb-1 border border-white dark:border-gray-700"></div>
                            <p className="text-gray-600 dark:text-gray-400 font-bold">
                              {firstLetter(user.firstName)}{firstLetter(user.lastName)}
                            </p>
                          </div>
                          {/* Code block ends */}
                          {user.firstName} {user.lastName}
                        </div>
                      </td>
                      <td>
                        <p className="mr-16 pl-10">28</p>
                      </td>
                      <td>
                        <p className="mr-16">{created(user.created_at)}</p>
                      </td>
                      <td>
                        {user.roleId == 1 
                          ? <p className="mr-16">Admin</p>
                          : user.roleId == 2 ?
                            <p className="mr-16">Trainer</p>
                          : <p className="mr-16">User</p>
                        }
                      </td>
                      <td>
                        {user.active == true 
                        ? <div className="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                            <p className="text-xs leading-3 text-blue-500">Active</p>
                          </div>
                        : <div className="w-20 h-6 flex items-center mr-16 justify-center bg-red-50 rounded-full">
                            <p className="text-xs leading-3 text-red-500">Not active</p>
                          </div>
                        }
                      </td>
                      <td>
                        <div className="flex items-center">
                          <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">Edit</button>
                          <button className="bg-red-200 mr-5 hover:bg-red-300 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">Delete</button>
                        </div>
                      </td>
                    </tr>
                  })}
                </tbody>
                : <div> No data </div>
              } 
            
          </table>
        </div>
      </div>
    </>
  )
}

export default UserManagement;