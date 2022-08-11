import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Only } from "./components/Only";
import { User } from "./api/fetchAPI";

export const App = () => {
	const [user, setUser] = useState({} as User);

	return (
		<>
			<Only>ONLY.</Only>
			<Routes>
				<Route
					path='/'
					element={
						<Login
							onChange={(data) => {
								setUser(data);
							}}
						/>
					}
				/>
				<Route path='/profile' element={<Profile user={user} />} />
			</Routes>
		</>
	);
};
