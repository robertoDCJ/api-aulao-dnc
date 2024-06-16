let reservations = [];

exports.getClient = async (req, res) => {
  const doneReservations = await reservations.find();
  res.status(200).json(doneReservations);
};

exports.createClient = async (req, res) => {
  const { nome, sala } = req.body;
  let reservation = { nome: nome, sala: sala };
  await reservations.push(reservation);
  res.status(201).json(reservations);
};
