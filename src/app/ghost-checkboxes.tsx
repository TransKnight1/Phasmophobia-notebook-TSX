import React from 'react';
import { EvidenceType } from './ghostsandevidences';

const GhostCheckBoxes = () => {
  const allEvidenceTypes = Object.values(EvidenceType);

  return (
      <table>
        {allEvidenceTypes.map((evidence, index) => (
          <tr key={index}>
            <input type="checkbox"></input>
            <label>{evidence}</label>
          </tr>
        ))}
      </table>
  );
};

export default GhostCheckBoxes;