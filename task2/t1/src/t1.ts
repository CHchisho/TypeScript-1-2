interface User {
	username: string;
	email: string;
	bio?: string;
}

const user: User = {
	username: "john_doe",
	email: "john@example.com",
	bio: "developer"
};

const user2: User = {
	username: "jane_smith",
	email: "jane@example.com"
};


function displayUserInfo(user: User): void {
	console.log(user.username);
	console.log(user.email);
	console.log(user.bio);
}

// Display user information
displayUserInfo(user);
displayUserInfo(user2);
