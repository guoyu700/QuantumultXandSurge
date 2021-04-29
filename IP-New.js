if ($response.statusCode != 200) {
  $done(null);
}

var body = $response.body;
var obj = JSON.parse(body);
var ip = obj['ip'];
var title = obj['country_name'];
var subtitle = obj['city'] + ' ' + obj['isp'];
var description = "Country" + ":" + obj['country_name'] + '\n' + "City" + ":" + obj['city'] + '\n' + "Carrier" + ":" + obj['isp'] + '\n' + "Organization" + ":" + obj['organization'];

$done({title, subtitle, ip, description});
