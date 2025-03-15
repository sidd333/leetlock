# LeetLock Backend

LeetLock is a backend server that restricts access to certain apps until the user has solved at least one LeetCode problem for the day. The backend interacts with the LeetCode API to verify if the user has completed a question today and grants or denies unlock access accordingly.

## Features

- Fetches recent LeetCode submissions for a user
- Checks if at least one problem was solved today
- Provides an API endpoint to validate unlock access
- Built with **Node.js**, **Express**, and **TypeScript**

## Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Backend framework
- **TypeScript** – Strongly typed JavaScript
- **Axios** – HTTP requests to LeetCode API
- **dotenv** – Manage environment variables

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/leetlock-backend.git
   cd leetlock-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file and add:

   ```env
   PORT=3000
   ```

4. Run the server:
   ```sh
   npm start
   ```

## API Endpoints

### 1. Check Unlock Status

**Endpoint:** `POST /`

**Request Body:**

```json
{
  "username": "leetcodeUser123"
}
```

**Response (if solved today):**

```json
{
  "lastSolved": "2025-03-15T12:34:56.000Z",
  "unlock": true
}
```

**Response (if not solved today):**

```json
{
  "message": "No problem solved today.",
  "unlock": false
}
```

## How It Works

1. The user enters their **LeetCode username** in the frontend app.
2. The backend fetches the **most recent LeetCode submissions**.
3. It checks if at least **one submission was made today**.
4. The API responds with `unlock: true` if a question was solved today, otherwise `unlock: false`.
5. The frontend can use this response to allow or block access to certain apps.

## Future Improvements

- Implement **OAuth login** with LeetCode
- Add **database storage** for user stats
- Create a **mobile app integration**

## Contributing

Feel free to open issues or pull requests to enhance the project!

## License

MIT License
