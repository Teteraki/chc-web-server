function serve(req, res) {
    const route = req.path;
    console.log("Route requested: ", route);
    
    res.send(serveContent(route));
}

function serveContent(route) {
    let file;

    switch (route) {
        case "/":
            file = "index.html";
            break;
        case "/founders":
            file = "founders.html";
            break;
        case "/contact":
            file = "contact.html";
            break;
        default:
            res.status(404).send("Page Not Found");
            return;
    }

    return file;

    // const filePath = path.join(__dirname. "")
}

module.exports = { serve };