import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  origin: '*', // Replace '*' with your desired origin or an array of allowed origins
  methods: ['GET', 'POST'], // Specify the HTTP methods you want to allow
});

// Helper function to apply CORS to a Next.js API route
function applyCorsMiddleware(handler) {
  return (req, res) => {
    return new Promise((resolve, reject) => {
      cors(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(handler(req, res));
      });
    });
  };
}

export default applyCorsMiddleware;