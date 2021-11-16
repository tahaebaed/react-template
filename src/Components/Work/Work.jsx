import axios from 'axios';
import React, { Component } from 'react';

import {
  WorkSection,
  WorkTitle,
  WorkPart,
  PartDesc,
  PartTitle,
  Line,
  Span,
  Icons,
} from './WorkStyle';

class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get('db.json').then(res =>
      this.setState({
        works: res.data.works,
      })
    );
  }
  render() {
    const { works } = this.state;
    const worksList = works.map((workItem, index) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icons className={workItem.icon_name}></Icons>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className='container'>
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
