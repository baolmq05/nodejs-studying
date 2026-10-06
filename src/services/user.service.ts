import getConnection from "config/database";

const handleGetUsers = async () => {
    const connection = await getConnection();

    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`',
        );

        return results;
    } catch (err) {
        return [];
    }
}

const handleCreateUser = async (fullname: string, age: number, address: string) => {
    const connection = await getConnection();

    try {
        const sql = 'INSERT INTO `users`(`fullname`, `age`, `address`) VALUES (?, ?, ?)';
        const values = [fullname, age, address];

        const [result, fields] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        return [];
    }
}

const handleUserDetail = async (id: string) => {
    const connection = await getConnection();

    try {
        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        const [user] = result as object[];
        return user;
    } catch (err) {
        return [];
    }
}

const handleUpdateUser = async (fullname: string, age: number, address: string, userId: string) => {
    const connection = await getConnection();

    try {
        const sql = 'UPDATE `users` SET `fullname` = ?, `age` = ?, `address` = ? WHERE `id` = ?';
        const values = [fullname, age, address, userId];

        const [result] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        return [];
    }
}

const handleDestroyUser = async (id: string) => {
    const connection = await getConnection();

    try {
        const sql = 'DELETE FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        return [];
    }
}

export { handleGetUsers, handleCreateUser, handleUserDetail, handleUpdateUser, handleDestroyUser };