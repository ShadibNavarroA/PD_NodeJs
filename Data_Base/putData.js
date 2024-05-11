const addDataToTable = (Model, data) => {
    const newData = new Model(data);

    return newData.save()
        .then(result => {
            console.log();console.log("//////////////////////////Función de Orden Superior/////////////////////////////")
            console.log('Datos agregados correctamente:', result);
            console.log("////////////////////////////////////////////////////////////////"); console.log()
            return result;
        })
        .catch(error => {
            console.error('Error al agregar datos:', error);
            throw error;
        });
};

module.exports = { addDataToTable };