import dynamic from 'next/dynamic'

export const ContainerSection = dynamic(() => import('./component'))
