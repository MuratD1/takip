const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fetch = require('node-fetch');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Mock truck data
let trucks = [
  {
    id: 'TRK001',
    coordinates: [28.9784, 41.0082], // Istanbul center
    status: 'idle',
    metrics: { distanceToVehicle: 0, eta: 0 }
  }
];

// WebSocket updates
setInterval(() => {
  // Simulate movement (replace with real GPS data)
  trucks = trucks.map(truck => ({
    ...truck,
    coordinates: [truck.coordinates[0] + 0.001, truck.coordinates[1]]
  }));
  io.emit('truckUpdate', trucks);
}, 5000);

// API endpoint for initial data
app.get('/trucks', (req, res) => {
  res.json(trucks);
});

// Start server
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});