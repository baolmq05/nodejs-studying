import { prisma } from "config/client";

const handleGetUsers = async (): Promise<Array<Object>> => {
    try {
        const users = await prisma.user.findMany();

        return users;
    } catch (err) {
        return [];
    }
}

const handleCreateUser = async (fullname: string, age: number, address: string) => {
    try {
        const result = await prisma.user.create({
            data: {
                fullname: fullname,
                age: Number(age),
                address: address
            }
        });

        return result;
    } catch (err) {
        return null;
    }
}

const handleUserDetail = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        return user;
    } catch (err) {
        return null;
    }
}

const handleUpdateUser = async (fullname: string, age: number, address: string, userId: string) => {
    try {
        const result = await prisma.user.update({
            where: { id: Number(userId) },
            data: {
                fullname: fullname,
                address: address,
                age: Number(age),
            },
        });

        return result;
    } catch (err) {
        return null;
    }
}

const handleDestroyUser = async (id: string) => {
    try {
        const result = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })

        return result;
    } catch (err) {
        return null;
    }
}

export { handleGetUsers, handleCreateUser, handleUserDetail, handleUpdateUser, handleDestroyUser };