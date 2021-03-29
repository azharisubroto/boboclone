const API = '9501c2041bd7d8e4f7eff63ff47efa28'
const { Router } = require('express')
const router = Router()
const RajaOngkir = require('rajaongkir-nodejs').Starter(API)
const request = require('request')

router.use('/provinces', async (req, res) => {
  const data = await RajaOngkir.getProvinces()
  res.json(data)
})

router.use('/cities/:provinceid', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.rajaongkir.com/starter/city`,
    qs: { province: req.params.provinceid },
    headers: { key: API }
  }

  request(options, function (error, response, body) {
    if (error) throw new Error(error)

    res.json(JSON.parse(body))
  })
})

router.use('/cekongkir/:cityid', (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://api.rajaongkir.com/starter/cost',
    headers: { key: API, 'content-type': 'application/x-www-form-urlencoded' },
    form: { origin: '152', destination: req.params.cityid, weight: 1000, courier: 'jne' }
  }

  request(options, function (error, response, body) {
    if (error) throw new Error(error)

    res.json(JSON.parse(body))
  })
})

module.exports = router
