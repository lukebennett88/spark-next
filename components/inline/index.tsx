import dynamic from 'next/dynamic'

export const InlineSection = dynamic(() => import('./component'))
