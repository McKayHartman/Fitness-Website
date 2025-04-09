import express from 'express';
import cors from 'cors';
import routes from './api/routes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})