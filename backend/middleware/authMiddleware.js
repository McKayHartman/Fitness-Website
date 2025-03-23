export const protect = (req, res, next) => 
    {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) 
        {
      return res.status(401).json({ message: 'Not authorized' });
    }
  
    try {
      // check the JWT token here
      // req.user = decoded info
      next();
    } 
    catch (err) 
    {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
  