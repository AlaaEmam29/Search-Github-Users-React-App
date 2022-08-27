// STEP 1 - Include Dependencies
// Include react
import React from "react";
// eslint-disable-next-line no-unused-vars

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
const Column2DTemplate = () => {
  let { stars } = useGlobalContext();
  let data = stars.map((item) => {
    return {  
      label: item.label,
      value: item.stars,
    };
  })

  
  const chartConfigs = {
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Popular Repository Chart",
      
        yAxisName: "Starts",
        //Set the theme for your chart
        paletteColors:
          "#63AAC0, #F0DC46 ,#434348 ,#B5323E , #29C3BE",

        theme: "fusion"
      },
      // Chart Data
      data: data
    
  },
};

     return (<ReactFC {...chartConfigs} />);
}
export default Column2DTemplate;