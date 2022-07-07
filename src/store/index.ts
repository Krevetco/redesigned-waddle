import { defaultStore } from './defaultStore'

const appStore: any = {}

export const registerStore = () => {
    appStore.defaultStore = defaultStore()

    return appStore
}

export default appStore
