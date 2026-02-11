// products.js와 같은 구조의 DATA를 사용한다고 가정

const DATA = {
  marker: [
    { id: 1, name: "산업용 마커", color: "Black", size: "1EA", img: "images/marker-001.jpg" },
    { id: 2, name: "오일 마커", color: "Red", size: "1EA", img: "images/marker-002.jpg" },
  ],
  cttape: [
    { id: 1, name: "C/T Tape", color: "Transparent", size: "10mm x 50m", img: "images/ct-001.jpg" },
  ],
  material: [
    { id: 1, name: "공정용 소재", color: "White", size: "Sheet", img: "images/material-001.jpg" },
  ],
};

const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");
const id = parseInt(params.get("id"), 10);

if (cat && DATA[cat]) {
  const product = DATA[cat].find(p => p.id === id);

  if (product) {
    document.getElementById("detailName").innerText = product.name;
    document.getElementById("detailColor").innerText = product.color;
    document.getElementById("detailSize").innerText = product.size;
    document.getElementById("detailImage").src = product.img;
  }
}