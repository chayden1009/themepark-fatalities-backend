const express = require('express')
const {Ride} = require('../models')


const index = async (req, res, next) => {
    try {
        res.json(await RTCIceCandidate.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        res.json(await Ride.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res, next) => {
    try {
        res.json(await Ride.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        res.json(await Ride.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async () => {
    try {
        res.json(
            await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true })
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