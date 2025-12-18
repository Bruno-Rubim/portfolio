/**
 * Binds the logic of carousel to a given image element and two buttons
 * uses a given source list for the images
 * @param {string} imageId
 * @param {string} buttonLeftId
 * @param {string} buttonRightId
 * @param {string[]} srcList
 */
function bindCarousel(imageId, buttonLeftId, buttonRightId, srcList) {
  let currentImgId = 0;
  function carouselShift(imgElement, num) {
    currentImgId += num;
    if (currentImgId >= srcList.length) {
      currentImgId = 0;
    } else if (currentImgId < 0) {
      currentImgId = srcList.length - 1;
    }
    imgElement.src = srcList[currentImgId];
  }
  const element = document.querySelector(imageId);
  document.querySelector(buttonLeftId).onclick = () => {
    carouselShift(element, -1);
  };
  document.querySelector(buttonRightId).onclick = () => {
    carouselShift(element, 1);
  };
}
