import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { DifficultyDistribution } from '../types/trivia';

interface DifficultyChartProps {
  data: DifficultyDistribution[];
}

const COLORS = {
  easy: '#82ca9d',
  medium: '#ffc658',
  hard: '#ff8042'
};

export const DifficultyChart = ({ data }: DifficultyChartProps) => {
  return (
    <div>
      <h2>Distribution by Difficulty</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ difficulty, count }) => `${difficulty}: ${count}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            {data.map((entry) => (
              <Cell key={`cell-${entry.difficulty}`} fill={COLORS[entry.difficulty as keyof typeof COLORS]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

