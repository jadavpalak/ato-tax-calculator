import { calculateTax } from './taxCalculator';

describe('calculateTax function', () => {
  it('should calculate tax correctly for valid input', async () => {
    // Test with income within the first tax bracket
    const taxAmount1 = await calculateTax(10000, '2021-2022');
    expect(taxAmount1).toBe(0);

    // Test with income within the second tax bracket
    const taxAmount2 = await calculateTax(25000, '2021-2022');
    expect(taxAmount2).toBeCloseTo(1292, 0); // Expected tax amount for 25000 income in 2021-2022

    // Test with income within the third tax bracket
    const taxAmount3 = await calculateTax(60000, '2021-2022');
    expect(taxAmount3).toBeCloseTo(9967, 0); // Expected tax amount for 60000 income in 2021-2022
  });

  it('should throw error for invalid assessment year', async () => {
    await expect(calculateTax(50000, '2020-2025')).rejects.toThrowError('Tax brackets not available for the specified assessment year.');
  });

  it('should handle zero income', async () => {
    const taxAmount = await calculateTax(0, '2021-2022');
    expect(taxAmount).toBe(0);
  });

  it('should handle negative income', async () => {
    const taxAmount = await calculateTax(-550000, '2021-2022');
    expect(taxAmount).toBe(0);
  });

});
