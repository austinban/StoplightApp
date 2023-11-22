import { ReactNode } from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

type OwnProps = {
  children?: ReactNode
  onClick?: () => void
  type?: 'secondary' | 'primary'
}

const Button = ({ children, onClick, type }: OwnProps) => {
  return (
    <button onClick={onClick} className={cx('wrapper', type)}>
      {children}
    </button>
  )
}

export default Button
