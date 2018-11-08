import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      The count is: {count}
      <button onClick={
          () => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;


import { useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  return [count, () => setCount(count + 1)];
}


import React from 'react';

const Greeter = React.createClass({
  render: function() {
    return <div>Hello {this.props.firstName}</div>;
  }
});

export default Greeter;




import React, { Component } from 'react';

class Greeter extends Component {
  render() {
    return <div>Hello {this.props.firstName}</div>;
  }
}

export default Greeter;



import React, { Component } from 'react';

class Greeter extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return <div>Hello {this.props.firstName}</div>;
  }
}

export default Greeter;
