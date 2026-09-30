/* Refresh the page's favicon candidate on load and history restoration.
   Keep the page URL intact; the root ICO remains a no-script fallback. */
(function () {
  var initialIcon = document.getElementById('site-favicon');
  if (!initialIcon) return;

  var iconUrl = new URL(initialIcon.href);
  iconUrl.searchParams.set('refresh', 'pageshow');

  function refreshFavicon() {
    var icon = initialIcon.cloneNode(false);
    icon.href = iconUrl.href;

    // A changed candidate URL prompts browsers to reconsider their saved icon.
    document.querySelectorAll('link[rel~="icon"]').forEach(function (previous) {
      previous.remove();
    });
    document.head.appendChild(icon);
  }

  window.addEventListener('pageshow', refreshFavicon);
}());
