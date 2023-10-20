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
const docs = [
  {
    brand: "Toyota",
    logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png",
    models: [
      {
        image:
          "https://cdn.pixabay.com/photo/2016/04/01/12/11/pickup-truck-1300585_1280.png",
        name: "Corolla",
        brandName: "Toyota",
        type: "Sedan",
        price: 20000,
        shortDescription: "A reliable and fuel-efficient sedan.",
        longDescription:
          "The Toyota Corolla is a compact sedan known for its exceptional reliability and fuel efficiency. It offers a comfortable ride and a spacious interior, making it an excellent choice for daily commuting.",
        rating: 4.5,
      },

      {
        image:
          "https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png",
        name: "Camry",
        brandName: "Toyota",
        type: "Sedan",
        price: 25000,
        shortDescription: "Spacious and comfortable family sedan.",
        longDescription:
          "The Toyota Camry is a midsize sedan that combines spaciousness and comfort. It's designed for families looking for a reliable and comfortable car for daily use.",
        rating: 4.8,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2017/06/24/17/34/car-2438269_1280.jpg",
        name: "RAV4",
        brandName: "Toyota",
        type: "SUV",
        price: 28000,
        shortDescription: "A popular and versatile SUV.",
        longDescription:
          "The Toyota RAV4 is a highly popular SUV known for its versatility. It's a great choice for those who need a vehicle that can handle a wide range of activities, from city driving to outdoor adventures.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/13/11/50/car-158795_1280.png",
        name: "Highlander",
        brandName: "Toyota",
        type: "SUV",
        price: 32000,
        shortDescription: "Family-friendly SUV with advanced features.",
        longDescription:
          "The Toyota Highlander is a family-friendly SUV with advanced features and a spacious interior. It's perfect for families on the go, offering comfort and safety for all passengers.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2017/03/21/09/47/isolated-2161696_1280.png",
        name: "Prius",
        brandName: "Toyota",
        type: "Hybrid",
        price: 26000,
        shortDescription: "An eco-friendly hybrid car with great mileage.",
        longDescription:
          "The Toyota Prius is a well-known hybrid car that sets the standard for fuel efficiency and environmental friendliness. It's the perfect choice for eco-conscious drivers seeking excellent gas mileage.",
        rating: 4.4,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/16/12/11/thunderbird-1911237_1280.jpg",
        name: "Tundra",
        brandName: "Toyota",
        type: "Truck",
        price: 35000,
        shortDescription: "A powerful and rugged full-size pickup truck.",
        longDescription:
          "The Toyota Tundra is a powerful and rugged full-size pickup truck, ideal for towing and heavy-duty work. It offers impressive capabilities and a comfortable interior for both work and play.",
        rating: 4.9,
      },
    ],
  },
  {
    brand: "Honda",
    logo: "https://www.carlogos.org/car-logos/honda-logo-2000-full-640.png",
    models: [
      {
        image:
          "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_1280.png",
        name: "Civic",
        brandName: "Honda",
        type: "Sedan",
        price: 22000,
        shortDescription: "Sporty and efficient compact sedan.",
        longDescription:
          "The Honda Civic is a sporty and efficient compact sedan. It offers an enjoyable driving experience with excellent fuel efficiency, making it a popular choice among small car enthusiasts.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/13/11/50/car-158795_960_720.png",
        name: "Accord",
        brandName: "Honda",
        type: "Sedan",
        price: 26000,
        shortDescription: "Elegant and well-equipped midsize sedan.",
        longDescription:
          "The Honda Accord is an elegant and well-equipped midsize sedan. It offers a spacious and comfortable interior, making it a great choice for those seeking a blend of style and practicality.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/12/13/21/sports-car-146873_1280.png",
        name: "CR-V",
        brandName: "Honda",
        type: "SUV",
        price: 28000,
        shortDescription: "Spacious and versatile SUV for families.",
        longDescription:
          "The Honda CR-V is a spacious and versatile SUV designed for families. It provides a comfortable and practical interior with ample cargo space, making it an ideal choice for family adventures.",
        rating: 4.8,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/12/13/21/sports-car-146873_1280.png",
        name: "Pilot",
        brandName: "Honda",
        type: "SUV",
        price: 32000,
        shortDescription: "A comfortable and capable SUV for adventures.",
        longDescription:
          "The Honda Pilot is a comfortable and capable SUV, well-suited for adventurous families. With advanced features and a roomy interior, it's an excellent choice for those who love to explore.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2020/02/06/18/35/cadillac-4825161_1280.png",
        name: "Fit",
        brandName: "Honda",
        type: "Hatchback",
        price: 18000,
        shortDescription: "A versatile and efficient hatchback.",
        longDescription:
          "The Honda Fit is a versatile and efficient hatchback, perfect for urban driving. Its compact size, clever design, and impressive fuel economy make it a practical and fun choice.",
        rating: 4.3,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/12/17/37/classic-car-152118_1280.png",
        name: "Odyssey",
        brandName: "Honda",
        type: "Minivan",
        price: 33000,
        shortDescription: "A family-friendly minivan with advanced features.",
        longDescription:
          "The Honda Odyssey is a family-friendly minivan with advanced features. It provides a comfortable and spacious cabin, making it an excellent choice for families seeking convenience and versatility.",
        rating: 4.5,
      },
    ],
  },
  {
    brand: "Tesla",
    logo: "https://cdn.pixabay.com/photo/2022/08/25/00/32/tesla-logo-7408969_1280.png",
    models: [
      {
        image:
          "https://cdn.pixabay.com/photo/2020/01/16/09/55/tesla-4770084_1280.png",
        name: "Model S",
        brandName: "Tesla",
        type: "Electric Sedan",
        price: 79999,
        shortDescription:
          "Tesla's flagship electric sedan with impressive range and performance.",
        longDescription:
          "The Tesla Model S is the flagship electric sedan from Tesla, known for its exceptional range, impressive acceleration, and cutting-edge technology. It offers a spacious and luxurious interior with innovative features like Autopilot.",
        rating: 4.8,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2021/11/21/00/37/tesla-6812954_1280.png",
        name: "Model 3",
        brandName: "Tesla",
        type: "Electric Sedan",
        price: 39999,
        shortDescription:
          "An affordable electric sedan with a sleek design and advanced technology.",
        longDescription:
          "The Tesla Model 3 is a more affordable electric sedan that doesn't compromise on performance or technology. It's known for its minimalist design, impressive range, and Autopilot capabilities.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2018/01/20/12/32/bmw-3094436_1280.png",
        name: "Model X",
        brandName: "Tesla",
        type: "Electric SUV",
        price: 89999,
        shortDescription:
          "An electric SUV with distinctive falcon-wing doors and advanced features.",
        longDescription:
          "The Tesla Model X is an electric SUV that stands out with its distinctive falcon-wing doors. It offers seating for up to seven passengers, impressive performance, and advanced safety features.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2017/01/13/20/11/auto-1978163_1280.png",
        name: "Model Y",
        brandName: "Tesla",
        type: "Electric SUV",
        price: 49999,
        shortDescription:
          "A compact electric SUV with a spacious interior and cutting-edge tech.",
        longDescription:
          "The Tesla Model Y is a compact electric SUV that combines a spacious interior with responsive handling and advanced tech. It's a versatile and efficient choice for urban and suburban driving.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2020/04/05/08/41/bmw-5005114_1280.png",
        name: "Roadster",
        brandName: "Tesla",
        type: "Electric Sports Car",
        price: 200000,
        shortDescription:
          "Tesla's electric sports car with breathtaking acceleration and top speed.",
        longDescription:
          "The Tesla Roadster is an electric sports car designed for performance enthusiasts. It boasts breathtaking acceleration, a top speed of over 250 mph, and an incredible all-electric range.",
        rating: 4.9,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2020/07/09/09/29/bmw-5386508_1280.png",
        name: "Cybertruck",
        brandName: "Tesla",
        type: "Electric Pickup Truck",
        price: 39999,
        shortDescription:
          "A rugged and futuristic electric pickup truck with impressive capabilities.",
        longDescription:
          "The Tesla Cybertruck is a rugged and futuristic electric pickup truck. It offers impressive capabilities, including off-road prowess, towing capacity, and a unique design that's both tough and efficient.",
        rating: 4.8,
      },
    ],
  },
  {
    brand: "BMW",
    logo: "https://cdn.pixabay.com/photo/2016/08/15/18/18/bmw-1596080_1280.png",
    models: [
      {
        image:
          "https://cdn.pixabay.com/photo/2017/01/13/20/11/auto-1978163_1280.png",
        name: "3 Series",
        brandName: "BMW",
        type: "Sedan",
        price: 40000,
        shortDescription:
          "A luxury sedan with a perfect blend of performance and style.",
        longDescription:
          "The BMW 3 Series is a luxury sedan that combines outstanding performance and style. It's known for its responsive handling, powerful engine options, and a comfortable interior with advanced technology.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2020/01/30/10/31/ford-4805020_1280.png",
        name: "5 Series",
        brandName: "BMW",
        type: "Sedan",
        price: 55000,
        shortDescription:
          "An executive sedan with a focus on comfort and advanced tech.",
        longDescription:
          "The BMW 5 Series is an executive sedan that emphasizes comfort and advanced technology. It offers a refined ride, premium materials, and a suite of tech features for a top-notch driving experience.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2019/07/25/15/33/car-4362868_1280.png",
        name: "X3",
        brandName: "BMW",
        type: "SUV",
        price: 48000,
        shortDescription:
          "A compact luxury SUV with a sporty character and premium features.",
        longDescription:
          "The BMW X3 is a compact luxury SUV with a sporty character. It features a well-crafted interior, strong engine choices, and a perfect blend of performance and utility.",
        rating: 4.8,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2022/10/27/17/31/car-7551355_1280.png",
        name: "X5",
        brandName: "BMW",
        type: "SUV",
        price: 60000,
        shortDescription:
          "A midsize luxury SUV with a spacious and elegant interior.",
        longDescription:
          "The BMW X5 is a midsize luxury SUV that combines spaciousness with an elegant interior. It offers impressive driving dynamics and a wide range of advanced features for an exceptional driving experience.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_1280.png",
        name: "M4",
        brandName: "BMW",
        type: "Sports Car",
        price: 72000,
        shortDescription:
          "A high-performance sports car with thrilling acceleration and agility.",
        longDescription:
          "The BMW M4 is a high-performance sports car with thrilling acceleration and agility. It's designed for driving enthusiasts seeking a powerful and dynamic driving experience.",
        rating: 4.9,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/13/11/50/car-158795_1280.png",
        name: "i3",
        brandName: "BMW",
        type: "Electric Car",
        price: 45000,
        shortDescription:
          "An innovative electric car with a unique design and sustainable features.",
        longDescription:
          "The BMW i3 is an innovative electric car with a unique design and sustainable features. It's an eco-friendly option with advanced technology and a focus on sustainability.",
        rating: 4.5,
      },
    ],
  },
  {
    brand: "Ford",
    logo: "",
    models: [
      {
        image:
          "https://cdn.pixabay.com/photo/2014/03/25/16/57/police-car-297720_1280.png",
        name: "F-150",
        brandName: "Ford",
        type: "Truck",
        price: 35000,
        shortDescription:
          "America's best-selling pickup truck with exceptional capability.",
        longDescription:
          "The Ford F-150 is America's best-selling pickup truck, known for its exceptional capability and versatility. It offers a range of powerful engines, advanced towing features, and a comfortable interior.",
        rating: 4.8,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2019/02/18/08/17/ferrari-california-4003996_1280.jpg",
        name: "Focus",
        brandName: "Ford",
        type: "Sedan",
        price: 20000,
        shortDescription:
          "A compact sedan with a balance of performance and efficiency.",
        longDescription:
          "The Ford Focus is a compact sedan with a balance of performance and efficiency. It's ideal for urban driving and offers a comfortable ride, making it a practical choice for daily commuting.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2021/09/25/14/08/citroen-type-c-5cv-6655053_1280.png",
        name: "Escape",
        brandName: "Ford",
        type: "SUV",
        price: 25000,
        shortDescription:
          "A compact SUV with a spacious interior and advanced tech.",
        longDescription:
          "The Ford Escape is a compact SUV with a spacious interior and advanced technology. It's designed for those seeking comfort, versatility, and a range of safety features.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2021/11/15/19/17/car-6799144_1280.png",
        name: "Explorer",
        brandName: "Ford",
        type: "SUV",
        price: 30000,
        shortDescription:
          "A midsize SUV with three-row seating and family-friendly features.",
        longDescription:
          "The Ford Explorer is a midsize SUV with three-row seating and family-friendly features. It offers ample cargo space, advanced technology, and a comfortable ride for family adventures.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2021/11/13/09/59/jaguar-6790928_1280.png",
        name: "Mustang",
        brandName: "Ford",
        type: "Sports Car",
        price: 45000,
        shortDescription:
          "An iconic American sports car with thrilling performance and style.",
        longDescription:
          "The Ford Mustang is an iconic American sports car known for its thrilling performance and classic style. It offers a range of powerful engines and a bold design that appeals to performance enthusiasts.",
        rating: 4.9,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2023/06/14/13/45/ai-generated-8063135_1280.jpg",
        name: "Edge",
        brandName: "Ford",
        type: "SUV",
        price: 28000,
        shortDescription:
          "A midsize SUV with a comfortable interior and advanced safety features.",
        longDescription:
          "The Ford Edge is a midsize SUV with a comfortable interior and advanced safety features. It's designed for families seeking a reliable and safe vehicle for daily use.",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Volkswagen",
    models: [
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/13/11/29/car-158239_1280.png",
        name: "Jetta",
        brandName: "Volkswagen",
        type: "Sedan",
        price: 23000,
        shortDescription: "A compact sedan with German engineering and style.",
        longDescription:
          "The Volkswagen Jetta is a compact sedan with German engineering and style. It offers a comfortable ride, precise handling, and a refined interior, making it an excellent choice for those seeking a blend of performance and elegance.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/12/17/15/corvette-151875_1280.png",
        name: "Passat",
        brandName: "Volkswagen",
        type: "Sedan",
        price: 27000,
        shortDescription:
          "A midsize sedan with a spacious and comfortable interior.",
        longDescription:
          "The Volkswagen Passat is a midsize sedan with a spacious and comfortable interior. It's known for its roomy back seat, smooth ride, and a range of advanced features that enhance the driving experience.",
        rating: 4.7,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2014/04/02/10/18/racing-car-303411_1280.png",
        name: "Golf",
        brandName: "Volkswagen",
        type: "Hatchback",
        price: 22000,
        shortDescription:
          "A versatile and fun-to-drive hatchback with a strong following.",
        longDescription:
          "The Volkswagen Golf is a versatile and fun-to-drive hatchback with a strong following. It's appreciated for its peppy engine options, practical design, and a smooth ride that appeals to both enthusiasts and everyday drivers.",
        rating: 4.6,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2014/04/02/10/15/car-303226_960_720.png",
        name: "Tiguan",
        brandName: "Volkswagen",
        type: "SUV",
        price: 26000,
        shortDescription:
          "A compact SUV with a spacious interior and a comfortable ride.",
        longDescription:
          "The Volkswagen Tiguan is a compact SUV with a spacious interior and a comfortable ride. It's designed for families seeking a reliable and versatile vehicle with ample cargo space and safety features.",
        rating: 4.8,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2013/07/12/17/37/classic-car-152118_1280.png",
        name: "Beetle",
        brandName: "Volkswagen",
        type: "Compact Car",
        price: 19000,
        shortDescription:
          "A classic and iconic compact car with a nostalgic charm.",
        longDescription:
          "The Volkswagen Beetle is a classic and iconic compact car with a nostalgic charm. It's known for its distinctive design and a fun driving experience that appeals to those seeking a touch of nostalgia.",
        rating: 4.4,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_1280.png",
        name: "Atlas",
        brandName: "Volkswagen",
        type: "SUV",
        price: 29000,
        shortDescription:
          "A midsize SUV with a spacious and family-friendly interior.",
        longDescription:
          "The Volkswagen Atlas is a midsize SUV with a spacious and family-friendly interior. It offers three rows of seating, ample cargo space, and a comfortable ride, making it an excellent choice for family adventures.",
        rating: 4.7,
      },
    ],
  },
];


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

    app.post('/brands/:brandName',async(req,res)=>{
      const brandName = req.params.brandName
      const newModel = req.body
       const filter = { brand: brandName };
       const update = {
         $push: { models: newModel },
       };

       const result = await brandsCollections.updateOne(filter, update);
       res.send(result)
    })

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
