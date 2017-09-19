import React from 'react';
import LeadForm from 'ps-react/LeadForm';

/** Standard LeadForm */
export default function ExampleStandard() {
  return (
    <LeadForm action="." className="testclass" htmlId="testformId" method="post" name="LeadFormName" />
  );
}
