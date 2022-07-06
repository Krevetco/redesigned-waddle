import { render, screen } from '@testing-library/vue'
import buttonWrapper from './buttonWrapper.vue'
import { mount } from '@vue/test-utils'

describe('button wrapper', () => {
    it('should render', async () => {
        expect(buttonWrapper).toBeTruthy()

        const options = {
            slots: {
                default: 'test button',
            },
            props: {
                newProp: 'valid',
            },
        }

        // when (act)
        const { debug } = render(buttonWrapper, options)
        screen.getByText(/^test button$/)
    })
    it('should click', async () => {
        // given(arrange)

        expect(buttonWrapper).toBeTruthy()

        const options = {
            slots: {
                default: 'test button',
            },
        }

        const wrapper = mount(buttonWrapper, options)
        await wrapper.get('button').trigger('click')
    })
})
