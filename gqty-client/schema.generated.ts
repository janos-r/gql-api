/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { type ScalarsEnumsHash } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Any: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any };
  File: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
  /** Custom scalar that handles both integers and floats */
  Number: { input: number; output: number };
  /** Represents NULL values */
  Void: { input: any; output: any };
}

export interface CreateTicketInput {
  age: Scalars["Number"]["input"];
  name: Scalars["String"]["input"];
}

export interface PartialInput {
  age?: InputMaybe<Scalars["Number"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Any: true,
  Boolean: true,
  DateTimeISO: true,
  File: true,
  Float: true,
  Int: true,
  JSON: true,
  JSONObject: true,
  Number: true,
  String: true,
  Void: true,
};
export const generatedSchema = {
  CreateTicketInput: {
    age: { __type: "Number!" },
    name: { __type: "String!" },
  },
  EchoObj: {
    __typename: { __type: "String!" },
    address: { __type: "String!" },
    age: { __type: "Int!" },
    birth: { __type: "DateTimeISO!" },
    height: { __type: "Float!" },
    name: { __type: "String!" },
  },
  PartialInput: {
    age: { __type: "Number" },
    id: { __type: "Number" },
    name: { __type: "String" },
  },
  Ticket: {
    __typename: { __type: "String!" },
    age: { __type: "Number!" },
    id: { __type: "Number!" },
    name: { __type: "String!" },
  },
  Tickets: {
    __typename: { __type: "String!" },
    findAll: { __type: "[Ticket]!" },
    findById: { __type: "Ticket", __args: { id: "Number!" } },
  },
  Tickets_1: {
    __typename: { __type: "String!" },
    addOne: { __type: "Boolean!", __args: { ticket: "CreateTicketInput!" } },
    delete: { __type: "Boolean!", __args: { id: "Number!" } },
    updateOne: {
      __type: "Boolean",
      __args: { id: "Number!", update: "PartialInput!" },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    tickets: { __type: "Tickets_1!" },
  },
  query: {
    __typename: { __type: "String!" },
    echoArr: { __type: "[String!]!", __args: { arr: "[String!]!" } },
    echoArrEmpty: { __type: "[String]!", __args: { arr: "[String]!" } },
    echoObj: {
      __type: "EchoObj!",
      __args: { d: "DateTimeISO!", f: "Float!", i: "Int!" },
    },
    hello: { __type: "String!" },
    tickets: { __type: "Tickets!" },
  },
  subscription: {},
} as const;

export interface EchoObj {
  __typename?: "EchoObj";
  address: ScalarsEnums["String"];
  age: ScalarsEnums["Int"];
  birth: ScalarsEnums["DateTimeISO"];
  height: ScalarsEnums["Float"];
  name: ScalarsEnums["String"];
}

export interface Ticket {
  __typename?: "Ticket";
  age: ScalarsEnums["Number"];
  id: ScalarsEnums["Number"];
  name: ScalarsEnums["String"];
}

export interface Tickets {
  __typename?: "Tickets";
  findAll: Array<Maybe<Ticket>>;
  findById: (args: { id: ScalarsEnums["Number"] }) => Maybe<Ticket>;
}

export interface Tickets_1 {
  __typename?: "Tickets_1";
  addOne: (args: { ticket: CreateTicketInput }) => ScalarsEnums["Boolean"];
  delete: (args: { id: ScalarsEnums["Number"] }) => ScalarsEnums["Boolean"];
  updateOne: (args: {
    id: ScalarsEnums["Number"];
    update: PartialInput;
  }) => Maybe<ScalarsEnums["Boolean"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  tickets: Tickets_1;
}

export interface Query {
  __typename?: "Query";
  echoArr: (args: {
    arr: Array<ScalarsEnums["String"]>;
  }) => Array<ScalarsEnums["String"]>;
  echoArrEmpty: (args: {
    arr: Array<Maybe<ScalarsEnums["String"]>>;
  }) => Array<Maybe<ScalarsEnums["String"]>>;
  echoObj: (args: {
    d: ScalarsEnums["DateTimeISO"];
    f: ScalarsEnums["Float"];
    i: ScalarsEnums["Int"];
  }) => EchoObj;
  hello: ScalarsEnums["String"];
  tickets: Tickets;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type ScalarsEnums = {
  [Key in keyof Scalars]: Scalars[Key] extends { output: unknown }
    ? Scalars[Key]["output"]
    : never;
} & {};
