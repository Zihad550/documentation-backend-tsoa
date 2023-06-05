// src/server.ts
import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log('Code docs available at http://localhost:3000/docs');
});
