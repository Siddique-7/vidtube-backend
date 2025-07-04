## 🍃 VidTube API (Node.js + Express + MongoDB)
A scalable and modular backend API built with Node.js, Express, and MongoDB using Mongoose ODM, designed for video-based platforms (like YouTube clones). Includes robust routing, error handling, pagination, and modularized architecture for real-world applications.

## 🚀 Features
📁 MVC folder structure with separation of concerns

🧠 Data modeling using Eraser (included as .png or .pdf)

🌐 RESTful APIs with Express

🔐 Environment variables using dotenv

⚙️ Custom error & response handlers

📄 Async error handling with middleware

🧩 Mongoose aggregation + pagination (mongoose-aggregate-paginate-v2)

🌍 CORS support for frontend integration

🔄 Live reloading via nodemon

💅 Code formatting using Prettier

☁️ Cloud-based MongoDB via MongoDB Atlas

## 🛠️ Tech Stack
- Layer	Technology
- Language -	JavaScript (ESM)
- Runtime -	Node.js
- Framework -	Express.js
- Database -	MongoDB Atlas + Mongoose
- Utilities -	dotenv, cors, Prettier, Nodemon
- Pagination -	mongoose-aggregate-paginate-v2
- Design Tool -	Eraser (for schema modeling)

## 📁 Project Structure

```
📦 root/
├── 📁 node_modules/
├── 📁 src/
│   ├── 📁 controllers/        # Request logic (healthcheck)
│   ├── 📁 db/                 # MongoDB connection setup
│   ├── 📁 models/             # Mongoose schemas (User, Video, Playlist, etc.)
│   ├── 📁 routes/             # Express routes
│   ├── 📁 middlewares/        # Custom middleware (auth, error handling)
│   ├── 📁 utils/              # APIError, APIResponse, asyncHandler
│   ├── 📄 constraints.js      # Constants or enums
│   ├── 📄 app.js              # Express app config
│   └── 📄 index.js            # Entry point
├── 📄 .env                    # Env variables
├── 📄 .env.sample             # Template for env
├── 📄 .prettierrc             # Prettier config
├── 📄 .prettierignore         # Files to ignore
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
```
## 🧪 Setup Instructions


 1. Clone the repository
- git clone https://github.com/your-username/vidtube-backend.git
- cd vidtube-backend

2. Install dependencies
- npm install

 3. Setup environment variables
- cp .env.sample .env
- Then fill in MongoDB URI and PORT

 4. Run in development mode
- npm run dev

## 🌐 API Endpoints (Sample)
```
Method	  Route	               Description
GET   	/api/v1/healthcheck 	Server health status
POST	  /api/v1/videos       	Upload new video
GET   	/api/v1/users/:id    	Get user by ID
```
(More endpoints coming soon with full documentation)

## 📈 Future Scope
✅ JWT Authentication & Authorization

✅ Rate Limiting

✅ Cloudinary for media uploads

✅ Role-based access control (RBAC)

✅ Swagger API docs

✅ CI/CD Pipeline (GitHub Actions or Render)

✅ Frontend integration (React or Next.js)

## 📄 License
Licensed under the MIT License.


