FNBKOREA 2단계 (제품 게시판 포함)

제품 게시판 컬럼
- No / 사진 / 제품명 / 색상 / 사이즈

제품 추가 방법
products.js 의 DATA 배열에 추가:
DATA.marker.push({
  name: "제품명",
  color: "색상",
  size: "사이즈",
  date: "YYYY-MM-DD",
  img: "images/파일명.jpg"
});

이미지 넣기
- images 폴더에 사진 파일을 넣고 img 경로에 적으면 됩니다.

권장 미리보기
python -m http.server 5500
http://localhost:5500
