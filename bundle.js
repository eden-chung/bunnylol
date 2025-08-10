'use strict';// CommandTypeUnormalized is pretty much like CommandType but
// we don't want them to be mixed
// Type for the Data table containing the commands
// Type for the header to display the commands
const COMMANDS = {
  barnard: {
    name: "Barnard Student Planning",
    url: "https://selfservice.barnard.edu/Student"
  },
  vergil: {
    name: "Vergil",
    url: "https://vergil.columbia.edu/"
  },
  gm0: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/"
  },
  gm1: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/1",
    searchurl: "https://mail.google.com/mail/u/"
  },
  gm2: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/2",
    searchurl: "https://mail.google.com/mail/u/"
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
    searchurl: "https://www.google.com/search?q="
  }
};const CLASSES = {
  f1: {
    name: "CS 4501: F1/10 Autonomous Racing: Perception, Planning, and Control for Autonomous Driving",
    url: "https://linklab-uva.github.io/autonomousracing/",
    collaburl: "https://collab.its.virginia.edu/portal/site/90579f89-3cbf-4f83-a4d7-902848f7703d",
    discussionurl: "https://piazza.com/class/kko5x3rocvl3ky"
  },
  pl: {
    name: "CS 4640: Programming Languages for Web Applications",
    url: "https://www.cs.virginia.edu/~up3f/cs4640/schedule.html",
    collaburl: "https://collab.its.virginia.edu/portal/site/8fff0a03-d2d8-45c8-bda6-760bf8d7e2e4/",
    discussionurl: "https://piazza.com/class/kkestnq1z5u3kl",
    zoomurl: "https://virginia.zoom.us/j/95783077722?pwd=U2lLTkN3Y05WWGhJQ051Z3BUWmxvUT09"
  },
  cv: {
    name: "CS 4501: Introduction to Computer Vision",
    url: "https://www.vicenteordonez.com/vision/",
    collaburl: "https://collab.its.virginia.edu/portal/site/a348b7f2-473b-46d4-b348-f189fc4889e3",
    zoomurl: "https://virginia.zoom.us/j/99413743466?pwd=VHpmQW9SR1A5bmpseVZMN2tPZVZOdz09"
  },
  ear: {
    name: "CS 3501: Embedded Computing & Robotics I",
    url: "https://collab.its.virginia.edu/portal/site/cdd921f5-3ec5-4de7-9bdc-da5f5a1e92c8",
    discussionurl: "discord://",
    specialurl: "https://learn.zybooks.com/zybook/VIRGINIACSECE3501Spring2021?selectedPanel=assignments-panel"
  },
  sts: {
    name: "STS 4600: The Engineer, Ethics, and Professional Responsibility",
    url: "https://collab.its.virginia.edu/portal/site/d360b679-581f-496d-8782-7053d86aefca",
    zoomurl: "https://virginia.zoom.us/j/93721024007?pwd=T1NJKzdrZG03L2pJN0dEQkcwUC91QT09"
  },
  apma: {
    name: "APMA 2501: Mathematics of Information",
    url: "http://www.ece.virginia.edu/~ffh8x/moi/",
    collaburl: "https://collab.its.virginia.edu/portal/site/0778b7b4-8cd8-440c-9fcb-bd8e74d5b9f3",
    discussionurl: "https://piazza.com/class/kknbo8nztqo6vg"
  }
};const viewHelpPage = function () {
  const data = Object.keys(COMMANDS).map(command => {
    const cmdData = COMMANDS[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      command: command,
      aliases: (cmdData.aliases || [""]).join(', '),
      searchurl: cmdData.searchurl || ""
    };
  });
  const columns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }, {
    data: 'searchurl',
    title: "SearchURL"
  }, {
    data: 'aliases',
    title: "Aliases"
  }];
  // $FlowFixMe - jQuery import
  $('#help-table').DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false
  });

  // const classesData: Array<CommandDataTableHeaderType> = Object.keys(CLASSES).map((command: ClassCommands) => {
  //     const cmdData = CLASSES[command];
  //     return {
  //         name: cmdData.name, 
  //         url: cmdData.url, 
  //         // $FlowFixMe - this is actually correct.
  //         command
  //     };
  // });

  const classesData = Object.keys(CLASSES).map(command => {
    const cmdData = CLASSES[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      command
    };
  });

  // const classColumns: Array<ColumnDataTableType> = [
  //     {data: 'command', title: "Command"}, 
  //     {data: 'name', title: "Name"}, 
  //     {data: 'url', title: "URL"}, 
  // ];
  // // $FlowFixMe - jQuery import
  // $('#classes-table').DataTable({
  //     data: classesData,
  //     columns: classColumns,
  //     order: [[ 1, "asc" ]],
  //     paging: false
  // });

  const classColumns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }];
  // $FlowFixMe - jQuery import
  $('#classes-table').DataTable({
    data: classesData,
    columns: classColumns,
    order: [[1, "asc"]],
    paging: false
  });
};const redirect = async function (url) {
  await window.location.replace(url);
};
const parsecommands = function (inCommands) {
  var ret = {};
  for (var key of Object.keys(inCommands)) {
    var val = inCommands[key];
    var newVal = {
      name: val.name,
      url: val.url,
      searchurl: val.searchurl,
      otherNames: val.aliases
    };
    ret[key] = newVal;
    if (val.aliases && val.aliases.length) {
      for (var altKey of val.aliases) {
        var others = val.aliases.filter(elem => elem != altKey);
        var newVal = {
          name: val.name,
          url: val.url,
          searchurl: val.searchurl,
          otherNames: others.concat([key])
        };
        ret[altKey] = newVal;
      }
    }
  }
  console.log(ret);
  return ret;
};
const bunnylol = async function (currCmd) {
  let arr = [];
  // split the current command on spaces and '$' if it starts with a '$'
  if (currCmd.startsWith("$")) {
    arr = currCmd.split(/[ $+]/g);
    arr[0] = "$";
    if (arr[1] === "") {
      arr = ["$"];
    }
  } else {
    arr = currCmd.split(/[ +]/g);
  }
  if (arr.length > 0) {
    // Ignore the '.' at the end of the command
    const prefix = arr[0].endsWith(".") ? arr[0].substring(0, arr[0].length - 1).toLowerCase() : arr[0].toLowerCase();
    if (prefix in CLASSES) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const classData = CLASSES[prefix];
      if (arr.length > 1) {
        if (arr[1].toLowerCase() === "j" && classData.zoomurl) {
          await redirect(`${classData.zoomurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "d" && classData.discussionurl) {
          await redirect(`${classData.discussionurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "c" && classData.collaburl) {
          await redirect(`${classData.collaburl}`);
          return true;
        } else if (arr[1].toLowerCase() === "s" && classData.specialurl) {
          await redirect(`${classData.specialurl}`);
          return true;
        }
      }
      await redirect(`${classData.url}`);
      return true;
    }
    if (prefix in parsedCommands) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command = parsedCommands[prefix];
      const protocol = new URL(command.url).protocol;
      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
      }
      // Handle searchUrl being a function so that things could be composed
      if (command.searchurl && arr.length !== 1) {
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        await redirect(`${command.searchurl}${encodeURIComponent(currCmd.substr(searchParam))}`);
        return true;
      } else {
        await redirect(command.url);
        return true;
      }
    }
  }
  return false;
};
const parsedCommands = parsecommands(COMMANDS);
const currCmd = new URL(window.location.href).searchParams.get("search") ?? "help";
switch (currCmd) {
  case "help" :
    viewHelpPage();
    break;
  default:
    bunnylol(currCmd).then(done => {
      if (!done && parsedCommands.DEFAULT.searchurl) {
        redirect(`${parsedCommands.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`);
      }
    }).catch(reject => {
      console.log(reject);
    });
    break;
}