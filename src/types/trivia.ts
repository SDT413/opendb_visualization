// Types for Open Trivia DB API
export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ApiResponse {
  response_code: number;
  results: TriviaQuestion[];
}

export interface CategoryDistribution {
  category: string;
  count: number;
}

export interface DifficultyDistribution {
  difficulty: string;
  count: number;
  [key: string]: string | number;
}

