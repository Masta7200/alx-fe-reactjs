import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 py-4 text-white">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Recipe Sharing Platform</h1>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Recipe Sharing Platform</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
