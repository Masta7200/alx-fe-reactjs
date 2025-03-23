import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = () => {
      const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
      setRecipe(foundRecipe);
    };
    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-4">{recipe.summary}</p>
          <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-2">Instructions</h2>
          <ol className="list-decimal pl-6 mb-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
