import React from 'react'

class Profile extends React.Component {

    constructor(props) {
        super(props)
        // Create State
        this.state = {
            count: 0,
            count2: 2,
        }
        // calls before render
        console.log(this.props.name + ' Constructor');
    }

    // calls after render
    componentDidMount() {
        //API Calls
        console.log(this.props.name +" ConponentDidMount")
    }

    render() {
        console.log(this.props.name +" render")
        const { count2 } = this.state;
        return <div>
            <h1>Profile Class Component</h1>
            <p>name :{this.props.name}</p>
            <p>Age :{this.props.age}</p>
            <p>Count :{this.state.count}</p>
            <p>Count :{count2}</p>
            <button
                // We do not mutate state directly
                // never do this.state = something
                onClick={() => this.setState({ count2: count2 + 1 })}>Increment</button>
        </div>
    }
}

export default Profile