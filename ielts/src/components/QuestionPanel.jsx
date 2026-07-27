import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";

function QuestionPanel() {

    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionId, option) => {
        setAnswers({
            ...answers,
            [questionId]: option,
        });
    };

    return (
        <div className="h-full bg-white overflow-y-auto p-8">

            <pre className="bg-white p-4 rounded mt-8">
                {JSON.stringify(answers, null, 2)}
            </pre>

            <h2 className="text-2xl font-bold mb-8">
                Questions
            </h2>

            {questions.map((question) => (
                <Question
                    key={question.id}
                    question={question}
                    selectedAnswer={answers[question.id]}
                    onAnswerChange={handleAnswerChange}
                />
            ))}

        </div>
    );
}

export default QuestionPanel;