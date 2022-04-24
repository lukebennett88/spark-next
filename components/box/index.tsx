import dynamic from 'next/dynamic'

export const BoxSection = dynamic(() => import('./component'))
