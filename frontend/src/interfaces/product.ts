export interface IProduct{
    _id?: number | string,
    name: string,
    category?: string,
    gallery?:string[],
    price: number,
    image: string,
    description: string,
    discount: number,
    featured: boolean,
    countInStock: number,
    quantity: number
}

// name: {
//     type: String,
//     require: true,
//     lowercase: true,
// },
// slug: {
//     type: String,
//     unique: true,
// },
// category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category",
//     require: true,
// },
// price: {
//     type: Number,
//     require: true,
//     default: 0,

// },
// image: {
//     type: String
// },
// gallery: {
//     type: Array,
// },
// description: {
//     type: String,
// },
// discount: {
//     type: Number,
//     default: 0,
// },
// countInStock: {
//     type: Number,
//     default: 0,
// },
// featured: {
//     type: Boolean,
//     default: false
// },
// tags: {
//     type: Array,
// },