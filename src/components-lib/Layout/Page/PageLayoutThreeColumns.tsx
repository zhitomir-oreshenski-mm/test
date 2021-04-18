import React, {FC, ReactNode} from 'react';
import {Container, Row, Column} from '../';

interface IPageLayoutThreeColumnsProps {
  sidebar: ReactNode;
  contentMiddle: ReactNode;
  contentEnd: ReactNode;
}

export const PageLayoutThreeColumns: FC<IPageLayoutThreeColumnsProps> = ({sidebar, contentMiddle, contentEnd}) => {
  return (
    <Container>
      <Row>
        <Column sm={3} md={3} lg={3}>
          {sidebar && sidebar}
        </Column>
        <Column sm={3} md={3} lg={3}>
          {contentMiddle && contentMiddle}
        </Column>
        <Column sm={3} md={3} lg={3}>
          {contentEnd && contentEnd}
        </Column>
      </Row>
    </Container>
  );
};
