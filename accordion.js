$(document).ready(function () {
  const arrowSVG =
    '<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>';

  const expandContractGroup = (e) => {
    const expandAnswer = !$(e.target).hasClass("selected");
    // Find element with class "selected" and remove it
    // If this has class "selected" it will contrct the group
    $(".selected").removeClass("selected");
    // Otherwise it will expand the group
    if (expandAnswer) $("#" + e.target.id).addClass("selected");
  };

  $(".question").append(arrowSVG);
  $(".question-group").focus(expandContractGroup);
});
