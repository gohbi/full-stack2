import express from 'express'

const articleInfo = [
    { name: 'learn-node', upvotes: 0, comments: [] },
    { name: 'learn-react',upvotes: 0,  },
    { name: 'mongodb', upvotes: 0, comments: [] },
]

const app = express();

app.use(express.json());


app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(a => a.name === req.params.name);
    article.upvotes += 1;

    res.send('Hooray! The article ' + req.params.name + ' now has ' + article.upvotes + ' upvotes!')
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
 
    
});

app.listen(8000, function(){
    console.log('Server is running on port 8000')
});