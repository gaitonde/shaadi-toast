//the URL for DEV_BASE comes from a 3p reverset proxy service (localhost.run)
//that connects a public url to localhost. It is short-lived and needs to be updated
//every 5 mins or so.
const DEV_BASE = 'https://592e89b50de2e7.lhr.life';
const PROD_BASE = 'https://shaadi-toast.vercel.app';

//change this as appropriate.
const BASE = PROD_BASE;

const now = new Date().getTime();
const URL = `${BASE}/api/webhooks/questions?ts=${now}`;
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Shaadi Toast')
      .addItem('Update Questions', 'updatePromptsMenuItem')
      .addToUi();
}

function updatePromptsMenuItem() {
  var ui = SpreadsheetApp.getUi();
  var success = makeAPICall();
  ui.alert('Success? ' + success);
}

function makeAPICall() {
  Logger.log('url: ' + URL);
  var response = UrlFetchApp.fetch(URL, {'muteHttpExceptions': false});
  Logger.log(response);
  var data = JSON.parse(response);
  Logger.log(data);
  return data.success;
}
