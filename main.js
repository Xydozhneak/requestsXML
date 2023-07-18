const parse = (children) => JSON.parse(children);
const mergeArr = (arr1, arr2) => [...arr1, ...arr2];

function requestData(method, URL, cb) {
  const xml = new XMLHttpRequest();
  xml.open(method, URL);
  xml.send();

  xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
      const data = parse(xml.response);
      cb(data);
    }
  });
}

requestData("GET", "request/data.json", (data1) => {
  requestData("GET", "request/data1.json", (data2) => {
    const mergedArr = mergeArr(data1.children, data2.children);
    console.log(mergedArr);
  });
});