import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Pie3D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import useGlobalContext from '../../customHooks/useGlobalContext';

ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

const Pie3DCo = () => {
  const {repos} = useGlobalContext()
  // const uniqueLanguages = [...new Set(repos.map(el => el.language ?? "not specified"))]
  // const chartValues = [...uniqueLanguages.map(el => {
  //   return repos.reduce((total, curr) => {
  //     if(el === (curr.language ?? 'not specified')) {
  //       total++
  //       return total
  //     }
  //     return total
  //   }, 0)
  // })]
  // const chartData = [...uniqueLanguages.map((el, index) => {
  //   return {
  //     "label": `${el}`,
  //     "value": `${chartValues[index]}`,
  //   }
  // })]
  const language = repos.reduce((total, curr) => {
    const {language: lang} = curr
    if(!lang) return total
    if(!total[lang]) {
      total[lang] = {label: lang, value: 1}
      return total
    }
    total[lang] = {...total[lang], value: total[lang].value + 1}
    return total
  }, {})
  const chartData = Object.values(language).sort((a,b) => a.value > b.value).slice(0, 5)

  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        showPercentValues: '1',
        decimals: '1',
        useDataPlotColorForLabels: '1',
      },
      // Chart Data
      data: chartData,
    },
  }

  return <ReactFC {...chartConfigs}/>;
};

export default Pie3DCo;
