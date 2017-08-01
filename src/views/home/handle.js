import $ from '@/utils'

export default {
  name: 'home',
  computed: {
    data () {}
  },
  methods: {},
  beforeMount () {
    $.setDocTitle(`Home`)
  },
  mounted () {
    $.ajax('GET')('/api/aa', {a: 1, b: 2}).then(data => {
      console.log(data)
    })
  },
  destroyed () {}
}
