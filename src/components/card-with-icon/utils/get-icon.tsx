import Image from "next/image";

import orderIcon from '@images/order-icon.png'
import wallettIcon from '@images/wallet-icon.png'
import documentIcon from '@images/document-icon.png'

export type IconName = 'document' | 'wallet' | 'order'

export function getIcon(iconName?: IconName) {
  switch (iconName) {
    case 'document':
      return <Image src={documentIcon} alt={'Иконка документа'}/>

    case 'wallet':
      return <Image src={wallettIcon} alt={'Иконка кошелька'}/>

    case 'order':
      return <Image src={orderIcon} alt={'Иконка посылки'}/>

    default:
      return null;
  }
}
