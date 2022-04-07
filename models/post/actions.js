import { PostModel } from './post'

// TODO: Divide the comments from the post model
// TODO: Oh my gosh with the population
// TODO: Add Likes implementation

async function newPost (post) {
  try {
    const newPost = new PostModel({ ...post })
    return await newPost.save()
  } catch (error) {
    return error
  }
}

async function getAllPosts () {
  try {
    const posts = await PostModel.find({})
      .populate('comments')
      .populate('author')
      .sort({ date: -1 })
      .exec()
    return posts
  } catch (error) {
    return error
  }
}

async function getPostById (id) {
  try {
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
  } catch (error) {
    return error
  }
}

async function findPostByIdAndUpdate (postReference, update) {
  try {
    const post = await PostModel.findByIdAndUpdate(postReference, update, {
      returnDocument: 'after'
    })
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
  } catch (error) {
    return error
  }
}

export { newPost, getAllPosts, getPostById, findPostByIdAndUpdate }
