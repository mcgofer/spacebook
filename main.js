var posts = [];

function addPost(text, id) {
    var post = { "text": text, "id": id };
    posts.push(post);
}

function renderPosts() {
    $(".posts").find("p").remove();
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p class="post" data-id=' + posts[i].id + '>' + '<button type="button" class="remove">REMOVE</button> ' + posts[i].text + '</p>');
    }
}

var idNumber = 0;
$('.add-post').click(function () {
    addPost($("#post-name").val(), idNumber++);
    renderPosts();
});

$('.posts').on('click', '.remove', function () {
    var removeId = $(this).closest('p').data().id;
    // alert(removeId);
    posts.splice(removeId, 1);
    renderPosts();
});

