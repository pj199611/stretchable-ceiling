import mongoose, { CallbackError, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import IUser from '../interfaces/Iuser';

const UserSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    userName: {
      type: String,
      required: false,
    },
    phoneNumber:{
      type:Number,
      required:false
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'architect'],
      default: 'user',
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        length: {
          type: Number,
          default: 1,
          required: false
        },
        width: {
          type: Number,
          default: 1,
        },
        name: {
          type: String,
          required: true,
        },
        imgUrl: {
          type: String,
          required: true,
        },

      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password; // Exclude password field
        return ret;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.password; // Exclude password field
        return ret;
      },
    },
  }
);

UserSchema.pre('save', async function (next) {
  const user = this as unknown as IUser;

  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error as unknown as CallbackError);
  }
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate() as Record<string, any>;

  if (update && update.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      update.password = await bcrypt.hash(update.password, salt);
      this.setUpdate(update);
    } catch (error) {
      return next(error as unknown as CallbackError);
    }
  }
  next();
});

UserSchema.methods.isPasswordValid = async function (
  password: string
): Promise<boolean> {
  const user = this as IUser;
  return await bcrypt.compare(password, user.password);
};

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
