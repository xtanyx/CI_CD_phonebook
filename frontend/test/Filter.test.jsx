import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Filter from '../src/components/Filter'

test('handle is called when filter text is changed', async () => {

  const mockHandler = vi.fn()
  const user = userEvent.setup()

  render(<Filter value={''} handleOnChangeFilter={mockHandler}/>)

  const input = screen.getByRole('textbox')

  await user.type(input, 'testing')

  expect(mockHandler.mock.calls).toHaveLength(7)
})