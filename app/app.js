function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (!pageID) {
    MODEL.grabNewContent("home");
  } else {
    MODEL.grabNewContent(pageID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
  let displayCount = 0;

  $(".fa-bars").click(function () {
    if (displayCount == 0) {
      $(".mobile-links").css("display", "flex");
      displayCount = 1;
    } else {
      $(".mobile-links").css("display", "none");
      displayCount = 0;
    }
  });

  window.addEventListener(
    "resize",
    function (event) {
      if (window.innerWidth >= 768) {
        $(".mobile-links").css("display", "none");
      }
    },
    true
  );
}

$(document).ready(function () {
  initListeners();
});
