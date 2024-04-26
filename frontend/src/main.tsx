import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root.tsx';
import Home from './routes/Home.tsx';
import SearchResults from './routes/SearchResults.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Root />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: '/search-results',
              element: <SearchResults />,
            },
          ],
        },
      ])}
    />
  </React.StrictMode>
);
