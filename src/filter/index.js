export default(Vue) => {
  Vue.filter('filterDemo', text => `${text} -`)
}
