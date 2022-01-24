const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const storage


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination:(req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename:(req, file, cb) => {
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),
    limits:{
        fileSize: 500 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'application/zip',
            'application/pdf',
            'application/x-rar-compressed'
        ];
        if (allowedMimes.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(new Error('Invalid file type'));
        }
    },
};