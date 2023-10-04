"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _home = require('../controllers/home'); var _home2 = _interopRequireDefault(_home);

const router = new (0, _express.Router)();

router.get('/', _home2.default.index);

exports. default = router;
