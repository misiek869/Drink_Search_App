import styled from 'styled-components'

const Wrapper = styled.div`
	background: var(--grey-200);
	padding: 1rem 2rem;
	border: 1px solid var(--grey-300);
	border-radius: var(--borderRadius);
	box-shadow: var(--shadow-3);

	header {
		margin-bottom: 4rem;
		text-align: center;

		h3 {
			font-weight: 600;
		}
	}
	.img {
		border-radius: var(--borderRadius);
		box-shadow: var(--shadow-4);
	}

	.drink-info {
		/* padding-top: 1rem; */
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
		padding: 0.35rem 0.75rem;
		border-radius: var(--borderRadius);
		color: var(--grey-100);
		letter-spacing: 1px;
		text-align: center;
	}

	.ing {
		display: inline-block;
		margin-right: 0.5rem;
	}

	.back-home-btn {
		display: flex;
		justify-content: flex-end;
		margin-top: 4rem;
		.btn {
			padding: 0.75rem 1.5rem;
		}
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
