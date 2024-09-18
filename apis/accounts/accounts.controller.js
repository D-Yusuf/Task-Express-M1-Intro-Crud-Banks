const accounts = require("../../accounts")
const UserSchema = require("../../models/UserSchema")
// Get all users
const getAllUsers = async(req, res) => {
    try {
        const users = await UserSchema.find()
        return res.status(200).json({ data: users });
    } catch (error) {
        return res.status(500).json({ error });
    }
    
  };
  
  // Get one user by ID
  const getOneUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await UserSchema.findById(id)

        if (!user) {
          return res.status(404).json({ message: "Account not found" });
        }
        return res.status(200).json({ data: user });
        
    } catch (error) {
        return res.status(500).json({ error: "Server Error" + error });

    }
  };
  
  // Add a new user
  const addUser = async(req, res) => {
    try {
        const newUser = req.body;
        await UserSchema.create(newUser)
        const users = await UserSchema.find()
        return res.status(201).json({ data: users });
        
    } catch (error) {
        return res.status(500).json({ error });
        
    }
  };
  
  // Edit a user by ID
  const editUser = async(req, res) => {
    try{
        const { id } = req.params;
        const user = await UserSchema.findByIdAndUpdate(id, req.body)
        if (!user) {
          return res.status(404).json({ message: "Account not found" });
        }
        return res.status(200).json({ data: user });

    }catch(error){
        res.status(500).json({error: "Server Error"})
    }
  };
  
  // Delete a user by ID
  const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await UserSchema.findByIdAndDelete(id)
        if (!user) {
          return res.status(404).json({ message: "Account not found" });
        }
        return res.status(200).json({ data: user });
        
    } catch (error) {
        res.status(500).json({error: "Server Error"})
    }
  };
  
  module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    editUser,
    deleteUser,
  };