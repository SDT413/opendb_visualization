import type { TriviaQuestion, CategoryDistribution, DifficultyDistribution } from '../types/trivia';

export const getCategoryDistribution = (questions: TriviaQuestion[]): CategoryDistribution[] => {
  const categoryMap = new Map<string, number>();
  
  questions.forEach(question => {
    const count = categoryMap.get(question.category) || 0;
    categoryMap.set(question.category, count + 1);
  });
  
  return Array.from(categoryMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
};

export const getDifficultyDistribution = (questions: TriviaQuestion[]): DifficultyDistribution[] => {
  const difficultyMap = new Map<string, number>();
  
  questions.forEach(question => {
    const count = difficultyMap.get(question.difficulty) || 0;
    difficultyMap.set(question.difficulty, count + 1);
  });
  
  return Array.from(difficultyMap.entries())
    .map(([difficulty, count]) => ({ difficulty, count }))
    .sort((a, b) => {
      const order = { easy: 1, medium: 2, hard: 3 };
      return order[a.difficulty as keyof typeof order] - order[b.difficulty as keyof typeof order];
    });
};

export const getUniqueCategories = (questions: TriviaQuestion[]): string[] => {
  const categories = questions.map(q => q.category);
  return Array.from(new Set(categories)).sort();
};
