const express = require('express');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const cors = require('cors');
const app = express()

const port = process.env.PORT || 7001

// Middleware 
app.use(cors())
app.use(express.json())


// import brands from './data.json'
// console.log(brands);
// const fs = require('fs');

// const jsonData = fs.readFileSync('./data.json').toString();
// console.log(jsonData);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@autovarsadb.2anh3uj.mongodb.net/?retryWrites=true&w=majority`;




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const docs = [ 
{
  "brand": "Toyota",
  "models": [
    {
      "id": 1,
      "image": "corolla.jpg",
      "name": "Corolla",
      "brandName": "Toyota",
      "type": "Sedan",
      "price": 20000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.8 L",
      "cylinder": 4,
      "shortDescription": "A reliable and fuel-efficient sedan.",
      "longDescription": "The Toyota Corolla is a compact sedan known for its exceptional reliability and fuel efficiency. It offers a comfortable ride and a spacious interior, making it an excellent choice for daily commuting.",
      "rating": 4.5
    },
    {
      "id": 2,
      "image": "camry.jpg",
      "name": "Camry",
      "brandName": "Toyota",
      "type": "Sedan",
      "price": 25000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.5 L",
      "cylinder": 4,
      "shortDescription": "Spacious and comfortable family sedan.",
      "longDescription": "The Toyota Camry is a midsize sedan that combines spaciousness and comfort. It's designed for families looking for a reliable and comfortable car for daily use.",
      "rating": 4.8
    },
    {
      "id": 3,
      "image": "rav4.jpg",
      "name": "RAV4",
      "brandName": "Toyota",
      "type": "SUV",
      "price": 28000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.5 L",
      "cylinder": 4,
      "shortDescription": "A popular and versatile SUV.",
      "longDescription": "The Toyota RAV4 is a highly popular SUV known for its versatility. It's a great choice for those who need a vehicle that can handle a wide range of activities, from city driving to outdoor adventures.",
      "rating": 4.7
    },
    {
      "id": 4,
      "image": "highlander.jpg",
      "name": "Highlander",
      "brandName": "Toyota",
      "type": "SUV",
      "price": 32000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "3.5 L",
      "cylinder": 6,
      "shortDescription": "Family-friendly SUV with advanced features.",
      "longDescription": "The Toyota Highlander is a family-friendly SUV with advanced features and a spacious interior. It's perfect for families on the go, offering comfort and safety for all passengers.",
      "rating": 4.6
    },
    {
      "id": 5,
      "image": "prius.jpg",
      "name": "Prius",
      "brandName": "Toyota",
      "type": "Hybrid",
      "price": 26000,
      "color": "Various",
      "fuelType": "Hybrid (Gasoline/Electric)",
      "year": 2023,
      "engineSize": "1.8 L",
      "cylinder": 4,
      "shortDescription": "An eco-friendly hybrid car with great mileage.",
      "longDescription": "The Toyota Prius is a well-known hybrid car that sets the standard for fuel efficiency and environmental friendliness. It's the perfect choice for eco-conscious drivers seeking excellent gas mileage.",
      "rating": 4.4
    },
    {
      "id": 6,
      "image": "tundra.jpg",
      "name": "Tundra",
      "brandName": "Toyota",
      "type": "Truck",
      "price": 35000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "5.7 L",
      "cylinder": 8,
      "shortDescription": "A powerful and rugged full-size pickup truck.",
      "longDescription": "The Toyota Tundra is a powerful and rugged full-size pickup truck, ideal for towing and heavy-duty work. It offers impressive capabilities and a comfortable interior for both work and play.",
      "rating": 4.9
    }
  ]
},

{
  "brand": "Honda",
  "models": [
    {
      "id": 1,
      "image": "civic.jpg",
      "name": "Civic",
      "brandName": "Honda",
      "type": "Sedan",
      "price": 22000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "Sporty and efficient compact sedan.",
      "longDescription": "The Honda Civic is a sporty and efficient compact sedan. It offers an enjoyable driving experience with excellent fuel efficiency, making it a popular choice among small car enthusiasts.",
      "rating": 4.6
    },
    {
      "id": 2,
      "image": "accord.jpg",
      "name": "Accord",
      "brandName": "Honda",
      "type": "Sedan",
      "price": 26000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.5 L",
      "cylinder": 4,
      "shortDescription": "Elegant and well-equipped midsize sedan.",
      "longDescription": "The Honda Accord is an elegant and well-equipped midsize sedan. It offers a spacious and comfortable interior, making it a great choice for those seeking a blend of style and practicality.",
      "rating": 4.7
    },
    {
      "id": 3,
      "image": "crv.jpg",
      "name": "CR-V",
      "brandName": "Honda",
      "type": "SUV",
      "price": 28000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.5 L",
      "cylinder": 4,
      "shortDescription": "Spacious and versatile SUV for families.",
      "longDescription": "The Honda CR-V is a spacious and versatile SUV designed for families. It provides a comfortable and practical interior with ample cargo space, making it an ideal choice for family adventures.",
      "rating": 4.8
    },
    {
      "id": 4,
      "image": "pilot.jpg",
      "name": "Pilot",
      "brandName": "Honda",
      "type": "SUV",
      "price": 32000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "3.5 L",
      "cylinder": 6,
      "shortDescription": "A comfortable and capable SUV for adventures.",
      "longDescription": "The Honda Pilot is a comfortable and capable SUV, well-suited for adventurous families. With advanced features and a roomy interior, it's an excellent choice for those who love to explore.",
      "rating": 4.6
    },
    {
      "id": 5,
      "image": "fit.jpg",
      "name": "Fit",
      "brandName": "Honda",
      "type": "Hatchback",
      "price": 18000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.5 L",
      "cylinder": 4,
      "shortDescription": "A versatile and efficient hatchback.",
      "longDescription": "The Honda Fit is a versatile and efficient hatchback, perfect for urban driving. Its compact size, clever design, and impressive fuel economy make it a practical and fun choice.",
      "rating": 4.3
    },
    {
      "id": 6,
      "image": "odyssey.jpg",
      "name": "Odyssey",
      "brandName": "Honda",
      "type": "Minivan",
      "price": 33000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "3.5 L",
      "cylinder": 6,
      "shortDescription": "A family-friendly minivan with advanced features.",
      "longDescription": "The Honda Odyssey is a family-friendly minivan with advanced features. It provides a comfortable and spacious cabin, making it an excellent choice for families seeking convenience and versatility.",
      "rating": 4.5
    }
  ]
}
,
{
  "brand": "Tesla",
  "models": [
    {
      "id": 1,
      "image": "model-s.jpg",
      "name": "Model S",
      "brandName": "Tesla",
      "type": "Electric Sedan",
      "price": 79999,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "Tesla's flagship electric sedan with impressive range and performance.",
      "longDescription": "The Tesla Model S is the flagship electric sedan from Tesla, known for its exceptional range, impressive acceleration, and cutting-edge technology. It offers a spacious and luxurious interior with innovative features like Autopilot.",
      "rating": 4.8
    },
    {
      "id": 2,
      "image": "model-3.jpg",
      "name": "Model 3",
      "brandName": "Tesla",
      "type": "Electric Sedan",
      "price": 39999,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "An affordable electric sedan with a sleek design and advanced technology.",
      "longDescription": "The Tesla Model 3 is a more affordable electric sedan that doesn't compromise on performance or technology. It's known for its minimalist design, impressive range, and Autopilot capabilities.",
      "rating": 4.7
    },
    {
      "id": 3,
      "image": "model-x.jpg",
      "name": "Model X",
      "brandName": "Tesla",
      "type": "Electric SUV",
      "price": 89999,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "An electric SUV with distinctive falcon-wing doors and advanced features.",
      "longDescription": "The Tesla Model X is an electric SUV that stands out with its distinctive falcon-wing doors. It offers seating for up to seven passengers, impressive performance, and advanced safety features.",
      "rating": 4.6
    },
    {
      "id": 4,
      "image": "model-y.jpg",
      "name": "Model Y",
      "brandName": "Tesla",
      "type": "Electric SUV",
      "price": 49999,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "A compact electric SUV with a spacious interior and cutting-edge tech.",
      "longDescription": "The Tesla Model Y is a compact electric SUV that combines a spacious interior with responsive handling and advanced tech. It's a versatile and efficient choice for urban and suburban driving.",
      "rating": 4.7
    },
    {
      "id": 5,
      "image": "roadster.jpg",
      "name": "Roadster",
      "brandName": "Tesla",
      "type": "Electric Sports Car",
      "price": 200000,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "Tesla's electric sports car with breathtaking acceleration and top speed.",
      "longDescription": "The Tesla Roadster is an electric sports car designed for performance enthusiasts. It boasts breathtaking acceleration, a top speed of over 250 mph, and an incredible all-electric range.",
      "rating": 4.9
    },
    {
      "id": 6,
      "image": "cybertruck.jpg",
      "name": "Cybertruck",
      "brandName": "Tesla",
      "type": "Electric Pickup Truck",
      "price": 39999,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "A rugged and futuristic electric pickup truck with impressive capabilities.",
      "longDescription": "The Tesla Cybertruck is a rugged and futuristic electric pickup truck. It offers impressive capabilities, including off-road prowess, towing capacity, and a unique design that's both tough and efficient.",
      "rating": 4.8
    }
  ]
}
,
{
  "brand": "BMW",
  "models": [
    {
      "id": 1,
      "image": "bmw-3-series.jpg",
      "name": "3 Series",
      "brandName": "BMW",
      "type": "Sedan",
      "price": 40000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A luxury sedan with a perfect blend of performance and style.",
      "longDescription": "The BMW 3 Series is a luxury sedan that combines outstanding performance and style. It's known for its responsive handling, powerful engine options, and a comfortable interior with advanced technology.",
      "rating": 4.7
    },
    {
      "id": 2,
      "image": "bmw-5-series.jpg",
      "name": "5 Series",
      "brandName": "BMW",
      "type": "Sedan",
      "price": 55000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "An executive sedan with a focus on comfort and advanced tech.",
      "longDescription": "The BMW 5 Series is an executive sedan that emphasizes comfort and advanced technology. It offers a refined ride, premium materials, and a suite of tech features for a top-notch driving experience.",
      "rating": 4.6
    },
    {
      "id": 3,
      "image": "bmw-x3.jpg",
      "name": "X3",
      "brandName": "BMW",
      "type": "SUV",
      "price": 48000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A compact luxury SUV with a sporty character and premium features.",
      "longDescription": "The BMW X3 is a compact luxury SUV with a sporty character. It features a well-crafted interior, strong engine choices, and a perfect blend of performance and utility.",
      "rating": 4.8
    },
    {
      "id": 4,
      "image": "bmw-x5.jpg",
      "name": "X5",
      "brandName": "BMW",
      "type": "SUV",
      "price": 60000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "3.0 L",
      "cylinder": 6,
      "shortDescription": "A midsize luxury SUV with a spacious and elegant interior.",
      "longDescription": "The BMW X5 is a midsize luxury SUV that combines spaciousness with an elegant interior. It offers impressive driving dynamics and a wide range of advanced features for an exceptional driving experience.",
      "rating": 4.7
    },
    {
      "id": 5,
      "image": "bmw-m4.jpg",
      "name": "M4",
      "brandName": "BMW",
      "type": "Sports Car",
      "price": 72000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "3.0 L",
      "cylinder": 6,
      "shortDescription": "A high-performance sports car with thrilling acceleration and agility.",
      "longDescription": "The BMW M4 is a high-performance sports car with thrilling acceleration and agility. It's designed for driving enthusiasts seeking a powerful and dynamic driving experience.",
      "rating": 4.9
    },
    {
      "id": 6,
      "image": "bmw-i3.jpg",
      "name": "i3",
      "brandName": "BMW",
      "type": "Electric Car",
      "price": 45000,
      "color": "Various",
      "fuelType": "Electric",
      "year": 2023,
      "engineSize": "Electric",
      "cylinder": "N/A",
      "shortDescription": "An innovative electric car with a unique design and sustainable features.",
      "longDescription": "The BMW i3 is an innovative electric car with a unique design and sustainable features. It's an eco-friendly option with advanced technology and a focus on sustainability.",
      "rating": 4.5
    }
  ]
}
,
{
  "brand": "Ford",
  "models": [
    {
      "id": 1,
      "image": "ford-f150.jpg",
      "name": "F-150",
      "brandName": "Ford",
      "type": "Truck",
      "price": 35000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "3.5 L",
      "cylinder": 6,
      "shortDescription": "America's best-selling pickup truck with exceptional capability.",
      "longDescription": "The Ford F-150 is America's best-selling pickup truck, known for its exceptional capability and versatility. It offers a range of powerful engines, advanced towing features, and a comfortable interior.",
      "rating": 4.8
    },
    {
      "id": 2,
      "image": "ford-focus.jpg",
      "name": "Focus",
      "brandName": "Ford",
      "type": "Sedan",
      "price": 20000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A compact sedan with a balance of performance and efficiency.",
      "longDescription": "The Ford Focus is a compact sedan with a balance of performance and efficiency. It's ideal for urban driving and offers a comfortable ride, making it a practical choice for daily commuting.",
      "rating": 4.6
    },
    {
      "id": 3,
      "image": "ford-escape.jpg",
      "name": "Escape",
      "brandName": "Ford",
      "type": "SUV",
      "price": 25000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.5 L",
      "cylinder": 3,
      "shortDescription": "A compact SUV with a spacious interior and advanced tech.",
      "longDescription": "The Ford Escape is a compact SUV with a spacious interior and advanced technology. It's designed for those seeking comfort, versatility, and a range of safety features.",
      "rating": 4.7
    },
    {
      "id": 4,
      "image": "ford-explorer.jpg",
      "name": "Explorer",
      "brandName": "Ford",
      "type": "SUV",
      "price": 30000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.3 L",
      "cylinder": 4,
      "shortDescription": "A midsize SUV with three-row seating and family-friendly features.",
      "longDescription": "The Ford Explorer is a midsize SUV with three-row seating and family-friendly features. It offers ample cargo space, advanced technology, and a comfortable ride for family adventures.",
      "rating": 4.7
    },
    {
      "id": 5,
      "image": "ford-mustang.jpg",
      "name": "Mustang",
      "brandName": "Ford",
      "type": "Sports Car",
      "price": 45000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "5.0 L",
      "cylinder": 8,
      "shortDescription": "An iconic American sports car with thrilling performance and style.",
      "longDescription": "The Ford Mustang is an iconic American sports car known for its thrilling performance and classic style. It offers a range of powerful engines and a bold design that appeals to performance enthusiasts.",
      "rating": 4.9
    },
    {
      "id": 6,
      "image": "ford-edge.jpg",
      "name": "Edge",
      "brandName": "Ford",
      "type": "SUV",
      "price": 28000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A midsize SUV with a comfortable interior and advanced safety features.",
      "longDescription": "The Ford Edge is a midsize SUV with a comfortable interior and advanced safety features. It's designed for families seeking a reliable and safe vehicle for daily use.",
      "rating": 4.6
    }
  ]
}
,
{
  "name": "Volkswagen",
  "models": [
    {
      "id": 1,
      "image": "volkswagen-jetta.jpg",
      "name": "Jetta",
      "brandName": "Volkswagen",
      "type": "Sedan",
      "price": 23000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.4 L",
      "cylinder": 4,
      "shortDescription": "A compact sedan with German engineering and style.",
      "longDescription": "The Volkswagen Jetta is a compact sedan with German engineering and style. It offers a comfortable ride, precise handling, and a refined interior, making it an excellent choice for those seeking a blend of performance and elegance.",
      "rating": 4.6
    },
    {
      "id": 2,
      "image": "volkswagen-passat.jpg",
      "name": "Passat",
      "brandName": "Volkswagen",
      "type": "Sedan",
      "price": 27000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A midsize sedan with a spacious and comfortable interior.",
      "longDescription": "The Volkswagen Passat is a midsize sedan with a spacious and comfortable interior. It's known for its roomy back seat, smooth ride, and a range of advanced features that enhance the driving experience.",
      "rating": 4.7
    },
    {
      "id": 3,
      "image": "volkswagen-golf.jpg",
      "name": "Golf",
      "brandName": "Volkswagen",
      "type": "Hatchback",
      "price": 22000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.4 L",
      "cylinder": 4,
      "shortDescription": "A versatile and fun-to-drive hatchback with a strong following.",
      "longDescription": "The Volkswagen Golf is a versatile and fun-to-drive hatchback with a strong following. It's appreciated for its peppy engine options, practical design, and a smooth ride that appeals to both enthusiasts and everyday drivers.",
      "rating": 4.6
    },
    {
      "id": 4,
      "image": "volkswagen-tiguan.jpg",
      "name": "Tiguan",
      "brandName": "Volkswagen",
      "type": "SUV",
      "price": 26000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "1.4 L",
      "cylinder": 4,
      "shortDescription": "A compact SUV with a spacious interior and a comfortable ride.",
      "longDescription": "The Volkswagen Tiguan is a compact SUV with a spacious interior and a comfortable ride. It's designed for families seeking a reliable and versatile vehicle with ample cargo space and safety features.",
      "rating": 4.8
    },
    {
      "id": 5,
      "image": "volkswagen-beetle.jpg",
      "name": "Beetle",
      "brandName": "Volkswagen",
      "type": "Compact Car",
      "price": 19000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A classic and iconic compact car with a nostalgic charm.",
      "longDescription": "The Volkswagen Beetle is a classic and iconic compact car with a nostalgic charm. It's known for its distinctive design and a fun driving experience that appeals to those seeking a touch of nostalgia.",
      "rating": 4.4
    },
    {
      "id": 6,
      "image": "volkswagen-atlas.jpg",
      "name": "Atlas",
      "brandName": "Volkswagen",
      "type": "SUV",
      "price": 29000,
      "color": "Various",
      "fuelType": "Gasoline",
      "year": 2023,
      "engineSize": "2.0 L",
      "cylinder": 4,
      "shortDescription": "A midsize SUV with a spacious and family-friendly interior.",
      "longDescription": "The Volkswagen Atlas is a midsize SUV with a spacious and family-friendly interior. It offers three rows of seating, ample cargo space, and a comfortable ride, making it an excellent choice for family adventures.",
      "rating": 4.7
    }
  ]
}

  ]

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const brandsCollections = client.db('brandsDB').collection('brands')
    const cartCollections = client.db('brandsDB').collection('cart')
    // brandsCollections.insertMany(docs)



    app.get('/brands',async(req,res)=>{
      const cursor = brandsCollections.find()
      const result = await cursor.toArray()
      res.send(result)
    })
    app.get('/brands/:name',async(req,res)=>{
      const name = req.params.name
      console.log(name);
      const query = {
    "models.name": name
  };
      const result = await brandsCollections.findOne(query)
      res.send(result)
    })

    app.get('/cart',async(req,res)=>{
      const cursor = cartCollections.find()
      const result = await cursor.toArray()
      res.send(result)
    })


        app.post('/cart',async(req,res)=>{
      const car = req.body
      const options = {ordered:true}
      const result = await cartCollections.insertOne(car,options)
      res.send(result)
    })

    app.delete('/cart/:id',async(req,res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await cartCollections.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send("AutoVarsa server is Running")
})

app.listen(port,()=>{
    console.log(`AutoVarsa server running on port:${port}`);
})