// 
// DEV
// 
var mysql_dev = {
	port: '3306',
	host: '138.120.135.41',
	user: 'root',
	password: 'tigris',
	database: 'tshelp',
	insecureAuth: true
};

var mongo_dev = {
	dbPort: 	27017,
	dbHost: 	'138.120.135.41',
	dbName: 	'sigPanel'
};

var php_path_dev = '/usr/bin/';
var regression_pool_path_dev = __dirname + '/app/public/uploads/pool';


// 
// TECPRO
// 
var mysql_tecpro = {
	port: '3306',
	host: '138.120.135.41',
	user: 'root',
	password: 'tigris',
	database: 'tshelp',
	insecureAuth: true
};

var mongo_tecpro = {
	dbPort: 	27017,
	dbHost: 	'138.120.131.85',
	dbName: 	'sigPanel'
};

var php_path_tecpro = '/usr/bin/';
var regression_pool_path_tecpro = __dirname + '/app/public/uploads/pool';


// 
// PRODUCTION
//
var mysql_prod = {
	port: 		'3306',
	host: 		'fr712usql001.zeu.alcatel-lucent.com',
	user: 		'tshelp',	
	password: 	'bb5VPVLS',
	database: 	'tshelp',
	insecureAuth: true
};

var mongo_prod = {
	dbPort: 	27017,
	dbHost: 	'localhost',
	dbName: 	'sigPanel'
};

var php_path_prod = '/tools/httpd/bin/';
var regression_pool_path_prod = '../../upload/pool';

//
//
//

if(global.process.env.NODE_ENV === 'dev') {
	exports.mysql 		= mysql_dev;
	exports.mongo 		= mongo_dev;
	exports.php 		= php_path_dev;
	exports.reg_pool 	= regression_pool_path_dev;	
} 
else if(global.process.env.NODE_ENV === 'tecpro') {
	exports.mysql 		= mysql_tecpro;
	exports.mongo 		= mongo_tecpro;
	exports.php 		= php_path_tecpro;
	exports.reg_pool 	= regression_pool_path_tecpro;	
} 
else if(global.process.env.NODE_ENV === 'prod') {
	exports.mysql 		= mysql_prod;
	exports.mongo 		= mongo_prod;
	exports.php 		= php_path_prod;
	exports.reg_pool 	= regression_pool_path_prod;	
}
else {
	exports.mysql 		= mysql_dev;
	exports.mongo 		= mongo_dev;
	exports.php 		= php_path_dev;
	exports.reg_pool 	= regression_pool_path_dev;	
}
// exports.mysql 		= global.process.env.NODE_ENV === 'tecpro' ? mysql_tecpro : mysql_dev;
// exports.mongo 		= global.process.env.NODE_ENV === 'tecpro' ? mongo_tecpro : mongo_dev;
// exports.php 		= global.process.env.NODE_ENV === 'tecpro' ? php_path_tecpro : php_path_dev;
// exports.reg_pool 	= global.process.env.NODE_ENV === 'tecpro' ? regression_pool_path_tecpro : regression_pool_path_dev;













