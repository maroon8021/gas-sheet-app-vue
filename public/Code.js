function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").addMetaTag(
    "viewport",
    "width=device-width, initial-scale=1"
  );
}

function doPost(e) {
  Logger.log("doPost");
  Logger.log(e);
  if (e == null || e.postData == null || e.postData.contents == null) {
    return;
  }
  var params = JSON.parse(e.postData.getDataAsString()); // ※
  var value = params.value;

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: "success!" }));

  return output;

  // var ss = SpreadsheetApp.getActive();
  // var sheet = ss.getActiveSheet();
  // sheet.appendRow(values);
}

function addData(rawParams) {
  Logger.log("addData");
  var params = JSON.parse(rawParams);
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getActiveSheet();
  var values = [params.familyName, params.firstName, params.comment];
  sheet.appendRow(values);
}
