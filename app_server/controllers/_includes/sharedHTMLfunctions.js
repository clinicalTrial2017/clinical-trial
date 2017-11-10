var register = function() {
    var Handlebars = require( 'handlebars' );
    var helpers = {
        outputRating: function(rating, options) {
            var str = '';
            for (var i = 0; i < rating; i++ ) {
                str += '<span class="glyphicon glyphicon-star"></span>';
            }
            for (var i = rating; i < 5; i++ ) {
                str += '<span class="glyphicon glyphicon-star-empty"></span>';
            }

            return new Handlebars.SafeString (str);
        },
        testHandler: function( options ) {
            return new Handlebars.SafeString ('Hello');
        },
        replaceHelper:  function( find, replace, options) {
            var string = options.fn(this);
            return string.replace(find, replace) ;
        },
        nl2br:  function(options) {
            var nl2br = (options.fn(this) + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
            return new Handlebars.SafeString(nl2br);
        }
    };

    if (Handlebars && typeof Handlebars.registerHelper === "function") {
        for (var prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        return helpers;
    }

};

module.exports.register = register;
module.exports.helpers = register(null);


/*
Handlebars.registerHelper('outputRating', function(rating, options) {
    var str = '';
    for (var i = 0; i < rating; i++ ) {
        str += '<span class="glyphicon glyphicon-star"></span>';
    }
    for (var i = rating; i < 5; i++ ) {
        str += '<span class="glyphicon glyphicon-star-empty"></span>';
    }

    return new Handlebars.SafeString (str);
});

Handlebars.registerHelper('testHandler', function(options) {
    return new Handlebars.SafeString ('Hello');
});
*/
