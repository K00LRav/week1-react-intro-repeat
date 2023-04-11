import React, { Component } from 'react'
import Profile from './Profile'

export default class Homepage extends Component {
  render() {
        const user1 = "Ray"
        const user2 = "Nelly"

    return (
      <div>
        <h1>User Info</h1>
        <Profile username={user1} color="pink" />
        <Profile username={user2} color="blue"/>
      </div>
    )
  }
}
