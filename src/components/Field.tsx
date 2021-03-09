import React, {useState, useEffect} from 'react';
import { Paragraph } from '@contentful/forma-36-react-components';
import { SingleLineEditor } from '@contentful/field-editor-single-line';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import katex from 'katex';
// import Latex from './Latex';
// const Latex = require('react-latex');

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: any) => {
  let [math, setMath] = useState('');
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  let sqrt = katex.renderToString("\\sqrt{}", {
    throwOnError: false
  });

  let sqrt2 = katex.renderToString("\\sqrt[n]{ab}", {
    throwOnError: false
  });
  let superscript = katex.renderToString("x^2", {
    throwOnError: false
  });
  let times = katex.renderToString("\\times", {
    throwOnError: false
  });
  let subscript = katex.renderToString("x_2", {
    throwOnError: false
  });
  let frac = katex.renderToString("\\frac{ab}{cd}", {
    throwOnError: false
  });
  let emptyset = katex.renderToString("\\emptyset", {
    throwOnError: false
  });
  let div = katex.renderToString("\\div", {
    throwOnError: false
  });

  const handleMathClick = (e: any) => {
    console.log(e)
  }

  useEffect(() => {
    let data;
    props.sdk.window.updateHeight(600);
    props.sdk.field.onValueChanged(function(val: any) {
      if (val !== math) {
        data = katex.renderToString(`${val}`, {
          throwOnError: false
        });
        setMath(data);
      }
    })
  })

  return <div>
    {/* <div className="katex-keyboard">
      <button dangerouslySetInnerHTML={{__html:sqrt}} onClick={handleMathClick}></button>
      <button data-tex="\\sqrt{\\sqrt{\left(\right)}}" dangerouslySetInnerHTML={{__html:sqrt2}} onClick={handleMathClick}></button>
      <button dangerouslySetInnerHTML={{__html:superscript}} onClick={handleMathClick}></button>
      <button dangerouslySetInnerHTML={{__html:subscript}} onClick={handleMathClick}></button>
      <button dangerouslySetInnerHTML={{__html:times}} onClick={handleMathClick}></button>
      <button dangerouslySetInnerHTML={{__html:div}} onClick={handleMathClick}></button>
      <button dangerouslySetInnerHTML={{__html:frac}} onClick={handleMathClick}></button>
      <button dangerouslySetInnerHTML={{__html:emptyset}} onClick={handleMathClick}></button>
    </div> */}
    {/* <SingleLineEditor field={props.sdk.field} locales={props.sdk.locales} /> */}
    <Paragraph>Equation preview</Paragraph>
    {/* <div style={{margin:'40px 0'}}>
      <p dangerouslySetInnerHTML={{__html:math}}></p>
    </div> */}
    <div>
      {/* <Latex>What is $(3\times 4) \div (5-3)$</Latex> */}
    </div>
    </div>
};

export default Field;
