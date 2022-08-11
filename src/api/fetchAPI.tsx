export type User = {
	login?: string;
	password?: string;
};

export const fetchAPI = async ({ login, password }: User) =>
	new Promise((res, rej) => {
		const user: User = {
			login: "steve.jobs@example.com",
			password: "password",
		};
		setTimeout(() => {
			if (login === user.login && password === user.password) {
				res(true);
				// Promise.resolve({ res: true })
			} else {
				rej(false);
			}
		}, 5000);
	});
