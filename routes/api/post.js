const router = require('express').Router();

const { Post } = require('../../db')

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    attributes: {exclude: ['content','createdAt', 'updatedAt']},
    order:[['creationDate', 'DESC']]
  });
  res.json(posts);
});

router.get('/:postid', async (req, res) => {
  const id = req.params.postid
  const post = await Post.findAll({
    where: {id: req.params.postid}
  }).catch(()=> undefined);
  if(post.length === 0 || !post){
    console.log("ERROR: The post that you want to get doesn't exist")
  }else{
    res.json(post);
  }
});

router.post('/', async (req, res) => {
  const response = await Post.create(req.body);
  res.json(response);
});

router.patch('/:postid', async (req, res) => {
  const response = await Post.update(
    req.body, {
    where: {id: req.params.postid}
  }).catch(()=> undefined);
  if(!response[0] || !response){
    console.log("ERROR: The post tha you want to patch doesn't exist")
  }else{
    res.json(response);
  }
});

router.delete('/:postid', async (req, res) => {
  const response = await Post.destroy({
    where: {id: req.params.postid}
  }).catch(()=> undefined);
  if(!response){
    console.log("ERROR: The post tha you want to delete doesn't exist")
  }else{
    res.json(response);
  }
});

module.exports = router
