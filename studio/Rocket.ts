import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
  name: string;
  massKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];
  totalCapacityKg: number;

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let sum: number = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].massKg;
    }
    return sum;
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    } else {
      return false;
    }
  }

  addCargo(cargo: Cargo) {
    let addingCargo = this.canAdd(cargo);
    if (addingCargo === true) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut) {
    let addingAstronaut = this.canAdd(astronaut);
    if (addingAstronaut === true) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
