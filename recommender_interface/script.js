  
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
  
// Function to handle the prediction for all book titles
async function predictRatings() {
  const userIdInput = document.getElementById('userId');
  const userId = userIdInput.value;

  // Fetch the CSV file containing the book titles
  const response = await fetch('data/book_titles.csv');
  const csvData = await response.text();

  // Parse the CSV data into an array of book titles
  const bookTitles = csvData.split('\n').map(row => row.trim()).filter(Boolean);

  // Object to store the predicted ratings for each book title
  const predictedRatings = {};

  // Iterate over each book title and get the predicted rating
  for (let i = 0; i < bookTitles.length; i++) {
    
    const bookTitle = bookTitles[i];
    
    const predictedRating = await predictRating(userId, bookTitle);
    predictedRatings[bookTitle] = predictedRating;
  }

  // Sort the predicted ratings in descending order
  const sortedRatings = Object.entries(predictedRatings)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  // Display the top 20 book titles and predicted ratings
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';
  for (let i = 0; i < sortedRatings.length; i++) {
    const [bookTitle, rating] = sortedRatings[i];
    const result = document.createElement('p');
    result.textContent = `${bookTitle}: ${rating}`;
    outputDiv.appendChild(result);
  }
}


// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
  loadModel();
});
