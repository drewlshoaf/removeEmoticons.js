var ranges = [
  '[\u00A0-\u269f]',
  '[\u26A0-\u329f]',
  // something about minif'ing these chars
  '[🀄-🧀]'
];

function removeInvalidChars(input) {
  input = input.replace(new RegExp(ranges.join('|'), 'ug'), '');
  return input;
}