import { assert } from 'chai';
import { Dog } from '../src/models/dog';
import { PetSize } from '../src';

describe('Dog', () => {
  it('Calculate food for a month for a Toy', () => {
    const dog = new Dog();
    assert.equal(
      dog
        .setProperty('size', PetSize.TOY)
        .getFoodMonths(1),
      2100
    );
  });

  it('Calculate food for a month for a Small', () => {
    const dog = new Dog();
    assert.equal(
      dog
        .setProperty('size', PetSize.SMALL)
        .getFoodMonths(1),
      4200
    );
  });

  it('Calculate food for a month for a Medium', () => {
    const dog = new Dog();
    assert.equal(
      dog
        .setProperty('size', PetSize.MEDIUM)
        .getFoodMonths(1),
      1035
    );
  });

  it('Calculate food for a month for a Big', () => {
    const dog = new Dog();
    assert.equal(
      dog
        .setProperty('size', PetSize.BIG)
        .getFoodMonths(1),
      16350
    );
  });
});
