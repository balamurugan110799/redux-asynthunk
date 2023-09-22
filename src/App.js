import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllList } from './feature/ListSlice';
import { fetchPost, getPostError, selectAllPosts } from './feature/PostSlice';
import { getPostStatus } from './feature/PostSlice';
import { useEffect } from 'react';
import PostFrom from './feature/PostForm';
import { fetchUser, selectAllUser, userError, userStatus } from './feature/UserSlice';

function App() {
  // useSelector
  const status = useSelector(getPostStatus)
  const error = useSelector(getPostError)
  const posts = useSelector(selectAllPosts)

 
  const dispatch = useDispatch()
  useEffect(() => {
  
    

    if (status === "idle") {
      dispatch(fetchPost())
    }
  }, [])

  let content;
  if (status === "loading") {
    <p>Loading</p>
  }
  // console.log(user,"user")


  // console.log(status, error, posts)
  return (
    <div className="App">
      <PostFrom/>
      {status === "loading" ? <p>Loading</p> : null}
      {status === "success" ? <div>

        {posts?.data.map((v) => {
          return (
            <>
            <div className=' text-left px-8'>{v?.title}</div>
            </>
          )
        })}
      </div> : null}

    </div>
  );
}

export default App;
