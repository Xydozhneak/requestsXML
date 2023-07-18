const parse = (children) => JSON.parse(children);

const xml1 = new XMLHttpRequest();
const xml2 = new XMLHttpRequest();



xml1.open('GET', 'request/data.json');
xml1.addEventListener('readystatechange', () => {
  if (xml1.readyState === 4 && xml1.status < 400) {
   const data = parse(xml1.responseText);

    xml2.open('GET', 'request/data1.json');
    xml2.addEventListener('readystatechange', () => {
      if (xml2.readyState === 4 && xml2.status < 400) {
      const  data2 = parse(xml2.responseText);

        const mergedArray = mergeArr(data.children, data2.children);
        console.log(mergedArray);
      }
    });
    xml2.send();
  }
});
xml1.send();

const mergeArr = (arr1, arr2) => [...arr1, ...arr2];