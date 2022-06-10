import React from 'react';
import './style.css';
class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    const target = event.target;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            isGoing:
            <input
              type="checkbox"
              name="isGoing"
              checked={this.state.isGoing}
              onChange={this.onHandleChange}
            />
          </label>
          <br />
          <label>
            numberOfGuests:
            <input
              type="number"
              name="numberOfGuests"
              value={this.state.numberOfGuests}
              onChange={this.onHandleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    console.log('Render from parent');
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}
