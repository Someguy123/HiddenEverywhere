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
    closeLink.onClick = "document.getElementById('hiddenservicebar').remove();";
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
    bar.style.width = "100%";
    bar.style.position = "fixed";
    bar.style.height = "35px";
    bar.style.padding = "5px";
    bar.style.top = "0";
    bar.style.zIndex = 9999999999;
    // now inject it at the beginning of the document
    document.body.insertBefore(bar,document.body.children[0]);
}

showBar();
