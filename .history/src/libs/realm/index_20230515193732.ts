import { createRealmContext } from "@realm/react";


export const {
  RealmProvider,
  useRealm,
  useQuery,
  useObject
}  = createRealmContext()