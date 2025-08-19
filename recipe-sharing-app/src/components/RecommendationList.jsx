import { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // generate on mount
  }, [generateRecommendations]);

  return (
    <div>
      <h2>✨ Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites to get started!</p>
      ) : (
        recommendations.map((r) => (
          <div key={r.id} style={{ marginBottom: '1rem' }}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
