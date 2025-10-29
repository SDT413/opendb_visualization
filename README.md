# Trivia Questions Visualization Tool

A React + TypeScript application that visualizes trivia questions from the [Open Trivia Database API](https://opentdb.com) with interactive charts and filtering.

## Features

-  **Interactive Charts**: Category distribution and difficulty breakdown
-  **Category Filtering**: Filter questions by category
-  **Category List**: View all available categories with counts
-  **Smart Caching**: TanStack Query for optimal performance
-  **Clean UI**: Simple, responsive design

## Tech Stack

- **React 19** with TypeScript
- **TanStack Query** - Professional server state management
- **Recharts** - Data visualization
- **Vite** - Fast build tool
- **Open Trivia Database API** - 50+ questions

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── CategoryChart.tsx       # Bar chart
│   ├── CategoryFilter.tsx      # Filter dropdown
│   ├── CategoryList.tsx        # Category list
│   └── DifficultyChart.tsx     # Pie chart
├── hooks/              # Custom React hooks
│   └── useTriviaQuestions.ts   # TanStack Query hook
├── services/           # API services
│   └── triviaService.ts        # Fetch logic
├── types/              # TypeScript types
│   └── trivia.ts
├── utils/              # Helper functions
│   ├── dataProcessing.ts
│   └── htmlDecode.ts
├── App.tsx             # Main component
└── main.tsx            # Entry point with QueryClient
```
