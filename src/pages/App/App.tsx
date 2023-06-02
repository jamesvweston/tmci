import React, { useEffect } from 'react';
import './App.css';
import {Bookmark} from "../../types";
import {client} from "../../api/client";
import BookmarkCard from "../../components/BookmarkCard";

function App() {
  const [bookmarks, setBookmarks] = React.useState<Array<Bookmark>>([])
  useEffect(() => {
    getBookmarks()
  }, [])

  const getBookmarks = async () => {
    const response = await client.get('bookmarks')
    setBookmarks(response.data)
  }

const mapBookmarks = (): Array<React.ReactElement<HTMLOptionElement>> =>
    bookmarks.map((bookmark) => (
        <BookmarkCard bookmark={bookmark} />
    ));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Viewing {bookmarks.length} total bookmarks
        </p>
      </header>
      <body className="App-body">
        {mapBookmarks()}
      </body>
    </div>
  );
}

export default App;
