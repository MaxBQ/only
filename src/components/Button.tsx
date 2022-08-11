import styled from "styled-components";
import { Input } from "./Input";

export const Button = styled(Input).attrs({
	type: "submit",
})`
	height: 60px;
	width: 100%;
	left: 0;
	right: 0;
	margin-top: 40px;
	background: ${({ disabled }) => (disabled ? "#99A9FF" : "#4a67ff")};
	border-radius: 8px;
	cursor: pointer;
	border: none;
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 22px;
	color: #ffffff;
`;
