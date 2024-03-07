import { Bracket } from "./types"

export const taxBrackets: {
    [key: string]: Bracket[]
  } = {
    '2019-2020': [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 37000, rate: 0.19 },
      { min: 37001, max: 90000, rate: 0.325 },
      { min: 90001, max: 180000, rate: 0.37 },
      { min: 180001, max: Infinity, rate: 0.45 },
    ],
    '2020-2021': [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 45000, rate: 0.19 },
      { min: 45001, max: 120000, rate: 0.325 },
      { min: 120001, max: 180000, rate: 0.37 },
      { min: 180001, max: Infinity, rate: 0.45 },
    ],
    '2021-2022': [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 45000, rate: 0.19 },
      { min: 45001, max: 120000, rate: 0.325 },
      { min: 120001, max: 180000, rate: 0.37 },
      { min: 180001, max: Infinity, rate: 0.45 },
    ],
    '2022-2023': [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 45000, rate: 0.19 },
      { min: 45001, max: 120000, rate: 0.325 },
      { min: 120001, max: 180000, rate: 0.37 },
      { min: 180001, max: Infinity, rate: 0.45 },
    ],
    '2023-2024': [
      { min: 0, max: 18200, rate: 0 },
      { min: 18201, max: 45000, rate: 0.19 },
      { min: 45001, max: 120000, rate: 0.325 },
      { min: 120001, max: 180000, rate: 0.37 },
      { min: 180001, max: Infinity, rate: 0.45 },
    ],
  }