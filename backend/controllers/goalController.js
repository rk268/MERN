const asyncHandler = require('exprees-async-handler')
// @desc Get Goals
// @route GET/api/goals
// @access Private

const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message : "get goals"})  
})

// @desc Post Goal
// @route POST/api/goals
// @access Private

const setGoal = asyncHandler(async(req,res) => {

    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message : "set goals"})  
})

// @desc Put Goals
// @route PUT/api/goals/id
// @access Private

const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message : `update goal ${req.params.id}`}) 
})

// @desc Delete Goals
// @route DELETE/api/goals/id
// @access Private

const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message : `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,  setGoal, updateGoal, deleteGoal
}