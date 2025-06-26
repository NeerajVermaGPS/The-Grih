import React from 'react'

function NavButton({target, label}) {
  return (
    <a href={target} className='nav-item px-3 py-2 center'>{label}</a>
  )
}

export default NavButton
