// @flow strict

export type CommandType = {|
    name: string,
    url: string,
    searchurl?: string,
    aliases?: Array<string>
|};

// CommandTypeUnormalized is pretty much like CommandType but
// we don't want them to be mixed
export type CommandTypeUnormalized = {|
    name: string,
    url: string,
    searchurl?: string,
    otherNames?: Array<string>
|};


// Type for the Data table containing the commands
export type CommandDataTableType = {|
    name: string,
    url: string,
    command: string,
    aliases: string,
    searchurl: string
|};

// Type for the header to display the commands
export type CommandDataTableHeaderType = {|
    data: string,
    title: string
|};


export type CommandAndKeyType = {[string]: CommandType};
export const COMMANDS: CommandAndKeyType = {
    studentplanning: {
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
    drive0: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0/home",
        searchurl: "https://drive.google.com/drive/u/0/home"
    },
    drive: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/1/home",
        searchurl: "https://drive.google.com/drive/u/1/home"
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
        url: "vscode://",
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/u/1/r"
    },
    wiki: {
        name: "Wikipedia English",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/w/index.php?search=",
    },
    hn: {
        name: "HackerNews Daily",
        url: "https://www.daemonology.net/hn-daily/",
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
    chores: {
        name: "Suite Chores Chart",
        url: "https://docs.google.com/spreadsheets/d/15LjvIAsy9pUuNskz02ATme85xooIGQIEJhsDJp0JEGU/edit?gid=890439249#gid=890439249"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
