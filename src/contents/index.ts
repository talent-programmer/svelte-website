import type { FeatureProps } from '../components/feature.svelte'

export const features: FeatureProps[] = [
    {
        title: 'Introducing Pre-builds',
        paragraph: 'We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.',
        moreButton: {
            text: 'More on prebuilds',
            href: '/docs/prebuilds/'
        },
        // documentationLink: '',
        preview: {
            name: 'terminal.png'
        }
    }
]