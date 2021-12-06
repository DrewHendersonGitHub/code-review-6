import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import ConvertService from './convert.js';

function displayResults(response, base, newCurrency, amount) {
  if (response.conversion_rates[newCurrency]) {
    return `<h3>${amount} ${base} is equal to ${response.conversion_rates[newCurrency] * amount} ${newCurrency}.</h3>`;
  }
  return `<h3>${newCurrency} not found.</h3>`;
}

$(document).ready(function() {
  $('#convert').click(function() {
    let base = $('#base').val().toUpperCase();
    let amount = $('#amount').val();
    let newCurrency = $('#new-currency').val().toUpperCase();
    ConvertService.convert(base)
      .then(function(convertResponse) {
        if (convertResponse instanceof Error) {
          throw Error(`ExchangeRate-API error: ${convertResponse.message}`);
        }
        $('#show-results').html(displayResults(convertResponse, base, newCurrency, amount));
        $('#show-errors').html(``);
      })
      .catch(function(error) {
        $('#show-errors').html(`<h3>${error.message}</h3>`);
        $('#show-results').html(``);
      });
  });
});