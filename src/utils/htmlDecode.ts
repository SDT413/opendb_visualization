// Utility to decode HTML entities from the API responses
export const decodeHTML = (html: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  return textarea.value;
};

export const decodeQuestionData = <T extends { question: string; category: string; correct_answer: string; incorrect_answers: string[] }>(
  question: T
): T => {
  return {
    ...question,
    question: decodeHTML(question.question),
    category: decodeHTML(question.category),
    correct_answer: decodeHTML(question.correct_answer),
    incorrect_answers: question.incorrect_answers.map(ans => decodeHTML(ans))
  };
};

