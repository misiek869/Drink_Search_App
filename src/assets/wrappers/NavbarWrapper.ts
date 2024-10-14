import styled from 'styled-components'

const Wrapper = styled.nav`
	background: var(--white);
	.nav-center {
		width: var(--view-width);
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 1.25rem 2rem;
	}
	.logo {
		font-size: clamp(1.5rem, 3vw, 3rem);
		color: var(--primary-500);
		font-weight: 700;
		letter-spacing: 1px;
	}
	.logo-span {
		color: var(--primary-600);
	}

	.nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.nav-link {
		color: var(--grey-700);
		padding: 0.5rem 0.5rem 0.5rem 0;
		font-weight: 500;
		transition: var(--transition);
		letter-spacing: 1px;

		&:hover {
			color: var(--primary-500);
			/* font-weight: 500; */
		}
	}

	@media (min-width: 768px) {
		.nav-center {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 1.25rem 2rem;
		}

		.nav-links {
			flex-direction: row;
			margin-top: 0rem;
			background-color: var(--grey-50);
			box-shadow: var(--shadow-3);
			padding: 0.5rem 2rem;
			border-radius: 10px;
			gap: 1rem;
		}
	}
`

export default Wrapper
