const express = require("express")
const { removeAllListeners } = require("nodemon")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const models = require("../models/index")
const siswa = models.siswa

const auth = require("../auth")
app.use(auth)

app.get("/", auth, async(req, res) => {
    siswa.findAll()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({
            massage : error.massage
        })
    })
})

app.post("/", auth, async(req, res) => {
    let data = {
        nisn: req.body.nisn,
        nis: req.body.nis,
        nama: req.body.nama,
        id_kelas: req.body.id_kelas,
        alamat: req.body.alamat,
        no_telp: req.body.no_telp,
        id_spp: req.body.id_spp
    }

    siswa.create(data)
    .then(result => {
        res.json({
            message: "data has been insert",
            data : result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.put("/", auth, async(req, res) => {
    let param = { id_siswa: req.body.id_siswa}
    let data = {
        nisn: req.body.nisn,
        nis: req.body.nis,
        nama: req.body.nama,
        id_kelas: req.body.id_kelas,
        alamat: req.body.alamat,
        no_telp: req.body.no_telp,
        id_spp: req.body.id_spp
    }

    siswa.update(data, {where: param})
    .then(result => {
        res.json({
            message: "data has been update",
            data : result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.delete("/:id_siswa", auth, async(req, res) => {
    let param = {id_siswa: req.params.id_siswa}
    siswa.destroy({where: param})
    .then(result => {
        res.json({
            message: "data has been delete",
            data : result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

module.exports = app