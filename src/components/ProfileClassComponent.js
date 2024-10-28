import React from 'react'

//! Don't compare react lifecycle of class based component to Functional component
// ? write setintervel code in class based component and functional component

class Profile extends React.Component {

    constructor(props) {
        super(props)
        // Create State
        this.state = {
            profile: {
                name: "Dummy Name",
                location: "Dummy Name",
                login: "dummy username"
            }
        }
        // calls before render
        console.log(this.props.name + ' Constructor');

    }

    // calls after render
    async componentDidMount() {
        //API Calls 
        console.log(this.props.name + " ConponentDidMount")
        const data = await fetch("https://api.github.com/users/sumo47")
        const json = await data.json()
        console.log(json)
        this.setState({
            profile: json
        })

        // Set Interval  // in every render * 1000
        this.timer = setInterval(() => {
            console.log("Namaste OP")
        }, 1000);
    }
    componentDidUpdate() { // calls after render when state is updated
        console.log(this.props.name + " componentDidUpdate")
    }
    componentWillUnmount() { // when state is unmounted // calls after render // when component is destroyed // we changed to another component
        console.log(this.props.name + " componentWillUnmount")
        // cleanup code here  (like unsubscribing from API calls)
        clearInterval(this.timer)
    }

    render() {
        console.log(this.props.name + " render")
        const { count2 } = this.state;
        return <div>
            <img src={this.state.profile.avatar_url} alt="image" />
            <h1>Name : {this.state.profile.name}</h1>
            <p>Locaion :{this.state.profile.location}</p>
            <p>public_repos :{this.state.profile.public_repos}</p>

        </div>
    }
}

export default Profile