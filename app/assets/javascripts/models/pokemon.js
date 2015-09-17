var Pokemon = function (id) {
  this.id = id
  this.url = "/api/pokemon/"
}

Pokemon.prototype.fetch = function (callback) {
  var request = $.get(`${this.url}${this.id}`)

  request.done(function(pokemonInfo) {
    $.extend(this, pokemonInfo)

    callback()
  }.bind(this))
}

module.exports = Pokemon
