import React, { useState } from 'react'
import SearchBook from './SearchBook'
import './Home.css'
import SignOut from './SignOut'
import CommentsPage from './CommentsPage' // ここを追加

function Home() {
  const [showComments, setShowComments] = useState(false); // ここを追加

  return (
    <div>
      <SignOut />

      {/* コメントページ表示ボタン */}
      <button className='commentButton' onClick={() => setShowComments(!showComments)}>
        {showComments ? 'hide comments' : 'see comments'}
      </button>
      
      <SearchBook />

      {/* showCommentsの状態によってコメントページを表示/非表示 */}
      {showComments && <CommentsPage />}
    </div>
  )
}

export default Home;
