import * as readline from 'readline'
import { calculateTax } from './taxCalculator'
import { taxBrackets } from '../utils/taxBrackets'

// interface for reading input from command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askForRepeatCalculation = () => {
  rl.question('Do you want to calculate tax again? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      input()
    } else {
      rl.close()
      console.log('Thank You for using the service!!')
    }
  })
}

const validateUserInput = (income: any, year: any) => {
  if (isNaN(income) || income <= 0) {
    throw new Error('Invalid income. Income must be a positive number.')
  }
  if (!taxBrackets[year]) {
    throw new Error('Invalid assessment year.')
  }
}

const input = () => {
  rl.question('Enter your taxable income: ', (incomeInput) => {
    rl.question('Enter the assessment year (e.g., 2021-2022, 2022-2023, 2023-2024): ', async (yearInput) => {
      // Calculate tax
      try {
        const income = parseFloat(incomeInput)
        // Validate user input
        validateUserInput(income, yearInput)
        const taxAmount = await calculateTax(income, yearInput)
        console.log(
          `Tax on income $${income.toFixed(2)} for assessment year ${yearInput} is $${taxAmount.toFixed(2)}.`,
        )
      } catch (error) {
        console.log((error as Error).message || 'An error occurred during tax calculation.')
      }
      askForRepeatCalculation()
    })
  })
}

export const askForInput = () => {
  input()
}
