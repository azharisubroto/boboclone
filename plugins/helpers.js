const helpers = {
  name: 'Helpers',
  trim_http(url) {
    url = url.replace('https://', '')
    return url
  },
  trim_domain(link) {
    link = link.replace('https://pewefeed.com', '')
    return link
  },
  cdn_img(path, height, quality = 80) {
    // const finalImg = path
    //   ? 'https://cdn.statically.io/img/' + this.trim_http(img) + '?f=webp&quality=' + quality + '&h=' + height
    //   : 'https://picsum.photos/' + height
    // let finalImg = img ? img : "https://picsum.photos/" + height
    const finalImg = path ? `${process.env.API_URL}${path}` : 'https://picsum.photos/' + height

    return finalImg
  },
  percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue
  },
  category(cat) {
    let _cat = cat
    switch (cat) {
      case 'viral':
        _cat = 'Newstainment'
        break
      case 'lagu':
        _cat = 'Musik'
        break
      case 'nonton':
        _cat = 'Film'
        break
      case 'sport':
        _cat = 'Olahraga'
        break
      case 'tekno':
        _cat = 'Teknologi'
        break
      default:
        _cat = cat
        break
    }

    return _cat
  },
  development() {
    return true
  },
  toUSD(value) {
    return `${value.toLocaleString()}`
  }
}

export default ({ app }, inject) => {
  inject('helpers', helpers)
}
