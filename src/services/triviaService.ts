import type { ApiResponse, TriviaQuestion } from '../types/trivia';

export const fetchTriviaQuestions = async (amount: number = 50): Promise<TriviaQuestion[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}`);

    if (!response.ok) {
        if (response.status === 429) {
            throw new Error('Too many requests. Please wait a moment and try again.');
        }
        throw new Error('Network response was not ok');
    }

    const data: ApiResponse = await response.json();

    if (data.response_code !== 0) {
        throw new Error('Failed to fetch questions from the Trivia API');
    }

    return data.results;
};

