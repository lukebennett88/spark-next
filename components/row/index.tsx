import dynamic from 'next/dynamic'

export const RowSection = dynamic(() => import('./component'))
