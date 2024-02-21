import { render } from '@testing-library/svelte'
import Header from '../components/Header.svelte'

describe('Header Component', () => {
	test('should render the header, navigation links and nutrisync logo', () => {
		const { getByText, getByAltText, getByRole } = render(Header)

		// Check for logo
		const logo = getByRole('img', { name: 'Nutrisync logo' })
		expect(logo).toBeTruthy()

		// Check for navigation links
		const homeLink = getByText('Home')

		expect(homeLink).toBeTruthy()
		expect(homeLink.getAttribute('href')).toBe('/')
		expect(homeLink.classList.contains('nav__element--current')).toBeTruthy() // Check for current state

		const dietLink = getByText('Diet')
		expect(dietLink).toBeTruthy()
		expect(dietLink.getAttribute('href')).toBe('/diet')
		expect(dietLink.classList.contains('nav__element')).toBeTruthy()

		const fridgeLink = getByText('Fridge')
		expect(fridgeLink).toBeTruthy()
		expect(fridgeLink.getAttribute('href')).toBe('/fridge')
		expect(fridgeLink.classList.contains('nav__element')).toBeTruthy()

		const contactLink = getByText('Contact')
		expect(contactLink).toBeTruthy()
		expect(contactLink.getAttribute('href')).toBe('/contact')
		expect(contactLink.classList.contains('nav__element')).toBeTruthy()

		const profileLink = getByAltText('Profile')
		expect(profileLink).toBeTruthy()
		expect(profileLink.classList.contains('nav__element--image')).toBeTruthy()
	})
})
