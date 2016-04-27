// {TITLE} is the name of the service
// {HIDDEN} is the URL of the service, without http in front
var bar_text = "Good news! {TITLE} has a hidden service. Simply click the link (new tab): "
             + '<a style="color:#3cd81e" href="http://{HIDDEN}" target="_BLANK">{HIDDEN}</a>'
             + '<a style="text-align: right; float: right;" href="#" onClick="document.getElementById(\'hiddenservicebar\').remove();">Close</a>';

function showBar(title, hidden) {
    var bar = document.createElement("div");
    bar.id = "hiddenservicebar";
    var replaced = bar_text.replace(/\{TITLE\}/g, title)
                            .replace(/\{HIDDEN\}/g, hidden);
    // add the text to the bar
    var bar_p = document.createElement("p");
    bar_p.innerHTML = replaced;
    bar_p.style.color = "rgb(221, 221, 221)";
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
