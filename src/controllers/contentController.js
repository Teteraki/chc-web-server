const contentService = require("../services/contentService");

function serve(req, res) {
    const route = req.path;
    console.log("Route requested: ", route);
    
    res.send(contentService.serveContent(route));
}

module.exports = { serve };