  function bindCarousel(elementRef, buttonLeftRef, buttonRightRef, srcList) {
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
    const element = document.querySelector(elementRef);
    document.querySelector(buttonLeftRef).onclick = () => {
      carouselShift(element, -1);
    };
    document.querySelector(buttonRightRef).onclick = () => {
      carouselShift(element, 1);
    };
  }