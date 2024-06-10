import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:4000/questions')
      .then(response => response.json())
      .then(questions => setQuestions(questions))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem question={question}/>)}</ul>
    </section>
  );
}

export default QuestionList;
