import express from 'express';
const app=express();
const port=3000;

app.use(express.json());

const isValidUUID = (id) => {
    return uuidValidate(id);
};

app.post('/data/:number',(req,res)=>{
const number =req.params.number;
const id= req.header('id');
const jsonArray =req.body;

if(!isValidUUID){
    return res.status(400).json({ error: 'Invalid UUID format' });
}

if (!Array.isArray(jsonArray)) {
    return res.status(400).json({ error: 'Request body must be an array' });
  }
  const matchingObjects = jsonArray.filter(obj => obj.bodyidnumber == number && obj.bodyid === id);
  if (matchingObjects.length > 0) {
    res.status(200).json(matchingObjects);
  } else {
    res.status(400).json({ error: 'No matching objects found' });
  }

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });