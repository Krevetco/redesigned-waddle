import { RouteLocationRaw, Router } from 'vue-router'
import { RequiredAuthOptions } from './types'
import { useAuth } from './useAuth'
import { nextTick } from 'vue'

const DEFAULT_TITLE = 'Some Default Title',
    DEFAULT_DESCR = 'Some description'

export function configureNavigationGuards(router: Router, options: RequiredAuthOptions) {
    router.beforeEach(async (to): Promise<boolean | RouteLocationRaw> => {
        const auth = useAuth()

        if (to.name === options.loginRouteName) {
            if (auth.isAuthenticated) return options.loginRedirectRoute

            return true
        }

        if (!to.meta.public && !auth.isAuthenticated) {
            return {
                name: options.loginRouteName,
                query: { redirectTo: to.fullPath },
            }
        }
        nextTick(() => {
            document.title = to.meta.title || DEFAULT_TITLE
            document
                .querySelector('head meta[name="description"]')
                .setAttribute('content', to.meta.description || DEFAULT_DESCR)
        })

        return true
    })
}
