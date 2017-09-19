import React from 'react';
import EmailInput from 'ps-react/EmailInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {

  render() {
    return (
      <div>
        <EmailInput
          htmlId="leadFormEmail"
          onChange={ event => console.log(event.target.value)}
          {...this.props} />
      </div>
    );
  }
}

export default ExampleAllFeatures;
