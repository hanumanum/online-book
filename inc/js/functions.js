function sizeOf(arr) {
  return arr.length;
}
function calcPaperShadow(flipDir) {
  const bookPaperWidth = $(".book-papers").width();

  $(".book-papers").css({
    width: flipDir == "next" ? bookPaperWidth - 16 / 9 : bookPaperWidth + 16 / 9,
    right: `calc(${$(".book-papers").css("right")} ${
      flipDir == "next" ? " + " : " - "
    } ${16 / 9}px)`,
    top: `calc(${$(".book-papers").css("top")} ${
      flipDir == "next" ? " - " : " + "
    } ${16 / 9}px)`,
    height: `calc(${$(".book-papers").css("height")} ${
      flipDir == "next" ? " + " : " - "
    } 1px ${flipDir == "next" ? " + " : " - "}  ${16 / 9}px)`,
  });
}
