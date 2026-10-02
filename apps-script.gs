// 1) Pega el ID de tu Google Sheet aquí (está en la URL: docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit)
var SPREADSHEET_ID = 'PEGA_AQUI_EL_ID_DE_TU_HOJA';

function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sh = ss.getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(['Fecha', 'Nombre', 'Apellido', 'Vehículo']);
  sh.appendRow([new Date(), d.nombre, d.apellido, d.vehiculo]);
  return ContentService.createTextOutput('ok');
}

// Abre la URL /exec en el navegador: debe decir "Funcionando". Si no, la implementación está mal.
function doGet() {
  return ContentService.createTextOutput('Funcionando');
}

// Ejecuta esta función una vez desde el editor para aceptar permisos y probar que escribe en la hoja.
function prueba() {
  doPost({postData: {contents: JSON.stringify({nombre: 'Prueba', apellido: 'Test', vehiculo: 'Auto de prueba'})}});
}
