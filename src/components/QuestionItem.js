import React from "react";

function QuestionItem({ question, deleteQuestion, updateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`http://127.0.0.1:4000/questions/${question.id}`, {
      method: 'DELETE'
    })
    deleteQuestion(question.id)
  }

  function handleUpdate(e){
    fetch(`http://127.0.0.1:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({correctIndex: e.target.value})
    })
      .then(response => response.json())
      .then(newAnswer => updateAnswer(newAnswer))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdate}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
