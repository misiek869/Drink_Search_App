import styled from 'styled-components'

const Wrapper = styled.button`
	background: transparent;
	border-color: transparent;
	padding: 0 1rem;
	left: 0;
	height: 2rem;
	display: grid;
	place-items: center;
	cursor: pointer;

	.theme-icon {
		font-size: 1.25rem;
		color: var(--textColor);
		transition: all 0.3s linear;
	}

	.theme-icon:hover {
		transform: scale(1.3);
	}
`

export default Wrapper
