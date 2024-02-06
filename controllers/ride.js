const express = require('express')
const {Ride} = require('../models')
const {Park} = require('../models')

const index = async (req, res, next) => {
    try {
        const rides = await Ride.find().populate('incidents');
        res.json(rides);
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async (req, res, next) => {
    try {
        const newRide = await Ride.create(req.body);

        await Park.findByIdAndUpdate(
            req.params.parkId, 
            { $push: { rides: newRide._id } }, 
            { new: true, safe: true, upsert: true }
        );

        res.json(newRide);
    } catch (error) {
        res.status(400).json(error);
    }
};


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

const update = async (req, res, next) => {
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