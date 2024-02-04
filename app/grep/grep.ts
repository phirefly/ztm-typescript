import { readFileSync } from "fs";

type SearchConfig = {
  [key: string]: {
    indicator: string;
    header: string;
  }
};

const myConfig: SearchConfig = {
  todo: {
    indicator: "__",
    header: "Actions"
  },
  important: {
    indicator: "**",
    header: "Important Things"
  },
  question: {
    indicator: "Q:",
    header: "Questions"
  },
  followup: {
    indicator: "fuo:",
    header: "Follow Ups"
  }
}

const args = process.argv.slice(2);
console.log(args);

const filename = args[0];
console.log("searching in", filename);
const file = readFileSync(filename, "utf-8");

Object.keys(myConfig).forEach((key) => {
  const config = myConfig[key];
  const lines = file.split("\n");
  console.log("\n-----", config.header, "-----");
  lines.forEach((line, index) => {
    if (line.includes(config.indicator)) {
      console.log(line);
    }
  });
});
