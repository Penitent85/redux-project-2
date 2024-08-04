import React, { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Form from './components/Form/Form'
import './App.css'

const App = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [isChanged , setIsChanged] = useState(false);

  // const addUser = (e) =>{
  //   e.preventDefault();
  //   setIsChanged(true);
  // }



  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Sidebar name={name} isChanged={isChanged}/>
        <Form  setName={setName}  setEmail={setEmail} addUser={addUser}/>
      </div>
    </div>
  )
} 

export default App