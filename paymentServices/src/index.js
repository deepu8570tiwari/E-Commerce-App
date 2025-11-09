const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const dotenv=require("dotenv")
dotenv.config();
const app = new Hono();


serve(
  {
    fetch: app.fetch,
    port: process.env.PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
