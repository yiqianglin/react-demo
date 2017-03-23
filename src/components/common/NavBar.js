import React from 'react';
//import './Nabbar.less'

class Navbar extends React.Component {
  render() {
    const {isload, maxLoops} = this.props
    return (
      <nav id="toolbar">
        <h1>
            电影{isload}{this.props.maxLoops}    {maxLoops}
      </h1>
    </nav>
    );
  }
}



export default Navbar;
