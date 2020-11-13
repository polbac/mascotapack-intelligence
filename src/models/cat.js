import { Pet, PetType } from './pet';

export class Cat extends Pet {
  constructor() {
    super([]);
    this.setProperty('type', PetType.CAT);
  }
}

export const CatRace = [
  'Maine Coon',
  'Persa',
  'Sphynx o Esfinge',
  'Saimés',
  'Bengalí',
  'Exótico',
  'Bosque de Noruega',
  'Siberiano',
  'Azul Ruso',
  'Ragdoll',
  'British Shorthair',
  'Oriental',
  'Birmano',
  'Angora Turco',
  'Van Turco',
  'Himalayo',
  'Savannah',
  'Nebelung',
  'PeterBald',
  'Lykoi',
  'Munchkin',
  'Burmés',
  'Curl Americano',
  'Scottish Fold',
  'Burmilla',
  'Abisinio',
  'Bombay',
  'Korat',
  'Bobtail Japonés',
  'Balinés',
  'Singapura',
  'Laperm',
  'Devon Rex',
  'Cornish Rex',
  'Selkirk Rex',
  'Común Europeo',
  'Snowshoe',
  'Cartujo',
  'Mau Egipcio',
  'Ocicat',
  'Toyger',
  'Manx',
  'Ragamuffin',
];
