var self = require("sdk/self");

var pageMod = require("sdk/page-mod");

// Load URL data from a flat txt file
var urls = self.data.load('urls.json');
urls = JSON.parse(urls);

for(var url_index in urls) {
    var url = urls[url_index],
        //split_url = url.trim().split(' '),
        match = url.match, 
        title = url.title,
        hidden = url.onion;

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

