import dynamic from 'next/dynamic'

export const TextSection = dynamic(() => import('./component'))
