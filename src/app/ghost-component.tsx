import React from "react";
import {ghosts} from "./ghostsandevidences";

const GhostComponent = () => {
  return (
    <div className='bg-center font-extralight'>

        <div className='h-56 grid grid-cols-3 gap-4 text-center'>
          {ghosts.map((ghost, index) => (
            <div key={index} className='' >
              <p className='p-1 text-left'>{ghost.name}</p>
              {/*<td className='p-1 text-left'>{ghost.evidences.join(", ")}</td>*/}
            </div>
          ))}
    </div>
    </div>
  );
};

export default GhostComponent;