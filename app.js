const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

/* displaying posts */
const contentContainer = document.querySelector(".content-container")

window.addEventListener("DOMContentLoaded", function() {
    displayPosts(posts)
})

function displayPosts(postItems) {
    let displayPost = postItems.map(function(item) {
        return  ` <div class="post-content">

                    <section class="user">
                        <div class="user-info">
                            <div class="user-icon">
                                <img src="${item.avatar}">
                            </div>
                            <div class="text">
                                <p class="username">${item.name}</p>
                                <p class="location">${item.location}</p>
                            </div>
                        </div>
                    </section>

                    <section class="photo">
                        <div class="post-img">
                            <img src="${item.post}">
                        </div>
                    </section>

                    <section class="lower">
                        <div class="icons">
                            <img src="images/icon-heart.png">
                            <img src="images/icon-comment.png">
                            <img src="images/icon-dm.png">
                        </div>
                        <div class="likes">${item.likes} likes</div>
                        <div class="caption"><span class="username">${item.username}</span> <span class="comment">${item.comment}</span> </div>
                    </section>
                </div>`
    })
    displayPost = displayPost.join("")
    contentContainer.innerHTML = displayPost
}






