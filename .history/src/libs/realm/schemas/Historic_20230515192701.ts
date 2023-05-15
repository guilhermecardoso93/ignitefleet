import { Realm } from "@realm/react";

type GenerateProps = {
  user_id: string;
  description: string;
  license_plate: string;
}

export class Historic extends Realm.Object<Historic> {
  _id!: string;
  user_id!: string;
  license_plate!: string;
  description!: string
  status!: string;
  created_at!: string;
  updated_at!: string;
  
  static generate({ }) {
    return {

    }
  }

  static schema = {
    name: "Historic",
    primaryKey: "_id",

    properties: {
      _id: "uuid",
      user_id: {
        type: "string",
        indexed: true,
      },
      license_plate: "string",
      description: "string",
      status: "string",
      created_at: "date",
      updated_at: "date",
    },
  };
}
