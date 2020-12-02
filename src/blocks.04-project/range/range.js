import 'jquery';
import 'ion-rangeslider';

let $range = $('.range__input');
let $inputFrom = $('.range__from');
let $inputTo = $('.range__to');
let instance;
let min = 0;
let max = 15000;
let from = 0;
let to = 0;

$range.ionRangeSlider({
  skin: 'round',
  type: 'double',
  min: min,
  max: max,
  from: 1000,
  to: 10000,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});
instance = $range.data('ionRangeSlider');

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop('value', from);
  $inputTo.prop('value', to);
}

$inputFrom.on('change', function () {
  let val = $(this).prop('value');

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val,
  });

  $(this).prop('value', val);

});

$inputTo.on('change', function () {
  let val = $(this).prop('value');

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val,
  });

  $(this).prop('value', val);
});
