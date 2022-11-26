import mockData from '../mock_data.json' assert { type: 'json' }

const replacer = (dataJson) => {
  const { template, data } = dataJson
  let replacedTemplate = template
  Object.entries(data).forEach((el) => {
    replacedTemplate = replacedTemplate.replace(`{{${el[0]}}}`, el[1])
  })
  return replacedTemplate
}
