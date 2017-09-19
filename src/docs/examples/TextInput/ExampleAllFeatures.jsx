import React from 'react';
import TextInput from 'ps-react/TextInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {

  render() {
    return (
      <div>
        <TextInput
          htmlId="test"
          cssClass="testClass"
          label="testLabel"
          pattern="testPattern"
          title="testTitle"
          name="test"
          value=""
          onChange={() => {}}
          required
          {...this.props} />
      </div>
    );
  }
}

export default ExampleAllFeatures;
