import dynamic from 'next/dynamic'

export const HiddenSection = dynamic(() => import('./component'))
