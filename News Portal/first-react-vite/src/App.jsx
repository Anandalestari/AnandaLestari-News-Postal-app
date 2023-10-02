import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './component/Card';
import Footer from './component/footer';

function News() {
    const [newsData, setNewsData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('general');
  
    useEffect(() => {
      const apiKey = '4a2d9eeab5ec4fddb15860b8ee9248ee'; 
      const country = 'us';
  
      axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${activeCategory}&apiKey=${apiKey}`)
        .then(response => {
          setNewsData(response.data.articles);
        })
        .catch(error => {
          console.error('Error fetching news data:', error);
        });
    }, [activeCategory]);
  
    function handleCategoryChange(category) {
      setActiveCategory(category);
    }

  return (
    <>
      <div className="container bg-blue-500 w-screen ">
        <nav className="bg-blue-500 p-4 w-screen">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-3xl">
              News Update
            </div>
            <ul className="flex space-x-4 lg:flex">
              <li><button onClick={() => handleCategoryChange('general')} className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold">Umum</button></li>
              <li><button onClick={() => handleCategoryChange('business')} className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold">Bisnis</button></li>
              <li><button onClick={() => handleCategoryChange('sport')} className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold">Olahraga</button></li>
              <li><button onClick={() => handleCategoryChange('technology')} className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold">Teknologi</button></li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <h2 className="text-4xl text-black font-bold text-center mt-14 mb-14 ml-14 mr-14 ">Berita Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {newsData.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    
  );
}

export default News;
