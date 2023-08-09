import React from "react";
import { GhostName, EvidenceType, Ghost, ghosts } from "./ghosts-evidences";

const GhostComponent = () => {
  return (
    <div className='bg-center text-center font-extralight'>
      <table className="bg-amber-900 bg-opacity-40 top-1/2 left-1/2 shadow-xl">
        <tbody >
          {ghosts.map((ghost, index) => (
            <tr key={index} className='border-b border-gray-700' >
        
              <td className='p-1 text-left'>{ghost.name}</td>
              <td className='p-1 text-left'>{ghost.evidences.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GhostComponent;