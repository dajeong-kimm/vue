Date.prototype.dateFormat = function (f) {
  if (!this.valueOf()) return "";
  if (!f) return this;

  var weekName = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    shortWeekName = ["일", "월", "화", "수", "목", "금", "토"];

  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|e|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear(); // 연도 4자리
      case "yy":
        return (d.getFullYear() % 1000).toString().padStart(2, "0"); // 연도 2자리
      case "MM":
        return (d.getMonth() + 1).toString().padStart(2, "0"); // 월 2자리
      case "dd":
        return d.getDate().toString().padStart(2, "0"); // 일 2자리
      case "E":
        return weekName[d.getDay()]; // 요일 (일요일, 월요일 등)
      case "e":
        return shortWeekName[d.getDay()]; // 요일 약자 (일, 월 등)
      case "hh":
        return (d.getHours() % 12 || 12).toString().padStart(2, "0"); // 12시간제 시각
      case "mm":
        return d.getMinutes().toString().padStart(2, "0"); // 분
      case "ss":
        return d.getSeconds().toString().padStart(2, "0"); // 초
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 표시
      default:
        return $1;
    }
  });
};
