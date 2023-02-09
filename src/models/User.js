//스키마 만들기
//1. 몽구스 import
//2. const schema = new mongoose.Schema({})
//(2-1) User 이므로 email 과 type, required , validation 등 속성을 정해준다.
//3. modelName = mongoose.model("model",schemafuncion)
//4. export default modelName;
//5. init.js 에서 modelName 을 import 하기
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});
//this는 create 되는 User 를 가리킨다.

const User = mongoose.model("User", userSchema);
export default User;
