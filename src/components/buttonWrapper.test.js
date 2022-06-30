import { render, screen } from '@testing-library/vue'
import buttonWrapper from './buttonWrapper.vue'

test('renders button wrapper', () => {
    // given(arrange)
    const options = {
        slots: {
            default: 'test button',
        },
    }

    // when (act)
    const { debug } = render(buttonWrapper, options)

    // then (assets)

    screen.debug()
    screen.getByText(/test/i)
})
