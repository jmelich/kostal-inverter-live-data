type Row = {
  value: number,
  unit: string
}

export interface Measurement {
  acVoltage: Row,
  acFrequency: Row,
  dcVoltage1: Row,
  dcVoltage2: Row,
  dcPowerTotal: Row,
  temp: Row,
  linkVoltage: Row,
  gridPower: Row,
  gridConsumedPower: Row,
  gridInjectedPower: Row,
  ownConsumedPower: Row,
  derating: Row

}
