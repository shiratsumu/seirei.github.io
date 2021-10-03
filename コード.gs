function doGet() {

var toppage=HtmlService.createTemplateFromFile(“index”);

return toppage.evaluate();

}

function doPost(postdata){

var sh=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var time=new Date();

var hr=postdata.parameters.hr.toString();
var te=postdata.parameters.te.toString();
var subte=postdata.parameters.subte.toString();
var pro=postdata.parameters.pro
var epi=postdata.parameters.epi
var ma1=postdata.parameters.ma1
var ma2=postdata.parameters.ma2
var ma3=postdata.parameters.ma3






sh.appendRow([time,hr,te,subte,pro,epi,ma1,ma2,ma3]);

var resultpage=HtmlService.createTemplateFromFile(“result”);
return resultpage.evaluate();
}
