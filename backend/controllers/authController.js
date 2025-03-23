// connect this to DB later
export const registerUser = async (req, res) => 
    {
    try 
    {
      const { email, password } = req.body;
      // add hashing & save to DB here
      res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (err) 
    {
      res.status(500).json({ error: 'Registration failed' });
    }
  };
  
  export const loginUser = async (req, res) => 
    {
    try 
    {
      const { email, password } = req.body;
      // check entered info and return token
      res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
    } 
    catch (err) 
    {
      //return fail
        res.status(500).json({ error: 'Login failed' });
    }
  };
  