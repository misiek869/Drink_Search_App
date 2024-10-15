import styled from 'styled-components'

const Wrapper = styled.div`
	margin-bottom: 4rem;

	.form {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.form-input {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}

	.btn {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
	}
`

export default Wrapper
