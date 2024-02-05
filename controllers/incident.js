const express = require('express')
const {Incident} = require('../models')


const index = async (req, res, next) => {
    try {
        res.json(await Incident.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        res.json(await Incident.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Incident.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Incident.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async () => {
    try {
        res.json(
            await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
}