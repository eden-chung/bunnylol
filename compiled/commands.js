// CommandTypeUnormalized is pretty much like CommandType but
// we don't want them to be mixed
// Type for the Data table containing the commands
// Type for the header to display the commands
export const COMMANDS = {
  fb: {
    name: "Facebook",
    url: "https://facebook.com/",
    searchurl: "https://www.facebook.com/search/top/?q="
  },
  m: {
    name: "Messenger Desktop App",
    url: "messenger://"
  },
  mw: {
    name: "Messenger Web",
    url: "https://www.messenger.com/"
  },
  wa: {
    name: "WhatsApp Desktop App",
    url: "whatsapp://"
  },
  waw: {
    name: "WhatsApp Web",
    url: "https://web.whatsapp.com/"
  },
  gm: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/"
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/0",
    searchurl: "https://drive.google.com/drive/u/"
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query="
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    searchurl: "https://www.github.com/search?q="
  },
  r: {
    name: "Reddit",
    url: "https://reddit.com/",
    searchurl: "https://www.reddit.com/search?q="
  },
  l: {
    name: "Linkedin",
    url: "https://linkedin.com/"
  },
  vs: {
    name: "VS Code",
    url: "vscode://"
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r"
  },
  notion: {
    name: "Notion",
    url: "https://notion.so"
    // have a look at https://github.com/ssleptsov/shoto/blob/main/background.js#L77 for search
    // url
  },
  sg: {
    name: "Sweet green",
    url: "https://order.sweetgreen.com/san-mateo/menu"
  },
  bk: {
    name: "Buildkite",
    url: "https://buildkite.com"
  },
  wiki: {
    name: "Wikipedia English",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/w/index.php?search="
  },
  hn: {
    name: "HackerNews Daily",
    url: "https://www.daemonology.net/hn-daily/"
  },
  gpt: {
    name: "Chat with GPT-3",
    url: "https://chat.openai.com"
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/?q="
  }
};