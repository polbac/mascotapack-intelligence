import { Pet, PetType, PetSize } from './pet';

const FOOD_IN_GR_PER_DAY_BY_WEIGHT = {
// DOG WEIGHT ::  GRS PER DAY
  90: 995,
  70: 820,
  55: 680,
  40: 535,
  25: 380,
  15: 255,
  10: 190,
  5: 115,
  2: 60,
  0: 0,
};

const DOG_SIZE_WIGHT_IN_KLS = {
  [PetSize.GIANT]: FOOD_IN_GR_PER_DAY_BY_WEIGHT[50],
  [PetSize.BIG]: FOOD_IN_GR_PER_DAY_BY_WEIGHT[20],
  [PetSize.MEDIUM]: FOOD_IN_GR_PER_DAY_BY_WEIGHT[10],
  [PetSize.SMALL]: FOOD_IN_GR_PER_DAY_BY_WEIGHT[5],
  [PetSize.TOY]: FOOD_IN_GR_PER_DAY_BY_WEIGHT[0],
};  

const getGrsPerDayByWeight(weight) {
  const wholeList = 
}

export class Dog extends Pet {
  constructor() {
    super([
      'bite',
    ]);

    this.setProperty('type', PetType.DOG);
  }

  calculateFood(months) {
    if (!this.getProperty('size')) {
      throw new Error('You must pass a size to calculate food');
    }

    const fromGrs = DOG_SIZE_WIGHT_IN_KLS[this.getProperty('size')];
    const nextSizeIndex = DOG_SIZE_IN_ORDER.indexOf(this.getProperty('size')) + 1;
    const nextSize = DOG_SIZE_IN_ORDER[nextSizeIndex];
    const toGrs = nextSize ? DOG_SIZE_WIGHT_IN_KLS[nextSize] : fromGrs;

    const grsPerDay = fromGrs + ((toGrs - fromGrs) / 2);

    return (grsPerDay * 30) * months;
  }
}

export const Bite = {
  SMALL: 'Pequena',
  BIG: 'Grande',
};

export const DogRace = [
  'Alaskan Malamute',
  'American Staffordshire Terrier',
  'American Water Spaniel',
  'Antiguo Pastor Inglés',
  'Basset Azul de Gaseogne',
  'Basset Hound',
  'Basset leonado de Bretaña',
  'Beagle',
  'Bearded Collie',
  'Bichón Maltés',
  'Bobtail',
  'Border Collie',
  'Boston Terrier',
  'Boxer',
  'Bull Terrier',
  'Bulldog Americano',
  'Bulldog Francés',
  'Bulldog Inglés',
  'Caniche',
  'Carlino',
  'Chihuahua',
  'Cirneco del Etna',
  'Chow Chow',
  'Cocker Spaniel Americano',
  'Cocker Spaniel Inglés',
  'Dálmata',
  'Dobermann',
  'Dogo Alemán',
  'Dogo Argentino',
  'Alano',
  'Dogo de Burdeos',
  'Finlandés',
  'Fox Terrier de pelo liso',
  'Fox Terrier',
  'Foxhound Americano',
  'Foxhound Inglés',
  'Galgo Afgano',
  'Gigante de los Pirineos',
  'Golden Retriever',
  'Gos d Atura',
  'Gran Danés',
  'Husky Siberiano',
  'Laika de Siberia Occidental',
  'Laika Ruso-europeo',
  'Labrador Retriever',
  'Mastín del Pirineo',
  'Mastin del Tibet',
  'Mastín Español',
  'Mastín Napolitano',
  'Mestizo',
  'Pastor Alemán',
  'Pastor Australiano',
  'Pastor Belga',
  'Pastor de Brie',
  'Pastor de los Pirineos de Cara Rosa',
  'Pekinés',
  'Perdiguero Chesapeake Bay',
  'Perdiguero de Drentse',
  'Perdiguero de Pelo lido',
  'Perdiguero de pelo rizado',
  'Perdiguero Portugués',
  'Pitbull',
  'Podenco Ibicenco',
  'Podenco Portugués',
  'Presa canario',
  'Presa Mallorquin',
  'Rottweiler',
  'Rough Collie',
  'Sabueso Español',
  'Sabueso Hélenico',
  'Sabueso Italiano',
  'Sabueso Suizo',
  'Samoyedo',
  'San Bernardo',
  'Scottish Terrier',
  'Setter Irlandés',
  'Shar Pei',
  'Shiba Inu',
  'Siberian Husky',
  'Staffordshire Bull Terrier',
  'Teckel',
  'Terranova',
  'Terrier Australiano',
  'Terrier Escocés',
  'Terrier Irlandés',
  'Terrier Japonés',
  'Terrier Negro Ruso',
  'Terrier Norfolk',
  'Terrier Norwich',
  'Yorkshire Terrier',
];
