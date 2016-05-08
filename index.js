var self = require("sdk/self");

var pageMod = require("sdk/page-mod");

// Load URL data from a flat txt file
var urls = self.data.load('urls.txt').trim().split('\n');

for(var url_index in urls) {
    var url = urls[url_index],
        split_url = url.trim().split(' '),
        match = split_url[1],
        title = split_url[0],
        hidden = split_url[2];

    // if there's no wildcard, or protocol, then add http and https
    if(match.indexOf("*") == -1 && match.indexOf("://") == -1) {
        match = new RegExp("http(s?)://"+match+"(?:/.*)?");
    }
    // debugging
    console.log("Line:", url);
    console.log("Match:", match);

    pageMod.PageMod({
        include: match,
        contentScriptFile: self.data.url("bottombar.js"),
        contentScriptOptions: {hidden: hidden, title: title, match:match} 
    });
}

