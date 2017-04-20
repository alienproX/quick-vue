import $ from '@/utils'

export default {
  name: 'demo',
  computed: {
    data () {
      return this.$store.state.demoText
    }
  },
  methods: {},
  beforeMount () {
    $.setDocTitle(`Demo`)
  },
  mounted () {},
  destroyed () {}
}
