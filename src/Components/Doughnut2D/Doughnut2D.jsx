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

const Doughnut2D = () => {
  let { sortable } = useGlobalContext();
  sortable = sortable.slice(0, 5);
  const data = sortable.map((item) => {
    return {
      label: item.label,
      value: item.stars,
    };

  })
  
  const chartConfigs = {
  type: "doughnut2d", // The chart type
  width: "100%", // Width of the chart
    height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
     chart: {
      caption: "Most Stars Languages",
          theme: "fusion",
              decimals: 0,
        pieRadius: "45%",
        doughnutRadius: "60%",
        showPercentValues: 0,
        showPercentInTooltip: 0,

    },
data

  },
};

    return <ReactFC {...chartConfigs} />;
}

export default Doughnut2D;