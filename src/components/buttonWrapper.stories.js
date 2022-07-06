// YourComponent.stories.js

import buttonWrapper from './buttonWrapper.vue'
//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'buttonWrapper',
    component: buttonWrapper,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { buttonWrapper },
    setup() {
        //👇 The args will now be passed down to the template
        return { args }
    },
    template: `<buttonWrapper v-bind="args">
        ${args.default}
    </buttonWrapper>`,
})

export const Primary = Template.bind({})

Primary.args = {
    /* 👇 The args you need here will depend on your component */
    default: `Пример кнопки`,
}
Primary.parameters = {}
