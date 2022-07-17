import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';



function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "", 
    password: "", 
    address: "", 
    city: "", 
    zipCode: "", 
    country: "",
    dataProtectionAccepted: false, 
    players: {
      firstName: "",
      lastName: "",
      birthYear: "",
      homeClub: ""
    }
  });

  const handlePlayerChange = (data) => {
    let newUser = Object.assign({}, user);
    newUser.players = data;
    setUser(newUser);
  }

  /** Code block begins. Active steps set and calculation */
  const [activeStep, setActiveStep ] = useState(1);

  const nextStep = ()=> {
    setActiveStep(activeStep + 1);
  }
  const prevStep = ()=> {
    setActiveStep(activeStep - 1);
  }
  /** Code block ends. */

  /** Code block begins. User data submit to database */
  async function submitUserData() {
    const response = await fetch("http://localhost:4000/signup", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const data = await response.text();

    if (response.ok) {
      console.log("Registration successful!!!")
      navigate('/login');
    } else {
      console.log("Registration failed!!!");
    }
  }
  /** Code block ends. */

  /** Code block begins. User data validation */
  
  /** Code block ends. */
  
  return(
    <>
      {activeStep === 1 &&
        <SignUp1 user={user} setUser={(data) => setUser({...user, ...data})} nextStep={nextStep} prevStep={prevStep} />
      }
      {activeStep === 2 &&
        <SignUp2 user={user} setPlayer={handlePlayerChange} nextStep={nextStep} prevStep={prevStep}/>
      }
      {activeStep === 3 &&
        <SignUp3 user={user} setGDPR={(data) => setUser({...user, ...data})} nextStep={nextStep} prevStep={prevStep} submit={submitUserData}/>
      }
    </>
  )
}

export default SignUp;