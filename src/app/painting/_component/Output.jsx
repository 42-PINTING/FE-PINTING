import React, { useState } from 'react';
import axios from 'axios';

function Delle() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: 1, // Number of images to generate
          size: '1024x1024', // Image size
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Use the API key from environment variables
          },
        }
      );
      setImageUrl(response.data.data[0].url);
    } catch (error) {
      console.error('Error generating image:', error);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>DALL·E Image Generator</h1>
      <input
        type="text"
        placeholder="Enter an image prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage} disabled={loading}>
        {loading ? 'Generating image...' : 'Generate Image'}
      </button>
      {imageUrl && (
        <div>
          <h2>Generated Image</h2>
          <img src={imageUrl} alt="Generated" style={{ width: '1024px', height: '1024px' }} />
        </div>
      )}
    </div>
  );
}

export default Delle;
