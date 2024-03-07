import { taxBrackets } from "../utils/taxBrackets"
import { Bracket } from "../utils/types"

// Function to calculate tax
export const calculateTax = async (income: number, assessmentYear: string) => {
  const brackets = taxBrackets[assessmentYear]
  if (!brackets) {
    throw new Error('Tax brackets not available for the specified assessment year.')
  }

  let tax = 0
  let remainingIncome = income

  brackets.forEach((bracket:Bracket) => {
    if (remainingIncome > 0) {
      const taxableAmount = Math.min(remainingIncome, bracket.max - bracket.min)
      tax +=  taxableAmount * bracket.rate
      remainingIncome -= taxableAmount
    }
  })

  return tax
}
