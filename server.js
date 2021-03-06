var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
    title: 'Article One : Sameer',
    heading: 'Article one',
    date: 'Sept 5, 2016',
    content: `
            <p>
                Content in here is a part of my first Article.This is done using online stuff.This page is additional to the homepage.
            </p>
            <p>
                Content in here is a part of my first Article.This is done using online stuff.This page is additional to the homepage.
            </p>
            <p>
                Content in here is a part of my first Article.This is done using online stuff.This page is additional to the homepage.
            </p>`
    },
    'article-two': {
        title: 'Article Two : Sameer',
        heading: 'Article two',
        date: 'Sept 5, 2016',
        content: `
                <p>
                    Content in here is a part of my second Article.This is done using online stuff.This page is additional to the homepage.
                </p>
                <p>
                    Content in here is a part of my second Article.This is done using online stuff.This page is additional to the homepage.
                </p>
                <p>
                    Content in here is a part of my second Article.This is done using online stuff.This page is additional to the homepage.
                </p>`
    }
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate= `
    <html>
    <head>
    <title>
        ${title} 
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
    <div>
        <a href="/">HOME</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
       ${date}
    </div>
    <div>
        ${content}
    </div>
    </div>
    </body>
    </html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
    
});


app.get('/article-three', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/image1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image1.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
