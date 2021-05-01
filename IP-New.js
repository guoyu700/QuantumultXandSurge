if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var timezone = JSON.parse(body)["time_zone"];
var ip = obj['ip'];
var title = obj['country_name'];
var subtitle = obj['country_code'];
var description = "Country: " + obj['country_name'] + '\n' + "Timezone: " + timezone['name'] + '\n' + "IP: " + obj['ip'];

$done({title, subtitle, ip, description});
