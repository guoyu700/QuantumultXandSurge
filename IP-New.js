if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var ip = obj['ip'];
var title = obj['flag'['emoji']] + ''+ obj['country'['name']];
var subtitle = obj['city'['name']];
var description = "Country" + ":" + obj['country'['name']] + '\n' + "City" + ":" + obj['city'['name']];

$done({title, subtitle, ip, description});
