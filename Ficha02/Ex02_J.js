function showFriends(firstName, lastName, ...friends) {
    alert(`O ${firstName} ${lastName} tem ${friends.length} amigo(s)!`);
}

showFriends('John', 'Doe');
showFriends('Joe', 'Blogs', 'Mary');
showFriends('Bill', 'Taylor', 'Alison', 'Mary', 'Rachel');