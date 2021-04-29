
if ($response.statusCode != 200) {
  $done(null);
}

console.log("MEpiphany")
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";

function City_ValidCheck(para) {
  if(para) {
    if (para.length<7) {
      return para
    } else {
      return para.slice(0,6)
    }
  
  } else
  {
  return city0
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = '「'+ Area_check(obj['country_name'])+"」";
var subtitle =  ""+  ISP_ValidCheck(obj['isp']).toUpperCase() + "™";
var ip = obj['ip'];
var description = 'Carrier:'+obj['isp'] + '\n' + 'Location: [' +obj["latitude"]+","+obj["longitude"]+"]"+ '\n' + 'IP:'+ obj['ip'];
$done({title, subtitle, ip, description});
