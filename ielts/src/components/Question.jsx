function Question({ question, selectedAnswer, onAnswerChange }) {
  return (
    <div className="mb-10">

      <p className="font-semibold mb-4">
        {question.id}. {question.text}
      </p>

      <div className="space-y-3">

        {question.options.map((option) => (
            <label
                key={option}
                className="flex items-center gap-3 cursor-pointer"
            >
                <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => onAnswerChange(question.id, option)}
                />
                <span className="text-gray-700">{option}</span>
            </label>
        ))}

      </div>

    </div>
  );
}

export default Question;