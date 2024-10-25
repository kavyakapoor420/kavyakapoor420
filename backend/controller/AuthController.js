import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

const jwt_secret = "abcd";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if the user already exists
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashPass = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({
      username,
      email,
      password: hashPass
    });
    
    await newUser.save();
    return res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jsonwebtoken.sign({ userId: user._id }, jwt_secret);

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000
    });

    return res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
