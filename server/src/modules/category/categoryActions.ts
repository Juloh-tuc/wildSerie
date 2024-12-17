// Some data to make the trick
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

// Browse all categories
const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

// Read a specific category by ID
const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  const category = categories.find((c) => c.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404); // Not found
  }
};

// Export them to import them somewhere else
export default { browse, read };
