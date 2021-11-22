const { StatusCodes } = require('http-status-codes')

const DB = require('../DB');
const { NotFoundError, BadRequestError } = require('../error');

const getAllRestaurants = async (req, res) => {
    const data = await DB.query('SELECT * FROM restaurants ORDER BY name ASC')
    if(!data.rowCount) {
        throw new NotFoundError(`No restaurants added yet.`)
    }
    res.status(StatusCodes.OK).json({msg: 'Success', results: data.rowCount, restaurants: data.rows})
};

const getRestaurant = async (req, res) => {
    const {params: {id}} = req
    const data = await DB.query(`SELECT * FROM restaurants WHERE id=$1`, [id])
    if(!data.rowCount) {
        throw new NotFoundError(`No data found with id ${id}`)
    }
    res.status(StatusCodes.OK).json({msg: 'Success', results: data.rowCount, restaurant: data.rows[0]})
};

const createRestaurant = async (req, res) => {
    const {body} = req
    if(!body.name || !body.location || !body.price_range) {
        throw new BadRequestError('Name, Location, Price Range are required, Please check all fields again.')
    }
    await DB.query(`INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3)`, [body.name, body.location, body.price_range])
    res.status(StatusCodes.CREATED).json({msg: 'Success', restaurant: body})
};

const updateRestaurant = async (req, res) => {
    const {body, params: {id}} = req
    if(!body.name || !body.location || !body.price_range) {
        throw new BadRequestError('Name, Location, Price Range are required, Please check all fields again.')
    }
    const data = await DB.query(`UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *`, [body.name, body.location, body.price_range, id])
    if(!data.rowCount) {
        throw new NotFoundError(`No data found with id ${id}`)

    }
    res.status(StatusCodes.OK).json({msg: 'Success', restaurant: data.rows[0]})
    
};

const deleteRestaurant = async (req, res) => {
    const {params: {id}} = req
    const data = await DB.query(`DELETE FROM restaurants WHERE id = $1`, [id])
    if(!data.rowCount) {
        throw new NotFoundError(`No data found with id ${id}`)
    }
    res.status(StatusCodes.OK).json({msg: 'Success'})
};

module.exports = {
    getAllRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}