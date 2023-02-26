import { Component } from "react";
import ProfileFunctional from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <ProfileFunctional />
      </div>
    );
  }
}
export default About;
