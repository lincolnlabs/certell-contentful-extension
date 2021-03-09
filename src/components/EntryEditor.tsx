import React from 'react';
import {
  Heading,
  Paragraph,
  Note,
  Form,
  SelectField,
  Option,
} from '@contentful/forma-36-react-components';
import { EditorExtensionSDK } from 'contentful-ui-extensions-sdk';

interface EditorProps {
  sdk: EditorExtensionSDK;
}

const Entry = (props: EditorProps) => {
  return (
    <div style={{padding:'20px'}}>
      <Heading>LaTeX Editor</Heading>
    </div>
  )
};

export default Entry;
