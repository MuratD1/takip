# Tow Truck Tracking Dashboard - Istanbul

A real-time dashboard for tracking tow trucks in Istanbul, built with React, Mapbox, and Node.js.

## Features

- 🗺️ **Live Map Tracking**: View tow trucks moving in real-time on a map of Istanbul.
- 📊 **Metrics Panel**: See distance (km) and ETA (minutes) for active routes.
- 🔄 **Real-Time Updates**: WebSocket integration for live location updates.
- 🚚 **Status Tracking**: Track truck statuses (Idle, En Route, Loading, Delivered).

## Tech Stack

- **Frontend**: React.js, Mapbox GL JS, Socket.io Client
- **Backend**: Node.js, Express, Socket.io
- **Deployment**: Render (Frontend + Backend)

---

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- Mapbox API Key ([Get one here](https://account.mapbox.com/))

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tow-truck-dashboard.git
   cd tow-truck-dashboard