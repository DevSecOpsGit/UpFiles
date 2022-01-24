const mongoose = require('mongoose');


const path = require('path');



const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PostSchema.pre('save', function(){
    if(!this.url){
        this.url = `${process.env.APP_URL}/files/${this.key}`;

    }

});

PostSchema.pre("remove", function() {
    if (process.env.STORAGE_TYPE === "s3") {
      return s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: this.key
        })
        .promise()
        .then(response => {
          console.log(response.status);
        })
        .catch(response => {
          console.log(response.status);
        });
    } else {
      return promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
      );
    }
  });
  
  module.exports = mongoose.model("Post", PostSchema);