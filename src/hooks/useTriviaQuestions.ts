import { useQuery } from '@tanstack/react-query';
import { fetchTriviaQuestions } from '../services/triviaService';

export const useTriviaQuestions = (amount: number = 50) => {
  return useQuery({
    queryKey: ['triviaQuestions', amount],
    queryFn: () => fetchTriviaQuestions(amount),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes 
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

