const addFriend = document.querySelector(".box h1");
const addFriendBtn = document.querySelector(".box button");
const image = document.getElementById("img1")

let check = 1;

addFriendBtn.addEventListener("click",function() {
    if (check==1) {
        
        addFriend.textContent="Friend"
        addFriend.style.color="green"
        addFriendBtn.style.color="red"
        image.src="https://i.pinimg.com/736x/f4/1a/13/f41a13df2d4223576900d55a456093d4.jpg";
        addFriendBtn.style.backgroundColor="#ff8080"
        addFriendBtn.textContent="Remove Friend"
    
        addFriendBtn.style.border="2px solid red"


        check = 0;
    }else{
 
        addFriend.textContent="Stranger"
        addFriend.style.color="red"
        addFriendBtn.style.color="green"
        image.src="https://www.samaa.tv/images/kurlus-osman-season-5.png";
        addFriendBtn.style.backgroundColor="#00ff80"
        addFriendBtn.textContent="Add Friend"
        addFriendBtn.style.border="2px solid green"

        
        check = 1;
    }
})