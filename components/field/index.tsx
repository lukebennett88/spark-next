import dynamic from 'next/dynamic'

export const FieldSection = dynamic(() => import('./component'))
