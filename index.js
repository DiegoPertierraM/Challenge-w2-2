import {
  length,
  substring,
  includes,
  indexOf,
  charAt,
  startsWith,
  endsWith,
} from './strings.js';

console.log('length() -> Expected: 4', length([0, 5, 7, 'fsa']));
console.log('substring() -> Expected: enve', substring('bienvenido', 2, 6));
console.log(
  'includes() -> Expected: true',
  includes('Mi perro es azul y veloz', '')
);
console.log(
  'includes() -> Expected: true',
  includes('Mi perro es azul y veloz', 'azul')
);
console.log(
  'includes() -> Expected: false',
  includes('A veces voy a dar un paseo por el parque', 'paso')
);
console.log(
  'indexOf() -> Expected: 16',
  indexOf('La casa de Pepe es muy grande', 'es', 5)
);
console.log(
  'indexOf() -> Expected: -1',
  indexOf('Mi amigo es amarillo', 'verde')
);
console.log('charAt() -> Expected: é', charAt('Murciélago', 5));
console.log(
  'startsWith() -> Expected: true',
  startsWith('Ballena azul jorobada', 'Ball')
);
console.log(
  'startsWith() -> Expected: true',
  startsWith('Ballena azul jorobada', 'Balli')
);
console.log(
  'endsWith() -> Expected: true',
  endsWith('Ballena azul jorobada', 'jorobada')
);
console.log(
  'endsWith() -> Expected: true',
  endsWith('Ballena azul jorobada', 'ubada')
);
