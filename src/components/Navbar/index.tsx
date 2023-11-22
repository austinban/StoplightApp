import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Layout() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <NavLink to={'/'}>Austin Ban</NavLink>
      </div>
    </div>
  )
}
