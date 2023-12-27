import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})