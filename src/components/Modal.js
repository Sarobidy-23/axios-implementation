import React from 'react';
import './Modal.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { EmployeeList } from './List';


export default function Modal(props) {
  const [name, setName] = useState();
  const [userName, setUSerName] = useState();
  const [email, setEMail] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();
  const {toggle, setToggle} = props;

  const PostPut = () => {
      const promise = axios.post("https://jsonplaceholder.typicode.com/users", (
        {
          "name":{name},
          "username":{userName},
          "email":{email},
          "address":{
            "city":{city},
            "street":{street}
          },
          "phone":{phone},
          "website":{website}
        }
        ))
        promise
        .then((response) => {
          alert(`name: ${name}, 
                 username: ${userName}, 
                 email: ${email}, 
                 address:
                    {city ${city}, 
                     street ${street}
                    }, 
                 phone: ${phone}, 
                 website: ${website}`)
        })
        .catch((error) => {
          alert("erreur")
        })
    }

  const TargetName = (e) => {
    setName(e.target.value); 
  }

  const TargetUserName = (e) => {
    setUSerName(e.target.value);
  }

  const TargetEmail = (e) => {
    setEMail(e.target.value);
  }

  const TargetCity = (e) => {
    setCity(e.target.value);
  }

  const TargetStreet = (e) => {
    setStreet(e.target.value);
  }

  const TargetPhone = (e) => {
    setPhone(e.target.value);
  }
  
const TargetWebsite = (e) => {
  setWebsite(e.target.value);
}

useEffect(() => {
  return () => {
    
  };
}, [])


  return (
    <>
    <div onClick={() => {setToggle(false)}} className={toggle?"containerModal":"ModalOff"}></div>
    <div className={`${toggle?"FormModal":"ModalOff"}`}>
          <label className='label' htmlFor="name"> Name </label>
             <input type="text" id='name' className='container-fluid' onChange={TargetName} value={name}/>

          <label className='label' htmlFor='username'> UserName </label>
             <input type="text" id='username' className="container-fluid" onChange={TargetUserName} value={userName} />

          <label className='label' htmlFor='email'> Email</label>
             <input type="email" id='email' className='container-fluid' onChange={TargetEmail} value={email}/>  

          <label className='label' htmlFor='city'> City </label>
             <input type="text" id='city' className='container-fluid' onChange={TargetCity} value={city}/>

          <label className='label' htmlFor='street'> Street </label>
             <input type="text" id='street' className='container-fluid' onChange={TargetStreet} value={street}/>

          <label className='label' htmlFor='phone'> Phone </label>
             <input type="text" id='phone' className="container-fluid" onChange={TargetPhone} value={phone}/>

          <label className='label' htmlFor='website'> Website </label>
             <input type="text" id='website' className="container-fluid" onChange={TargetWebsite} value={website}/>

          <button className='close' onClick={() => {setToggle(false)}}>close</button>
          <button className='envoyer' onClick={PostPut} >envoyer</button>
    </div>
        
    </>
  )
}
