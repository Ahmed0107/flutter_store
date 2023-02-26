const getBestSellerProds = (req, res) => {
  const bestSellerProds = [
    {
      id: 1,
      title: "Bag",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/bag1.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 2,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/ressmote.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 3,
      title: "BeoPlay Stand Speaker",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/casr.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 4,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/lamp.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 5,
      title: "Bag",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/bag1.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 6,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/ressmote.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },
  ];

  res.send(bestSellerProds);
};

const getBestSellerProdsById = (req, res) => {
  const { id } = req.params;

  const bestSellerProds = [
    {
      id: 1,
      title: "BeoPlay Speaker",
      category: "Bang and Olufsen",
      price: 755,
      image: `${req.protocol}://${req.headers.host}/uploads/speaker1.png`,
      details:
        "BeoPlay Speaker fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 2,
      title: "Leather Wristwatch",
      category: "Tag Heuer",
      price: 450,
      image: `${req.protocol}://${req.headers.host}/uploads/watch1.png`,
      details:
        "Leather Wristwatch fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 3,
      title: "Smart Bluetooth Speaker",
      category: "Google Inc",
      price: 9000,
      image: `${req.protocol}://${req.headers.host}/uploads/bluj.png`,
      details:
        "Smart Bluetooth Speakerfabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 4,
      title: "Smart Luggage",
      category: "Smart Inc",
      price: 1200,
      image: `${req.protocol}://${req.headers.host}/uploads/smartsdf.png`,
      details:
        "Leather Wristwatch fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 5,
      title: "BeoPlay Speaker",
      category: "Bang and Olufsen",
      price: 755,
      image: `${req.protocol}://${req.headers.host}/uploads/speaker1.png`,
      details:
        "BeoPlay Speaker fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 6,
      title: "Leather Wristwatch",
      category: "Tag Heuer",
      price: 450,
      image: `${req.protocol}://${req.headers.host}/uploads/watch1.png`,
      details:
        "Leather Wristwatch fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },
  ];

  const foundedProduct = bestSellerProds.find((prod) => prod.id == id);

  res.send(foundedProduct);
};

const getRecommendedProds = (req, res) => {
  const recommendedProds = [
    {
      id: 1,
      title: "Bag",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/bag1.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 2,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/remote.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 3,
      title: "BeoPlay Stand Speaker",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/casr.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 4,
      title: "BeoPlay Stand Speaker",
      category: "Bang and Ocean",
      price: 300,
      image: `${req.protocol}://${req.headers.host}/uploads/lamp.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 5,
      title: "Bag",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/bag1.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 6,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/remote.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },
  ];

  res.send(recommendedProds);
};

const getRecommendedProdsById = (req, res) => {
  const { id } = req.params;

  const recommendedProds = [
    {
      id: 1,
      title: "Bag",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/bag1.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 2,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/remote.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 3,
      title: "BeoPlay Stand Speaker",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/casr.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 4,
      title: "BeoPlay Stand Speaker",
      category: "Bang and Ocean",
      price: 300,
      image: `${req.protocol}://${req.headers.host}/uploads/lamp.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 5,
      title: "Bag",
      category: "Apple Inc",
      price: 120,
      image: `${req.protocol}://${req.headers.host}/uploads/bag1.png`,
      details:
        "Bag fabric designed to help you keep dry so you can more comfortably work harder, longer.",
    },

    {
      id: 6,
      title: "Wireless Remote",
      category: "Tesla Inc",
      price: 799,
      image: `${req.protocol}://${req.headers.host}/uploads/remote.png`,
      details:
        "Wireless Remote designed to help you keep dry so you can more comfortably work harder, longer.",
    },
  ];

  const foundedProduct = recommendedProds.find((prod) => prod.id == id);

  res.send(foundedProduct);
};

module.exports = {
  getBestSellerProds,
  getBestSellerProdsById,
  getRecommendedProds,
  getRecommendedProdsById,
};
