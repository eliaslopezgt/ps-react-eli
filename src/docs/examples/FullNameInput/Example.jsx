import React from 'react';
import FullNameInput from 'ps-react/FullNameInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {

  render() {
    return (
      <div>
        <FullNameInput
          htmlId="leadFormFullname"
          onChange={ event => console.log(event.target.value)}
          {...this.props} />
      </div>
    );
  }
}

export default ExampleAllFeatures;
