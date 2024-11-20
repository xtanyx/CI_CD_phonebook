const { test, describe, expect } = require('@playwright/test')

describe('Phonebook', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('Phonebook')).toBeVisible()
    await expect(page.getByText('add a new')).toBeVisible()
  })

  test('adding a new number works', async ({ page }) => {
    await page.goto('')
    await page.getByTestId('newName').fill('Jane Doe')
    await page.getByTestId('newNumber').fill('111-111111')
    await page.getByRole('button', { name: 'add' }).click()
    await expect(page.getByText('Jane Doe 111-111111').first()).toBeVisible()
  })
})