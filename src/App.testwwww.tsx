import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders hello world heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument()
  })

  it('renders dummy description', () => {
    render(<App />)
    expect(screen.getByText(/this is a dummy app component/i)).toBeInTheDocument()
  })
})
