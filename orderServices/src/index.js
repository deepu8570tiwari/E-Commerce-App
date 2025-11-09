const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");
dotenv.config();
// Start server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
