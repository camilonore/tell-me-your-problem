import { usePosts } from '../../hooks/usePosts'
import { normalizeDate } from '../../Utils/normalizeDate'
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
              title={post.body.title}
              text={post.body.text}
              time={normalizeDate(post.date)}
            />
              )
            })
          )}
    </>
  )
}

export { Posts }
