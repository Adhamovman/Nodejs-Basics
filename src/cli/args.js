import readline from "readline";
const parseArgs = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Please enter a prop name and value: ", (text) => {
    let initialText = text;
    let entries = initialText.split("--");
    let objForm = entries.map((entry) => entry.split(" "));
    for (let i = 1; i < objForm.length; i++) {
      console.log(`${objForm[i][0]} is ${objForm[i][1]},`);
    }
    rl.close();
  });
};

parseArgs();
//--propName value --prop2Name value2
