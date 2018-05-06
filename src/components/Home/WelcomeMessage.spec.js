import { shallow } from '@vue/test-utils'
import WelcomeMessage from '@components/Home/WelcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'tester'

    const wrapper = shallow(WelcomeMessage, {
      propsData: { name }
    })

    // expect(wrapper.text()).toBe('привет сучка! привет сучка! привет сучка! привет сучка! привет сучка!')

    expect(wrapper.html()).toMatchSnapshot()
  })
})
