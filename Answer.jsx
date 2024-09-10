
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import quest from "../fake api/question.json";


function QuestionAnswer() {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setQuestions([...questions, { body: inputValue, id: questions.length + 1 }]);
      setInputValue('');
    }
  };

  // Function to handle question deletion
  const handleDelete = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // Function to fetch initial questions from a fake API
  const fetchData = async () => {
    try {
      setQuestions(quest);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Use effect to fetch initial questions
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">
        <FontAwesomeIcon icon={faQuestionCircle} /> Questions for You
      </h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your question here"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <ul className="list-group">
        {questions.map((question, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center mb-2 border rounded"
            key={question.id}
          >
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="text-truncate fw-bold">
                {/* Use a more descriptive text instead of "User" */}
                Question {index + 1}
              </div>
              <div className="flex-grow-1 ms-3 text-truncate">
                {question.body}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
              >
                <FontAwesomeIcon icon={faQuestionCircle} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionAnswer;
