function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").addMetaTag(
    "viewport",
    "width=device-width, initial-scale=1"
  );
}

function doPost(e) {
  // JSONをパース
  if (e == null || e.postData == null || e.postData.contents == null) {
    return;
  }
  var requestJSON = e.postData.contents;
  var requestObj = JSON.parse(requestJSON);

  //
  // 結果をスプレッドシートに追記
  //

  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getActiveSheet();

  // ヘッダ行を取得
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  // ヘッダに対応するデータを取得
  var values = [
    requestObj.familyName,
    requestObj.firstName,
    requestObj.comment
  ];
  // for (i in headers){
  //   var header = headers[i];
  //   var val = "";
  //   switch(header) {
  //     case "date":
  //       val = new Date();
  //       break;
  //     case "mimeType":
  //       val = e.postData.type;
  //       break;
  //     default:
  //       val = requestObj[header];
  //       break;
  //   }
  //   values.push(val);
  // }

  // 行を追加
  sheet.appendRow(values);
}
