import mongoose from'mongoose';

const NoteSchema = new mongoose.Schema({
    itemType: {
        type: 'String',
        require: true,
        min: 2,
        max: 255,
    },
    creator: {
        type: 'String',
        require: true,
        min: 6,
        max: 255,
    },
    title: {
        type: 'String',
        require: true,
        min: 6,
        max: 255,
    },
    body: {
        type: 'String',
        require: false,
    }
    
})

export default mongoose.model('Note', NoteSchema)