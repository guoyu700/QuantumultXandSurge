if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var timezone = JSON.parse(body)["timezone"];
var flag = JSON.parse(body)["flag"];
var ip = obj['ip_address'];
var title = flag['emoji'] + ''+ obj['country'];
var subtitle = obj['country_code'];
var description = "Country: " + obj['country'] + '\n' + "Timezone: " + timezone['name'];

$done({title, subtitle, ip, description});
