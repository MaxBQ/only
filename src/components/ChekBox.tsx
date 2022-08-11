import styled from "styled-components";

type CheckProps = {
	checked?: boolean;
	onChange?: (event: any) => void;
};

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: -1px;
`;

const StyledCheckbox1 = styled.div`
	width: 20px;
	height: 20px;
	border: 1px solid #000000;
	border-radius: 4px;
	margin-top: -7px;
`;
const StyledCheckbox = styled.div<CheckProps>`
	display: inline-block;
	width: 14px;
	height: 14px;
	margin: 2px;
	background: ${(props) => (props.checked ? "#4A67FF" : "white")};
	transition: all 150ms;
	border-radius: 4px;
`;

export const Checkbox = ({ checked, ...props }: CheckProps) => (
	<CheckboxContainer>
		<HiddenCheckbox checked={checked} {...props} />
		<StyledCheckbox1>
			<StyledCheckbox checked={checked}></StyledCheckbox>
		</StyledCheckbox1>
	</CheckboxContainer>
);
