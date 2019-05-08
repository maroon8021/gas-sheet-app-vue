function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").addMetaTag(
    "viewport",
    "width=device-width, initial-scale=1"
  );
}

/**
 * Will be implemented
 */
function doPost(e) {
  // Logger.log("doPost");
  // Logger.log(e);
  // if (e == null || e.postData == null || e.postData.contents == null) {
  //   return;
  // }
  // var requestJSON = e.postData.contents;
  // var requestObj = JSON.parse(requestJSON);
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
