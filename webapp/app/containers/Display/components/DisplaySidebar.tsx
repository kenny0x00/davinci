import * as React from 'react'

const styles = require('../Display.less')

interface IDisplaySidebarProps {
  children: JSX.Element
}

export function DisplaySidebar (props: IDisplaySidebarProps) {
  return (
    <div className={styles.sidebar}>
      {props.children}
    </div>
  )
}

export default DisplaySidebar