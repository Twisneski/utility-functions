module.exports = function () {
 return [''];

};

module.exports = function (length) {
  var array = [];
  for (i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
};

module.exports = function () {
  var array = [];
  for (i = 0; i <= 4 && i >=0; i++) {
    array.push(i);
  }
  return array;
}; doesnt work at all.  my attempt

module.exports = function (start, stop) {
  var range = [];
  if (!stop) {
    stop = start;
    start = 0;
  }
  for (var i = 0; start < stop; start++, i++) {
    range[i] = start;
  }
  return range;
};

module.exports = function () {
  return {};
};

module.exports = function () {
  return {};
};





