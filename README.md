# google-auth

A simple Nodejs + Expressjs API for signup/signin using Google Oauth2. The project also has a very minimal frontend made using Bootstrap and EJS.

## Project Setup

```javascript
1. Clone the repo
2. cd google-auth
3. npm install
4. make a .env file with the following keys: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL
5. npm run dev
6. Open the project on 127.0.0.1:5000
```

## Tech Stack/Packages

- Node.js
- Express.js
- passport
- passport-google-oauth2
- cookie-session
- dotenv
- ejs

### References

1. https://github.com/googleapis/google-api-nodejs-client

2. https://console.developers.google.com/
