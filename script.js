document.addEventListener('DOMContentLoaded', function() {
  // Array of random image sources
  const randomImages = [
      'images/av1.png',
      'images/av2.png',
      'images/av3.png',
      'images/av4.png',
      'images/av5.png',
      'images/av6.png',
      'images/av7.png',
      'images/av8.png'
  ];

  // Default profile pictures based on gender
  const defaultMaleProfile = 'av1.png';
  const defaultFemaleProfile = 'av3.png';

  // Function to get a random image from the array
  function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      return randomImages[randomIndex];
  }

  // Mock function to simulate checking if the user is logged in and their profile info
  function getUserProfile() {
      return {
          isLoggedIn: false, // Set to true to simulate a logged-in user
          gender: 'male', // 'male' or 'female'
          profilePicture: '' // Path to user's profile picture if available
      };
  }

  // Set the profile picture based on the user's login status
  const profilePicture = document.getElementById('profile-picture');
  const userProfile = getUserProfile();

  if (userProfile.isLoggedIn) {
      if (userProfile.profilePicture) {
          profilePicture.src = userProfile.profilePicture;
      } else {
          profilePicture.src = userProfile.gender === 'male' ? defaultMaleProfile : defaultFemaleProfile;
      }
  } else {
      profilePicture.src = getRandomImage();
  }
});


