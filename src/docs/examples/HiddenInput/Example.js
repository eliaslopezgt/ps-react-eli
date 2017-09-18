import React from 'react';
import HiddenInput from 'ps-react/HiddenInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {

  render() {
    return (
      <HiddenInput
      name="testname"
      value="testvalue"
      {...this.props} />
    )
  }
}

export default ExampleAllFeatures;
