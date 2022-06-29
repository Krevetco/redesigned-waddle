// YourComponent.stories.js

import ExampleComponent from './ExampleComponent.vue'

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'ExampleComponent',
    component: ExampleComponent,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { ExampleComponent },
    setup() {
        //👇 The args will now be passed down to the template
        return { args }
    },
    template: '<ExampleComponent v-bind="args"/>',
})

export const FirstStory = Template.bind({})

FirstStory.args = {
    /* 👇 The args you need here will depend on your component */
}
