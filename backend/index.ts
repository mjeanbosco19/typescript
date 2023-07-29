import express from 'express';
const app = express();
app.use(express.json());
import router from './routers/reminders';
app.listen(8000, () => console.log('Server running on port 8000!'));

app.use('/reminders', router);
app.get('/', (req, res) => res.send('Hello World!'));
