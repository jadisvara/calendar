import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {val: 7};
  }
  update() {
    this.setState({val: this.state.val + 1});
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    return <InnerComponent
              update={this.update}
              {...this.state}
              {...this.props}
           />
  }
}

const Hello = props => <label onMouseMove={props.update}>Hello, {props.txt}! {props.val}</label>
let HelloMixed  = Mixin(Hello);

class App extends React.Component {
  render() {
    return <div>
              <HelloMixed txt="word"/>
          </div>
  }
}
export default App;
