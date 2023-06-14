const express = require("express");
const {post_request, get_request, put_request, delete_request} = require('../controllers/controller.js')
const router = express.Router();

router.route('/banks')
.post(post_request)
.get(get_request)
.put(put_request)
.delete(delete_request)


module.exports = router;