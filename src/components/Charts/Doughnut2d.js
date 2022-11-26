// Step 1 - Include react
import React from 'react'

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Step 4 - Include the chart type
import Doughnut2D from 'fusioncharts/fusioncharts.charts'

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
import useGlobalContext from '../../customHooks/useGlobalContext'

ReactFC.fcRoot(FusionCharts, Doughnut2D, FusionTheme)

const Doughnut2dco = () => {
  const {repos} = useGlobalContext()
  
  
  // const uniqueLanguages = [
  //   ...new Set(repos.map((el) => el.language ?? 'not specified')),
  // ]
  // const chartValues = [
  //   ...uniqueLanguages.map((el) => {
  //     return repos.reduce((total, curr) => {
  //       if (el === (curr.language ?? 'not specified')) {
  //         total = total + +curr.stargazers_count
  //         return total
  //       }
  //       return total
  //     }, 0)
  //   }),
  // ]
  // const chartData = [...uniqueLanguages.map((el, index) => {
  //   return {"label": `${el}`, "value": `${chartValues[index]}`}
  // })]
  const stars = repos.reduce((total, curr) => {
    const {language: lang, stargazers_count: stars} = curr
    if(!lang) return total
    if(!total[lang]) {
      total[lang] = {label: lang, value: stars}
      return total
    }
    total[lang] = {...total[lang], value: total[lang].value + stars}
    return total
  }, {})
  const chartData = Object.values(stars).sort((a, b) => a.value > b.value).slice(0, 5)

  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Stars per language',
        theme: 'fusion',
        showPercentValues: '0',
        formatNumberScale: '1',
        bgColor: "#222",
        captionFontColor: "#fff",
        decimals: '1',
        useDataPlotColorForLabels: '1',
      },
      // Chart Data
      data: chartData,
    },
  }

  return <ReactFC {...chartConfigs}/>
}

export default Doughnut2dco
