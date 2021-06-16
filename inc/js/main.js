jQuery(($) => {
  const ROOT_ELEMENT = $("#book");
  const MANUAL_DIVIDING = false;

  (() => {
    let translate = 0;
    if ($("html").attr("lang") != "hy") {
      translate = 1;
    }
    PAGES.map((page) => (page.text = page.text[translate]));
  })();

  (() => {
    if (MANUAL_DIVIDING) return;
    const P_COUNT = 6;
    PAGES.map((page) => {
      page.text = page.text.split("<p>");
      for (let i = P_COUNT; i < page.text.length; i += P_COUNT) {
        page.text.splice(i, 0, "###DIVIDE");
      }
      page.text = page.text.join("");
    });
  })();

  PAGES.map((page) => {
    page.text = page.text.split("###DIVIDE");
    page.text.map((text, i) => {
      const newPage = $("<div>");

      newPage.append($("<div>").addClass("text").html(text));
      $("<div>").addClass("new-page").append(newPage).appendTo(ROOT_ELEMENT);
    });
  });

  $("#book").turn({
    width: 500,
    height: 600,
    display: "single",
  });
});
