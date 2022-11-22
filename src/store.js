import { reactive } from 'vue'

export const store = reactive({
    navItems: [
        'Home',
        'About',
        'Services',
        'Process',
        'Testimonials'
    ],
    about: [
        {
            text: 'The Company',
            href: '#'
        },
        {
            text: 'Institutional',
            href: '#'
        },
        {
            text: 'Social & Events',
            href: '#'
        },
        {
            text: 'Innovation',
            href: '#'
        },
        {
            text: 'Environment',
            href: '#'
        },
        {
            text: 'Technology',
            href: '#'
        }

    ],
    transport: [
        {
            text: 'Industrialized',
            href: '#'
        },
        {
            text: 'Chemicals',
            href: '#'
        },
        {
            text: 'Packaged Liquids',
            href: '#'
        },
        {
            text: 'Construction',
            href: '#'
        },
        {
            text: 'Laminated Wood',
            href: '#'
        },
        {
            text: 'And others',
            href: '#'
        },


    ],
    support: [
        {
            text: 'Responsibility',
            href: '#'
        },
        {
            text: 'Terms of Use',
            href: '#'
        },
        {
            text: 'About Cookies',
            href: '#'
        },
        {
            text: 'Privacy Policy',
            href: '#'
        },
        {
            text: 'Accessibility',
            href: '#'
        },
        {
            text: 'Information',
            href: '#'
        }
    ]
})