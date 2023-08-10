enum GhostName {
  Spirit = 'Spirit',
  Wraith = 'Wraith',
  Phantom = 'Phantom',
  Poltergeist = 'Poltergeist',
  Banshee = 'Banshee',
  Jinn = 'Jinn',
  Mare = 'Mare',
  Revenant = 'Revenant',
  Shade = 'Shade',
  Demon = 'Demon',
  Yurei = 'Yurei',
  Oni = 'Oni',
  Youkai = 'Youkai',
  Hantu = 'Hantu',
  Goryo = 'Goryo',
  Myling = 'Myling',
  Onryo = 'Onryo',
  TheTwins = 'The Twins',
  Raiju = 'Raiju',
  Obake = 'Obake',
  TheMimic = 'The Mimic',
  Moroi = 'Moroi',
  Deogen = 'Deogen',
  Thaye = 'Thaye',
}

enum EvidenceType {
    EMF5 = 'EMF5',
    Orb = 'Ghost Orb',
    SpiritBox = 'Spirit Box',
    Freezing = 'Freezing',
    Fingerprints = 'Finger Prints',
    Writing = 'GhostWriting',
    DOTS = 'D.O.T.S',
}

type Ghost = {
  name: GhostName;
  evidences: EvidenceType[];
};

const ghosts: Ghost[] = [
  {
    name: GhostName.Spirit,
    evidences: [EvidenceType.EMF5, EvidenceType.SpiritBox, EvidenceType.Writing],
  },
  {
    name: GhostName.Wraith,
    evidences: [EvidenceType.DOTS, EvidenceType.Fingerprints, EvidenceType.Freezing],
  },
  {
    name: GhostName.Phantom,
    evidences: [EvidenceType.Orb, EvidenceType.DOTS, EvidenceType.Freezing],
  },
  {
    name: GhostName.Poltergeist,
    evidences: [EvidenceType.SpiritBox, EvidenceType.Fingerprints, EvidenceType.Writing],
  },
  {
    name: GhostName.Banshee,
    evidences: [EvidenceType.EMF5, EvidenceType.Fingerprints, EvidenceType.Freezing],
  },
  {
    name: GhostName.Jinn,
    evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.SpiritBox],
  },
  {
    name: GhostName.Mare,
    evidences: [EvidenceType.SpiritBox, EvidenceType.Freezing, EvidenceType.Orb],
  },
  {
    name: GhostName.Revenant,
    evidences: [EvidenceType.EMF5, EvidenceType.Writing, EvidenceType.Fingerprints],
  },
  {
    name: GhostName.Shade,
    evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Writing],
  },
  {
    name: GhostName.Demon,
    evidences: [EvidenceType.Writing, EvidenceType.Freezing, EvidenceType.Fingerprints],
  },
  {
    name: GhostName.Yurei,
    evidences: [EvidenceType.Orb, EvidenceType.Freezing, EvidenceType.DOTS],
  },
  {
    name: GhostName.Oni,
    evidences: [EvidenceType.EMF5, EvidenceType.Freezing, EvidenceType.DOTS],
  },
  {
    name: GhostName.Youkai,
    evidences: [EvidenceType.EMF5, EvidenceType.Writing, EvidenceType.DOTS],
  },
  {
    name: GhostName.Hantu,
    evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Freezing],
  },
  {
    name: GhostName.Goryo,
    evidences: [EvidenceType.SpiritBox, EvidenceType.Orb, EvidenceType.Writing],
  },
  {
    name: GhostName.Myling,
    evidences: [EvidenceType.EMF5, EvidenceType.Fingerprints, EvidenceType.Writing],
  },
  {
    name: GhostName.Onryo,
    evidences: [EvidenceType.SpiritBox, EvidenceType.Orb, EvidenceType.Writing],
  },
  {
    name: GhostName.TheTwins,
    evidences: [EvidenceType.Fingerprints, EvidenceType.Freezing, EvidenceType.Writing],
  },
  {
    name: GhostName.Raiju,
    evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Writing],
  },
  {
    name: GhostName.Obake,
    evidences: [EvidenceType.Writing, EvidenceType.Fingerprints, EvidenceType.Orb],
  },
  {
    name: GhostName.TheMimic,
    evidences: [EvidenceType.Orb, EvidenceType.Freezing, EvidenceType.Writing],
  },
  {
    name: GhostName.Moroi,
    evidences: [EvidenceType.EMF5, EvidenceType.Fingerprints, EvidenceType.Freezing],
  },
  {
    name: GhostName.Deogen,
    evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Writing],
  },
  {
    name: GhostName.Thaye,
    evidences: [EvidenceType.Orb, EvidenceType.Writing, EvidenceType.Fingerprints],
  },
];

export { GhostName, EvidenceType, ghosts};


/*
function GhostComponent() {

  enum GhostName{'Spirit', 'Wraith', 'Phantom',
    'Poltergeist','Banshe','Jinn',
    'Mare','Revenant','Shade',
    'Demon','Yurei','Oni',
    'Youkai','Hantu','Goryo',
    'Myling','Onryo','The Twins',
    'Raiju','Obake','The Mimic',
    'Moroi','Deogen','Thaye',};

  enum EvidenceType{'EMF5', 'Orb', 'Spirit box',
    'Freezing', 'Fingerprints', 'Writting', 'D.O.T.S'};

type Ghost = {
  name:GhostName
  evidences:EvidenceType[]
};

const Banshe: Ghost = {
  name: GhostName.Banshe,
  evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType["Spirit box"]],
};

const Demon: Ghost = {
  name: GhostName.Demon,
  evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType["Spirit box"]],
};

const Deogen: Ghost = {
  name: GhostName.Deogen,
  evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType["Spirit box"]],
};

/*const rows = [];
  for (let i = 0; i < numrows; i++) {
      rows.push(ObjectRow());
  }
  return tbody(rows); 
  

return (
    <div className='bg-center text-center font-serif'>
      <table>
        <tr>
        {Ghost.slice(0, 3).map((name, index) => (
          <td key={index}>{name}</td>
        ))}
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
        </tr>
      </table>
      <p className='line-through'>{GhostName[0]} {GhostName[1]} {GhostName[2]}</p>
      <p>{GhostName[3]} {GhostName[4]} {GhostName[5]}</p>
      <p>{GhostName[6]} {GhostName[7]} {GhostName[8]}</p>
      <p>{GhostName[9]} {GhostName[10]} {GhostName[11]}</p>
      <p>{GhostName[12]} {GhostName[13]} {GhostName[14]}</p>
      <p>{GhostName[15]} {GhostName[16]} {GhostName[17]}</p>
      <p>{GhostName[18]} {GhostName[19]} {GhostName[20]}</p>
      <p>{GhostName[21]} {GhostName[22]} {GhostName[23]}</p>
      <p>{GhostName[24]}</p>
    
    </div>
);

}


  export default GhostComponent;
*/
