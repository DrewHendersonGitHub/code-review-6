export default class ConvertService {
  static convert(base) {
    return fetch(`https://v6.exchangerate-api.com/v6/58a719a54201bb47c9d205a9/latest/${base}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    });
  }
}