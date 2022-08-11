import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../components/FormContainer";
import { Title } from "../components/Title";
import { Input, PasswordInput } from "../components/Input";
import { Button } from "../components/Button";
import { ErrorContainer } from "../components/ErrorContainer";
import { ErrorEllipse } from "../components/ErrorEllipse";
import { Checkbox } from "../components/ChekBox";
import { ErrorSpan } from "../components/ErrorSpan";
import { Container } from "../components/Container";
import { fetchAPI, User } from "../api/fetchAPI";

interface UserFunc {
	onChange: (data: User) => void;
}

export const Login = ({ onChange }: UserFunc) => {
	const [show, setShow] = useState(false);
	const [checked, setChecked] = useState(false);
	const [inActive, setInActive] = useState(false);

	const navigator = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>();
	const onSubmit: SubmitHandler<User> = (data) => {
		setInActive(true);
		fetchAPI(data)
			.then(() => {
				onChange(data);
				setInActive(false);
				navigator("/profile");
			})
			.catch(() => {
				setShow(true);
				setInActive(false);
			});
	};

	return (
		<Container>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				{show && (
					<ErrorContainer>
						<ErrorEllipse>!</ErrorEllipse>
						Пользователя test.user@example.com не существует
					</ErrorContainer>
				)}
				<Title>Логин</Title>
				<Input
					isError={!!errors.login}
					{...register("login", { required: true })}
				/>
				{errors.login && <ErrorSpan>Обязательное поле</ErrorSpan>}
				<Title>Password</Title>
				<PasswordInput {...register("password", { required: true })} />
				<label>
					<Checkbox
						checked={checked}
						onChange={(e) => setChecked(e.target.checked)}
					/>
					<span style={{ marginLeft: 14 }}>Запомнить пароль</span>
				</label>
				<Button disabled={inActive} value='Войти' />
			</FormContainer>
		</Container>
	);
};
