//linesFunctionality
document.addEventListener('DOMContentLoaded', function () {
 const linesContainer = document.getElementById('lines-container')
 linesContainer.addEventListener('click', function () {
  this.classList.toggle('crossed')
 })
})
// dropDownFunctionality
const dropdownButton = document.getElementById('lines-container');
const dropdownContent = document.getElementById('dropdownContent2');
dropdownButton.addEventListener('click', () => {
 if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  dropdownContent.style.display = 'block';
  dropdownButton.style.zIndex = '1'
  dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
 } else {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
  dropdownContent.style.maxHeight = '0';
  setTimeout(() => {
   dropdownContent.style.display = 'none';
  }, 500);
 }
});
// videopause&resume
document.addEventListener('DOMContentLoaded', function () {
 const video = document.querySelector('video');
 const videoBtn = document.getElementById('videoBtn');
 videoBtn.addEventListener('click', toggleVideo);

 function toggleVideo() {
  if (video.paused) {
   video.play();
   videoBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
   video.pause();
   videoBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
 }
});
// MOVIESLIDER
document.addEventListener('DOMContentLoaded', function () {
 const slider = document.querySelector('.slider');
 let currentSlide = 1;
 let isPaused = false;
 let sliderInterval;

 function showSlide(index) {
  if (index >= 1 && index <= 4) {
   currentSlide = index;
   slider.style.transition = 'transform 0.5s ease-in-out';
   slider.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
   // Update active dot
   const dots = document.querySelectorAll('.dot');
   dots.forEach((dot, i) => {
    dot.classList.toggle('active', i + 1 === currentSlide);
   });
   // Reset to the first slide after the transition
   if (currentSlide === 1) {
    setTimeout(() => {
     slider.style.transition = 'none';
     slider.style.transform = 'translateX(0)';
    }, 500);
   }
  }
 }

 function nextSlide() {
  currentSlide = (currentSlide % 4) + 1;
  if (currentSlide === 1) {
   // If transitioning back to the first slide, reset transition and position
   slider.style.transition = 'none';
   slider.style.transform = 'translateX(0)';
   // Force a reflow to apply the above changes immediately
   void slider.offsetWidth;
   // Re-enable the transition for the next slide
   slider.style.transition = 'transform 0.5s ease-in-out';
  }
  slider.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
   dot.classList.toggle('active', i + 1 === currentSlide);
  });
 }
 // Initialize dots
 const dotsContainer = document.querySelector('.dots');
 for (let i = 1; i <= 4; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
 }
 // Automatically advance to the next slide every 2 seconds
 sliderInterval = setInterval(() => {
  if (!isPaused) {
   nextSlide();
  }
 }, 2000);
 // Pause/Resume functionality
 const pauseResumeBtn = document.querySelector('.pause-resume-btn');
 pauseResumeBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) {
   clearInterval(sliderInterval);
   pauseResumeBtn.innerHTML = '<i class="fa-regular fa-circle-play"></i> ';
  } else {
   sliderInterval = setInterval(() => {
    if (!isPaused) {
     nextSlide();
    }
   }, 2000);
   pauseResumeBtn.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
  }
 });
});
document.addEventListener('DOMContentLoaded', function () {
 let currentSlide = 1;
 const totalSlides = 4;
 const slideWidth = 250;
 const transitionDuration = 1000; // 1 second
 let isPaused = false;
 let intervalId;

 function nextSlide() {
  if (!isPaused) {
   currentSlide = (currentSlide % totalSlides) + 1;
   updateSlider();
   updateDots();
  }
 }

 function updateSlider() {
  const slidesContainer = document.getElementById('slides-container');
  const newPosition = -slideWidth * (currentSlide - 1);
  if (currentSlide === 1) {
   slidesContainer.style.transition = 'none';
   slidesContainer.style.transform = `translateX(${newPosition}px)`;
   setTimeout(() => {
    slidesContainer.style.transition = `transform ${transitionDuration}ms ease-in-out`;
   }, 0);
  } else {
   slidesContainer.style.transform = `translateX(${newPosition}px)`;
  }
 }

 function updateDots() {
  const dotsContainer = document.getElementById('dots-container');
  const dots = dotsContainer.getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
   dots[i].classList.remove('active');
  }
  dots[currentSlide - 1].classList.add('active');
 }

 function togglePauseResume() {
  isPaused = !isPaused;
  const pauseResumeBtn = document.getElementById('pauseResumeBtn');
  if (isPaused) {
   clearInterval(intervalId);
   pauseResumeBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
   intervalId = setInterval(() => {
    if (!isPaused) {
     nextSlide();
    }
   }, 3000);
   pauseResumeBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
 }
 // Automatic slide change every 3 seconds
 intervalId = setInterval(nextSlide, 3000);
 // Setup dots
 const dotsContainer = document.getElementById('dots-container');
 for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.addEventListener('click', () => {
   currentSlide = i + 1;
   updateSlider();
   updateDots();
  });
  dotsContainer.appendChild(dot);
 }
 // Set initial active dot
 updateDots();
 // Event listener for the button click
 document.getElementById('pauseResumeBtn').addEventListener('click', togglePauseResume);
});
// bottomdropdown
const plusBtns = document.querySelectorAll('.fa-angle-down');
plusBtns.forEach((plusBtn) => {
 plusBtn.addEventListener('click', () => {
  const parentResponsiveContent = plusBtn.parentElement;
  const bottomDropdown = parentResponsiveContent.querySelector('.dropdown-bottom');
  parentResponsiveContent.classList.toggle('active');
  if (parentResponsiveContent.classList.contains('active')) {
   bottomDropdown.style.display = 'block';
   bottomDropdown.style.maxHeight = bottomDropdown.scrollHeight + 'px';
  } else {
   bottomDropdown.style.maxHeight = '0';
   bottomDropdown.addEventListener('transitionend', () => {
    bottomDropdown.style.display = 'none';
   }, {
    once: true
   });
  }
 });
});
// Function to close dropdowns when clicking outside
document.addEventListener('click', (event) => {
 const clickedElement = event.target;
 const isPlusBtn = clickedElement.classList.contains('fa-angle-down');
 const isDropdown = clickedElement.classList.contains('dropdown-bottom');
 if (!isPlusBtn && !isDropdown) {
  plusBtns.forEach((plusBtn) => {
   const parentResponsiveContent = plusBtn.parentElement;
   const bottomDropdown = parentResponsiveContent.querySelector('.dropdown-bottom');
   parentResponsiveContent.classList.remove('active');
   bottomDropdown.style.maxHeight = '0';
   bottomDropdown.style.display = 'none';
  });
 }
});