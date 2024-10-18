import styled from 'styled-components'

const Wrapper = styled.article`
	background: var(--grey-200);
	box-shadow: var(--shadow-2);
	transition: var(--transition);
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: var(--borderRadius);

	&:hover {
		box-shadow: var(--shadow-4);
		background: var(--grey-100);
	}

	img {
		height: 15rem;
		border-top-right-radius: var(--borderRadius);
		border-top-left-radius: var(--borderRadius);
	}

	.footer {
		padding: 1.5rem;

		h4,
		h5 {
			margin-bottom: 0.5rem;
		}
		h4 {
			font-weight: 600;
		}
		p {
			margin-bottom: 1rem;
		}
		p {
			color: var(--grey-400);
		}
	}
`

export default Wrapper
