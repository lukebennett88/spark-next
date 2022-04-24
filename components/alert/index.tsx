import dynamic from 'next/dynamic'

export const AlertSection = dynamic(() => import('./component'))
