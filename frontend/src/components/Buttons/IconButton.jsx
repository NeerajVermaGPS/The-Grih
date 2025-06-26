import React from 'react'

function IconButton({label, onClickEvent, additionalClasses=""}) {
  return (
    <button className={`theme-btn theme-btn-img theme-btn-highlighted center rounded-1 ${additionalClasses}`} onClick={onClickEvent}>
        <img src={`/assets/icons/${label}.svg`} alt={label} />
    </button>
  )
}

export default IconButton
