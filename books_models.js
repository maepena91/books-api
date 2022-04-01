// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

const booksSchema = new schema(
    {
        "id": 1,
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": "10",
        "imageURL": "/assets/shinobi-initiative.jpeg"
      }
    )
    comments, [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    
    
    module.exports = mongoose.model("books", bookSchema);