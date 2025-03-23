import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', { title, ingredients, instructions });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) {
      errors.title = 'Recipe title is required';
    }
    if (!ingredients.trim()) {
      errors.ingredients = 'Ingredients are required';
    }
    if (!instructions.trim()) {
      errors.instructions = 'Instructions are required';
    }
    return errors;
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3 py-2 border rounded ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="ingredients" className="block font-bold mb-2">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full px-3 py-2 border rounded ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="3"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="instructions" className="block font-bold mb-2">
              Instructions
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className={`w-full px-3 py-2 border rounded ${
                errors.instructions ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="3"
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
