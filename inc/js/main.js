jQuery(($) => {
  const ROOT_ELEMENT = $("#book");
  const MANUAL_DIVIDING = false;
  const PAGE_SIZE = [500, 600]; // WIDTH , HEIGHT

  //______________//
  //______________//

  // *************
  // GET USER LANG
  // ******|******
  // ******|******
  // ***\**|**/***
  // *****\./*****

  (() => {
    let translate = 0; // 0 - HY , 1 - EN
    if ($("html").attr("lang") != "hy") {
      translate = 1;
    }
    PAGES.map((page) => (page.text = page.text[translate]));
  })();

  // *************
  // DIVIDE TEXTS TO PAGE
  // ******|******
  // ******|******
  // ***\**|**/***
  // *****\./*****

  (() => {
    if (MANUAL_DIVIDING) return;
    const P_COUNT = 1000;
    PAGES.map((page) => {
      let text = $(page.text).text();
      console.log(sizeOf(page.text) - sizeOf(text));
      page.text = page.text.split("");
      console.log(page.text.text);
      for (let i = P_COUNT; i < sizeOf(page.text); i += P_COUNT) {
        page.text.splice(i, 0, "###DIVIDE");
      }
      page.text = page.text.join("");
    });
  })();

  // ************
  // DIVIDE TEXTS TO PAGE
  // ******|******
  // ******|******
  // ***\**|**/***
  // *****\./*****

  (() => {
    PAGES.map((page) => {
      page.text = page.text.split("###DIVIDE");
      page.text.map((text, i) => {
        const newPage = $("<div>");

        newPage.append($("<div>").addClass("text").html(text));

        $("<div>")
          .data("num", i)
          .addClass("new-page")
          .append(newPage)
          .appendTo(ROOT_ELEMENT);
      });
    });
  })();

  // ************
  //  CREATE BOOK
  // ******|******
  // ******|******
  // ***\**|**/***
  // *****\./*****

  (() => {
    $(ROOT_ELEMENT).turn({
      width: PAGE_SIZE[0],
      height: PAGE_SIZE[1],
      duration: 400,
      display: "single",
      when: {
        turning: function (e, page, view) {
          const currentPage = ROOT_ELEMENT.turn("page");
          const flipDirection = page > currentPage ? "next" : "prev";
          calcPaperShadow(flipDirection);
        },
      },
    });
  })();

  // ************
  //  BOOK SHADOW
  // ******|******
  // ******|******
  // ***\**|**/***
  // *****\./*****

  (() => {
    $(ROOT_ELEMENT).append($("<div>").addClass("book-papers"));
  })();
});
