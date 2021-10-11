var MODEL = (function () {
  var _grabNewContent = function (pageName) {
    $.get(`pages/${pageName}/${pageName}.html`, function (data) {
      console.log(data);

      $(".app").html(data);
    });
  };

  return {
    grabNewContent: _grabNewContent,
  };
})();
