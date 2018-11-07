import React from 'react';
import PropTypes from 'prop-types';

import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';

import './AnalogClock.css';

const fallbackDate = new Date(2000, 0, 1, 0, 20, 40);


// From https://gist.github.com/janx/1188550
const AnalogClock = ({ time = fallbackDate }) => {
  return (
    <svg
      className="analog-clock"
      viewBox="0 0 100 100"
      width="200"
      height="200"
    >
      {/* the clock face */}
      <circle className="analog-clock-face" cx="50" cy="50" r="45" />

      <g className="analog-clock-ticks">
        {/* 12 hour tick marks */}
        <line x1="50" y1="5.000" x2="50.00" y2="10.00" />
        <line x1="72.50" y1="11.03" x2="70.00" y2="15.36" />
        <line x1="88.97" y1="27.50" x2="84.64" y2="30.00" />
        <line x1="95.00" y1="50.00" x2="90.00" y2="50.00" />
        <line x1="88.97" y1="72.50" x2="84.64" y2="70.00" />
        <line x1="72.50" y1="88.97" x2="70.00" y2="84.64" />
        <line x1="50.00" y1="95.00" x2="50.00" y2="90.00" />
        <line x1="27.50" y1="88.97" x2="30.00" y2="84.64" />
        <line x1="11.03" y1="72.50" x2="15.36" y2="70.00" />
        <line x1="5.000" y1="50.00" x2="10.00" y2="50.00" />
        <line x1="11.03" y1="27.50" x2="15.36" y2="30.00" />
        <line x1="27.50" y1="11.03" x2="30.00" y2="15.36" />
      </g>

      <g className="analog-clock-numbers">
        {/* Number the cardinal directions */}
        <text x="50" y="18">
          12
        </text>
        <text x="85" y="53">
          3
        </text>
        <text x="50" y="88">
          6
        </text>
        <text x="15" y="53">
          9
        </text>
      </g>

      <g className="analog-clock-hands">
        {/* Draw hands */}
        <HourHand time={time} />
        <MinuteHand time={time} />
        <SecondHand time={time} />
      </g>
    </svg>
  );
};

AnalogClock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired
};

export default AnalogClock;
