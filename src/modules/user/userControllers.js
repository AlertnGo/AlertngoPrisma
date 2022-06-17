const userController = {
  getAllUser: (req, res) => {
    try {
      const users = prisma.user.findAll();

      res.json(users);
    } catch (error) {
      res.send(500);
    }
  },
};

module.exports = userController;
