import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from '.'

describe('navbar', () => {
  it('should show logo', () => {
    render(<Navbar />, { wrapper: BrowserRouter })

    expect(screen.getByText('Fake Store')).toBeInTheDocument()
  })

  it('should contain required menu', async () => {
    render(<Navbar />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('link', { name: 'Limited Offer' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Categories' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
  })
})
