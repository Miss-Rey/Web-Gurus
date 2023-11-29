// Initialize following and follower count
let followingCount = 0;
let followerCount = 0;

// Function to update following count
function updateFollowingCount(increment) {
  // Ensure following count doesn't go below zero
  followingCount = Math.max(0, followingCount + increment);

  // Update the UI
  const followingCountElement = document.getElementById("following-count-value");
  followingCountElement.textContent = followingCount;

  // Automatically update follower count when following or unfollowing
  updateFollowerCount(increment);
}

// Function to update follower count
function updateFollowerCount(increment) {
  // Ensure follower count doesn't go below zero
  followerCount = Math.max(0, followerCount + increment);

  // Update the UI
  const followerCountElement = document.getElementById("follower-count-value");
  followerCountElement.textContent = followerCount;
}

// Example of updating following count and follower count (call these when following or unfollowing a user)
// updateFollowingCount(1); // Increment by 1 when following a user
// updateFollowingCount(-1); // Decrement by 1 when unfollowing a user
// Example data for demonstration
// Example data for demonstration
// Example data for demonstration

// Example data for demonstration
const videos = [
  { id: 1, user: "User1", videoUrl: "video1.mp4" },
  { id: 2, user: "User2", videoUrl: "video2.mp4" },
  // Add more video data as needed
];

// Function to create video elements
function createVideoElement(video) {
  const videoElement = document.createElement("div");
  videoElement.classList.add("video");

  // Video content
  const videoContent = document.createElement("video");
  videoContent.src = video.videoUrl;
  videoContent.controls = true;
  videoElement.appendChild(videoContent);

  // User profile and actions
  const userProfile = document.createElement("div");
  userProfile.classList.add("user-profile");
  const profilePhoto = document.createElement("img");
  profilePhoto.src = "default-profile.jpg"; // Replace with user's profile photo
  userProfile.appendChild(profilePhoto);
  videoElement.appendChild(userProfile);

  // Actions (like, comment, share, duet)
  const actions = document.createElement("div");
  actions.classList.add("actions");
  const likeIcon = document.createElement("span");
  likeIcon.textContent = "Like";
  actions.appendChild(likeIcon);
  const commentIcon = document.createElement("span");
  commentIcon.textContent = "Comment";
  actions.appendChild(commentIcon);
  const shareIcon = document.createElement("span");
  shareIcon.textContent = "Share";
  actions.appendChild(shareIcon);
  const duetIcon = document.createElement("span");
  duetIcon.textContent = "Duet";
  actions.appendChild(duetIcon);
  videoElement.appendChild(actions);

  return videoElement;
}

// Function to initialize the video feed
function initializeVideoFeed() {
  const videoFeed = document.getElementById("video-feed");

  // Populate the video feed with placeholders
  for (let i = 0; i < 5; i++) {
    const placeholder = document.createElement("div");
    placeholder.textContent = "Nothing has been posted here";
    videoFeed.appendChild(placeholder);
  }

  // Add videos to the video feed
  videos.forEach(video => {
    const videoElement = createVideoElement(video);
    videoFeed.appendChild(videoElement);
  });

  // Load more videos when the user scrolls
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Add more videos or load data from the server
      // For simplicity, this example adds the same videos again
      videos.forEach(video => {
        const videoElement = createVideoElement(video);
        videoFeed.appendChild(videoElement);
      });
    }
  });

  // Add event listeners to the buttons
  const languageButtons = document.querySelectorAll('.language-button');

  languageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const language = this.getAttribute('data-language');
      navigateToVideosPage(language);
    });
  });
}

// Function to navigate to the videos page with the selected language
function navigateToVideosPage(language) {
  window.location.href = `videos.html?language=${language}`;
}


// JavaScript (app.js or a separate script file)

document.addEventListener("DOMContentLoaded", function() {
  const contentSections = document.querySelectorAll('.content-section button');

  // Add scroll event listener
  window.addEventListener('scroll', function() {
    // Get the position of the navigation icons div
    const iconContainer = document.getElementById('navigation-icons');
    const iconContainerPosition = iconContainer.getBoundingClientRect().bottom;

    // Toggle the visibility of buttons based on scroll position
    contentSections.forEach(function(button) {
      if (window.scrollY > iconContainerPosition) {
        button.style.opacity = '0';
      } else {
        button.style.opacity = '1';
      }
    });
  });
});


const programmingLanguagesIcon = document.getElementById("programming-languages-icon");
    const myVideosIcon = document.getElementById("my-videos-icon");
    const likedVideosIcon = document.getElementById("liked-videos-icon");
  
    const programmingLanguagesContent = document.getElementById("programming-languages");
    const myVideosContent = document.getElementById("my-videos");
    const likedVideosContent = document.getElementById("liked-videos");
  
    ;
  myVideosIcon.addEventListener('click', function(){
    programmingLanguagesContent.style.display = 'none'
    myVideosIcon.style.borderBottom = '2px solid black'
    myVideosContent.style.display ='grid'
    likedVideosIcon.style.borderbottom = 'none'
    programmingLanguagesIcon.style.borderbottom = 'none'
    
  })

  likedVideosIcon.addEventListener('click', function(){
    programmingLanguagesContent.style.display = 'none'
    likedVideosIcon.style.borderBottom = '2px solid black'
    myVideosIcon.style.borderbottom = 'none'
    programmingLanguagesIcon.style.borderbottom = 'none'
    myVideosContent.style.display ='none'
    likedVideosContent.style.display = 'grid'

  })

  programmingLanguagesIcon.addEventListener('click', function(){
    programmingLanguagesContent.style.display = 'grid'
    programmingLanguagesIcon.style.borderBottom = '2px solid black'
    likedVideosIcon.style.borderbottom = 'none'
    myVideosIcon.style.borderbottom = 'none'
    myVideosContent.style.display ='none'
    likedVideosContent.style.display = 'none'

  })
  // JavaScript (app.js or a separate script file)
