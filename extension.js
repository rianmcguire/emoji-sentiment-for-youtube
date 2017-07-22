var discussion = document.getElementById("watch-discussion");

function replaceComments() {
    discussion.querySelectorAll(".comment-renderer-text-content:not([data-emoji-sentiment])").forEach(function(comment){
        comment.setAttribute("data-emoji-sentiment", "");
        comment.innerText = "😡";
    });
}
replaceComments(discussion);

var observer = new MutationObserver(function(){
    observer.disconnect();
    replaceComments();
    observer.observe(discussion, {childList: true, subtree: true});
});
observer.observe(discussion, {childList: true, subtree: true});
