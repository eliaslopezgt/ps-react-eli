import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, regex pattern and required. */
function TextInput({htmlId, name, label, type = "text", onChange, placeholder, value, children, pattern, ...props}) {
  return (
    <div>
      <Label htmlFor={htmlId} label={label} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
        {...props}/>
        {children}
    </div>
  );
};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** Child component to display next to the input */
  children: PropTypes.node,

  /** Regex Validation Pattern */
  pattern: PropTypes.string
};

export default TextInput;
