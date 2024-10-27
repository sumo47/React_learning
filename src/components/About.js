import React from 'react'
// import ProfileFunctional from './Profile'
import ProfileClass from './ProfileClassComponent'
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
      <ProfileClass name={"first child "} age={24} />
      <ProfileClass name={"Second child"} age={24} />
    </div>
  }
}

export default About

// parent constructor
// parent render 
//   first child constructor 
//   first child render
//   second child constructor 
//   second child render

// update dom

//   first child componentDidMount
//   second child componentDidMount
// parent componentDidMount

// ! why we can make componentDidMount async but can not make async call-back of useEffect 