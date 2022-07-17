import React from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './feedback/Statistics';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Section } from './feedback/Section';
import { Notification } from './feedback/Notification';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = stateKey => {
    switch (stateKey) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);

        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const factor = countTotalFeedback() / good;

    return `${Math.round(100 / factor)}%`;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={onLeaveFeedback}
      />

      {countTotalFeedback() ? (
        <Statistics
          allStates={{ good, neutral, bad }}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

Statistics.propTypes = {
  allStates: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = stateKey => {
//     this.setState(prevState => {
//       return {
//         [stateKey]: prevState[stateKey] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((acc, number) => {
//       return acc + number;
//     }, 0);

//   countPositiveFeedbackPercentage = () => {
//     const factor = this.countTotalFeedback() / this.state.good;
//     return `${Math.round(100 / factor)}%`;
//   };

//   render() {
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />

//         {this.countTotalFeedback() ? (
//           <Statistics
//             allStates={this.state}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
// }
