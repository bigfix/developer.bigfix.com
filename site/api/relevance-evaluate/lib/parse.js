/**
 * Parse the output of running QNA.
 */
module.exports = function(results) {
  var lines = results.split('\n').slice(3);

  var answers = [];
  var errors = [];
  var time = 0;
  var type = '';

  lines.forEach(function(line) {
    if (line.indexOf('Q: ') === 0) {
      line = line.slice(3);
    }

    if (line.indexOf('A: ') === 0) {
      answers.push(line.slice(3));
    } else if (line.indexOf('E: ') === 0) {
      errors.push(line.slice(3));
    } else if (line.indexOf('T: ') === 0) {
      time = Number(line.slice(3));
    } else if (line.indexOf('I: ') === 0) {
      type = line.slice(3);
    }
  });

  return { answers: answers, errors: errors, time: time, type: type };
};
