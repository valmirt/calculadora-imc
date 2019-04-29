import React from 'react'

const Header = ({title, icon, description, color}) => {
  return (
    <div className="ui items">
      <div className="item">
        <div className="ui tiny image">
          <i className={`${color} huge ${icon} icon`} />
        </div>
        <div className="content">
          <h2 className="ui header">{title}</h2>
          <div className="meta">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header