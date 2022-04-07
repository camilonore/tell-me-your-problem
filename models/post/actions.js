import { PostModel } from './post'

// TODO: Divide the comments from the post model
// TODO: Oh my gosh with the population

async function newPost (post) {
  const newPost = new PostModel({ ...post })
  return await newPost.save()
}

async function getAllPosts () {
  const posts = await PostModel.find({})
    .populate('comments')
    .populate('author')
    .sort({ date: -1 })
    .exec()
  return posts
}

async function getPostById (id) {
  const post = await PostModel.findById(id)
    .populate('comments')
    .populate({
      path: 'comments',
      populate: {
        path: 'author'
      },
      options: {
        sort: {
          date: -1
        }
      }
    })
    .populate('author')
    .exec()
  return post
}

async function findPostByIdAndUpdate (postReference, update) {
  const post = await PostModel.findByIdAndUpdate(postReference, update, { returnDocument: 'after' })
    .populate('comments')
    .populate({
      path: 'comments',
      populate: {
        path: 'author'
      },
      options: {
        sort: {
          date: -1
        }
      }
    })
    .populate('author')
    .exec()
  return post
}

export { newPost, getAllPosts, getPostById, findPostByIdAndUpdate }
