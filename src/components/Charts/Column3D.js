// Step 1 - Include react
import React from 'react'

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Step 4 - Include the chart type
import Column3D from 'fusioncharts/fusioncharts.charts'

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
import useGlobalContext from '../../customHooks/useGlobalContext'

ReactFC.fcRoot(FusionCharts,Column3D, FusionTheme)


const Column3Dco = () => {
  const { repos } = useGlobalContext()
  const chartData = repos
    .sort((a, b) => {
      if (a.stargazers_count > b.stargazers_count) return -1
      if (a.stargazers_count < b.stargazers_count) return 1
      return 0
    })
    .slice(0, 5)
    .reduce((total, curr) => {
      if (!total)
        return (total = [{ label: curr.name, value: curr.stargazers_count }])
      return (total = [
        ...total,
        { label: curr.name, value: curr.stargazers_count },
      ])
    }, [])

  const chartConfigs = {
    type: 'column3d',
    height: '400',
    width: '100%',
    dataFormat: 'json',
    theme: 'fusion',
    formatNumberScale: '1',
    dataSource: {
      chart: {
        caption: 'Most popular',
        xAxisName: 'Repos',
        yAxisName: 'Stars',
      },
      data: chartData,
    },
  }

  return <ReactFC {...chartConfigs} />
}
export default Column3Dco;
