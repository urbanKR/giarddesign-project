const searchButtom = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

searchButtom.addEventListener("click", function () {
  if (searchInput.hidden) {
    searchInput.removeAttribute("hidden");
    searchInput.focus();
  } else {
    searchInput.hidden = true;
  }
});

window.onload = () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    gutter: 15,
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  // open lightbox on image click
  gridItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      lightboxImg.src = item.querySelector("img").src;
      lightbox.style.display = "flex";
    });
  });

  // close lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }

  closeBtn.addEventListener("click", closeLightbox);

  // navigate to previous image
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
    lightboxImg.src = gridItems[currentIndex].querySelector("img").src;
  });

  // navigate to next image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gridItems.length;
    lightboxImg.src = gridItems[currentIndex].querySelector("img").src;
  });

  // close lightbox when clicking outside the image
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // close lightbox when pressing the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  const showMoreBtn = document.getElementById("show-more-btn");
  const hiddenGridItems = document.querySelectorAll(".grid-item.hidden");
  let isShowingMore = false;

  // show more button click event
  showMoreBtn.addEventListener("click", () => {
    if (!isShowingMore) {
      hiddenGridItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      isShowingMore = true;
      showMoreBtn.innerHTML = `Show Less <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
    </svg>`;
    } else {
      hiddenGridItems.forEach((item) => {
        item.classList.add("hidden");
      });
      isShowingMore = false;
      showMoreBtn.innerHTML = `Show More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
    </svg>`;
    }
  });
});
