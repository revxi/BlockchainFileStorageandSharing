import app from './src/app.js';
import connectDB from './src/config/db.js';
import { env } from './src/config/env.js';

// Connect to Database
connectDB();

const PORT = env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`
    🚀 Reverie Server Running
    📡 Mode: ${env.NODE_ENV}
    🔗 Port: ${PORT}
    🟢 Health Check: http://localhost:${PORT}/health
  `);
});

// Handle unhandled promise rejections (e.g., DB connection issues)
process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});