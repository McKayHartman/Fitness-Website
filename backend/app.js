import 'dotenv/config';
import setupServer from './setup/setupServer.js';

const PORT = 3000;

const app = setupServer();

// Run the app on the port
app.listen(PORT, () => {
    console.log(`Ready at http://localhost:${PORT}!`);
});
