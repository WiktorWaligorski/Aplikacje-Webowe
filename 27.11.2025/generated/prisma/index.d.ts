
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Wpis
 * 
 */
export type Wpis = $Result.DefaultSelection<Prisma.$WpisPayload>
/**
 * Model Kategoria
 * 
 */
export type Kategoria = $Result.DefaultSelection<Prisma.$KategoriaPayload>
/**
 * Model Komentarz
 * 
 */
export type Komentarz = $Result.DefaultSelection<Prisma.$KomentarzPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wpis
 * const wpis = await prisma.wpis.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Wpis
   * const wpis = await prisma.wpis.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.wpis`: Exposes CRUD operations for the **Wpis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wpis
    * const wpis = await prisma.wpis.findMany()
    * ```
    */
  get wpis(): Prisma.WpisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategoria`: Exposes CRUD operations for the **Kategoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategorias
    * const kategorias = await prisma.kategoria.findMany()
    * ```
    */
  get kategoria(): Prisma.KategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.komentarz`: Exposes CRUD operations for the **Komentarz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Komentarzs
    * const komentarzs = await prisma.komentarz.findMany()
    * ```
    */
  get komentarz(): Prisma.KomentarzDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Wpis: 'Wpis',
    Kategoria: 'Kategoria',
    Komentarz: 'Komentarz'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "wpis" | "kategoria" | "komentarz"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wpis: {
        payload: Prisma.$WpisPayload<ExtArgs>
        fields: Prisma.WpisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WpisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WpisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>
          }
          findFirst: {
            args: Prisma.WpisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WpisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>
          }
          findMany: {
            args: Prisma.WpisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>[]
          }
          create: {
            args: Prisma.WpisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>
          }
          createMany: {
            args: Prisma.WpisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WpisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>
          }
          update: {
            args: Prisma.WpisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>
          }
          deleteMany: {
            args: Prisma.WpisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WpisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WpisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WpisPayload>
          }
          aggregate: {
            args: Prisma.WpisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWpis>
          }
          groupBy: {
            args: Prisma.WpisGroupByArgs<ExtArgs>
            result: $Utils.Optional<WpisGroupByOutputType>[]
          }
          count: {
            args: Prisma.WpisCountArgs<ExtArgs>
            result: $Utils.Optional<WpisCountAggregateOutputType> | number
          }
        }
      }
      Kategoria: {
        payload: Prisma.$KategoriaPayload<ExtArgs>
        fields: Prisma.KategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>
          }
          findFirst: {
            args: Prisma.KategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>
          }
          findMany: {
            args: Prisma.KategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>[]
          }
          create: {
            args: Prisma.KategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>
          }
          createMany: {
            args: Prisma.KategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>
          }
          update: {
            args: Prisma.KategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>
          }
          deleteMany: {
            args: Prisma.KategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriaPayload>
          }
          aggregate: {
            args: Prisma.KategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategoria>
          }
          groupBy: {
            args: Prisma.KategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriaCountAggregateOutputType> | number
          }
        }
      }
      Komentarz: {
        payload: Prisma.$KomentarzPayload<ExtArgs>
        fields: Prisma.KomentarzFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KomentarzFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KomentarzFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>
          }
          findFirst: {
            args: Prisma.KomentarzFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KomentarzFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>
          }
          findMany: {
            args: Prisma.KomentarzFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>[]
          }
          create: {
            args: Prisma.KomentarzCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>
          }
          createMany: {
            args: Prisma.KomentarzCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KomentarzDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>
          }
          update: {
            args: Prisma.KomentarzUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>
          }
          deleteMany: {
            args: Prisma.KomentarzDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KomentarzUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KomentarzUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomentarzPayload>
          }
          aggregate: {
            args: Prisma.KomentarzAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKomentarz>
          }
          groupBy: {
            args: Prisma.KomentarzGroupByArgs<ExtArgs>
            result: $Utils.Optional<KomentarzGroupByOutputType>[]
          }
          count: {
            args: Prisma.KomentarzCountArgs<ExtArgs>
            result: $Utils.Optional<KomentarzCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    wpis?: WpisOmit
    kategoria?: KategoriaOmit
    komentarz?: KomentarzOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WpisCountOutputType
   */

  export type WpisCountOutputType = {
    komentarz: number
  }

  export type WpisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    komentarz?: boolean | WpisCountOutputTypeCountKomentarzArgs
  }

  // Custom InputTypes
  /**
   * WpisCountOutputType without action
   */
  export type WpisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WpisCountOutputType
     */
    select?: WpisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WpisCountOutputType without action
   */
  export type WpisCountOutputTypeCountKomentarzArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomentarzWhereInput
  }


  /**
   * Count Type KategoriaCountOutputType
   */

  export type KategoriaCountOutputType = {
    wpis: number
  }

  export type KategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wpis?: boolean | KategoriaCountOutputTypeCountWpisArgs
  }

  // Custom InputTypes
  /**
   * KategoriaCountOutputType without action
   */
  export type KategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriaCountOutputType
     */
    select?: KategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriaCountOutputType without action
   */
  export type KategoriaCountOutputTypeCountWpisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WpisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Wpis
   */

  export type AggregateWpis = {
    _count: WpisCountAggregateOutputType | null
    _avg: WpisAvgAggregateOutputType | null
    _sum: WpisSumAggregateOutputType | null
    _min: WpisMinAggregateOutputType | null
    _max: WpisMaxAggregateOutputType | null
  }

  export type WpisAvgAggregateOutputType = {
    id: number | null
    id_kategorii: number | null
  }

  export type WpisSumAggregateOutputType = {
    id: number | null
    id_kategorii: number | null
  }

  export type WpisMinAggregateOutputType = {
    id: number | null
    id_kategorii: number | null
    uzytkownik: string | null
    zawartosc: string | null
    data_wpisu: Date | null
  }

  export type WpisMaxAggregateOutputType = {
    id: number | null
    id_kategorii: number | null
    uzytkownik: string | null
    zawartosc: string | null
    data_wpisu: Date | null
  }

  export type WpisCountAggregateOutputType = {
    id: number
    id_kategorii: number
    uzytkownik: number
    zawartosc: number
    data_wpisu: number
    _all: number
  }


  export type WpisAvgAggregateInputType = {
    id?: true
    id_kategorii?: true
  }

  export type WpisSumAggregateInputType = {
    id?: true
    id_kategorii?: true
  }

  export type WpisMinAggregateInputType = {
    id?: true
    id_kategorii?: true
    uzytkownik?: true
    zawartosc?: true
    data_wpisu?: true
  }

  export type WpisMaxAggregateInputType = {
    id?: true
    id_kategorii?: true
    uzytkownik?: true
    zawartosc?: true
    data_wpisu?: true
  }

  export type WpisCountAggregateInputType = {
    id?: true
    id_kategorii?: true
    uzytkownik?: true
    zawartosc?: true
    data_wpisu?: true
    _all?: true
  }

  export type WpisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wpis to aggregate.
     */
    where?: WpisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wpis to fetch.
     */
    orderBy?: WpisOrderByWithRelationInput | WpisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WpisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wpis
    **/
    _count?: true | WpisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WpisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WpisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WpisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WpisMaxAggregateInputType
  }

  export type GetWpisAggregateType<T extends WpisAggregateArgs> = {
        [P in keyof T & keyof AggregateWpis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWpis[P]>
      : GetScalarType<T[P], AggregateWpis[P]>
  }




  export type WpisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WpisWhereInput
    orderBy?: WpisOrderByWithAggregationInput | WpisOrderByWithAggregationInput[]
    by: WpisScalarFieldEnum[] | WpisScalarFieldEnum
    having?: WpisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WpisCountAggregateInputType | true
    _avg?: WpisAvgAggregateInputType
    _sum?: WpisSumAggregateInputType
    _min?: WpisMinAggregateInputType
    _max?: WpisMaxAggregateInputType
  }

  export type WpisGroupByOutputType = {
    id: number
    id_kategorii: number
    uzytkownik: string
    zawartosc: string | null
    data_wpisu: Date
    _count: WpisCountAggregateOutputType | null
    _avg: WpisAvgAggregateOutputType | null
    _sum: WpisSumAggregateOutputType | null
    _min: WpisMinAggregateOutputType | null
    _max: WpisMaxAggregateOutputType | null
  }

  type GetWpisGroupByPayload<T extends WpisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WpisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WpisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WpisGroupByOutputType[P]>
            : GetScalarType<T[P], WpisGroupByOutputType[P]>
        }
      >
    >


  export type WpisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_kategorii?: boolean
    uzytkownik?: boolean
    zawartosc?: boolean
    data_wpisu?: boolean
    kategoria?: boolean | KategoriaDefaultArgs<ExtArgs>
    komentarz?: boolean | Wpis$komentarzArgs<ExtArgs>
    _count?: boolean | WpisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wpis"]>



  export type WpisSelectScalar = {
    id?: boolean
    id_kategorii?: boolean
    uzytkownik?: boolean
    zawartosc?: boolean
    data_wpisu?: boolean
  }

  export type WpisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_kategorii" | "uzytkownik" | "zawartosc" | "data_wpisu", ExtArgs["result"]["wpis"]>
  export type WpisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategoria?: boolean | KategoriaDefaultArgs<ExtArgs>
    komentarz?: boolean | Wpis$komentarzArgs<ExtArgs>
    _count?: boolean | WpisCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WpisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wpis"
    objects: {
      kategoria: Prisma.$KategoriaPayload<ExtArgs>
      komentarz: Prisma.$KomentarzPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_kategorii: number
      uzytkownik: string
      zawartosc: string | null
      data_wpisu: Date
    }, ExtArgs["result"]["wpis"]>
    composites: {}
  }

  type WpisGetPayload<S extends boolean | null | undefined | WpisDefaultArgs> = $Result.GetResult<Prisma.$WpisPayload, S>

  type WpisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WpisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WpisCountAggregateInputType | true
    }

  export interface WpisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wpis'], meta: { name: 'Wpis' } }
    /**
     * Find zero or one Wpis that matches the filter.
     * @param {WpisFindUniqueArgs} args - Arguments to find a Wpis
     * @example
     * // Get one Wpis
     * const wpis = await prisma.wpis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WpisFindUniqueArgs>(args: SelectSubset<T, WpisFindUniqueArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wpis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WpisFindUniqueOrThrowArgs} args - Arguments to find a Wpis
     * @example
     * // Get one Wpis
     * const wpis = await prisma.wpis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WpisFindUniqueOrThrowArgs>(args: SelectSubset<T, WpisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wpis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisFindFirstArgs} args - Arguments to find a Wpis
     * @example
     * // Get one Wpis
     * const wpis = await prisma.wpis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WpisFindFirstArgs>(args?: SelectSubset<T, WpisFindFirstArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wpis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisFindFirstOrThrowArgs} args - Arguments to find a Wpis
     * @example
     * // Get one Wpis
     * const wpis = await prisma.wpis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WpisFindFirstOrThrowArgs>(args?: SelectSubset<T, WpisFindFirstOrThrowArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wpis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wpis
     * const wpis = await prisma.wpis.findMany()
     * 
     * // Get first 10 Wpis
     * const wpis = await prisma.wpis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wpisWithIdOnly = await prisma.wpis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WpisFindManyArgs>(args?: SelectSubset<T, WpisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wpis.
     * @param {WpisCreateArgs} args - Arguments to create a Wpis.
     * @example
     * // Create one Wpis
     * const Wpis = await prisma.wpis.create({
     *   data: {
     *     // ... data to create a Wpis
     *   }
     * })
     * 
     */
    create<T extends WpisCreateArgs>(args: SelectSubset<T, WpisCreateArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wpis.
     * @param {WpisCreateManyArgs} args - Arguments to create many Wpis.
     * @example
     * // Create many Wpis
     * const wpis = await prisma.wpis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WpisCreateManyArgs>(args?: SelectSubset<T, WpisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wpis.
     * @param {WpisDeleteArgs} args - Arguments to delete one Wpis.
     * @example
     * // Delete one Wpis
     * const Wpis = await prisma.wpis.delete({
     *   where: {
     *     // ... filter to delete one Wpis
     *   }
     * })
     * 
     */
    delete<T extends WpisDeleteArgs>(args: SelectSubset<T, WpisDeleteArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wpis.
     * @param {WpisUpdateArgs} args - Arguments to update one Wpis.
     * @example
     * // Update one Wpis
     * const wpis = await prisma.wpis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WpisUpdateArgs>(args: SelectSubset<T, WpisUpdateArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wpis.
     * @param {WpisDeleteManyArgs} args - Arguments to filter Wpis to delete.
     * @example
     * // Delete a few Wpis
     * const { count } = await prisma.wpis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WpisDeleteManyArgs>(args?: SelectSubset<T, WpisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wpis
     * const wpis = await prisma.wpis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WpisUpdateManyArgs>(args: SelectSubset<T, WpisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wpis.
     * @param {WpisUpsertArgs} args - Arguments to update or create a Wpis.
     * @example
     * // Update or create a Wpis
     * const wpis = await prisma.wpis.upsert({
     *   create: {
     *     // ... data to create a Wpis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wpis we want to update
     *   }
     * })
     */
    upsert<T extends WpisUpsertArgs>(args: SelectSubset<T, WpisUpsertArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisCountArgs} args - Arguments to filter Wpis to count.
     * @example
     * // Count the number of Wpis
     * const count = await prisma.wpis.count({
     *   where: {
     *     // ... the filter for the Wpis we want to count
     *   }
     * })
    **/
    count<T extends WpisCountArgs>(
      args?: Subset<T, WpisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WpisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WpisAggregateArgs>(args: Subset<T, WpisAggregateArgs>): Prisma.PrismaPromise<GetWpisAggregateType<T>>

    /**
     * Group by Wpis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WpisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WpisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WpisGroupByArgs['orderBy'] }
        : { orderBy?: WpisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WpisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWpisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wpis model
   */
  readonly fields: WpisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wpis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WpisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategoria<T extends KategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriaDefaultArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    komentarz<T extends Wpis$komentarzArgs<ExtArgs> = {}>(args?: Subset<T, Wpis$komentarzArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wpis model
   */
  interface WpisFieldRefs {
    readonly id: FieldRef<"Wpis", 'Int'>
    readonly id_kategorii: FieldRef<"Wpis", 'Int'>
    readonly uzytkownik: FieldRef<"Wpis", 'String'>
    readonly zawartosc: FieldRef<"Wpis", 'String'>
    readonly data_wpisu: FieldRef<"Wpis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wpis findUnique
   */
  export type WpisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * Filter, which Wpis to fetch.
     */
    where: WpisWhereUniqueInput
  }

  /**
   * Wpis findUniqueOrThrow
   */
  export type WpisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * Filter, which Wpis to fetch.
     */
    where: WpisWhereUniqueInput
  }

  /**
   * Wpis findFirst
   */
  export type WpisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * Filter, which Wpis to fetch.
     */
    where?: WpisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wpis to fetch.
     */
    orderBy?: WpisOrderByWithRelationInput | WpisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wpis.
     */
    cursor?: WpisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wpis.
     */
    distinct?: WpisScalarFieldEnum | WpisScalarFieldEnum[]
  }

  /**
   * Wpis findFirstOrThrow
   */
  export type WpisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * Filter, which Wpis to fetch.
     */
    where?: WpisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wpis to fetch.
     */
    orderBy?: WpisOrderByWithRelationInput | WpisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wpis.
     */
    cursor?: WpisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wpis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wpis.
     */
    distinct?: WpisScalarFieldEnum | WpisScalarFieldEnum[]
  }

  /**
   * Wpis findMany
   */
  export type WpisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * Filter, which Wpis to fetch.
     */
    where?: WpisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wpis to fetch.
     */
    orderBy?: WpisOrderByWithRelationInput | WpisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wpis.
     */
    cursor?: WpisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wpis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wpis.
     */
    skip?: number
    distinct?: WpisScalarFieldEnum | WpisScalarFieldEnum[]
  }

  /**
   * Wpis create
   */
  export type WpisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * The data needed to create a Wpis.
     */
    data: XOR<WpisCreateInput, WpisUncheckedCreateInput>
  }

  /**
   * Wpis createMany
   */
  export type WpisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wpis.
     */
    data: WpisCreateManyInput | WpisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wpis update
   */
  export type WpisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * The data needed to update a Wpis.
     */
    data: XOR<WpisUpdateInput, WpisUncheckedUpdateInput>
    /**
     * Choose, which Wpis to update.
     */
    where: WpisWhereUniqueInput
  }

  /**
   * Wpis updateMany
   */
  export type WpisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wpis.
     */
    data: XOR<WpisUpdateManyMutationInput, WpisUncheckedUpdateManyInput>
    /**
     * Filter which Wpis to update
     */
    where?: WpisWhereInput
    /**
     * Limit how many Wpis to update.
     */
    limit?: number
  }

  /**
   * Wpis upsert
   */
  export type WpisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * The filter to search for the Wpis to update in case it exists.
     */
    where: WpisWhereUniqueInput
    /**
     * In case the Wpis found by the `where` argument doesn't exist, create a new Wpis with this data.
     */
    create: XOR<WpisCreateInput, WpisUncheckedCreateInput>
    /**
     * In case the Wpis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WpisUpdateInput, WpisUncheckedUpdateInput>
  }

  /**
   * Wpis delete
   */
  export type WpisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    /**
     * Filter which Wpis to delete.
     */
    where: WpisWhereUniqueInput
  }

  /**
   * Wpis deleteMany
   */
  export type WpisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wpis to delete
     */
    where?: WpisWhereInput
    /**
     * Limit how many Wpis to delete.
     */
    limit?: number
  }

  /**
   * Wpis.komentarz
   */
  export type Wpis$komentarzArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    where?: KomentarzWhereInput
    orderBy?: KomentarzOrderByWithRelationInput | KomentarzOrderByWithRelationInput[]
    cursor?: KomentarzWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KomentarzScalarFieldEnum | KomentarzScalarFieldEnum[]
  }

  /**
   * Wpis without action
   */
  export type WpisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
  }


  /**
   * Model Kategoria
   */

  export type AggregateKategoria = {
    _count: KategoriaCountAggregateOutputType | null
    _avg: KategoriaAvgAggregateOutputType | null
    _sum: KategoriaSumAggregateOutputType | null
    _min: KategoriaMinAggregateOutputType | null
    _max: KategoriaMaxAggregateOutputType | null
  }

  export type KategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriaMinAggregateOutputType = {
    id: number | null
    kategoria: string | null
  }

  export type KategoriaMaxAggregateOutputType = {
    id: number | null
    kategoria: string | null
  }

  export type KategoriaCountAggregateOutputType = {
    id: number
    kategoria: number
    _all: number
  }


  export type KategoriaAvgAggregateInputType = {
    id?: true
  }

  export type KategoriaSumAggregateInputType = {
    id?: true
  }

  export type KategoriaMinAggregateInputType = {
    id?: true
    kategoria?: true
  }

  export type KategoriaMaxAggregateInputType = {
    id?: true
    kategoria?: true
  }

  export type KategoriaCountAggregateInputType = {
    id?: true
    kategoria?: true
    _all?: true
  }

  export type KategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoria to aggregate.
     */
    where?: KategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategorias to fetch.
     */
    orderBy?: KategoriaOrderByWithRelationInput | KategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategorias
    **/
    _count?: true | KategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriaMaxAggregateInputType
  }

  export type GetKategoriaAggregateType<T extends KategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateKategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategoria[P]>
      : GetScalarType<T[P], AggregateKategoria[P]>
  }




  export type KategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriaWhereInput
    orderBy?: KategoriaOrderByWithAggregationInput | KategoriaOrderByWithAggregationInput[]
    by: KategoriaScalarFieldEnum[] | KategoriaScalarFieldEnum
    having?: KategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriaCountAggregateInputType | true
    _avg?: KategoriaAvgAggregateInputType
    _sum?: KategoriaSumAggregateInputType
    _min?: KategoriaMinAggregateInputType
    _max?: KategoriaMaxAggregateInputType
  }

  export type KategoriaGroupByOutputType = {
    id: number
    kategoria: string
    _count: KategoriaCountAggregateOutputType | null
    _avg: KategoriaAvgAggregateOutputType | null
    _sum: KategoriaSumAggregateOutputType | null
    _min: KategoriaMinAggregateOutputType | null
    _max: KategoriaMaxAggregateOutputType | null
  }

  type GetKategoriaGroupByPayload<T extends KategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriaGroupByOutputType[P]>
        }
      >
    >


  export type KategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoria?: boolean
    wpis?: boolean | Kategoria$wpisArgs<ExtArgs>
    _count?: boolean | KategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategoria"]>



  export type KategoriaSelectScalar = {
    id?: boolean
    kategoria?: boolean
  }

  export type KategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kategoria", ExtArgs["result"]["kategoria"]>
  export type KategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wpis?: boolean | Kategoria$wpisArgs<ExtArgs>
    _count?: boolean | KategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategoria"
    objects: {
      wpis: Prisma.$WpisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kategoria: string
    }, ExtArgs["result"]["kategoria"]>
    composites: {}
  }

  type KategoriaGetPayload<S extends boolean | null | undefined | KategoriaDefaultArgs> = $Result.GetResult<Prisma.$KategoriaPayload, S>

  type KategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriaCountAggregateInputType | true
    }

  export interface KategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategoria'], meta: { name: 'Kategoria' } }
    /**
     * Find zero or one Kategoria that matches the filter.
     * @param {KategoriaFindUniqueArgs} args - Arguments to find a Kategoria
     * @example
     * // Get one Kategoria
     * const kategoria = await prisma.kategoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriaFindUniqueArgs>(args: SelectSubset<T, KategoriaFindUniqueArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriaFindUniqueOrThrowArgs} args - Arguments to find a Kategoria
     * @example
     * // Get one Kategoria
     * const kategoria = await prisma.kategoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaFindFirstArgs} args - Arguments to find a Kategoria
     * @example
     * // Get one Kategoria
     * const kategoria = await prisma.kategoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriaFindFirstArgs>(args?: SelectSubset<T, KategoriaFindFirstArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaFindFirstOrThrowArgs} args - Arguments to find a Kategoria
     * @example
     * // Get one Kategoria
     * const kategoria = await prisma.kategoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategorias
     * const kategorias = await prisma.kategoria.findMany()
     * 
     * // Get first 10 Kategorias
     * const kategorias = await prisma.kategoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriaWithIdOnly = await prisma.kategoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriaFindManyArgs>(args?: SelectSubset<T, KategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategoria.
     * @param {KategoriaCreateArgs} args - Arguments to create a Kategoria.
     * @example
     * // Create one Kategoria
     * const Kategoria = await prisma.kategoria.create({
     *   data: {
     *     // ... data to create a Kategoria
     *   }
     * })
     * 
     */
    create<T extends KategoriaCreateArgs>(args: SelectSubset<T, KategoriaCreateArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategorias.
     * @param {KategoriaCreateManyArgs} args - Arguments to create many Kategorias.
     * @example
     * // Create many Kategorias
     * const kategoria = await prisma.kategoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriaCreateManyArgs>(args?: SelectSubset<T, KategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kategoria.
     * @param {KategoriaDeleteArgs} args - Arguments to delete one Kategoria.
     * @example
     * // Delete one Kategoria
     * const Kategoria = await prisma.kategoria.delete({
     *   where: {
     *     // ... filter to delete one Kategoria
     *   }
     * })
     * 
     */
    delete<T extends KategoriaDeleteArgs>(args: SelectSubset<T, KategoriaDeleteArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategoria.
     * @param {KategoriaUpdateArgs} args - Arguments to update one Kategoria.
     * @example
     * // Update one Kategoria
     * const kategoria = await prisma.kategoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriaUpdateArgs>(args: SelectSubset<T, KategoriaUpdateArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategorias.
     * @param {KategoriaDeleteManyArgs} args - Arguments to filter Kategorias to delete.
     * @example
     * // Delete a few Kategorias
     * const { count } = await prisma.kategoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriaDeleteManyArgs>(args?: SelectSubset<T, KategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategorias
     * const kategoria = await prisma.kategoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriaUpdateManyArgs>(args: SelectSubset<T, KategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kategoria.
     * @param {KategoriaUpsertArgs} args - Arguments to update or create a Kategoria.
     * @example
     * // Update or create a Kategoria
     * const kategoria = await prisma.kategoria.upsert({
     *   create: {
     *     // ... data to create a Kategoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategoria we want to update
     *   }
     * })
     */
    upsert<T extends KategoriaUpsertArgs>(args: SelectSubset<T, KategoriaUpsertArgs<ExtArgs>>): Prisma__KategoriaClient<$Result.GetResult<Prisma.$KategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaCountArgs} args - Arguments to filter Kategorias to count.
     * @example
     * // Count the number of Kategorias
     * const count = await prisma.kategoria.count({
     *   where: {
     *     // ... the filter for the Kategorias we want to count
     *   }
     * })
    **/
    count<T extends KategoriaCountArgs>(
      args?: Subset<T, KategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriaAggregateArgs>(args: Subset<T, KategoriaAggregateArgs>): Prisma.PrismaPromise<GetKategoriaAggregateType<T>>

    /**
     * Group by Kategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriaGroupByArgs['orderBy'] }
        : { orderBy?: KategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategoria model
   */
  readonly fields: KategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wpis<T extends Kategoria$wpisArgs<ExtArgs> = {}>(args?: Subset<T, Kategoria$wpisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kategoria model
   */
  interface KategoriaFieldRefs {
    readonly id: FieldRef<"Kategoria", 'Int'>
    readonly kategoria: FieldRef<"Kategoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kategoria findUnique
   */
  export type KategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Kategoria to fetch.
     */
    where: KategoriaWhereUniqueInput
  }

  /**
   * Kategoria findUniqueOrThrow
   */
  export type KategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Kategoria to fetch.
     */
    where: KategoriaWhereUniqueInput
  }

  /**
   * Kategoria findFirst
   */
  export type KategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Kategoria to fetch.
     */
    where?: KategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategorias to fetch.
     */
    orderBy?: KategoriaOrderByWithRelationInput | KategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategorias.
     */
    cursor?: KategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategorias.
     */
    distinct?: KategoriaScalarFieldEnum | KategoriaScalarFieldEnum[]
  }

  /**
   * Kategoria findFirstOrThrow
   */
  export type KategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Kategoria to fetch.
     */
    where?: KategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategorias to fetch.
     */
    orderBy?: KategoriaOrderByWithRelationInput | KategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategorias.
     */
    cursor?: KategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategorias.
     */
    distinct?: KategoriaScalarFieldEnum | KategoriaScalarFieldEnum[]
  }

  /**
   * Kategoria findMany
   */
  export type KategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Kategorias to fetch.
     */
    where?: KategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategorias to fetch.
     */
    orderBy?: KategoriaOrderByWithRelationInput | KategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategorias.
     */
    cursor?: KategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategorias.
     */
    skip?: number
    distinct?: KategoriaScalarFieldEnum | KategoriaScalarFieldEnum[]
  }

  /**
   * Kategoria create
   */
  export type KategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategoria.
     */
    data: XOR<KategoriaCreateInput, KategoriaUncheckedCreateInput>
  }

  /**
   * Kategoria createMany
   */
  export type KategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategorias.
     */
    data: KategoriaCreateManyInput | KategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategoria update
   */
  export type KategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategoria.
     */
    data: XOR<KategoriaUpdateInput, KategoriaUncheckedUpdateInput>
    /**
     * Choose, which Kategoria to update.
     */
    where: KategoriaWhereUniqueInput
  }

  /**
   * Kategoria updateMany
   */
  export type KategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategorias.
     */
    data: XOR<KategoriaUpdateManyMutationInput, KategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Kategorias to update
     */
    where?: KategoriaWhereInput
    /**
     * Limit how many Kategorias to update.
     */
    limit?: number
  }

  /**
   * Kategoria upsert
   */
  export type KategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategoria to update in case it exists.
     */
    where: KategoriaWhereUniqueInput
    /**
     * In case the Kategoria found by the `where` argument doesn't exist, create a new Kategoria with this data.
     */
    create: XOR<KategoriaCreateInput, KategoriaUncheckedCreateInput>
    /**
     * In case the Kategoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriaUpdateInput, KategoriaUncheckedUpdateInput>
  }

  /**
   * Kategoria delete
   */
  export type KategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
    /**
     * Filter which Kategoria to delete.
     */
    where: KategoriaWhereUniqueInput
  }

  /**
   * Kategoria deleteMany
   */
  export type KategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategorias to delete
     */
    where?: KategoriaWhereInput
    /**
     * Limit how many Kategorias to delete.
     */
    limit?: number
  }

  /**
   * Kategoria.wpis
   */
  export type Kategoria$wpisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wpis
     */
    select?: WpisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wpis
     */
    omit?: WpisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WpisInclude<ExtArgs> | null
    where?: WpisWhereInput
    orderBy?: WpisOrderByWithRelationInput | WpisOrderByWithRelationInput[]
    cursor?: WpisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WpisScalarFieldEnum | WpisScalarFieldEnum[]
  }

  /**
   * Kategoria without action
   */
  export type KategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategoria
     */
    select?: KategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategoria
     */
    omit?: KategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Komentarz
   */

  export type AggregateKomentarz = {
    _count: KomentarzCountAggregateOutputType | null
    _avg: KomentarzAvgAggregateOutputType | null
    _sum: KomentarzSumAggregateOutputType | null
    _min: KomentarzMinAggregateOutputType | null
    _max: KomentarzMaxAggregateOutputType | null
  }

  export type KomentarzAvgAggregateOutputType = {
    id: number | null
    id_wpisu: number | null
  }

  export type KomentarzSumAggregateOutputType = {
    id: number | null
    id_wpisu: number | null
  }

  export type KomentarzMinAggregateOutputType = {
    id: number | null
    id_wpisu: number | null
    uzytkownik: string | null
    zawartosc: string | null
  }

  export type KomentarzMaxAggregateOutputType = {
    id: number | null
    id_wpisu: number | null
    uzytkownik: string | null
    zawartosc: string | null
  }

  export type KomentarzCountAggregateOutputType = {
    id: number
    id_wpisu: number
    uzytkownik: number
    zawartosc: number
    _all: number
  }


  export type KomentarzAvgAggregateInputType = {
    id?: true
    id_wpisu?: true
  }

  export type KomentarzSumAggregateInputType = {
    id?: true
    id_wpisu?: true
  }

  export type KomentarzMinAggregateInputType = {
    id?: true
    id_wpisu?: true
    uzytkownik?: true
    zawartosc?: true
  }

  export type KomentarzMaxAggregateInputType = {
    id?: true
    id_wpisu?: true
    uzytkownik?: true
    zawartosc?: true
  }

  export type KomentarzCountAggregateInputType = {
    id?: true
    id_wpisu?: true
    uzytkownik?: true
    zawartosc?: true
    _all?: true
  }

  export type KomentarzAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Komentarz to aggregate.
     */
    where?: KomentarzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komentarzs to fetch.
     */
    orderBy?: KomentarzOrderByWithRelationInput | KomentarzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KomentarzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komentarzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komentarzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Komentarzs
    **/
    _count?: true | KomentarzCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KomentarzAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KomentarzSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KomentarzMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KomentarzMaxAggregateInputType
  }

  export type GetKomentarzAggregateType<T extends KomentarzAggregateArgs> = {
        [P in keyof T & keyof AggregateKomentarz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKomentarz[P]>
      : GetScalarType<T[P], AggregateKomentarz[P]>
  }




  export type KomentarzGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomentarzWhereInput
    orderBy?: KomentarzOrderByWithAggregationInput | KomentarzOrderByWithAggregationInput[]
    by: KomentarzScalarFieldEnum[] | KomentarzScalarFieldEnum
    having?: KomentarzScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KomentarzCountAggregateInputType | true
    _avg?: KomentarzAvgAggregateInputType
    _sum?: KomentarzSumAggregateInputType
    _min?: KomentarzMinAggregateInputType
    _max?: KomentarzMaxAggregateInputType
  }

  export type KomentarzGroupByOutputType = {
    id: number
    id_wpisu: number
    uzytkownik: string
    zawartosc: string | null
    _count: KomentarzCountAggregateOutputType | null
    _avg: KomentarzAvgAggregateOutputType | null
    _sum: KomentarzSumAggregateOutputType | null
    _min: KomentarzMinAggregateOutputType | null
    _max: KomentarzMaxAggregateOutputType | null
  }

  type GetKomentarzGroupByPayload<T extends KomentarzGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KomentarzGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KomentarzGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KomentarzGroupByOutputType[P]>
            : GetScalarType<T[P], KomentarzGroupByOutputType[P]>
        }
      >
    >


  export type KomentarzSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_wpisu?: boolean
    uzytkownik?: boolean
    zawartosc?: boolean
    wpis?: boolean | WpisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komentarz"]>



  export type KomentarzSelectScalar = {
    id?: boolean
    id_wpisu?: boolean
    uzytkownik?: boolean
    zawartosc?: boolean
  }

  export type KomentarzOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_wpisu" | "uzytkownik" | "zawartosc", ExtArgs["result"]["komentarz"]>
  export type KomentarzInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wpis?: boolean | WpisDefaultArgs<ExtArgs>
  }

  export type $KomentarzPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Komentarz"
    objects: {
      wpis: Prisma.$WpisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_wpisu: number
      uzytkownik: string
      zawartosc: string | null
    }, ExtArgs["result"]["komentarz"]>
    composites: {}
  }

  type KomentarzGetPayload<S extends boolean | null | undefined | KomentarzDefaultArgs> = $Result.GetResult<Prisma.$KomentarzPayload, S>

  type KomentarzCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KomentarzFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KomentarzCountAggregateInputType | true
    }

  export interface KomentarzDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Komentarz'], meta: { name: 'Komentarz' } }
    /**
     * Find zero or one Komentarz that matches the filter.
     * @param {KomentarzFindUniqueArgs} args - Arguments to find a Komentarz
     * @example
     * // Get one Komentarz
     * const komentarz = await prisma.komentarz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KomentarzFindUniqueArgs>(args: SelectSubset<T, KomentarzFindUniqueArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Komentarz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KomentarzFindUniqueOrThrowArgs} args - Arguments to find a Komentarz
     * @example
     * // Get one Komentarz
     * const komentarz = await prisma.komentarz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KomentarzFindUniqueOrThrowArgs>(args: SelectSubset<T, KomentarzFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Komentarz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzFindFirstArgs} args - Arguments to find a Komentarz
     * @example
     * // Get one Komentarz
     * const komentarz = await prisma.komentarz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KomentarzFindFirstArgs>(args?: SelectSubset<T, KomentarzFindFirstArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Komentarz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzFindFirstOrThrowArgs} args - Arguments to find a Komentarz
     * @example
     * // Get one Komentarz
     * const komentarz = await prisma.komentarz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KomentarzFindFirstOrThrowArgs>(args?: SelectSubset<T, KomentarzFindFirstOrThrowArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Komentarzs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Komentarzs
     * const komentarzs = await prisma.komentarz.findMany()
     * 
     * // Get first 10 Komentarzs
     * const komentarzs = await prisma.komentarz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const komentarzWithIdOnly = await prisma.komentarz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KomentarzFindManyArgs>(args?: SelectSubset<T, KomentarzFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Komentarz.
     * @param {KomentarzCreateArgs} args - Arguments to create a Komentarz.
     * @example
     * // Create one Komentarz
     * const Komentarz = await prisma.komentarz.create({
     *   data: {
     *     // ... data to create a Komentarz
     *   }
     * })
     * 
     */
    create<T extends KomentarzCreateArgs>(args: SelectSubset<T, KomentarzCreateArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Komentarzs.
     * @param {KomentarzCreateManyArgs} args - Arguments to create many Komentarzs.
     * @example
     * // Create many Komentarzs
     * const komentarz = await prisma.komentarz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KomentarzCreateManyArgs>(args?: SelectSubset<T, KomentarzCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Komentarz.
     * @param {KomentarzDeleteArgs} args - Arguments to delete one Komentarz.
     * @example
     * // Delete one Komentarz
     * const Komentarz = await prisma.komentarz.delete({
     *   where: {
     *     // ... filter to delete one Komentarz
     *   }
     * })
     * 
     */
    delete<T extends KomentarzDeleteArgs>(args: SelectSubset<T, KomentarzDeleteArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Komentarz.
     * @param {KomentarzUpdateArgs} args - Arguments to update one Komentarz.
     * @example
     * // Update one Komentarz
     * const komentarz = await prisma.komentarz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KomentarzUpdateArgs>(args: SelectSubset<T, KomentarzUpdateArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Komentarzs.
     * @param {KomentarzDeleteManyArgs} args - Arguments to filter Komentarzs to delete.
     * @example
     * // Delete a few Komentarzs
     * const { count } = await prisma.komentarz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KomentarzDeleteManyArgs>(args?: SelectSubset<T, KomentarzDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Komentarzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Komentarzs
     * const komentarz = await prisma.komentarz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KomentarzUpdateManyArgs>(args: SelectSubset<T, KomentarzUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Komentarz.
     * @param {KomentarzUpsertArgs} args - Arguments to update or create a Komentarz.
     * @example
     * // Update or create a Komentarz
     * const komentarz = await prisma.komentarz.upsert({
     *   create: {
     *     // ... data to create a Komentarz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Komentarz we want to update
     *   }
     * })
     */
    upsert<T extends KomentarzUpsertArgs>(args: SelectSubset<T, KomentarzUpsertArgs<ExtArgs>>): Prisma__KomentarzClient<$Result.GetResult<Prisma.$KomentarzPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Komentarzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzCountArgs} args - Arguments to filter Komentarzs to count.
     * @example
     * // Count the number of Komentarzs
     * const count = await prisma.komentarz.count({
     *   where: {
     *     // ... the filter for the Komentarzs we want to count
     *   }
     * })
    **/
    count<T extends KomentarzCountArgs>(
      args?: Subset<T, KomentarzCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KomentarzCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Komentarz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KomentarzAggregateArgs>(args: Subset<T, KomentarzAggregateArgs>): Prisma.PrismaPromise<GetKomentarzAggregateType<T>>

    /**
     * Group by Komentarz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomentarzGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KomentarzGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KomentarzGroupByArgs['orderBy'] }
        : { orderBy?: KomentarzGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KomentarzGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKomentarzGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Komentarz model
   */
  readonly fields: KomentarzFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Komentarz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KomentarzClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wpis<T extends WpisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WpisDefaultArgs<ExtArgs>>): Prisma__WpisClient<$Result.GetResult<Prisma.$WpisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Komentarz model
   */
  interface KomentarzFieldRefs {
    readonly id: FieldRef<"Komentarz", 'Int'>
    readonly id_wpisu: FieldRef<"Komentarz", 'Int'>
    readonly uzytkownik: FieldRef<"Komentarz", 'String'>
    readonly zawartosc: FieldRef<"Komentarz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Komentarz findUnique
   */
  export type KomentarzFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * Filter, which Komentarz to fetch.
     */
    where: KomentarzWhereUniqueInput
  }

  /**
   * Komentarz findUniqueOrThrow
   */
  export type KomentarzFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * Filter, which Komentarz to fetch.
     */
    where: KomentarzWhereUniqueInput
  }

  /**
   * Komentarz findFirst
   */
  export type KomentarzFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * Filter, which Komentarz to fetch.
     */
    where?: KomentarzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komentarzs to fetch.
     */
    orderBy?: KomentarzOrderByWithRelationInput | KomentarzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Komentarzs.
     */
    cursor?: KomentarzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komentarzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komentarzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Komentarzs.
     */
    distinct?: KomentarzScalarFieldEnum | KomentarzScalarFieldEnum[]
  }

  /**
   * Komentarz findFirstOrThrow
   */
  export type KomentarzFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * Filter, which Komentarz to fetch.
     */
    where?: KomentarzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komentarzs to fetch.
     */
    orderBy?: KomentarzOrderByWithRelationInput | KomentarzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Komentarzs.
     */
    cursor?: KomentarzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komentarzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komentarzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Komentarzs.
     */
    distinct?: KomentarzScalarFieldEnum | KomentarzScalarFieldEnum[]
  }

  /**
   * Komentarz findMany
   */
  export type KomentarzFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * Filter, which Komentarzs to fetch.
     */
    where?: KomentarzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Komentarzs to fetch.
     */
    orderBy?: KomentarzOrderByWithRelationInput | KomentarzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Komentarzs.
     */
    cursor?: KomentarzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Komentarzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Komentarzs.
     */
    skip?: number
    distinct?: KomentarzScalarFieldEnum | KomentarzScalarFieldEnum[]
  }

  /**
   * Komentarz create
   */
  export type KomentarzCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * The data needed to create a Komentarz.
     */
    data: XOR<KomentarzCreateInput, KomentarzUncheckedCreateInput>
  }

  /**
   * Komentarz createMany
   */
  export type KomentarzCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Komentarzs.
     */
    data: KomentarzCreateManyInput | KomentarzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Komentarz update
   */
  export type KomentarzUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * The data needed to update a Komentarz.
     */
    data: XOR<KomentarzUpdateInput, KomentarzUncheckedUpdateInput>
    /**
     * Choose, which Komentarz to update.
     */
    where: KomentarzWhereUniqueInput
  }

  /**
   * Komentarz updateMany
   */
  export type KomentarzUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Komentarzs.
     */
    data: XOR<KomentarzUpdateManyMutationInput, KomentarzUncheckedUpdateManyInput>
    /**
     * Filter which Komentarzs to update
     */
    where?: KomentarzWhereInput
    /**
     * Limit how many Komentarzs to update.
     */
    limit?: number
  }

  /**
   * Komentarz upsert
   */
  export type KomentarzUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * The filter to search for the Komentarz to update in case it exists.
     */
    where: KomentarzWhereUniqueInput
    /**
     * In case the Komentarz found by the `where` argument doesn't exist, create a new Komentarz with this data.
     */
    create: XOR<KomentarzCreateInput, KomentarzUncheckedCreateInput>
    /**
     * In case the Komentarz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KomentarzUpdateInput, KomentarzUncheckedUpdateInput>
  }

  /**
   * Komentarz delete
   */
  export type KomentarzDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
    /**
     * Filter which Komentarz to delete.
     */
    where: KomentarzWhereUniqueInput
  }

  /**
   * Komentarz deleteMany
   */
  export type KomentarzDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Komentarzs to delete
     */
    where?: KomentarzWhereInput
    /**
     * Limit how many Komentarzs to delete.
     */
    limit?: number
  }

  /**
   * Komentarz without action
   */
  export type KomentarzDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Komentarz
     */
    select?: KomentarzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Komentarz
     */
    omit?: KomentarzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomentarzInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WpisScalarFieldEnum: {
    id: 'id',
    id_kategorii: 'id_kategorii',
    uzytkownik: 'uzytkownik',
    zawartosc: 'zawartosc',
    data_wpisu: 'data_wpisu'
  };

  export type WpisScalarFieldEnum = (typeof WpisScalarFieldEnum)[keyof typeof WpisScalarFieldEnum]


  export const KategoriaScalarFieldEnum: {
    id: 'id',
    kategoria: 'kategoria'
  };

  export type KategoriaScalarFieldEnum = (typeof KategoriaScalarFieldEnum)[keyof typeof KategoriaScalarFieldEnum]


  export const KomentarzScalarFieldEnum: {
    id: 'id',
    id_wpisu: 'id_wpisu',
    uzytkownik: 'uzytkownik',
    zawartosc: 'zawartosc'
  };

  export type KomentarzScalarFieldEnum = (typeof KomentarzScalarFieldEnum)[keyof typeof KomentarzScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const WpisOrderByRelevanceFieldEnum: {
    uzytkownik: 'uzytkownik',
    zawartosc: 'zawartosc'
  };

  export type WpisOrderByRelevanceFieldEnum = (typeof WpisOrderByRelevanceFieldEnum)[keyof typeof WpisOrderByRelevanceFieldEnum]


  export const KategoriaOrderByRelevanceFieldEnum: {
    kategoria: 'kategoria'
  };

  export type KategoriaOrderByRelevanceFieldEnum = (typeof KategoriaOrderByRelevanceFieldEnum)[keyof typeof KategoriaOrderByRelevanceFieldEnum]


  export const KomentarzOrderByRelevanceFieldEnum: {
    uzytkownik: 'uzytkownik',
    zawartosc: 'zawartosc'
  };

  export type KomentarzOrderByRelevanceFieldEnum = (typeof KomentarzOrderByRelevanceFieldEnum)[keyof typeof KomentarzOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WpisWhereInput = {
    AND?: WpisWhereInput | WpisWhereInput[]
    OR?: WpisWhereInput[]
    NOT?: WpisWhereInput | WpisWhereInput[]
    id?: IntFilter<"Wpis"> | number
    id_kategorii?: IntFilter<"Wpis"> | number
    uzytkownik?: StringFilter<"Wpis"> | string
    zawartosc?: StringNullableFilter<"Wpis"> | string | null
    data_wpisu?: DateTimeFilter<"Wpis"> | Date | string
    kategoria?: XOR<KategoriaScalarRelationFilter, KategoriaWhereInput>
    komentarz?: KomentarzListRelationFilter
  }

  export type WpisOrderByWithRelationInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrderInput | SortOrder
    data_wpisu?: SortOrder
    kategoria?: KategoriaOrderByWithRelationInput
    komentarz?: KomentarzOrderByRelationAggregateInput
    _relevance?: WpisOrderByRelevanceInput
  }

  export type WpisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WpisWhereInput | WpisWhereInput[]
    OR?: WpisWhereInput[]
    NOT?: WpisWhereInput | WpisWhereInput[]
    id_kategorii?: IntFilter<"Wpis"> | number
    uzytkownik?: StringFilter<"Wpis"> | string
    zawartosc?: StringNullableFilter<"Wpis"> | string | null
    data_wpisu?: DateTimeFilter<"Wpis"> | Date | string
    kategoria?: XOR<KategoriaScalarRelationFilter, KategoriaWhereInput>
    komentarz?: KomentarzListRelationFilter
  }, "id">

  export type WpisOrderByWithAggregationInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrderInput | SortOrder
    data_wpisu?: SortOrder
    _count?: WpisCountOrderByAggregateInput
    _avg?: WpisAvgOrderByAggregateInput
    _max?: WpisMaxOrderByAggregateInput
    _min?: WpisMinOrderByAggregateInput
    _sum?: WpisSumOrderByAggregateInput
  }

  export type WpisScalarWhereWithAggregatesInput = {
    AND?: WpisScalarWhereWithAggregatesInput | WpisScalarWhereWithAggregatesInput[]
    OR?: WpisScalarWhereWithAggregatesInput[]
    NOT?: WpisScalarWhereWithAggregatesInput | WpisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wpis"> | number
    id_kategorii?: IntWithAggregatesFilter<"Wpis"> | number
    uzytkownik?: StringWithAggregatesFilter<"Wpis"> | string
    zawartosc?: StringNullableWithAggregatesFilter<"Wpis"> | string | null
    data_wpisu?: DateTimeWithAggregatesFilter<"Wpis"> | Date | string
  }

  export type KategoriaWhereInput = {
    AND?: KategoriaWhereInput | KategoriaWhereInput[]
    OR?: KategoriaWhereInput[]
    NOT?: KategoriaWhereInput | KategoriaWhereInput[]
    id?: IntFilter<"Kategoria"> | number
    kategoria?: StringFilter<"Kategoria"> | string
    wpis?: WpisListRelationFilter
  }

  export type KategoriaOrderByWithRelationInput = {
    id?: SortOrder
    kategoria?: SortOrder
    wpis?: WpisOrderByRelationAggregateInput
    _relevance?: KategoriaOrderByRelevanceInput
  }

  export type KategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KategoriaWhereInput | KategoriaWhereInput[]
    OR?: KategoriaWhereInput[]
    NOT?: KategoriaWhereInput | KategoriaWhereInput[]
    kategoria?: StringFilter<"Kategoria"> | string
    wpis?: WpisListRelationFilter
  }, "id">

  export type KategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    kategoria?: SortOrder
    _count?: KategoriaCountOrderByAggregateInput
    _avg?: KategoriaAvgOrderByAggregateInput
    _max?: KategoriaMaxOrderByAggregateInput
    _min?: KategoriaMinOrderByAggregateInput
    _sum?: KategoriaSumOrderByAggregateInput
  }

  export type KategoriaScalarWhereWithAggregatesInput = {
    AND?: KategoriaScalarWhereWithAggregatesInput | KategoriaScalarWhereWithAggregatesInput[]
    OR?: KategoriaScalarWhereWithAggregatesInput[]
    NOT?: KategoriaScalarWhereWithAggregatesInput | KategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kategoria"> | number
    kategoria?: StringWithAggregatesFilter<"Kategoria"> | string
  }

  export type KomentarzWhereInput = {
    AND?: KomentarzWhereInput | KomentarzWhereInput[]
    OR?: KomentarzWhereInput[]
    NOT?: KomentarzWhereInput | KomentarzWhereInput[]
    id?: IntFilter<"Komentarz"> | number
    id_wpisu?: IntFilter<"Komentarz"> | number
    uzytkownik?: StringFilter<"Komentarz"> | string
    zawartosc?: StringNullableFilter<"Komentarz"> | string | null
    wpis?: XOR<WpisScalarRelationFilter, WpisWhereInput>
  }

  export type KomentarzOrderByWithRelationInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrderInput | SortOrder
    wpis?: WpisOrderByWithRelationInput
    _relevance?: KomentarzOrderByRelevanceInput
  }

  export type KomentarzWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KomentarzWhereInput | KomentarzWhereInput[]
    OR?: KomentarzWhereInput[]
    NOT?: KomentarzWhereInput | KomentarzWhereInput[]
    id_wpisu?: IntFilter<"Komentarz"> | number
    uzytkownik?: StringFilter<"Komentarz"> | string
    zawartosc?: StringNullableFilter<"Komentarz"> | string | null
    wpis?: XOR<WpisScalarRelationFilter, WpisWhereInput>
  }, "id">

  export type KomentarzOrderByWithAggregationInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrderInput | SortOrder
    _count?: KomentarzCountOrderByAggregateInput
    _avg?: KomentarzAvgOrderByAggregateInput
    _max?: KomentarzMaxOrderByAggregateInput
    _min?: KomentarzMinOrderByAggregateInput
    _sum?: KomentarzSumOrderByAggregateInput
  }

  export type KomentarzScalarWhereWithAggregatesInput = {
    AND?: KomentarzScalarWhereWithAggregatesInput | KomentarzScalarWhereWithAggregatesInput[]
    OR?: KomentarzScalarWhereWithAggregatesInput[]
    NOT?: KomentarzScalarWhereWithAggregatesInput | KomentarzScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Komentarz"> | number
    id_wpisu?: IntWithAggregatesFilter<"Komentarz"> | number
    uzytkownik?: StringWithAggregatesFilter<"Komentarz"> | string
    zawartosc?: StringNullableWithAggregatesFilter<"Komentarz"> | string | null
  }

  export type WpisCreateInput = {
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
    kategoria: KategoriaCreateNestedOneWithoutWpisInput
    komentarz?: KomentarzCreateNestedManyWithoutWpisInput
  }

  export type WpisUncheckedCreateInput = {
    id?: number
    id_kategorii: number
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
    komentarz?: KomentarzUncheckedCreateNestedManyWithoutWpisInput
  }

  export type WpisUpdateInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoria?: KategoriaUpdateOneRequiredWithoutWpisNestedInput
    komentarz?: KomentarzUpdateManyWithoutWpisNestedInput
  }

  export type WpisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategorii?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
    komentarz?: KomentarzUncheckedUpdateManyWithoutWpisNestedInput
  }

  export type WpisCreateManyInput = {
    id?: number
    id_kategorii: number
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
  }

  export type WpisUpdateManyMutationInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WpisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategorii?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriaCreateInput = {
    kategoria: string
    wpis?: WpisCreateNestedManyWithoutKategoriaInput
  }

  export type KategoriaUncheckedCreateInput = {
    id?: number
    kategoria: string
    wpis?: WpisUncheckedCreateNestedManyWithoutKategoriaInput
  }

  export type KategoriaUpdateInput = {
    kategoria?: StringFieldUpdateOperationsInput | string
    wpis?: WpisUpdateManyWithoutKategoriaNestedInput
  }

  export type KategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoria?: StringFieldUpdateOperationsInput | string
    wpis?: WpisUncheckedUpdateManyWithoutKategoriaNestedInput
  }

  export type KategoriaCreateManyInput = {
    id?: number
    kategoria: string
  }

  export type KategoriaUpdateManyMutationInput = {
    kategoria?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoria?: StringFieldUpdateOperationsInput | string
  }

  export type KomentarzCreateInput = {
    uzytkownik: string
    zawartosc?: string | null
    wpis: WpisCreateNestedOneWithoutKomentarzInput
  }

  export type KomentarzUncheckedCreateInput = {
    id?: number
    id_wpisu: number
    uzytkownik: string
    zawartosc?: string | null
  }

  export type KomentarzUpdateInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    wpis?: WpisUpdateOneRequiredWithoutKomentarzNestedInput
  }

  export type KomentarzUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_wpisu?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KomentarzCreateManyInput = {
    id?: number
    id_wpisu: number
    uzytkownik: string
    zawartosc?: string | null
  }

  export type KomentarzUpdateManyMutationInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KomentarzUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_wpisu?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KategoriaScalarRelationFilter = {
    is?: KategoriaWhereInput
    isNot?: KategoriaWhereInput
  }

  export type KomentarzListRelationFilter = {
    every?: KomentarzWhereInput
    some?: KomentarzWhereInput
    none?: KomentarzWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KomentarzOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WpisOrderByRelevanceInput = {
    fields: WpisOrderByRelevanceFieldEnum | WpisOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WpisCountOrderByAggregateInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrder
    data_wpisu?: SortOrder
  }

  export type WpisAvgOrderByAggregateInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
  }

  export type WpisMaxOrderByAggregateInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrder
    data_wpisu?: SortOrder
  }

  export type WpisMinOrderByAggregateInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrder
    data_wpisu?: SortOrder
  }

  export type WpisSumOrderByAggregateInput = {
    id?: SortOrder
    id_kategorii?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WpisListRelationFilter = {
    every?: WpisWhereInput
    some?: WpisWhereInput
    none?: WpisWhereInput
  }

  export type WpisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriaOrderByRelevanceInput = {
    fields: KategoriaOrderByRelevanceFieldEnum | KategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    kategoria?: SortOrder
  }

  export type KategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    kategoria?: SortOrder
  }

  export type KategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    kategoria?: SortOrder
  }

  export type KategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WpisScalarRelationFilter = {
    is?: WpisWhereInput
    isNot?: WpisWhereInput
  }

  export type KomentarzOrderByRelevanceInput = {
    fields: KomentarzOrderByRelevanceFieldEnum | KomentarzOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KomentarzCountOrderByAggregateInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrder
  }

  export type KomentarzAvgOrderByAggregateInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
  }

  export type KomentarzMaxOrderByAggregateInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrder
  }

  export type KomentarzMinOrderByAggregateInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
    uzytkownik?: SortOrder
    zawartosc?: SortOrder
  }

  export type KomentarzSumOrderByAggregateInput = {
    id?: SortOrder
    id_wpisu?: SortOrder
  }

  export type KategoriaCreateNestedOneWithoutWpisInput = {
    create?: XOR<KategoriaCreateWithoutWpisInput, KategoriaUncheckedCreateWithoutWpisInput>
    connectOrCreate?: KategoriaCreateOrConnectWithoutWpisInput
    connect?: KategoriaWhereUniqueInput
  }

  export type KomentarzCreateNestedManyWithoutWpisInput = {
    create?: XOR<KomentarzCreateWithoutWpisInput, KomentarzUncheckedCreateWithoutWpisInput> | KomentarzCreateWithoutWpisInput[] | KomentarzUncheckedCreateWithoutWpisInput[]
    connectOrCreate?: KomentarzCreateOrConnectWithoutWpisInput | KomentarzCreateOrConnectWithoutWpisInput[]
    createMany?: KomentarzCreateManyWpisInputEnvelope
    connect?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
  }

  export type KomentarzUncheckedCreateNestedManyWithoutWpisInput = {
    create?: XOR<KomentarzCreateWithoutWpisInput, KomentarzUncheckedCreateWithoutWpisInput> | KomentarzCreateWithoutWpisInput[] | KomentarzUncheckedCreateWithoutWpisInput[]
    connectOrCreate?: KomentarzCreateOrConnectWithoutWpisInput | KomentarzCreateOrConnectWithoutWpisInput[]
    createMany?: KomentarzCreateManyWpisInputEnvelope
    connect?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KategoriaUpdateOneRequiredWithoutWpisNestedInput = {
    create?: XOR<KategoriaCreateWithoutWpisInput, KategoriaUncheckedCreateWithoutWpisInput>
    connectOrCreate?: KategoriaCreateOrConnectWithoutWpisInput
    upsert?: KategoriaUpsertWithoutWpisInput
    connect?: KategoriaWhereUniqueInput
    update?: XOR<XOR<KategoriaUpdateToOneWithWhereWithoutWpisInput, KategoriaUpdateWithoutWpisInput>, KategoriaUncheckedUpdateWithoutWpisInput>
  }

  export type KomentarzUpdateManyWithoutWpisNestedInput = {
    create?: XOR<KomentarzCreateWithoutWpisInput, KomentarzUncheckedCreateWithoutWpisInput> | KomentarzCreateWithoutWpisInput[] | KomentarzUncheckedCreateWithoutWpisInput[]
    connectOrCreate?: KomentarzCreateOrConnectWithoutWpisInput | KomentarzCreateOrConnectWithoutWpisInput[]
    upsert?: KomentarzUpsertWithWhereUniqueWithoutWpisInput | KomentarzUpsertWithWhereUniqueWithoutWpisInput[]
    createMany?: KomentarzCreateManyWpisInputEnvelope
    set?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    disconnect?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    delete?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    connect?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    update?: KomentarzUpdateWithWhereUniqueWithoutWpisInput | KomentarzUpdateWithWhereUniqueWithoutWpisInput[]
    updateMany?: KomentarzUpdateManyWithWhereWithoutWpisInput | KomentarzUpdateManyWithWhereWithoutWpisInput[]
    deleteMany?: KomentarzScalarWhereInput | KomentarzScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KomentarzUncheckedUpdateManyWithoutWpisNestedInput = {
    create?: XOR<KomentarzCreateWithoutWpisInput, KomentarzUncheckedCreateWithoutWpisInput> | KomentarzCreateWithoutWpisInput[] | KomentarzUncheckedCreateWithoutWpisInput[]
    connectOrCreate?: KomentarzCreateOrConnectWithoutWpisInput | KomentarzCreateOrConnectWithoutWpisInput[]
    upsert?: KomentarzUpsertWithWhereUniqueWithoutWpisInput | KomentarzUpsertWithWhereUniqueWithoutWpisInput[]
    createMany?: KomentarzCreateManyWpisInputEnvelope
    set?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    disconnect?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    delete?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    connect?: KomentarzWhereUniqueInput | KomentarzWhereUniqueInput[]
    update?: KomentarzUpdateWithWhereUniqueWithoutWpisInput | KomentarzUpdateWithWhereUniqueWithoutWpisInput[]
    updateMany?: KomentarzUpdateManyWithWhereWithoutWpisInput | KomentarzUpdateManyWithWhereWithoutWpisInput[]
    deleteMany?: KomentarzScalarWhereInput | KomentarzScalarWhereInput[]
  }

  export type WpisCreateNestedManyWithoutKategoriaInput = {
    create?: XOR<WpisCreateWithoutKategoriaInput, WpisUncheckedCreateWithoutKategoriaInput> | WpisCreateWithoutKategoriaInput[] | WpisUncheckedCreateWithoutKategoriaInput[]
    connectOrCreate?: WpisCreateOrConnectWithoutKategoriaInput | WpisCreateOrConnectWithoutKategoriaInput[]
    createMany?: WpisCreateManyKategoriaInputEnvelope
    connect?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
  }

  export type WpisUncheckedCreateNestedManyWithoutKategoriaInput = {
    create?: XOR<WpisCreateWithoutKategoriaInput, WpisUncheckedCreateWithoutKategoriaInput> | WpisCreateWithoutKategoriaInput[] | WpisUncheckedCreateWithoutKategoriaInput[]
    connectOrCreate?: WpisCreateOrConnectWithoutKategoriaInput | WpisCreateOrConnectWithoutKategoriaInput[]
    createMany?: WpisCreateManyKategoriaInputEnvelope
    connect?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
  }

  export type WpisUpdateManyWithoutKategoriaNestedInput = {
    create?: XOR<WpisCreateWithoutKategoriaInput, WpisUncheckedCreateWithoutKategoriaInput> | WpisCreateWithoutKategoriaInput[] | WpisUncheckedCreateWithoutKategoriaInput[]
    connectOrCreate?: WpisCreateOrConnectWithoutKategoriaInput | WpisCreateOrConnectWithoutKategoriaInput[]
    upsert?: WpisUpsertWithWhereUniqueWithoutKategoriaInput | WpisUpsertWithWhereUniqueWithoutKategoriaInput[]
    createMany?: WpisCreateManyKategoriaInputEnvelope
    set?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    disconnect?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    delete?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    connect?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    update?: WpisUpdateWithWhereUniqueWithoutKategoriaInput | WpisUpdateWithWhereUniqueWithoutKategoriaInput[]
    updateMany?: WpisUpdateManyWithWhereWithoutKategoriaInput | WpisUpdateManyWithWhereWithoutKategoriaInput[]
    deleteMany?: WpisScalarWhereInput | WpisScalarWhereInput[]
  }

  export type WpisUncheckedUpdateManyWithoutKategoriaNestedInput = {
    create?: XOR<WpisCreateWithoutKategoriaInput, WpisUncheckedCreateWithoutKategoriaInput> | WpisCreateWithoutKategoriaInput[] | WpisUncheckedCreateWithoutKategoriaInput[]
    connectOrCreate?: WpisCreateOrConnectWithoutKategoriaInput | WpisCreateOrConnectWithoutKategoriaInput[]
    upsert?: WpisUpsertWithWhereUniqueWithoutKategoriaInput | WpisUpsertWithWhereUniqueWithoutKategoriaInput[]
    createMany?: WpisCreateManyKategoriaInputEnvelope
    set?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    disconnect?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    delete?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    connect?: WpisWhereUniqueInput | WpisWhereUniqueInput[]
    update?: WpisUpdateWithWhereUniqueWithoutKategoriaInput | WpisUpdateWithWhereUniqueWithoutKategoriaInput[]
    updateMany?: WpisUpdateManyWithWhereWithoutKategoriaInput | WpisUpdateManyWithWhereWithoutKategoriaInput[]
    deleteMany?: WpisScalarWhereInput | WpisScalarWhereInput[]
  }

  export type WpisCreateNestedOneWithoutKomentarzInput = {
    create?: XOR<WpisCreateWithoutKomentarzInput, WpisUncheckedCreateWithoutKomentarzInput>
    connectOrCreate?: WpisCreateOrConnectWithoutKomentarzInput
    connect?: WpisWhereUniqueInput
  }

  export type WpisUpdateOneRequiredWithoutKomentarzNestedInput = {
    create?: XOR<WpisCreateWithoutKomentarzInput, WpisUncheckedCreateWithoutKomentarzInput>
    connectOrCreate?: WpisCreateOrConnectWithoutKomentarzInput
    upsert?: WpisUpsertWithoutKomentarzInput
    connect?: WpisWhereUniqueInput
    update?: XOR<XOR<WpisUpdateToOneWithWhereWithoutKomentarzInput, WpisUpdateWithoutKomentarzInput>, WpisUncheckedUpdateWithoutKomentarzInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KategoriaCreateWithoutWpisInput = {
    kategoria: string
  }

  export type KategoriaUncheckedCreateWithoutWpisInput = {
    id?: number
    kategoria: string
  }

  export type KategoriaCreateOrConnectWithoutWpisInput = {
    where: KategoriaWhereUniqueInput
    create: XOR<KategoriaCreateWithoutWpisInput, KategoriaUncheckedCreateWithoutWpisInput>
  }

  export type KomentarzCreateWithoutWpisInput = {
    uzytkownik: string
    zawartosc?: string | null
  }

  export type KomentarzUncheckedCreateWithoutWpisInput = {
    id?: number
    uzytkownik: string
    zawartosc?: string | null
  }

  export type KomentarzCreateOrConnectWithoutWpisInput = {
    where: KomentarzWhereUniqueInput
    create: XOR<KomentarzCreateWithoutWpisInput, KomentarzUncheckedCreateWithoutWpisInput>
  }

  export type KomentarzCreateManyWpisInputEnvelope = {
    data: KomentarzCreateManyWpisInput | KomentarzCreateManyWpisInput[]
    skipDuplicates?: boolean
  }

  export type KategoriaUpsertWithoutWpisInput = {
    update: XOR<KategoriaUpdateWithoutWpisInput, KategoriaUncheckedUpdateWithoutWpisInput>
    create: XOR<KategoriaCreateWithoutWpisInput, KategoriaUncheckedCreateWithoutWpisInput>
    where?: KategoriaWhereInput
  }

  export type KategoriaUpdateToOneWithWhereWithoutWpisInput = {
    where?: KategoriaWhereInput
    data: XOR<KategoriaUpdateWithoutWpisInput, KategoriaUncheckedUpdateWithoutWpisInput>
  }

  export type KategoriaUpdateWithoutWpisInput = {
    kategoria?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriaUncheckedUpdateWithoutWpisInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoria?: StringFieldUpdateOperationsInput | string
  }

  export type KomentarzUpsertWithWhereUniqueWithoutWpisInput = {
    where: KomentarzWhereUniqueInput
    update: XOR<KomentarzUpdateWithoutWpisInput, KomentarzUncheckedUpdateWithoutWpisInput>
    create: XOR<KomentarzCreateWithoutWpisInput, KomentarzUncheckedCreateWithoutWpisInput>
  }

  export type KomentarzUpdateWithWhereUniqueWithoutWpisInput = {
    where: KomentarzWhereUniqueInput
    data: XOR<KomentarzUpdateWithoutWpisInput, KomentarzUncheckedUpdateWithoutWpisInput>
  }

  export type KomentarzUpdateManyWithWhereWithoutWpisInput = {
    where: KomentarzScalarWhereInput
    data: XOR<KomentarzUpdateManyMutationInput, KomentarzUncheckedUpdateManyWithoutWpisInput>
  }

  export type KomentarzScalarWhereInput = {
    AND?: KomentarzScalarWhereInput | KomentarzScalarWhereInput[]
    OR?: KomentarzScalarWhereInput[]
    NOT?: KomentarzScalarWhereInput | KomentarzScalarWhereInput[]
    id?: IntFilter<"Komentarz"> | number
    id_wpisu?: IntFilter<"Komentarz"> | number
    uzytkownik?: StringFilter<"Komentarz"> | string
    zawartosc?: StringNullableFilter<"Komentarz"> | string | null
  }

  export type WpisCreateWithoutKategoriaInput = {
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
    komentarz?: KomentarzCreateNestedManyWithoutWpisInput
  }

  export type WpisUncheckedCreateWithoutKategoriaInput = {
    id?: number
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
    komentarz?: KomentarzUncheckedCreateNestedManyWithoutWpisInput
  }

  export type WpisCreateOrConnectWithoutKategoriaInput = {
    where: WpisWhereUniqueInput
    create: XOR<WpisCreateWithoutKategoriaInput, WpisUncheckedCreateWithoutKategoriaInput>
  }

  export type WpisCreateManyKategoriaInputEnvelope = {
    data: WpisCreateManyKategoriaInput | WpisCreateManyKategoriaInput[]
    skipDuplicates?: boolean
  }

  export type WpisUpsertWithWhereUniqueWithoutKategoriaInput = {
    where: WpisWhereUniqueInput
    update: XOR<WpisUpdateWithoutKategoriaInput, WpisUncheckedUpdateWithoutKategoriaInput>
    create: XOR<WpisCreateWithoutKategoriaInput, WpisUncheckedCreateWithoutKategoriaInput>
  }

  export type WpisUpdateWithWhereUniqueWithoutKategoriaInput = {
    where: WpisWhereUniqueInput
    data: XOR<WpisUpdateWithoutKategoriaInput, WpisUncheckedUpdateWithoutKategoriaInput>
  }

  export type WpisUpdateManyWithWhereWithoutKategoriaInput = {
    where: WpisScalarWhereInput
    data: XOR<WpisUpdateManyMutationInput, WpisUncheckedUpdateManyWithoutKategoriaInput>
  }

  export type WpisScalarWhereInput = {
    AND?: WpisScalarWhereInput | WpisScalarWhereInput[]
    OR?: WpisScalarWhereInput[]
    NOT?: WpisScalarWhereInput | WpisScalarWhereInput[]
    id?: IntFilter<"Wpis"> | number
    id_kategorii?: IntFilter<"Wpis"> | number
    uzytkownik?: StringFilter<"Wpis"> | string
    zawartosc?: StringNullableFilter<"Wpis"> | string | null
    data_wpisu?: DateTimeFilter<"Wpis"> | Date | string
  }

  export type WpisCreateWithoutKomentarzInput = {
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
    kategoria: KategoriaCreateNestedOneWithoutWpisInput
  }

  export type WpisUncheckedCreateWithoutKomentarzInput = {
    id?: number
    id_kategorii: number
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
  }

  export type WpisCreateOrConnectWithoutKomentarzInput = {
    where: WpisWhereUniqueInput
    create: XOR<WpisCreateWithoutKomentarzInput, WpisUncheckedCreateWithoutKomentarzInput>
  }

  export type WpisUpsertWithoutKomentarzInput = {
    update: XOR<WpisUpdateWithoutKomentarzInput, WpisUncheckedUpdateWithoutKomentarzInput>
    create: XOR<WpisCreateWithoutKomentarzInput, WpisUncheckedCreateWithoutKomentarzInput>
    where?: WpisWhereInput
  }

  export type WpisUpdateToOneWithWhereWithoutKomentarzInput = {
    where?: WpisWhereInput
    data: XOR<WpisUpdateWithoutKomentarzInput, WpisUncheckedUpdateWithoutKomentarzInput>
  }

  export type WpisUpdateWithoutKomentarzInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoria?: KategoriaUpdateOneRequiredWithoutWpisNestedInput
  }

  export type WpisUncheckedUpdateWithoutKomentarzInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_kategorii?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomentarzCreateManyWpisInput = {
    id?: number
    uzytkownik: string
    zawartosc?: string | null
  }

  export type KomentarzUpdateWithoutWpisInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KomentarzUncheckedUpdateWithoutWpisInput = {
    id?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KomentarzUncheckedUpdateManyWithoutWpisInput = {
    id?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WpisCreateManyKategoriaInput = {
    id?: number
    uzytkownik: string
    zawartosc?: string | null
    data_wpisu?: Date | string
  }

  export type WpisUpdateWithoutKategoriaInput = {
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
    komentarz?: KomentarzUpdateManyWithoutWpisNestedInput
  }

  export type WpisUncheckedUpdateWithoutKategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
    komentarz?: KomentarzUncheckedUpdateManyWithoutWpisNestedInput
  }

  export type WpisUncheckedUpdateManyWithoutKategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    uzytkownik?: StringFieldUpdateOperationsInput | string
    zawartosc?: NullableStringFieldUpdateOperationsInput | string | null
    data_wpisu?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}