import { ProfileContainer } from "../components/ProfileContainer";
import { ExitButton } from "../components/ExitButton";
import { ProfileTitleHi } from "../components/ProfileTitleHi";
import { useNavigate, Navigate } from "react-router-dom";
import { User } from "../api/fetchAPI";

type PropUser = {
	user: User;
};

export const Profile = ({ user }: PropUser) => {
	const { login, password } = user;

	const navigate = useNavigate();
	if (!login && !password) {
		return <Navigate to='/' replace />;
	}
	return (
		<ProfileContainer>
			<ProfileTitleHi>
				Здравствуйте, &nbsp; <b>{login}</b>
			</ProfileTitleHi>
			<ExitButton onClick={() => navigate("/")}>Exit</ExitButton>
		</ProfileContainer>
	);
};
