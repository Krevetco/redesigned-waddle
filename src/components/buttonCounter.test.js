import { render, screen } from '@testing-library/vue'
import buttonCounter from './buttonCounter.vue'
import { mount } from '@vue/test-utils'

describe('button counter', () => {
    it('should render', async () => {
        expect(buttonCounter).toBeTruthy()

        const options = {
            props: {
                count: 0,
            },
        }

        render(buttonCounter, options)
        screen.getByText(/^Likes : 0$/)
    })
    it('should click', async () => {
        // given(arrange)

        expect(buttonCounter).toBeTruthy()

        const options = {
            props: {
                count: 0,
            },
        }

        const wrapper = mount(buttonCounter, options)
        await wrapper.get('button').trigger('click')
    })
})
