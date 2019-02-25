
export const store = {
    state: {
        users: [
            {
                id: 1,
                name: "User_1",
                detail: "Info 1"
            },
            {
                id: 2,
                name: "User_2",
                detail: "Info 2"
            },
            {
                id: 3,
                name: "User_3",
                detail: "Info 3"
            }
        ]
    },

    getUserList(){
        return this.state.users;
    },

    getUser(id){
        return this.state.users.find((user) => user.id == id);
    },

    setUserDetail(id, value){
        var user = this.getUser(id);
        user.detail = value;
    }
}
