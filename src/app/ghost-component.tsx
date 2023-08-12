import React from "react";
import {ghosts} from "./ghostsandevidences";

const GhostComponent = () => {
  return (
        <div className='bg-clip-padding bg-amber-700 grid grid-cols-3 gap-4 font-extralight'>
          {ghosts.map((ghost, index) => (
            <div key={index} className='' >
              <p className='text-center'>{ghost.name}</p>
            </div>
          ))}
    </div>
  );
};

export default GhostComponent;