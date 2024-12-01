import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom'; // Updated imports
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Routes> {/* Replaced Switch with Routes */}
        <Route
          path="/"
          element={<Home isLoading={isLoading} fetchError={fetchError} />} // Updated to use element
        />
        <Route path="/post" element={<NewPost />} /> {/* Updated to use element */}
        <Route path="/edit/:id" element={<EditPost />} /> {/* Updated to use element */}
        <Route path="/post/:id" element={<PostPage />} /> {/* Updated to use element */}
        <Route path="/about" element={<About />} /> {/* Updated to use element */}
        <Route path="*" element={<Missing />} /> {/* Updated to use element */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
