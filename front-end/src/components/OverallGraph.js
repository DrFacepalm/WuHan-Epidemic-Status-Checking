import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie'
import WindowDimensions from './WindowDimensions'
import axios from 'axios'

function OverallGraph(props) {
  const {_, height} = WindowDimensions();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('http://127.0.0.1:5000/api/overview');
      setData(res.data.data);
    };
    fetchData();
  }, []);

  return(
    <div style={{height: height*0.5}}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.4}
        padAngle={8}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        sortByValue={true}
        radialLabelsSkipAngle={0}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={5}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={0}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
        ]}
        fill={[
          {
              match: {
                  id: 'Death'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'Confirmed'
              }
          },
          {
              match: {
                  id: 'Death'
              }
          },
          {
              match: {
                  id: 'Death'
              }
          }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 30,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                    itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default OverallGraph;
