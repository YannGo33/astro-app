import {
  magnification,
  exitPupil,
  trueFieldOfView
} from './core/optics/index.js';

import { toRadians } from './core/angles/angles.js';

// 🔭 Exemple réaliste télescope
const telescopeFocal = { value: 1200, unit: 'mm' } as const;
const eyepieceFocal = { value: 25, unit: 'mm' } as const;
const diameter = { value: 200, unit: 'mm' } as const;
const apparentFov = 50;
const angle = { value: 45, unit: 'deg' } as const;


// 🔍 Calculs
const G = magnification({
  telescopeFocal,
  eyepieceFocal
});

const P = exitPupil({
  diameter,
  magnification: G
});

const CR = trueFieldOfView({
  apparentFov,
  magnification: G
});

const rad = toRadians(angle);

// 🖨️ Affichage
console.log('--- Configuration télescope ---');
console.log('Focale télescope:', telescopeFocal);
console.log('Focale oculaire:', eyepieceFocal);
console.log('Diamètre:', diameter);
console.log('Champ apparent:', apparentFov, '°');

console.log('\n--- Résultats ---');
console.log('Grossissement:', G.toFixed(2), 'x');
console.log('Pupille de sortie:', P.toFixed(2), 'mm');
console.log('Champ réel:', CR.toFixed(2), '°');


console.log('\n--- Angles ---');
console.log('45° en radians =', rad);
console.log('sin(45°) =', Math.sin(rad));