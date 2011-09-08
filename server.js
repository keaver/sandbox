var HOST = null;
var PORT = 8080;
var fu = require("./js/fu"),
    sys = require("sys"),
    url = require("url"),
    qs = require("querystring");

fu.listen(Number(process.env.PORT || PORT), HOST);
fu.get("/", fu.staticHandler("hexgame.html"));
fu.get("/css/hex.css", fu.staticHandler("./css/hex.css"));
fu.get("/css/dark-hive/jquery-ui-1.8.15.custom.css", fu.staticHandler("./css/dark-hive/jquery-ui-1.8.15.custom.css"));

fu.get("/js/jquery-1.6.2.min.js", fu.staticHandler("./js/jquery-1.6.2.min.js"));
fu.get("/js/jquery-ui-1.8.15.custom.min.js", fu.staticHandler("./js/jquery-ui-1.8.15.custom.min.js"));
fu.get("/js/maindev.js", fu.staticHandler("./js/maindev.js"));
fu.get("/js/maindev_testing.js", fu.staticHandler("./js/maindev_testing.js"));
fu.get("/js/modernizr-2.0.6.js", fu.staticHandler("./js/modernizr-2.0.6.js"));

fu.get("/img/hexlight.png", fu.staticHandler("./img/hexlight.png"));
fu.get("/img/hexlight_b.png", fu.staticHandler("./img/hexlight_b.png"));
fu.get("/img/hexlight_r.png", fu.staticHandler("./img/hexlight_r.png"));
fu.get("/img/hexTray5.png", fu.staticHandler("./img/hexTray5.png"));
fu.get("/img/greetings.png", fu.staticHandler("./img/greetings.png"));

fu.get("/img/board_bkg.jpg", fu.staticHandler("./img/board_bkg.jpg"));
fu.get("/img/board_bkg.png", fu.staticHandler("./img/board_bkg.png"));
fu.get("/img/sixwar_logo.png", fu.staticHandler("./img/sixwar_logo.png"));

fu.get("/img/gemRed.png", fu.staticHandler("./img/gemRed.png"));
fu.get("/img/gemBlue.png", fu.staticHandler("./img/gemBlue.png"));
