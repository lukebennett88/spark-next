import dynamic from 'next/dynamic'

export const ContentDialogSection = dynamic(() => import('./component'))
