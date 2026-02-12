// 제품 게시판 (No / 사진 / 제품명 / 색상 / 사이즈) + 제품명 클릭 => 상세페이지 이동
// detail.html?cat=marker&id=1 형태로 이동합니다.

const DATA = window.DATA;

const state = { activeTab: "marker", keyword: "", sort: "latest" };

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.activeTab = btn.dataset.tab;

    document.querySelectorAll(".board").forEach(sec => sec.classList.remove("active"));
    document.querySelector(`#board-${state.activeTab}`).classList.add("active");
    render();
  });
});

document.getElementById("searchInput")?.addEventListener("input", (e) => {
  state.keyword = e.target.value.trim().toLowerCase();
  render();
});

document.getElementById("sortSelect")?.addEventListener("change", (e) => {
  state.sort = e.target.value;
  render();
});

function sortItems(items) {
  const arr = [...items];
  if (state.sort === "name") arr.sort((a,b) => (a.name||"").localeCompare(b.name||"", "ko"));
  else if (state.sort === "color") arr.sort((a,b) => (a.color||"").localeCompare(b.color||"", "ko"));
  else if (state.sort === "size") arr.sort((a,b) => (a.size||"").localeCompare(b.size||"", "ko"));
  else arr.sort((a,b) => (b.date||"").localeCompare(a.date||"")); // latest
  return arr;
}

function filterItems(items) {
  if (!state.keyword) return items;
  return items.filter(it => {
    const hay = `${it.name||""} ${it.color||""} ${it.size||""}`.toLowerCase();
    return hay.includes(state.keyword);
  });
}

function renderBoard(key) {
  const tbody = document.getElementById(`tbody-${key}`);
  const empty = document.getElementById(`empty-${key}`);
  const count = document.getElementById(`count-${key}`);

  let items = DATA[key] || [];
  items = filterItems(items);
  items = sortItems(items);

  if(count) count.textContent = items.length;
  if(tbody) tbody.innerHTML = "";

  if (items.length === 0) { if(empty) empty.style.display = "block"; return; }
  if(empty) empty.style.display = "none";

  items.forEach((it, idx) => {
    const tr = document.createElement("tr");

    // 상세페이지 링크 (cat, id)
    const href = `detail.html?cat=${encodeURIComponent(key)}&id=${encodeURIComponent(it.id)}`;

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>
        <div class="thumb">
          <img src="${escapeHtml(it.img || 'images/no-image.png')}"
               alt="${escapeHtml(it.name || 'product')}"
               loading="lazy">
        </div>
      </td>
      <td>
        <div class="title">
          <a class="link" href="${href}">${escapeHtml(it.name || "-")}</a>
        </div>
      </td>
      <td>${escapeHtml(it.color || "-")}</td>
      <td>${escapeHtml(it.size || "-")}</td>
    `;
    tbody.appendChild(tr);
  });
}

function render(){
  renderBoard("marker");
  renderBoard("cttape");
  renderBoard("material");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

render();

// 이미지 클릭 확대
document.addEventListener("click", function(e){
  if(e.target.closest(".thumb img")){
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

// 닫기 버튼
document.querySelector(".image-close").addEventListener("click", function(){
  document.getElementById("imageModal").style.display = "none";
});

// 배경 클릭 시 닫기
document.getElementById("imageModal").addEventListener("click", function(e){
  if(e.target.id === "imageModal"){
    this.style.display = "none";
  }
});
