import React, { useState } from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'
import axios from 'axios'


const App = () => {
  const [users, setUsers] = useState

  const getUsers = async () => {
    debugger
    let userData = await axios.get(
      'https://api.github.com/search/users'

    )
    setUsers({user: userData})
  }


  return (
    <Container>
      <section name="title">
        <Header />
      </section>
      <section name="main">       
        <GHSearch/>
      </section>
    </Container>
  )
}

export default App
