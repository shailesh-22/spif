// import React, { useState } from 'react';
// import axios from 'axios';

// function Sample() {
//   const [data, setData] = useState(null);

//   const createData = () => {
//     // Make a POST request to the API to create a new piece of data
//     axios.post('/api/data', { data: 'new data' })
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }

//   const readData = () => {
//     // Make a GET request to the API to read a piece of data
//     axios.get('http://103.160.153.38:8020/limens/statements_view/')
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }

//   const updateData = () => {
//     // Make a PUT request to the API to update a piece of data
//     axios.put('/api/data/123', { data: 'updated data' })
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }

//   const deleteData = () => {
//     // Make a DELETE request to the API to delete a piece of data
//     axios.delete('/api/data/123')
//       .then(response => setData(null))
//       .catch(error => console.error(error));
//   }

//   return (
//     <div>
//       <button onClick={createData}>Create Data</button>
//       <button onClick={readData}>Read Data</button>
//       <button onClick={updateData}>Update Data</button>
//       <button onClick={deleteData}>Delete Data</button>
//       {data && <p>{data}</p>}
//     </div>
//   );
// }

// export default Sample;

import React, { useState } from 'react';

function AptitudeTest() {
  // Create an array of test questions and answers
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in the solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Pluto'],
      answer: 'Jupiter'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Dollar', 'Euro', 'Pound'],
      answer: 'Yen'
    }
  ];
    // Initialize the state variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [userName, setUserName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    // Function to handle when the user submits an answer
    const handleSubmit = (event, answer) => {
      event.preventDefault();
      setIsSubmitting(true);

      
      // Add the user's answer to the list of answers
setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
// Go to the next question
setTimeout(() => {
setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
setIsSubmitting(false);
}, 1000);
}

// Function to handle when the user clicks the "Finish Test" button
const handleFinish = () => {
setShowResults(true);
}

// Check if we have reached the last question
const isLastQuestion = currentQuestionIndex === questions.length - 1;

return (
<div>
{!showResults ? (
<form onSubmit={(event) => handleSubmit(event, event.target.elements.answer.value)}>
<p>{questions[currentQuestionIndex].question}</p>
{questions[currentQuestionIndex].options.map((option, index) => (
<label key={index}>
<input type="radio" name="answer" value={option} />
{option}
</label>
))}
<button type="submit" disabled={isSubmitting}>
{isSubmitting ? 'Submitting...' : 'Submit'}
</button>
{isLastQuestion && <button type="button" onClick={handleFinish}>Finish Test</button>}
</form>
) : (
<div>
<p>Test Results for {userName}:</p>
{questions.map((question, index) => (
<p key={index}>
{question.question}: {question.answer === userAnswers[index] ? 'Correct' : 'Incorrect'}
</p>
))}
</div>
)}
</div>
);
}

export default AptitudeTest;
