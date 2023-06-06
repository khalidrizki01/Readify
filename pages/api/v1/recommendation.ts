
import {authenticateToken} from '../../../utils/authTokenHandler'
import {booksData} from '../../../lib/books'
import tf from "@tensorflow/tfjs"


// Load the TensorFlow SavedModel
let model;

async function loadModel() {
  try {
    model = await tf.loadGraphModel('model/model.json');
    console.log('Model loaded successfully.');
  } catch (error) {
    console.error('Failed to load the model:', error);
  }
}

// Function to send the user ID and book title to the model and get the predicted rating
async function predictRating(userId, bookTitle) {
    // Preprocess the input data (convert to tensor, expand dimensions, etc.)
    const userTensor = tf.tensor([userId]);
    const bookTitleTensor = tf.tensor([bookTitle]);
  
    // Make predictions using the loaded model
    // const predictions = model.executeAsync({ user_id: userTensor, title: bookTitleTensor });
    
    // Get the predicted rating value
    const rating = await  model.executeAsync({ user_id: userTensor, title: bookTitleTensor });

    // console.log(rating.arraySync()[0][0])
    // Dispose the tensors
    // userTensor.dispose();
    // bookTitleTensor.dispose();
    // predictions.dispose();
  
    // Return the predicted rating
    return rating;
  }


export default function handler(req, res){
  loadModel();
  //verify method
  if(req.method !== "POST") {
      return res.status(405).json({error: "Method not allowed"});
  }

  //authenticate token
  authenticateToken(req, res, async () => {
      let userId;
      //fetch recomendation from database
      try {
          // req 
          
          // find user id
          // userId = await prisma.user.findUnique({where: {username: req.user.username}});
          
          
          // check if user id is inputed
          if (!req.query.uname) {
              return res.status(400).json({error: "Invalid username"});
          }
          
          //mock data
          res.status(200).json({books: booksData});
          
          //TODO fix integration with prisma
          // Just get recomendation based on user ID
          // const books = await prisma.book.findMany();
          // return res.status(200).json({books: books});
          
      } catch (error) {
          console.log(error);
          res.status(500).json({error: "Something went wrong"});
      }
  });
}