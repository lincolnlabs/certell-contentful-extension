import React, {useState, useEffect} from 'react';
import { Paragraph } from '@contentful/forma-36-react-components';
import { SingleLineEditor } from '@contentful/field-editor-single-line';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import { Editor } from '@tinymce/tinymce-react';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: any) => {

  const handleEditorChange = (content: any, editor: any) => {
    props.sdk.field
      .setValue(content)
        .then((data: any) => {
          return;
        })
        .catch((err: any) => {
          return;
        });
  }

  useEffect(() => {
    props.sdk.window.updateHeight(400);
    // Handler for external field value changes.
    // Callback for changes of the field value.
    
  })

  return <Editor
  apiKey='imnh9rw9d2di202xhvrrls396z0di9582tj4q9oedgh3v0rs' 
  initialValue="<p>This is the initial content of the editor</p>"
  init={{
    height: 200,
    menubar: false,
    external_plugins: {
      'tiny_mce_wiris':'https://certell-contentful-extension.s3.amazonaws.com/plugin.min.js'
    },
    plugins: [
    ],
    toolbar:
      'tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry'
  }}
  onEditorChange={handleEditorChange}
/>
};

export default Field;
