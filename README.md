# WanderLust

WanderLust is a full-stack web application for travelers to discover, share, and review accommodations and travel destinations around the world. Users can browse listings, create their own listings, leave reviews, and manage their travel experiences.

## Features

- **User Authentication**: Secure signup, login, and user profile management
- **Listing Management**: Create, read, update, and delete travel listings
- **Reviews System**: Leave and read reviews for listings
- **Image Upload**: Upload and store images for listings using Cloudinary
- **Interactive Maps**: Location-based search and display using MapLibre GL
- **Responsive Design**: Mobile-friendly interface for on-the-go travelers
- **Categories**: Browse listings by different categories

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js for authentication
- Multer for file uploads
- Cloudinary for image storage

### Frontend
- EJS templates
- Bootstrap for styling
- MapLibre GL for maps and geocoding

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
NODE_ENV=development
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the server
```bash
node app.js
```

5. Open your browser and navigate to `http://localhost:8080`

## Project Structure

- `/controllers` - Route controllers
- `/models` - MongoDB schema models
- `/public` - Static assets (CSS, JS, images)
- `/routes` - Express routes
- `/views` - EJS templates
- `/uploads` - Temporary storage for uploads
- `/utils` - Utility functions
- `/middleware.js` - Custom middleware functions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Node.js community
- Express.js framework
- MongoDB and Mongoose
- Cloudinary for image hosting
- MapLibre GL for mapping functionality 