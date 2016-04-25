import Controller from 'ember-controller'
import computed   from 'ember-computed'
import moment     from 'moment'

export default Controller.extend({
  year: computed(() => moment().year()).volatile()
})
