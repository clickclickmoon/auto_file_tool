var express = require('express'),
	path = require('path'),

	site = express();


site.configure(function () {
	site.use(express.favicon());
	site.use(express.bodyParser());
	site.use(express.static( path.join(__dirname, 'webui') ));
	site.use(express.errorHandler({ dumpExceptions: true, showStack: true}));

	site.listen(8675);
});
