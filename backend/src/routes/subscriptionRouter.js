const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// POST: Suscribirse
router.post('/subscribe', async (req, res) => {
  const { name, phone, email } = req.body;

  const subscription = new Subscription({
    name,
    phone,
    email,
  });

  try {
    const newSubscription = await subscription.save();
    res.status(201).json(newSubscription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Cancelar suscripción
router.delete('/unsubscribe/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;

  try {
    // Buscar la suscripción por su ID
    const subscription = await Subscription.findById(id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    // Verificar datos de subscription
    if (subscription.name === name && subscription.phone === phone && subscription.email === email) {
      const deletedSubscription = await Subscription.findByIdAndDelete(id);
      if (!deletedSubscription) {
        return res.status(404).json({ message: 'Subscription not found' });
      }
      return res.status(200).json({ message: 'Subscription deleted successfully' });
    } else {
      return res.status(403).json({ message: 'Unauthorized: Data mismatch' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Contar suscriptores
router.get('/count', async (req, res) => {
  try {
    const count = await Subscription.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
