var posts = [];
var idNumber = 0;

$('.add-post').click(function () {
    var post = { text: $("#post-name").val(), id: idNumber++, comments: [] };
    posts.push(post);
    renderPosts();
    $("#post-name").val('');
});

function renderPosts() {
    var commentButton = '<div class="comments-group">'+ '<input type="text" id="comment-name" class="form-control" placeholder="Comment here">' + '<br>' +
    '<button class="btn btn-primary comment-button" type="button">Comment</button></div>';
    $(".posts").empty();
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p class="post" data-id=' + posts[i].id + '>' + posts[i].text + ' <button type="button" class="btn btn-primary remove">Remove</button> ' + '</p>' + '<br>' + commentButton);
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






// // Brandon


// // //array for posts
// // var id = 0;
// // var posts = [];

// // //click function for posting
// // $('.make-post').on('click', function(){
// //   //collecting values
// //   var text = $('.post-text').val();//post input val
// //   var identifier = id;
// //   id ++;

// //   //adding those values to an array
// //   var post = {text: text, id: identifier, comments: []};
// //   posts.push(post);

// //   //rendering the array to the screen
// //   renderPosts();
// // })


// // //click for comments
// // $('.posts').on('click', '.comment-btn', function(){
// //     //collecting values
// //   var commentText = $(this).prev().val(); // comment input val
// //   var postId = $(this).parent().data().id;//use to relate to the posts div

// //   //adding those values to an array
// //   for(var i = 0; i < posts.length; i ++){
// //     if(posts[i].id === postId){
// //        posts[i].comments.push(commentText);
// //        }
// //   }

// // //rendering the array to the screen
// // renderPosts();

// // });


// // //function for rendering
// // function renderPosts(){
// //   $('.posts').empty()

// //   for(var i = 0; i < posts.length; i ++){
// //     // var commentElements = "";  
// //     var commentElements = ""
// //     for(var j = 0; j < posts[i].comments.length; j ++){
// //    commentElements += '<li>' + posts[i].comments[j] + '</li>';     
// //     }

// //     var postElem = '<div class="post" data-id="' + posts[i].id + '">' + posts[i].text + '<input class="comment-text"><button class="comment-btn">Comment</button><ul class="comments">' + commentElements + '</ul></div>'
// //     //append all posts and all comments
// //     $('.posts').append(postElem)
// //   }
// // } -->
