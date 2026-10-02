// Pega este código en Extensiones > Apps Script de tu Google Sheet
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(['Fecha', 'Nombre', 'Apellido', 'Vehículo']);
  sh.appendRow([new Date(), d.nombre, d.apellido, d.vehiculo]);
  return ContentService.createTextOutput('ok');
}
