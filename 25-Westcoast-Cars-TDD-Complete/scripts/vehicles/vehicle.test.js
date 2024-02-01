// Vi vill testa vår vehicle klass...

import { beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { Vehicle } from './vehicle.js';
let vehicle;

beforeEach(() => {
  vehicle = new Vehicle();
});

describe('Klassen vehicle', () => {
  it('ska ha en egenskap isSaved', () => {
    // Assert...
    expect(vehicle).toHaveProperty('isSaved');
  });

  it('isSaved ska initialt vara false', () => {
    // Assert...
    expect(vehicle.isSaved).toBeFalsy();
  });

  it('ska ha en egenskap som heter manufacturer', () => {
    // Arrange...
    // Act...
    // Assert
    expect(vehicle).toHaveProperty('manufacturer');
  });

  it('ska ha en egenskap model', () => {
    expect(vehicle).toHaveProperty('model');
  });
});

describe('Metoden save()', () => {
  it('ska ha en metod save för att spara bilen', () => {
    // Act...
    vehicle.save();
    expect(vehicle.save()).not.toBeDefined();
  });

  it('metoden save ska sätta egenskapen isSaved till "true"', () => {
    // Act...
    vehicle.save();

    // Assert...
    expect(vehicle.isSaved).toBeTruthy();
  });
});
