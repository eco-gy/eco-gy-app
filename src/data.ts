import { DeviceData } from "./@types/device";

  export const deviceData: DeviceData[] = [
    {
      name: "Laptop Victor",
      uuid: "42",
      status: "on",
      stats: [
        {
          name: "Consumption",
          value: 34,
          unit: "W/h",
        },
        {
          name: "CO2",
          value: 120,
          unit: "kg",
        },
      ],
    },
    {
      name: "Desktop",
      uuid: "128",
      status: "off",
      stats: [
        {
          name: "Consumption",
          value: 0,
          unit: "W/h",
        },
        {
          name: "CO2",
          value: 0,
          unit: "kg",
        },
      ],
    },
  ];
