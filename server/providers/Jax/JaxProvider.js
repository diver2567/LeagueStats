const { ServiceProvider } = require('@adonisjs/fold')
const Jax = require('./src/Jax')

class JaxProvider extends ServiceProvider {
  register () {
    this.app.singleton('Jax', () => {
      const Env = use('Env')
      return new Jax(Env.get('API_KEY'))
    })
  }

  boot() {
    use('Jax')
  }
}

module.exports = JaxProvider