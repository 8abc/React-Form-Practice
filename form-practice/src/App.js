import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main>
        <form>
          <input placeholder="First Name" />
          <br />
          <input placeholder="Last Name" />
          <br />
          <input placeholder="Age" />
          <br />

          {/* create radio buttons for gender here */}
          <br />
          {/* create select box for location here */}
          <br />
          {/* create check boxes for dietrary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: </p>
        <p>Your age:</p>
        <p>Your destination: </p>
        <p>Your dietrary restrictions:</p>
      </main>
    );
  }
}

export default App;
