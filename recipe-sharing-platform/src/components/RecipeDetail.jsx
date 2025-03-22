import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Assuming data.json is in the src directory

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL parameters
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the recipe details based on the ID
    const fetchRecipe = () => {
      const foundRecipe = data.find((item) => item.id === parseInt(id));
      if (foundRecipe) {
        setRecipe(foundRecipe);
      }
      setLoading(false);
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message
  }

  if (!recipe) {
    return <div>Recipe not found.</div>; // Handle case where recipe is not found
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        {recipe.image && (
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4 rounded" />
        )}
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
