import styled from "styled-components";

type InputProps = {
	isError?: boolean;
};

export const Input = styled.input<InputProps>`
	height: 60px;
	width: 100%;
	margin: 0px;
	margin-bottom: 20px;
	background: #f5f5f5;
	border-radius: 8px;
	border: ${(props) => (props.isError ? "1px solid #E26F6F;" : "none")};
	color: #e26f6f;
	font-weight: 400;
	font-size: 1rem;
	line-height: 19px;
	color: #232323;
	padding-left: 20px;
	&:focus {
		outline: none;
		color: ${(props) => (props.isError ? "#E26F6F;" : "black")};
	}
`;

export const PasswordInput = styled(Input).attrs({
	type: "password",
})``;
