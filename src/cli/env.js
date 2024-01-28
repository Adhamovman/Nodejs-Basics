const parseEnv = (args) => {
  let keys = Object.keys(args);
  let values = Object.values(args);
  for (let i = 0; i < keys.length; i++) {
    console.log(`RSS_${keys[i]}: ${values[i]};`);
  }
};

parseEnv({ name1: "value1", name2: "value2", name3: "value3" });
