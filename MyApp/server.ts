import * as express from 'express';

const app: express.Application = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.sendFile('index.html', { maxAge: '0', 'root': 'dist' });
});

app.use(express.static('dist', { maxAge: '30d' }));

app.get('*', (_req, res) => {
  res.sendFile('index.html', { maxAge: '0', 'root': 'dist' });
});
app.listen(port, () => {
  console.log(`MyApp Server application is running on port ${port}.`);
});
