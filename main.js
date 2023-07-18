const parse = (children) => JSON.parse(children);

const xml = new XMLHttpRequest();
const xml1 = new XMLHttpRequest();



xml.open('GET', 'request/data.json');
xml.addEventListener('readystatechange', () => {
  if (xml.readyState === 4 && xml.status < 400) {
   const data = parse(xml.responseText);

    xml1.open('GET', 'request/data1.json');
    xml1.addEventListener('readystatechange', () => {
      if (xml1.readyState === 4 && xml1.status < 400) {
      const  data1 = parse(xml1.responseText);

        const mergedArray = mergeArr(data.children, data1.children);
        console.log(mergedArray);
      }
    });
    xml1.send();
  }
});
xml.send();

const mergeArr = (arr1, arr2) => [...arr1, ...arr2];