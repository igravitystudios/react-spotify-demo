// https://stackoverflow.com/questions/23699666/javascript-get-and-set-url-hash-parameters

export default hash =>
  hash
    .substr(1)
    .split('&')
    .reduce(function(result, item) {
      var parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});
