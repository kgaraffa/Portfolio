$(".silvercloud-acsearch-bar").each(function(index) {
  $(this).on("click", function(){
  ga('send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Search Bar",
    eventLabel: ($(".silvercloud-acsearch-bar").attr("widget") + " - Web AC Search Bar")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Search Bar",
    eventLabel: ($(".silvercloud-acsearch-bar").attr("widget") + " - Web AC Search Bar")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Search Bar",
    eventLabel: ($(".silvercloud-acsearch-bar").attr("widget") + " - Web AC Search Bar")
  });
});
});

$(".silvercloud-results-wrapper").click(function(){
  ga('individualRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Results List",
    eventLabel: ($(".silvercloud-results-wrapper").attr("widget") + " - Web Results List")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Results List",
    eventLabel: ($(".silvercloud-results-wrapper").attr("widget") + " - Web Results List")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Results List",
    eventLabel: ($(".silvercloud-results-wrapper").attr("widget") + " - Web Results List")
  });
});

$(".silvercloud-search-bar").click(function(){
  ga('individualRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Search Bar",
    eventLabel: ($(".silvercloud-search-bar").attr("widget") + " - Web AC Search Bar")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Search Bar",
    eventLabel: ($(".silvercloud-search-bar").attr("widget") + " - Web AC Search Bar")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Search Bar",
    eventLabel: ($(".silvercloud-search-bar").attr("widget") + " - Web AC Search Bar")
  });
});

$(".silvercloud-top-content-wrapper").click(function(){
  ga('individualRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Top Content",
    eventLabel: ($(".silvercloud-top-content-wrapper").attr("widget") + " - Web Top Content")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Top Content",
    eventLabel: ($(".silvercloud-top-content-wrapper").attr("widget") + " - Web Top Content")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Top Content",
    eventLabel: ($(".silvercloud-top-content-wrapper").attr("widget") + " - Web Top Content")
  });
});

$(".silvercloud-custom-content-wrapper").click(function(){
  ga('individualRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Custom Content",
    eventLabel: ($(".silvercloud-custom-content-wrapper").attr("widget") + " - Web Custom Content")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Custom Content",
    eventLabel: ($(".silvercloud-custom-content-wrapper").attr("widget") + " - Web Custom Content")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Custom Content",
    eventLabel: ($(".silvercloud-custom-content-wrapper").attr("widget") + " - Web Custom Content")
  });
});

$(".silvercloud-custom-form").click(function(){
  ga('individualRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Form",
    eventLabel: ($(".silvercloud-custom-form").attr("form") + " - Web Form")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Form",
    eventLabel: ($(".silvercloud-custom-form").attr("form") + " - Web Form")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Form",
    eventLabel: ($(".silvercloud-custom-form").attr("form") + " - Web Form")
  });
});

$(".silvercloud-embed-answer-wrapper").click(function(){
  ga('individualRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Answer Embed",
    eventLabel: ($(".silvercloud-embed-answer-wrapper").attr("answer") + " - Web Answer Embed")
  }),
  ga('allRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Answer Embed",
    eventLabel: ($(".silvercloud-embed-answer-wrapper").attr("answer") + " - Web Answer Embed")
  }),
  ga('customerRollup.send', {
    hitType: "event",
    eventAction: "click",
    eventCategory: "Answer Embed",
    eventLabel: ($(".silvercloud-embed-answer-wrapper").attr("answer") + " - Web Answer Embed")
  });
});
