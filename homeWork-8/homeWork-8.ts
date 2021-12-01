// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData
type Stage = {
  engineThrust: number;
  engineCount: number;
  engineType: string;
};

type VehicleType = {
  type: string;
  brand: string;
  model: string;
  platform: string;
  drive: {
    type: string;
    stages: Stage[];
    power: number;
    torque: number;
    totalPower: number;
    engineCount: number;
    supportedEnvironments: string[];
  };
};

export const vehicles: VehicleType[] = VehicleData;

// реализуйте класс "Транспортное средство" и его потомков
// Ожидаемый вывод getTitle - "VAZ - 2105"
// Ожидаемый вывод getInfo:
//   для всех, кроме вертолётов - "Supported environments: {env}" с
//       перечислением всех доступных окружающих сред
//   для космических кораблей - "Total thrust: {calc}kN Engine count: {cnt}",
//       вместо {calc} - общая тага всех ступеней, вместо {cnt} - общее
//       количество двигателей.
//   для автомобилей - "Power: {pwr}HP Torque: {Tq}Nm", с выводом соотв. значений
//   для вертолётов - "Under secret"

class Vehicle {
  props: VehicleType;
  constructor(vehicle: VehicleType) {
    this.props = vehicle;
  }

  getTitle(): string {
    return this.props.brand + " " + this.props.model;
  }
  getInfo(): string {
    return `Supported environments: ${this.props.drive.supportedEnvironments}`;
  }
}

class Spacecraft extends Vehicle {
  calc: number = this.props.drive.stages.reduce(
    (sum, stage) => stage.engineThrust + sum,
    0
  );
  cnt: number = this.props.drive.stages.reduce(
    (sum, stage) => stage.engineCount + sum,
    0
  );
  getInfo(): string {
    return `${super.getInfo()}. 
    Total thrust: ${this.calc}kN Engine count: ${this.cnt
      }`;
  }
}

class Car extends Vehicle {
  pwr: number = this.props.drive.power;
  tq: number = this.props.drive.torque;
  getInfo() {
    return `${super.getInfo()}. 
    Power: ${this.pwr}HP Torque: ${this.tq}Nm`;
  }
}

class Helicopter extends Vehicle {
  getInfo(): string {
    return "Under secret";
  }
}

// реализйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
  switch (vehicle.type) {
    case "Spacecraft":
      return new Spacecraft(vehicle);
    case "Car":
      return new Car(vehicle);
    case "Helicopter":
      return new Helicopter(vehicle);
    default:
      return new Vehicle(vehicle);
  }
}
