import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 2
        }
        console.log("Constructor called");
    }
  componentDidMount() {
    console.log("ComponentDidMount called");
  }
  render() {
    console.log("Render called");
    const {count, count2} = this.state;
    const {name, address} = this.props
    return <div className="user-card">
      <button onClick={() => {
        this.setState({
          count: count+1,
          count2: count2+2,
        })
        
      }}>Increment Count</button>
    <h1>Name: {name}</h1>
    <h1>Count: {count}</h1>
    <h1>Count2: {count2}</h1>
    <p>Address: {address}</p>
</div>
  }
}

export default UserClass;