import type { TriviaQuestion } from '../types/trivia';

interface CategoryListProps {
  questions: TriviaQuestion[];
  categories: string[];
}

export const CategoryList = ({ questions, categories }: CategoryListProps) => {
  const getCategoryCount = (category: string) => {
    return questions.filter(q => q.category === category).length;
  };

  return (
    <div>
      <h2>Categories List</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {categories.map(category => (
          <li 
            key={category} 
            style={{ 
              padding: '10px 0', 
              borderBottom: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontWeight: '500', color: '#333' }}>{category}</span>
            <span style={{ color: '#666', fontSize: '14px' }}>
              {getCategoryCount(category)} questions
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

