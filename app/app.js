const express = require('express');
const client = require('prom-client');

const app = express();
const port = 8080;

client.collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    console.error('Metrics error:', err);
    res.status(500).end(err.message);
  }
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

app.get('/', (req, res) => {
  res.send('works');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
});

