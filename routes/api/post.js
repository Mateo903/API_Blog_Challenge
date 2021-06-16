const router = require('express').Router();

const { Post } = require('../../db')

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    attributes: {exclude: ['content','createdAt', 'updatedAt']},
    order:[['creationDate', 'DESC']]
  });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const response = await Post.create(req.body);
  res.json(response);
});

router.patch('/:postid', async (req, res) => {
  const response = await Post.update(
    req.body, {
    where: {id: req.params.postid}
  });
  res.json(response);
});

router.delete('/:postid', async (req, res) => {
  const response = await Post.destroy({
    where: {id: req.params.postid}
  });
  res.json(response);
});

module.exports = router
