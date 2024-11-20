import elementsData from './periodic-table.json';

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  atomic_mass: number;
}

export function getElectronConfig(elementNumber: number): string | null {
  const element = elementsData.elements.find((el: ElementData) => el.number === elementNumber);
  if (!element) {
    return null;
  }

  // Regla de Madelung: orden de llenado de los orbitales
  const orbitals = [
    { label: '1s', maxElectrons: 2 },
    { label: '2s', maxElectrons: 2 },
    { label: '2p', maxElectrons: 6 },
    { label: '3s', maxElectrons: 2 },
    { label: '3p', maxElectrons: 6 },
    { label: '4s', maxElectrons: 2 },
    { label: '3d', maxElectrons: 10 },
    { label: '4p', maxElectrons: 6 },
    { label: '5s', maxElectrons: 2 },
    { label: '4d', maxElectrons: 10 },
    { label: '5p', maxElectrons: 6 },
    { label: '6s', maxElectrons: 2 },
    { label: '4f', maxElectrons: 14 },
    { label: '5d', maxElectrons: 10 },
    { label: '6p', maxElectrons: 6 },
    { label: '7s', maxElectrons: 2 },
    { label: '5f', maxElectrons: 14 },
    { label: '6d', maxElectrons: 10 },
    { label: '7p', maxElectrons: 6 },
  ];

  let remainingElectrons = element.number;
  const config: string[] = [];

  for (const orbital of orbitals) {
    if (remainingElectrons <= 0) {
      break;
    }

    const electronsInOrbital = Math.min(remainingElectrons, orbital.maxElectrons);
    config.push(`${orbital.label}${electronsInOrbital}`);
    remainingElectrons -= electronsInOrbital;
  }

  return config.join(' ');
}

export function getRandomElement(): ElementData {
  const randomIndex = Math.floor(Math.random() * elementsData.elements.length);
  return elementsData.elements[randomIndex];
}