const { v4: uuidv4, validate: validateUUID } = require('uuid');


exports.handleTest = (req, res) => {
    const dynamicNumber = req.params.dynamicnumber;
    const dynamicUUID = req.header('id');
    const inputBody = req.body;
    

    

    if (!dynamicUUID || !validateUUID(dynamicUUID)) {
        return res.status(400).json({ message: 'Invalid UUID in header' });
    }

    if (!Array.isArray(inputBody)) {
        return res.status(400).json({ message: 'Invalid input body' });
    }

    // Validate each object in the input body
    for (let obj of inputBody) {
        if (!validateUUID(obj.BodyId) || typeof obj.BodyIdNumber !== 'string' || typeof obj.name !== 'string') {
            return res.status(400).json({ message: 'Invalid object in input body' });
        }
    
    
    }

   
    // Respond with the required output
    const responseOutput = inputBody.map(item => ({
        id: item.BodyId,
        number: item.BodyIdNumber
    }));

    res.json(responseOutput);
};