async function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

async function getJsonFile(path) {
  let result = null;
  await readTextFile(path, function (text) {
    var data = JSON.parse(text);
    result = data;
  });
  return result;
}

console.log(await getJsonFile("./texts/home.json"));
