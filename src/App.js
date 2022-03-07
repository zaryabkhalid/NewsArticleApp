import { useState, useEffect } from 'react';
import Articles from './Components/Articles';
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import { BeatLoader } from 'react-spinners';





const ARTICLES_API_KEY = 'AEdAYEFDGj7rBdroOsTqMmwlBOcAdv1J'
function App() {

  const [article, setArticle] = useState([]);
  const [term, setTerm] = useState('');
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {

        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${ARTICLES_API_KEY}`);
        const articles = await res.json();
        setArticle(articles.response.docs);
        console.log(articles);
        setIsLoading(false);

      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchArticles();
  }, [term])

  return (
    <>
      <nav className='sticky top-0 '>
        <Navbar />
      </nav>
      <section className='h-full'>
        <div className='showcase'>
          <div className='overlay'>
            <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-6xl capitalize border-2 py-5 px-3">Viewing articles about {term}</h1>
            <SearchForm searchText={(text) => setTerm(text)} />
          </div>
        </div>
      </section>

      <section>
        {isloading ? <div className='w-full h-full text-center mt-20'><BeatLoader size={25} color='black' /></div> : <div><Articles article={article} /></div>}
      </section>
    </>
  );
}

export default App;
