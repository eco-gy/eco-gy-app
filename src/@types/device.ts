export type StatType = {
  name: string,
  value: string,
  unit: string,
}

export type DeviceData = {
  name: string,
  id: string,
  status: string,
  stats: StatType[]
}
