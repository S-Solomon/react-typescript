import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'

function App() {
  const PersonName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='kd' messageCount={35} isLoggedIn={false}/>
      <Person name={PersonName}/>
      <PersonList names={nameList}/>
      <Status status='success'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oacar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {console.log('button clicked', event, id)}} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{border: '1px solid green', padding: '1rem'}}/>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
