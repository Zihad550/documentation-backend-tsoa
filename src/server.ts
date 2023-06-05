// src/server.ts
import { app } from './app';
import config from './config';

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
  console.log(`Code docs available at http://localhost:${config.port}/docs`);
});
