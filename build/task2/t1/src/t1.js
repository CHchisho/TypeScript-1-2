"use strict";
const user = {
    username: "john_doe",
    email: "john@example.com",
    bio: "developer"
};
const user2 = {
    username: "jane_smith",
    email: "jane@example.com"
};
function displayUserInfo(user) {
    console.log(user.username);
    console.log(user.email);
    console.log(user.bio);
}
// Display user information
displayUserInfo(user);
displayUserInfo(user2);
