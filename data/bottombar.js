// {TITLE} is the name of the service
var bar_text = "Good news! {TITLE} has a hidden service. Simply click the link (new tab): ";

function showBar() {
    var bar = document.createElement("div");
    bar.id = "hiddenservicebar";

    // generate the sanitized hidden service link
    var hsLink = document.createElement("a");
    hsLink.href = "http://" + self.options.hidden;
    hsLink.textContent = self.options.hidden;
    hsLink.target = "_BLANK";
    hsLink.style.color = "#3cd81e";

    // generate the "close" link on the right of the bar
    var closeLink = document.createElement("a");
    closeLink.href = "#";
    closeLink.addEventListener("click", function(e) {
        document.getElementById('hiddenservicebar').remove(); 
    });
    closeLink.style.textAlign = "right";
    closeLink.style.float = "right";
    closeLink.textContent = "Close";

    var replaced = bar_text.replace(/\{TITLE\}/g, self.options.title);

    // add the text to the bar
    var bar_p = document.createElement("p");
    bar_p.style.color = "rgb(221, 221, 221)";
    bar_p.appendChild(document.createTextNode(replaced));
    // append the sanitized links to the text
    bar_p.appendChild(hsLink);
    bar_p.appendChild(closeLink);
    // now attach the paragraph to the main div
    bar.appendChild(bar_p);

    // style the bar
    bar.style.backgroundColor = "rgb(95, 51, 180)";
    bar.style.fontFamily = '"Lucida Grande",Verdana,Arial,Helvetica,sans-serif';
    // we don't fill the page just because
    // sometimes the close button goes offscreen
    // so let's center it instead...
    bar.style.width = "90%";
    bar.style.position = "fixed";
    bar.style.height = "35px";
    bar.style.padding = "5px";
    bar.style.borderRadius = "0 0 10px 10px";
    bar.style.MozBorderRadius = "0 0 10px 10px";
    bar.style.top = "0";
    // center bar
    bar.style.left = "5vw";
    // yes we need a zIndex this crazy, because cloudflare also loves
    // to use a crazy zIndex that we have to compete with, or the bar
    // won't show up
    bar.style.zIndex = 9999999999;
    // now inject it at the beginning of the document
    document.body.insertBefore(bar,document.body.children[0]);
}

showBar();
