import styled from 'styled-components'

const Wrapper = styled.div`
	header {
		margin-bottom: 2rem;

		.btn {
			margin-bottom: 1rem;
		}
	}
	.img {
		border-radius: var(--borderRadius);
		box-shadow: var(--shadow-4);
	}

	.drink-info {
		padding-top: 2rem;
	}

	.drink-info p {
		font-weight: 600;
		text-transform: capitalize;
		line-height: 2;
		margin-bottom: 1rem;
	}

	.drink-data {
		margin-right: 0.5rem;
		font-weight: 700;
		background-color: var(--primary-500);
		padding: 0.25rem 0.5rem;
		border-radius: var(--borderRadius);
		color: var(--grey-100);
		letter-spacing: 1px;
	}

	.ing {
		display: inline-block;
		margin-right: 0.5rem;
	}

	@media (min-width: 992px) {
		.drink {
			display: grid;
			grid-template-columns: 2fr 3fr;
			gap: 3rem;
			align-items: top;
		}
	}
`

export default Wrapper
