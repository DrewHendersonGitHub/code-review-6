import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#convert').click(function() {
    ConvertService.convert("USD")
    .then(function(convertResponse) {
      if (convertResponse instanceof Error) {
        throw Error(`ExchangeRate-API error: ${convertResponse.message}`);
      }
      displayResults(convertResponse);
    })
    .catch(function(error) {
      displayError(error.message);
    });
  });
});