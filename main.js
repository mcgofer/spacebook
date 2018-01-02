var posts = [];
var idNumber = 0;

$('.add-post').click(function () {
    var post = { text: $("#post-name").val(), id: idNumber++, comments: [] };
    posts.push(post);
    renderPosts();
});

function renderPosts() {
    $(".posts").empty();
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p class="post" data-id=' + posts[i].id + '>' + '<button type="button" class="remove">REMOVE</button> ' + posts[i].text + '</p>');
    }
}


$('.posts').on('click', '.remove', function () {
    var removeId = $(this).closest('p').data().id;
    for (var i = 0; i < posts.length; i++) {
        if (removeId === posts[i].id)
            posts.splice(i, 1);
    }
    renderPosts();
});
