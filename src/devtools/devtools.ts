
chrome.devtools.panels.create(
  'React-ChronoScope', // title for the panel tab
  null,
  // '../../assets/ChronoScope.png', // you can specify here path to an icon
  'index.html', // html page for injecting into the tab's content
  null // you can pass here a callback function
);