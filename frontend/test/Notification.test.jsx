import { render, screen } from '@testing-library/react'
// eslint-disable-next-line no-unused-vars
import Notification from '../src/components/Notification'

// eslint-disable-next-line no-undef
test('notification message is rendered', () => {
  const message = 'something is rendered'
  const isSuccess = true

  render(<Notification message={message} isSuccess={isSuccess}/>)

  const element = screen.getByText(`${message}`)
  // eslint-disable-next-line no-undef
  expect(element).toBeDefined()
})