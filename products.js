<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>FNBKOREA Inc. | 제품</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<header class="header">
  <div class="container header-inner">
    <a class="brand" href="index.html">FNBKOREA Inc.</a>
    <nav class="nav">
      <a href="company.html" >회사소개</a>
      <a href="products.html" aria-current="page">제품</a>
      <a href="contact.html" >문의</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero hero-sub">
    <div class="container">
      <p class="eyebrow">Products</p>
      <h1 class="h1">제품</h1>
      <p class="lead">카테고리별 제품 현황</p>
    </div>
  </section>

  <section class="section">
  <div class="container">
    <div class="tabs">
      <button class="tab active" data-tab="marker">Marker</button>
      <button class="tab" data-tab="cttape">C/T Tape</button>
      <button class="tab" data-tab="material">공정용 소재</button>
    </div>

<div class="board-tools">
  <div class="tool">
    <label for="searchInput">검색</label>
    <input id="searchInput" type="text" placeholder="제품명/색상/사이즈 검색" />
  </div>

  <div class="tool tool-sort">
    <label for="sortSelect">정렬</label>
    <select id="sortSelect">
      <option value="latest">최신등록순</option>
      <option value="name">제품명순</option>
      <option value="color">색상순</option>
      <option value="size">사이즈순</option>
    </select>
  </div>
</div>

    <!-- Marker -->
    <section id="board-marker" class="board active" aria-label="Marker 게시판">
      <div class="board-head">
        <h2 class="h3">Marker</h2>
        <div class="count"><span id="count-marker">0</span> items</div>
      </div>
      <div class="table-wrap">
        <table class="board-table">
          <thead>
            <tr>
              <th style="width:70px;">No</th>
              <th style="width:90px;">사진</th>
              <th>제품명</th>
              <th style="width:160px;">색상</th>
              <th style="width:180px;">사이즈</th>
            </tr>
          </thead>
          <tbody id="tbody-marker"></tbody>
        </table>
      </div>
      <div class="empty" id="empty-marker">등록된 제품이 없습니다.</div>
    </section>

    <!-- C/T Tape -->
    <section id="board-cttape" class="board" aria-label="C/T Tape 게시판">
      <div class="board-head">
        <h2 class="h3">C/T Tape</h2>
        <div class="count"><span id="count-cttape">0</span> items</div>
      </div>
      <div class="table-wrap">
        <table class="board-table">
          <thead>
            <tr>
              <th style="width:70px;">No</th>
              <th style="width:90px;">사진</th>
              <th>제품명</th>
              <th style="width:160px;">색상</th>
              <th style="width:180px;">사이즈</th>
            </tr>
          </thead>
          <tbody id="tbody-cttape"></tbody>
        </table>
      </div>
      <div class="empty" id="empty-cttape">등록된 제품이 없습니다.</div>
    </section>

    <!-- 공정용 소재 -->
    <section id="board-material" class="board" aria-label="공정용 소재 게시판">
      <div class="board-head">
        <h2 class="h3">공정용 소재</h2>
        <div class="count"><span id="count-material">0</span> items</div>
      </div>
      <div class="table-wrap">
        <table class="board-table">
          <thead>
            <tr>
              <th style="width:70px;">No</th>
              <th style="width:90px;">사진</th>
              <th>제품명</th>
              <th style="width:160px;">색상</th>
              <th style="width:180px;">사이즈</th>
            </tr>
          </thead>
          <tbody id="tbody-material"></tbody>
        </table>
      </div>
      <div class="empty" id="empty-material">등록된 제품이 없습니다.</div>
    </section>

  </div>
</section>
<!-- 이미지 모달 -->
<div id="imageModal" class="image-modal">
  <span class="image-close">&times;</span>
  <img class="image-modal-content" id="modalImage">
</div>
</main>

<div id="footer"></div>

<script>
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
</script>

<script src="data.js"></script>
<script src="products.js" defer></script>

</body>
</html>
