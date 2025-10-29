import { useState } from 'react';
import './App.css';
import { useTriviaQuestions } from './hooks/useTriviaQuestions';
import { getCategoryDistribution, getDifficultyDistribution, getUniqueCategories } from './utils/dataProcessing';
import { CategoryChart } from './components/CategoryChart';
import { DifficultyChart } from './components/DifficultyChart';
import { CategoryFilter } from './components/CategoryFilter';
import { CategoryList } from './components/CategoryList';

function App() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { data: questions, isLoading, error, refetch } = useTriviaQuestions(50);

    const filteredQuestions = selectedCategory && questions
        ? questions.filter(q => q.category === selectedCategory)
        : questions || [];

    const categories = getUniqueCategories(questions || []);
    const categoryData = getCategoryDistribution(filteredQuestions);
    const difficultyData = getDifficultyDistribution(filteredQuestions);

    if (isLoading) {
        return (
            <div className="container">
                <h1>Trivia Questions Visualization</h1>
                <p>Loading trivia questions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <h1>Trivia Questions Visualization</h1>
                <p style={{ color: '#d32f2f', marginBottom: '15px', fontWeight: '500' }}>
                    Error: {error.message}
                </p>
                <button
                    onClick={() => refetch()}
                    style={{
                        padding: '10px 20px',
                        fontSize: '14px',
                        backgroundColor: '#4a90e2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#357abd'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Trivia Questions Visualization</h1>
            <p>Total Questions: {questions?.length || 0}</p>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            {selectedCategory && (
                <p style={{ marginBottom: '20px' }}>
                    Showing data for: <strong>{selectedCategory}</strong> ({filteredQuestions.length} questions)
                </p>
            )}

            <div className="charts-container">
                <div className="chart">
                    <CategoryChart data={categoryData} />
                </div>
                <div className="chart">
                    <DifficultyChart data={difficultyData} />
                </div>
            </div>

            <div className="categories-list">
                <CategoryList questions={questions || []} categories={categories} />
            </div>
        </div>
    );
}

export default App;
