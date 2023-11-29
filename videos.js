
// const videosForLanguage = [
//     { id: 3, user: "User3", videoUrl: "video3.mp4" },
//     { id: 4, user: "User4", videoUrl: "video4.mp4" },
//     // Add more video data as needed
//   ];
  
//   // Function to create video elements
//   function createVideoElement(video) {
//     const videoElement = document.createElement("div");
//     videoElement.classList.add("video");
  
//     // Video content
//     const videoContent = document.createElement("video");
//     videoContent.src = video.videoUrl;
//     videoContent.controls = true;
//     videoElement.appendChild(videoContent);
  
//     // User profile and actions
//     const userProfile = document.createElement("div");
//     userProfile.classList.add("user-profile");
//     const profilePhoto = document.createElement("img");
//     profilePhoto.src = "default-profile.jpg"; // Replace with user's profile photo
//     userProfile.appendChild(profilePhoto);
//     videoElement.appendChild(userProfile);
  
//     // Actions (like, comment, share, duet)
//     const actions = document.createElement("div");
//     actions.classList.add("actions");
    
//     const likeButton = createActionButton("Like");
//     const commentButton = createActionButton("Comment");
//     const shareButton = createActionButton("Share");
//     const duetButton = createActionButton("Duet");
  
//     actions.appendChild(likeButton);
//     actions.appendChild(commentButton);
//     actions.appendChild(shareButton);
//     actions.appendChild(duetButton);
    
//     videoElement.appendChild(actions);
  
//     return videoElement;
//   }
  
//   // Function to create action buttons
//   function createActionButton(label) {
//     const button = document.createElement("button");
//     button.textContent = label;
//     button.addEventListener("click", function() {
//       // Perform the action (like, comment, share, duet)
//       console.log(`${label} button clicked`);
//     });
//     return button;
//   }
  
//   // Function to initialize the video feed for a specific language
//   function initializeVideoFeedForLanguage() {
//     const videoFeed = document.getElementById("video-feed");
  
//     // Add videos to the video feed
//     videosForLanguage.forEach(video => {
//       const videoElement = createVideoElement(video);
//       videoFeed.appendChild(videoElement);
//     });
//   }
  
//   // Initialize the video feed when the page loads
//   document.addEventListener("DOMContentLoaded", initializeVideoFeedForLanguage);
  
  
// Example data for demonstration (videos for a specific language)
const videosForLanguage = [
    { id: 3, user: "User3", videoUrl: "video3.mp4" },
    { id: 4, user: "User4", videoUrl: "video4.mp4" },
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
  
    return videoElement;
  }
  
  // Function to create action buttons
  function createActionButton(label) {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", function() {
      // Perform the action (like, comment, share, duet)
      console.log(`${label} button clicked`);
    });
    return button;
  }
  
  // Function to initialize the video feed for a specific language
  function initializeVideoFeedForLanguage() {
    const videoFeed = document.getElementById("video-feed");
  
    // Add videos to the video feed
    videosForLanguage.forEach(video => {
      const videoElement = createVideoElement(video);
      videoFeed.appendChild(videoElement);
    }
    )
    // Infinite scrolling
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Add more videos or load data from the server
        // For simplicity, this example adds the same videos again
        videosForLanguage.forEach(video => {
          const videoElement = createVideoElement(video);
          videoFeed.appendChild(videoElement);
        });
      }
    });
  }
  
  // Initialize the video feed when the page loads
  document.addEventListener("DOMContentLoaded", initializeVideoFeedForLanguage);
  
  // Create action buttons
  const likeButton = createActionButton("Like");
  const commentButton = createActionButton("Comment");
  const shareButton = createActionButton("Share");
  const duetButton = createActionButton("Duet");
  
  // Append action buttons to the floating-icons container
  const floatingIconsContainer = document.querySelector('.floating-icons');
  floatingIconsContainer.appendChild(likeButton);
  floatingIconsContainer.appendChild(commentButton);
  floatingIconsContainer.appendChild(shareButton);
  floatingIconsContainer.appendChild(duetButton);
  