export type StatType = {
  name: string,
  value: number,
  unit: string,
}

export type DeviceData = {
  name: string,
  uuid: string,
  status: string,
  stats: StatType[]
}
