$(document).ready(function () {
    $('.show-caratteristiche').on('click', function () {
        var config = {
            method: 'GET'
            , url: 'tabella.html'
            , success: function (html) {
                $('#caratteristiche').append(html);
                $('#caratteristiche').find('.tab').slideDown();
            }
        }
        $.ajax(config)
    });
    //JSON
    //JSON.stringify(); 	// convert JS to JSON
    //JSON.parse();		//convert JSON to JS
    $('.show-users').on('click', function () {
        var root = 'https://jsonplaceholder.typicode.com';
        var config = {
            method: 'GET'
            , url: root + '/users'
            , success: function (users) {
                var source = $("#entry-template").html();
                var template = Handlebars.compile(source);
                for (var i = 0; i < users.length; i++) {
                    var context = users[i];
                    var html = template(context);
                    $('#user-list').append(html);
                }
            }
            , error: function (err) {
                alert('Impossible to load users')
            }
        }
        $.ajax(config)
    });
});