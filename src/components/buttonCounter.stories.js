import buttonCounter from './buttonCounter.vue'
import { ref } from 'vue'
//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'buttonCounter',
    component: buttonCounter,
    argTypes: { count: { control: null } },
}

//👇 We create a “template” of how args map to rendering
let count = ref(0)
const Template = (args) => ({
    components: { buttonCounter },
    setup() {
        //👇 The args will now be passed down to the template
        return {
            args: {
                ...args,
                count: count,
                clickEvent: () => {
                    count.value++
                },
            },
        }
    },
    template: '<buttonCounter v-bind="args"/>',
})

export const Primary = Template.bind({})

Primary.args = {
    /* 👇 The args you need here will depend on your component */
}
Primary.parameters = {
    controls: { hideNoControlsWarning: true },
}
