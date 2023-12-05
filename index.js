const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const cors = require("cors");
const app = express();

const port = process.env.PORT || 7001;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@autovarsadb.2anh3uj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const brandsCollections = client.db("brandsDB").collection("brands");
    const cartCollections = client.db("brandsDB").collection("cart");
    const faqCollections = client.db("brandsDB").collection("faq");
    // brandsCollections.insertMany(docs)

    app.get("/brands", async (req, res) => {
      const cursor = brandsCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/brands/:name", async (req, res) => {
      const name = req.params.name;
      console.log(name);
      const query = {
        "models.name": name,
      };
      const result = await brandsCollections.findOne(query);
      res.send(result);
    });



    app.get("/cart", async (req, res) => {
      const cursor = cartCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/faq", async (req, res) => {
      const cursor = faqCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/cart", async (req, res) => {
      const car = req.body;
      const options = { ordered: true };
      const result = await cartCollections.insertOne(car, options);
      res.send(result);
    });

    app.post("/brands/:brandName", async (req, res) => {
      const brandName = req.params.brandName;
      const newModel = req.body;
      const filter = { brand: brandName };
      const update = {
        $push: { models: newModel },
      };

      const result = await brandsCollections.updateOne(filter, update);
      res.send(result);
    });

    app.patch("/brands/:name", async (req, res) => {
      const name = req.params.name;
      const product = req.body;
      const filter = { "models.name": name };

      const updateProduct = {
        $set: {
          "models.$.image": product.image,
          "models.$.name": product.name,
          "models.$.brandName": product.brandName,
          "models.$.type": product.type,
          "models.$.price": product.price,
          "models.$.color": product.color,
          "models.$.fuelType": product.fuelType,
          "models.$.year": product.year,
          "models.$.engineSize": product.engineSize,
          "models.$.cylinder": product.cylinder,
          "models.$.shortDescription": product.shortDescription,
        },
      };
      const result = await brandsCollections.updateOne(filter, updateProduct);
      res.send(result);
    });

    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollections.deleteOne(query);

      res.send(result);
    });
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("AutoVarsa server is Running");
});

app.listen(port, () => {
  console.log(`AutoVarsa server running on port:${port}`);
});
