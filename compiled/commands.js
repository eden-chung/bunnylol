// CommandTypeUnormalized is pretty much like CommandType but
// we don't want them to be mixed
// Type for the Data table containing the commands
// Type for the header to display the commands
export const COMMANDS = {
  barnard: {
    name: "Barnard Student Planning",
    url: "https://selfservice.barnard.edu/Student"
  },
  vergil: {
    name: "Vergil",
    url: "https://vergil.columbia.edu/"
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q="
  },
  gm0: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/0/#search/"
  },
  gm1: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/1",
    searchurl: "https://mail.google.com/mail/u/1/#search/"
  },
  gm2: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/2",
    searchurl: "https://mail.google.com/mail/u/2/#search/"
  },
  drive: {
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
    url: "https://linkedin.com/",
    searchurl: "https://www.linkedin.com/search/results/all/?keywords="
  },
  vs: {
    name: "VS Code",
    url: "vscode://"
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r"
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
  simplify: {
    name: "Simplify New Grad",
    url: "https://github.com/SimplifyJobs/New-Grad-Positions"
  },
  vansh: {
    name: "Vansh New Grad",
    url: "https://github.com/vanshb03/New-Grad-2026?tab=readme-ov-file"
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q="
  }
};