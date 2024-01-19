const validateBody = (request, response, next) => {
    const { body } = request;

    /* if (body.titulo === undefined || body.titulo === '' || body.titulo === ' '){
        return response.status(400).json({ message: 'The field "titulo" is required and cannot be empty.' });
    } */

    if (body.titulo === undefined){
        return response.status(400).json({ message: 'The field "titulo" is required' });
    }

    if (body.titulo === ''){
        return response.status(400).json({ message: 'Title cannot be empty' });
    }

    next();
};

module.exports = {
    validateBody,
};