export class SensorData {
    constructor(
      public ID: number,
      public type: number,
      public Battery: number,
      public Temperature: number,
      public Humidity: number,
      public Luminosity: number,
      public counter: number,
      public TMicro: number
    ) {}
  }
  