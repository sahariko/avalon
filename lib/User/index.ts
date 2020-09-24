const COLOR_AMOUNT = 10;
let _colorIndex = 0;

const getColorIndex = () => {
    const index = (_colorIndex % COLOR_AMOUNT) + 1;
    _colorIndex++;

    return index;
};

class User {
    username: string;
    colorIndex: number;

    constructor(username: string) {
        Object.assign(this, {
            username,
            colorIndex: getColorIndex()
        });
    }
}

export default User;
