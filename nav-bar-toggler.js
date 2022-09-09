var navigation_function = function () {
  $(".fa-bars").click(function () {
    var size = $(".screen-nav").css("right");
    if (size == "-285px") {
      console.log(size);
      $(".screen-nav").animate(
        {
          right: "0px",
        },
        300
      );
      $("body").animate(
        {
          right: "285px",
        },
        300
      );
    }
    if (size == "0px") {
      // Then push them back */
      $(".screen-nav").animate(
        {
          right: "-285px",
        },
        300
      );
      $("body").animate(
        {
          right: "0px",
        },
        300
      );
    }
  });
};

navigation_function();
