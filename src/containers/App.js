import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../components/Calendar';

import styles from './styles.scss';

class App extends React.Component {
  render() {
    return <div>
              this is home
              <div className="calendar-wrp"> <Calendar /> </div>
          </div>
  }
}

export default App;
