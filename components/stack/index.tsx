import dynamic from 'next/dynamic'

export const StackSection = dynamic(() => import('./component'))
