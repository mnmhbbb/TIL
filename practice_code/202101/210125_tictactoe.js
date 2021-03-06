var BODY = document.body;
var table = document.createElement("table");
var message = document.createElement("strong");

var cells = [];
var rows = [];
var turn = "X";

// 결과체크
function check(rowIndex, cellIndex) {
  var filled = false;

  // 가로줄 체크
  if (
    cells[rowIndex][0].textContent === turn &&
    cells[rowIndex][1].textContent === turn &&
    cells[rowIndex][2].textContent === turn
  ) {
    filled = true;
  }

  // 세로줄 체크
  if (
    cells[0][cellIndex].textContent === turn &&
    cells[1][cellIndex].textContent === turn &&
    cells[2][cellIndex].textContent === turn
  ) {
    filled = true;
  }

  // 대각선 체크1
  if (
    cells[0][0].textContent === turn &&
    cells[1][1].textContent === turn &&
    cells[2][2].textContent === turn
  ) {
    filled = true;
  }
  // 대각선 체크2
  if (
    cells[0][2].textContent === turn &&
    cells[1][1].textContent === turn &&
    cells[2][0].textContent === turn
  ) {
    filled = true;
  }

  return filled;
}

//초기화
function init(draw) {
  if (draw) {
    message.textContent = "무승부";
  } else {
    message.textContent = turn + "님 승리!";
  }
  // 1초 뒤에 게임 초기화
  setTimeout(function () {
    message.textContent = "";
    cells.forEach(function (row) {
      row.forEach(function (cell) {
        cell.textContent = "";
      });
    });
    turn = "X";
  }, 1000);
}

//클릭이벤트함수
var clickHandler = function (e) {
  // 컴퓨터의 턴이면 실행되지 않도록
  if (turn === "O") {
    return;
  }

  //클릭한 칸의 위치 확인
  var rowIndex = rows.indexOf(e.target.parentNode);
  var cellIndex = cells[rowIndex].indexOf(e.target);

  // 1. 칸이 비었는가?
  if (cells[rowIndex][cellIndex].textContent !== "") {
    alert("칸이 이미 채워져있습니다.");
  } else {
    // 선택한 칸 채워주고,
    cells[rowIndex][cellIndex].textContent = turn;

    // 컴퓨터가 선택할 수 있는 후보칸 생성
    var candidate = [];

    // 우선 전체 칸을 넣고
    cells.forEach(function (row) {
      row.forEach(function (cell) {
        candidate.push(cell);
      });
    });

    // 현재 클릭 가능한 빈 칸만 필터링
    candidate = candidate.filter(function (item) {
      return !item.textContent;
      // 디폴트가 cell.textContent = ""; 즉 빈값 (= false) 이니까
      // 그 빈값들만 후보군에 넣어야 함
    });

    // 다 찼는지 결과체크
    var filled = check(rowIndex, cellIndex);

    // 2. 3칸이 찼는가?
    if (filled) {
      init();
    } else if (candidate.length === 0) {
      init(true);
    } else {
      //칸이 안찼으니까 다음 턴 넘기기
      if (turn === "X") {
        turn = "O";
      }

      // 컴퓨터의 턴
      setTimeout(function () {
        // 클릭이 가능한 칸 중에 랜덤 선택
        var selected = candidate[Math.floor(Math.random() * candidate.length)];
        selected.textContent = turn;

        // 컴퓨터의 결과체크
        var rowIndex = rows.indexOf(selected.parentNode);
        var cellIndex = cells[rowIndex].indexOf(selected);
        var filled = check(rowIndex, cellIndex);

        if (filled) {
          init();
        }
        // 턴을 다시 나한테 넘긴다.
        turn = "X";
      }, 1000);
    }
  }
};

//칸 생성
for (var i = 0; i < 3; i++) {
  var row = document.createElement("tr");
  rows.push(row);
  cells.push([]);
  for (var j = 0; j < 3; j++) {
    var cell = document.createElement("td");
    cell.addEventListener("click", clickHandler);
    cells[i].push(cell);
    row.appendChild(cell);
  }
  table.appendChild(row);
}
BODY.appendChild(table);
BODY.appendChild(message);
