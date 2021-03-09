import React from 'react';


interface LatexProps {
  rawLatex: string;
}

const Latex: React.FC<LatexProps> = ({ rawLatex }) => {
  return <div>{rawLatex}</div>;
};

export default Latex;