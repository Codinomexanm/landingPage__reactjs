import React, { useCallback, useEffect, useState } from 'react';
import './style.css';

import Posts from './com/Posts/';
import loadPosts from './util/loadPosts';
import Button from './com/Button';
import TextInput from './com/TextInput';

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, page + postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = !!searchValue
    ? allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    : posts;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setPostsPerPage(4)
      }
      else if (screenWidth < 1350) {
        setPostsPerPage(3);
      }
      else if (screenWidth <= 1680) {
        setPostsPerPage(4);
      }
      else {
        setPostsPerPage(5);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="container__gallery">
      <h1 className='text_gals'>Galeria</h1>
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        {/* <TextInput searchValue={searchValue} handleChange={handleChange} /> */}
      </div>
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem Fotos 🫡 </p>}
      <div className="button-container">
        {!searchValue && (
          <Button
            text="Clique para Carregar mais fotos"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
