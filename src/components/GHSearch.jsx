import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button name="search" data-cy={"searchBtn"}>Search</Button>
    </>
  )
}

export default GHSearch
