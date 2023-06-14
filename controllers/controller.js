exports.post_request = (req, res) => {
    res.send("<h1>You are seeing because you just sent a post request</h1>")
}

exports.get_request = (req, res) => {
    res.send("<h1>You are seeing because you just sent a get request</h1>")
}

exports.put_request = (req, res) => {
    res.send("<h1>You are seeing because you just sent a put/update request</h1>")
}

exports.delete_request = (req, res) => {
    res.send("<h1>You are seeing because you just sent a delete request</h1>")
}