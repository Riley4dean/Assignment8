const user1 = {
    address: {
        state: "NY",
        city: "New York"
    }
};
const user2 = {};
    function getUserCity(user){
        return user.address?.city;
}

console.log(getUserCity(user1));
console.log(getUserCity(user2));