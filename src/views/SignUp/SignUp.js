import { useState } from 'react';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';
import RegistrationSuccess from './RegistrationSuccess';

function SignUp() {

  const { REACT_APP_BASE_URL } = process.env;
  const [RegistartionSucces, setRegistrationSuccess] = useState(false);

  const [user, setUser] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "", 
    password: "", 
    address: "", 
    city: 0, 
    zipCode: "", 
    country: 0,
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
    const response = await fetch(`{${REACT_APP_BASE_URL}}/signup`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })

    if (response.ok) {
      console.log("Registration successful");
      setRegistrationSuccess(true);
    } else {
      console.log("Registration failed!!!");
    }
  }
  /** Code block ends. */

  return(
    <>
      {RegistartionSucces &&
        <RegistrationSuccess/>
      }
      {activeStep === 1 && !RegistartionSucces &&
        <SignUp1 user={user} setUser={(data) => setUser({...user, ...data})} nextStep={nextStep} prevStep={prevStep} />
      }
      {activeStep === 2 && !RegistartionSucces &&
        <SignUp2 user={user} setPlayer={handlePlayerChange} nextStep={nextStep} prevStep={prevStep}/>
      }
      {activeStep === 3 && !RegistartionSucces &&
        <SignUp3 user={user} setGDPR={(data) => setUser({...user, ...data})} nextStep={nextStep} prevStep={prevStep} submit={submitUserData}/>
      }
    </>
  )
}

export default SignUp;