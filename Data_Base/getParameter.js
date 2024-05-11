async function findOneUser(param, value, User) {
    try {
        const user = await User.findOne({ [param]: value });
        return user;
    } catch (error) {
        console.error('Error al buscar usuario en la base de datos:', error);
        throw error;
    }
}

module.exports = findOneUser;