import dynamic from 'next/dynamic'

export const ColumnsSection = dynamic(() => import('./component'))
