/* eslint-disable no-console */
import React from 'react';
import PhoneInput from 'ps-react/PhoneInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {

  render() {
    return (
      <div>
        <PhoneInput
          htmlId="leadFormPhone"
          onChange={ event => console.log(event.target.value)}
          {...this.props} />
      </div>
    );
  }
}

export default ExampleAllFeatures;
