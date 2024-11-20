import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// eslint-disable-next-line no-unused-vars
import Filter from '../src/components/Filter'

// eslint-disable-next-line no-undef
test('handle is called when filter text is changed', async () => {

  // eslint-disable-next-line no-undef
  const mockHandler = vi.fn()
  const user = userEvent.setup()

  render(<Filter value={''} handleOnChangeFilter={mockHandler}/>)

  const input = screen.getByRole('textbox')

  await user.type(input, 'testing')

  // eslint-disable-next-line no-undef
  expect(mockHandler.mock.calls).toHaveLength(7)
})