class User {
    id: string;
    username: string;

    constructor(data: Partial<User>) {
        Object.assign(this, data);
    }
}

export default User;
