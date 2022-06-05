import React from 'react';

export default function SidebarSearch() {
  return (
    <div className="sidebar-box">
      <form action="#" className="search-form">
        <div className="form-group">
          <span className="icon icon-search" />
          <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
        </div>
      </form>
    </div>
  );
}
