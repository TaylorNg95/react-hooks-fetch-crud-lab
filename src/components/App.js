import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(questions => setQuestions(questions))
  }, [])

  function addQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(id){
    setQuestions(questions.filter(question => question.id !== id))
  }

  function updateAnswer(newAnswer){
    setQuestions(questions.map(question => {
      if(question.id !== newAnswer.id){
        return question
      } else return newAnswer
    }))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} updateAnswer={updateAnswer}/>}
    </main>
  );
}

export default App;
