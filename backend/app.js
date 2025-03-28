import 'dotenv/config';
import setupServer from './setup/setupServer.js';

const PORT = 3000;

const app = setupServer();

// run the app on the port
app.listen(PORT, () => {
    console.log(`Ready at https://localhost:${PORT}!`);
    fetch("http://localhost:3000/api/auth/something")
       .then((value) => value.json()
       .then(thing => console.log(thing)));
    fetch("http://localhost:3000/")
       .then((value) => console.log(value));
})