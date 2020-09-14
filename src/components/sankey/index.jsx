import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveSankey } from '@nivo/sankey';

import sankeyColors from './colors';

const getMarginObject = (margin) => {
  let marginObject = margin;

  if (typeof margin === 'number') {
    marginObject = {
      bottom: margin,
      left: margin,
      right: margin,
      top: margin,
    };
  }

  return marginObject;
};

const Sankey = ({ data, nodeSpacing, nodeBorderWidth, tooltipFormat, margin }) => {
  return (
    <ResponsiveSankey
      data={data}
      sort="input"
      // base
      margin={getMarginObject(margin || nodeBorderWidth)}
      colors={sankeyColors}
      // node
      nodeThickness={22}
      nodeSpacing={nodeSpacing}
      nodeBorderWidth={nodeBorderWidth}
      nodeBorderColor={{
        from: 'color',
        modifiers: [['darker', 0]],
      }}
      nodeOpacity={1}
      // link
      linkBlendMode="luminosity"
      linkOpacity={0.3}
      linkHoverOpacity={0.4}
      // label
      labelPadding={20}
      labelTextColor="#828282"
      theme={{
        labels: {
          text: {
            fontFamily: 'Helvetica',
            fontSize: '17px',
            fontWeight: 'bold',
          },
        },
      }}
      // tooltip
      tooltipFormat={tooltipFormat}
      // actions
      onClick={(clickData, event) => console.log({ data: clickData, event })}
    />
  );
};

export default Sankey;

const nodeIdPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Sankey.propTypes = {
  data: PropTypes.exact({
    nodes: PropTypes.arrayOf(
      PropTypes.exact({
        id: nodeIdPropType,
      }),
    ),
    links: PropTypes.arrayOf(
      PropTypes.exact({
        source: nodeIdPropType,
        target: nodeIdPropType,
        value: PropTypes.number,
      }),
    ),
  }).isRequired,
  nodeSpacing: PropTypes.number,
  nodeBorderWidth: PropTypes.number,
  tooltipFormat: PropTypes.func,
  margin: PropTypes.number,
};

Sankey.defaultProps = {
  nodeSpacing: 80,
  nodeBorderWidth: 0,
  tooltipFormat: undefined,
  margin: undefined,
};
