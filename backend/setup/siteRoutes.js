import { Router } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const siteRoutes = Router();

siteRoutes.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
});

export default siteRoutes;