interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
      <label 
        htmlFor="category-select" 
        style={{ 
          marginRight: '10px', 
          fontWeight: '500',
          color: '#333'
        }}
      >
        Filter by Category:
      </label>
      <select
        id="category-select"
        value={selectedCategory || ''}
        onChange={(e) => onCategoryChange(e.target.value || null)}
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

