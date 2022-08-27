// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useGlobalContext } from "../../Context/Context";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Bar2D = () => {
    let { forks } = useGlobalContext();
    const data = forks.map((item) => {
        return {
            label: item.label,
            value: item.forks,
        };
    })
  
  const chartConfigs = {
  type: "bar2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
            caption: "Most Forked Repository Chart",
              aligncaptionwithcanvas: "0",
        plottooltext: "local $label has $value forks",
paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data
    
  },
};

     return (<ReactFC {...chartConfigs} />);
}
export default Bar2D;