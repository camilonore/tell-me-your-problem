import { usePosts } from '../../hooks/usePosts'
import { PostCard } from '../PostCard/PostCard'

const Posts = () => {
  const { posts, loading } = usePosts('/api/post')
  return (
    <>
      {loading
        ? (
        <h2>Loading...</h2>
          )
        : (
            posts.map((post) => {
              return (
            <PostCard
              key={post._id}
              id={post._id}
              author={post.author.username}
              img={post.author.img}
              comments={post.comments.length}
              likes={'0'}
              post={post.body.text}
              time={post.date}
            />
              )
            })
          )}
    </>
  )
}

export { Posts }
