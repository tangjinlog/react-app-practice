import React, { Component } from 'react';

class TOC extends Component {
  render() {
    let lists = [];
    const data = this.props.data;
    let i = 0;
    while(i < data.length) {
      lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>)
      i += 1;
    }



    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC;