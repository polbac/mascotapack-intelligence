export const PetType = {
  DOG: 'Perro',
  CAT: 'Gato',
};

export const PetSize = {
  GIANT: 'Giant',
  BIG: 'Large',
  MEDIUM: 'Medium',
  SMALL: 'Small',
  TOY: 'Toy',
};

export const PetAge = {
  PUPPY: 'Cachorro',
  ADULT: 'Adulto',
  SENIOR: 'Sennior',
};

export const HealthProblems = {
  ALLERGY: 'Hipoalergenico',
  OBESITY: 'SobrePeso',
  URINARY: 'Urinario',
  RENAL: 'Renal',
  STERIL: 'Esterelizado',
  GASTRO: 'Gastrointestinal',
};

export const Sex = {
  FEMALE: 'Hembra',
  MALE: 'Macho',
};

export class Pet {
  constructor(props) {
    this.props = [
      'type',
      'size',
      'sex',
      'healthProblems',
      'age',
      'race',
      'food',
      'accesories',
      ...props,
    ];
    this.createProperties();
  }

  createProperties() {
    this.props.forEach((prop) => { this[prop] = null; });
  }


  addHealthProblem(healthProblem) {
    const healthProblems = this.getProperty('healthProblems') || [];
    healthProblems.push(healthProblem);
    this.setHealthProblems(healthProblems);
    return this;
  }

  setHealthProblems(healthProblems) {
    this.setProperty('healthProblems', healthProblems);
    return this;
  }

  setProperty(prop, value) {
    if (!(prop in this)) {
      throw new Error(`Prop ${prop} doesnt exist`);
    }

    this[prop] = value;
    return this;
  }

  getProperty(prop) {
    if (!(prop in this)) {
      throw new Error(`Prop ${prop} doesnt exist`);
    }

    return this[prop];
  }

  getFoodMonths(months) {
    return this.calculateFood(months);
  }
}
