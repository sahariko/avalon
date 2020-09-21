const COLOR_AMOUNT = 10;
let _colorIndex = 0;

const getColorIndex = () => {
    const index = (_colorIndex % COLOR_AMOUNT) + 1;
    _colorIndex++;

    return index;
};

class User {
    id: string;
    username: string;
    colorIndex: number;

    constructor(id: string, username: string) {
        Object.assign(this, {
            id,
            username,
            colorIndex: getColorIndex()
        });
    }
}

export default User;
