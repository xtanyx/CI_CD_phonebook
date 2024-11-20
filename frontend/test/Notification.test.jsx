import { render, screen } from '@testing-library/react'
import Notification from '../src/components/Notification'

test('notification message is rendered', () => {
  const message = 'something is rendered'
  const isSuccess = true

  render(<Notification message={message} isSuccess={isSuccess}/>)

  const element = screen.getByText(`${message}`)
  expect(element).toBeDefined()
})