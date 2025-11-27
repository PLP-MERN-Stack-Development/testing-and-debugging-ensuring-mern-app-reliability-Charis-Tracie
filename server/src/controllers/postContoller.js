const Post = require('../models/Post');

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content required' });
    }

    const post = await Post.create({
      title,
      content,
      category,
      author: req.user.id,
      slug: title.toLowerCase().trim().replace(/ /g, '-')
    });

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const query = {};

    if (req.query.category) {
      query.category = req.query.category;
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    const posts = await Post.find(query).skip(skip).limit(limit);

    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: 'Not found' });

    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: 'Not found' });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    post.title = req.body.title ?? post.title;
    post.content = req.body.content ?? post.content;

    await post.save();

    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: 'Not found' });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await post.deleteOne();

    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
