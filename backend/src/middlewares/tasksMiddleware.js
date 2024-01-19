const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.titulo === undefined || body.titulo === '' || body.titulo === ' '){
        return response.status(400).json({ message: 'The field "titulo" is required and cannot be empty.' });
    }

    next();
};

const validateFieldStatus = (request, response, next) => {
    const { body } = request;

    if (body.status === undefined || body.status === '' || body.status === ' '){
        return response.status(400).json({ message: 'The field "status" is required and cannot be empty.' });
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus
};