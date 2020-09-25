class User {
    username: string;

    constructor(username: string) {
        Object.assign(this, {
            username
        });
    }
}

export default User;
