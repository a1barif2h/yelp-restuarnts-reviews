const { StatusCodes } = require('http-status-codes')

const DB = require('../DB');
const { NotFoundError } = require('../error');

const getAllRestaurants = async (req, res) => {
    const data = await DB.query('SELECT * FROM restaurants')
    res.status(StatusCodes.OK).json({msg: 'Success', results: data.rowCount, restaurants: data.rows})
};

const getRestaurant = async (req, res) => {
    const {params: {id}} = req
    const data = await DB.query(`SELECT * FROM restaurants WHERE id=${id}`)
    if(data.rowCount) {
        res.status(StatusCodes.OK).json({msg: 'Success', results: data.rowCount, restaurant: data.rows[0]})
    } else {
        throw new NotFoundError(`No data found with id ${id}`)
    }
};

const createRestaurant = async (req, res) => {
    res.send('create a restaurant')
};

const updateRestaurant = async (req, res) => {
    res.send('update a restaurant')
};

const deleteRestaurant = async (req, res) => {
    res.send('delete restaurant')
};

module.exports = {
    getAllRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}