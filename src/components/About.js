import React from 'react'
import ProfileFunctional from './Profile'
import userContext from '../utility/userContext'
// import ProfileClass from './ProfileClassComponent'
// import { Outlet } from 'react-router-dom'

// function About() {
//   return (
//     <div>
//       <h1>about</h1>
//       {/* <ProfileFunctional name={"sumit"} /> */}
//       <ProfileClass name={"sumit"} age={24}/>

//     </div>
//   )
// }


class About extends React.Component {

  constructor(props) {
    super(props)
    console.log("parent - constructor")
  }

 async  componentDidMount(){
    console.log("parent - componentDidMount")
  }

  render() {
    console.log("parent - render")
    return <div>
      <h1>about</h1>

<userContext.Consumer>
  {({user})=><h4 className='font-bold text-xl p-10'>{user.name} - {user.email}</h4>}
</userContext.Consumer>

      {/* <ProfileClass name={"first child "} age={24} /> */}
      <ProfileFunctional/>
    </div>
  }
}

export default About

// parent constructor
// parent render 
//   first child constructor 
//   first child render

// parent componentDidMount

// update dom
// async and api call will take time so componentdidmount will call later
//   first child componentDidMount

// after api call , state changed so render will happen 
// first child  render

// ! why we can make componentDidMount async but can not make async call-back of useEffect 