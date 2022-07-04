// YourComponent.stories.js

import buttonWrapper from './buttonWrapper.vue'
const icons = [1, 2, 3]

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'buttonWrapper',
    component: buttonWrapper,
    argTypes: {
        // foo is the property we want to remove from the UI
        icon: {
            options: Object.keys(icons), // An array of serializable values
            mapping: icons, // Maps serializable option values to complex arg values
            control: {
                type: 'select', // Type 'select' is automatically inferred when 'options' is defined
                labels: {
                    // 'labels' maps option values to string labels
                    Delete: 'Delete',
                    Edit: 'Edit',
                    Share: 'Share',
                },
            },
        },
    },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { buttonWrapper },
    setup() {
        //👇 The args will now be passed down to the template
        return { args }
    },
    template: `<buttonWrapper v-bind="args">${args.default}</buttonWrapper>`,
})

export const Primary = Template.bind({})

Primary.args = {
    /* 👇 The args you need here will depend on your component */
    default: `Пример кнопки`,
}
Primary.parameters = {}
