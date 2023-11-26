const express = require('express');
const fs = require('fs');
const app = express();
var cors = require('cors');

app.use(cors());

let list = {}
list.posts = 0;

function list_dir (directoryPath) {
    let index = 0;
    fs.readdir(directoryPath, (err, files) =>  {
        if (err) {
            return console.err('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            list.posts++;
            index++;
            filename = directoryPath + file;
            list[index] = {};
            list[index].path = filename.replace("/var/www/html", "");
            list[index].name = fs.readFileSync(directoryPath + file + "/name.txt", "utf8");
        });
    })
}

list_dir("/var/www/html/blog/posts/");

app.get('/api/blog_post_list', (req, res) => res.json(list));
app.listen(3000, () => console.log("running"));