import Interaction from '../models/interactions.model'

exports.getAll = async (req, res,) => {
  const results = await Interaction.find({}).sort({ _id: 1 })
  res.status(200)
  res.json(results)
}

exports.saveInteraction = async (req, res,) => {
  const interaction = new Interaction({
    type: 'REQUEST',
    userAgent: req.headers['user-agent'],
    ip: (req.headers['x-forwarded-for'] || req.connection.remoteAdress)
  })

  await interaction.save()
  res.status(200)
  res.json(interaction)
}
