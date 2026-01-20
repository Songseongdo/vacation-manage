
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Vacation
 * 
 */
export type Vacation = $Result.DefaultSelection<Prisma.$VacationPayload>
/**
 * Model VacationUsage
 * 
 */
export type VacationUsage = $Result.DefaultSelection<Prisma.$VacationUsagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.vacation`: Exposes CRUD operations for the **Vacation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vacations
    * const vacations = await prisma.vacation.findMany()
    * ```
    */
  get vacation(): Prisma.VacationDelegate<ExtArgs>;

  /**
   * `prisma.vacationUsage`: Exposes CRUD operations for the **VacationUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VacationUsages
    * const vacationUsages = await prisma.vacationUsage.findMany()
    * ```
    */
  get vacationUsage(): Prisma.VacationUsageDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Employee: 'Employee',
    Vacation: 'Vacation',
    VacationUsage: 'VacationUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "employee" | "vacation" | "vacationUsage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Vacation: {
        payload: Prisma.$VacationPayload<ExtArgs>
        fields: Prisma.VacationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>
          }
          findFirst: {
            args: Prisma.VacationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>
          }
          findMany: {
            args: Prisma.VacationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>[]
          }
          create: {
            args: Prisma.VacationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>
          }
          createMany: {
            args: Prisma.VacationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>[]
          }
          delete: {
            args: Prisma.VacationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>
          }
          update: {
            args: Prisma.VacationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>
          }
          deleteMany: {
            args: Prisma.VacationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VacationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationPayload>
          }
          aggregate: {
            args: Prisma.VacationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacation>
          }
          groupBy: {
            args: Prisma.VacationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacationCountArgs<ExtArgs>
            result: $Utils.Optional<VacationCountAggregateOutputType> | number
          }
        }
      }
      VacationUsage: {
        payload: Prisma.$VacationUsagePayload<ExtArgs>
        fields: Prisma.VacationUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacationUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacationUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>
          }
          findFirst: {
            args: Prisma.VacationUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacationUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>
          }
          findMany: {
            args: Prisma.VacationUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>[]
          }
          create: {
            args: Prisma.VacationUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>
          }
          createMany: {
            args: Prisma.VacationUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacationUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>[]
          }
          delete: {
            args: Prisma.VacationUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>
          }
          update: {
            args: Prisma.VacationUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>
          }
          deleteMany: {
            args: Prisma.VacationUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacationUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VacationUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacationUsagePayload>
          }
          aggregate: {
            args: Prisma.VacationUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacationUsage>
          }
          groupBy: {
            args: Prisma.VacationUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacationUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacationUsageCountArgs<ExtArgs>
            result: $Utils.Optional<VacationUsageCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    vacations: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacations?: boolean | EmployeeCountOutputTypeCountVacationsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountVacationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacationWhereInput
  }


  /**
   * Count Type VacationCountOutputType
   */

  export type VacationCountOutputType = {
    vacationUsages: number
  }

  export type VacationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacationUsages?: boolean | VacationCountOutputTypeCountVacationUsagesArgs
  }

  // Custom InputTypes
  /**
   * VacationCountOutputType without action
   */
  export type VacationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationCountOutputType
     */
    select?: VacationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VacationCountOutputType without action
   */
  export type VacationCountOutputTypeCountVacationUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacationUsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    joinedAt: Date | null
    leavePolicy: string | null
    type: string | null
    resignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    joinedAt: Date | null
    leavePolicy: string | null
    type: string | null
    resignedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    joinedAt: number
    leavePolicy: number
    type: number
    resignedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    joinedAt?: true
    leavePolicy?: true
    type?: true
    resignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    joinedAt?: true
    leavePolicy?: true
    type?: true
    resignedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    joinedAt?: true
    leavePolicy?: true
    type?: true
    resignedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    joinedAt: Date
    leavePolicy: string
    type: string
    resignedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    joinedAt?: boolean
    leavePolicy?: boolean
    type?: boolean
    resignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vacations?: boolean | Employee$vacationsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    joinedAt?: boolean
    leavePolicy?: boolean
    type?: boolean
    resignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    joinedAt?: boolean
    leavePolicy?: boolean
    type?: boolean
    resignedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacations?: boolean | Employee$vacationsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      vacations: Prisma.$VacationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      joinedAt: Date
      leavePolicy: string
      type: string
      resignedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vacations<T extends Employee$vacationsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$vacationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly joinedAt: FieldRef<"Employee", 'DateTime'>
    readonly leavePolicy: FieldRef<"Employee", 'String'>
    readonly type: FieldRef<"Employee", 'String'>
    readonly resignedAt: FieldRef<"Employee", 'DateTime'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee.vacations
   */
  export type Employee$vacationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    where?: VacationWhereInput
    orderBy?: VacationOrderByWithRelationInput | VacationOrderByWithRelationInput[]
    cursor?: VacationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Vacation
   */

  export type AggregateVacation = {
    _count: VacationCountAggregateOutputType | null
    _avg: VacationAvgAggregateOutputType | null
    _sum: VacationSumAggregateOutputType | null
    _min: VacationMinAggregateOutputType | null
    _max: VacationMaxAggregateOutputType | null
  }

  export type VacationAvgAggregateOutputType = {
    id: number | null
    year: number | null
    totalHours: number | null
    usedHours: number | null
    employeeId: number | null
  }

  export type VacationSumAggregateOutputType = {
    id: number | null
    year: number | null
    totalHours: number | null
    usedHours: number | null
    employeeId: number | null
  }

  export type VacationMinAggregateOutputType = {
    id: number | null
    year: number | null
    totalHours: number | null
    usedHours: number | null
    employeeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VacationMaxAggregateOutputType = {
    id: number | null
    year: number | null
    totalHours: number | null
    usedHours: number | null
    employeeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VacationCountAggregateOutputType = {
    id: number
    year: number
    totalHours: number
    usedHours: number
    employeeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VacationAvgAggregateInputType = {
    id?: true
    year?: true
    totalHours?: true
    usedHours?: true
    employeeId?: true
  }

  export type VacationSumAggregateInputType = {
    id?: true
    year?: true
    totalHours?: true
    usedHours?: true
    employeeId?: true
  }

  export type VacationMinAggregateInputType = {
    id?: true
    year?: true
    totalHours?: true
    usedHours?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VacationMaxAggregateInputType = {
    id?: true
    year?: true
    totalHours?: true
    usedHours?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VacationCountAggregateInputType = {
    id?: true
    year?: true
    totalHours?: true
    usedHours?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VacationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacation to aggregate.
     */
    where?: VacationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacations to fetch.
     */
    orderBy?: VacationOrderByWithRelationInput | VacationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vacations
    **/
    _count?: true | VacationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacationMaxAggregateInputType
  }

  export type GetVacationAggregateType<T extends VacationAggregateArgs> = {
        [P in keyof T & keyof AggregateVacation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacation[P]>
      : GetScalarType<T[P], AggregateVacation[P]>
  }




  export type VacationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacationWhereInput
    orderBy?: VacationOrderByWithAggregationInput | VacationOrderByWithAggregationInput[]
    by: VacationScalarFieldEnum[] | VacationScalarFieldEnum
    having?: VacationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacationCountAggregateInputType | true
    _avg?: VacationAvgAggregateInputType
    _sum?: VacationSumAggregateInputType
    _min?: VacationMinAggregateInputType
    _max?: VacationMaxAggregateInputType
  }

  export type VacationGroupByOutputType = {
    id: number
    year: number
    totalHours: number
    usedHours: number
    employeeId: number
    createdAt: Date
    updatedAt: Date
    _count: VacationCountAggregateOutputType | null
    _avg: VacationAvgAggregateOutputType | null
    _sum: VacationSumAggregateOutputType | null
    _min: VacationMinAggregateOutputType | null
    _max: VacationMaxAggregateOutputType | null
  }

  type GetVacationGroupByPayload<T extends VacationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacationGroupByOutputType[P]>
            : GetScalarType<T[P], VacationGroupByOutputType[P]>
        }
      >
    >


  export type VacationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    totalHours?: boolean
    usedHours?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    vacationUsages?: boolean | Vacation$vacationUsagesArgs<ExtArgs>
    _count?: boolean | VacationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacation"]>

  export type VacationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    totalHours?: boolean
    usedHours?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacation"]>

  export type VacationSelectScalar = {
    id?: boolean
    year?: boolean
    totalHours?: boolean
    usedHours?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VacationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    vacationUsages?: boolean | Vacation$vacationUsagesArgs<ExtArgs>
    _count?: boolean | VacationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VacationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $VacationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vacation"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      vacationUsages: Prisma.$VacationUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      totalHours: number
      usedHours: number
      employeeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vacation"]>
    composites: {}
  }

  type VacationGetPayload<S extends boolean | null | undefined | VacationDefaultArgs> = $Result.GetResult<Prisma.$VacationPayload, S>

  type VacationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VacationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VacationCountAggregateInputType | true
    }

  export interface VacationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vacation'], meta: { name: 'Vacation' } }
    /**
     * Find zero or one Vacation that matches the filter.
     * @param {VacationFindUniqueArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacationFindUniqueArgs>(args: SelectSubset<T, VacationFindUniqueArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vacation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VacationFindUniqueOrThrowArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacationFindUniqueOrThrowArgs>(args: SelectSubset<T, VacationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vacation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationFindFirstArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacationFindFirstArgs>(args?: SelectSubset<T, VacationFindFirstArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vacation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationFindFirstOrThrowArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacationFindFirstOrThrowArgs>(args?: SelectSubset<T, VacationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vacations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacations
     * const vacations = await prisma.vacation.findMany()
     * 
     * // Get first 10 Vacations
     * const vacations = await prisma.vacation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacationWithIdOnly = await prisma.vacation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacationFindManyArgs>(args?: SelectSubset<T, VacationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vacation.
     * @param {VacationCreateArgs} args - Arguments to create a Vacation.
     * @example
     * // Create one Vacation
     * const Vacation = await prisma.vacation.create({
     *   data: {
     *     // ... data to create a Vacation
     *   }
     * })
     * 
     */
    create<T extends VacationCreateArgs>(args: SelectSubset<T, VacationCreateArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vacations.
     * @param {VacationCreateManyArgs} args - Arguments to create many Vacations.
     * @example
     * // Create many Vacations
     * const vacation = await prisma.vacation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacationCreateManyArgs>(args?: SelectSubset<T, VacationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vacations and returns the data saved in the database.
     * @param {VacationCreateManyAndReturnArgs} args - Arguments to create many Vacations.
     * @example
     * // Create many Vacations
     * const vacation = await prisma.vacation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vacations and only return the `id`
     * const vacationWithIdOnly = await prisma.vacation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacationCreateManyAndReturnArgs>(args?: SelectSubset<T, VacationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vacation.
     * @param {VacationDeleteArgs} args - Arguments to delete one Vacation.
     * @example
     * // Delete one Vacation
     * const Vacation = await prisma.vacation.delete({
     *   where: {
     *     // ... filter to delete one Vacation
     *   }
     * })
     * 
     */
    delete<T extends VacationDeleteArgs>(args: SelectSubset<T, VacationDeleteArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vacation.
     * @param {VacationUpdateArgs} args - Arguments to update one Vacation.
     * @example
     * // Update one Vacation
     * const vacation = await prisma.vacation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacationUpdateArgs>(args: SelectSubset<T, VacationUpdateArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vacations.
     * @param {VacationDeleteManyArgs} args - Arguments to filter Vacations to delete.
     * @example
     * // Delete a few Vacations
     * const { count } = await prisma.vacation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacationDeleteManyArgs>(args?: SelectSubset<T, VacationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacations
     * const vacation = await prisma.vacation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacationUpdateManyArgs>(args: SelectSubset<T, VacationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vacation.
     * @param {VacationUpsertArgs} args - Arguments to update or create a Vacation.
     * @example
     * // Update or create a Vacation
     * const vacation = await prisma.vacation.upsert({
     *   create: {
     *     // ... data to create a Vacation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacation we want to update
     *   }
     * })
     */
    upsert<T extends VacationUpsertArgs>(args: SelectSubset<T, VacationUpsertArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vacations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationCountArgs} args - Arguments to filter Vacations to count.
     * @example
     * // Count the number of Vacations
     * const count = await prisma.vacation.count({
     *   where: {
     *     // ... the filter for the Vacations we want to count
     *   }
     * })
    **/
    count<T extends VacationCountArgs>(
      args?: Subset<T, VacationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vacation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VacationAggregateArgs>(args: Subset<T, VacationAggregateArgs>): Prisma.PrismaPromise<GetVacationAggregateType<T>>

    /**
     * Group by Vacation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationGroupByArgs} args - Group by arguments.
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
      T extends VacationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacationGroupByArgs['orderBy'] }
        : { orderBy?: VacationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VacationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vacation model
   */
  readonly fields: VacationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vacation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vacationUsages<T extends Vacation$vacationUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Vacation$vacationUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Vacation model
   */ 
  interface VacationFieldRefs {
    readonly id: FieldRef<"Vacation", 'Int'>
    readonly year: FieldRef<"Vacation", 'Int'>
    readonly totalHours: FieldRef<"Vacation", 'Int'>
    readonly usedHours: FieldRef<"Vacation", 'Int'>
    readonly employeeId: FieldRef<"Vacation", 'Int'>
    readonly createdAt: FieldRef<"Vacation", 'DateTime'>
    readonly updatedAt: FieldRef<"Vacation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vacation findUnique
   */
  export type VacationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * Filter, which Vacation to fetch.
     */
    where: VacationWhereUniqueInput
  }

  /**
   * Vacation findUniqueOrThrow
   */
  export type VacationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * Filter, which Vacation to fetch.
     */
    where: VacationWhereUniqueInput
  }

  /**
   * Vacation findFirst
   */
  export type VacationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * Filter, which Vacation to fetch.
     */
    where?: VacationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacations to fetch.
     */
    orderBy?: VacationOrderByWithRelationInput | VacationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacations.
     */
    cursor?: VacationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacations.
     */
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[]
  }

  /**
   * Vacation findFirstOrThrow
   */
  export type VacationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * Filter, which Vacation to fetch.
     */
    where?: VacationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacations to fetch.
     */
    orderBy?: VacationOrderByWithRelationInput | VacationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacations.
     */
    cursor?: VacationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacations.
     */
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[]
  }

  /**
   * Vacation findMany
   */
  export type VacationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * Filter, which Vacations to fetch.
     */
    where?: VacationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacations to fetch.
     */
    orderBy?: VacationOrderByWithRelationInput | VacationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vacations.
     */
    cursor?: VacationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacations.
     */
    skip?: number
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[]
  }

  /**
   * Vacation create
   */
  export type VacationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * The data needed to create a Vacation.
     */
    data: XOR<VacationCreateInput, VacationUncheckedCreateInput>
  }

  /**
   * Vacation createMany
   */
  export type VacationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vacations.
     */
    data: VacationCreateManyInput | VacationCreateManyInput[]
  }

  /**
   * Vacation createManyAndReturn
   */
  export type VacationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vacations.
     */
    data: VacationCreateManyInput | VacationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacation update
   */
  export type VacationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * The data needed to update a Vacation.
     */
    data: XOR<VacationUpdateInput, VacationUncheckedUpdateInput>
    /**
     * Choose, which Vacation to update.
     */
    where: VacationWhereUniqueInput
  }

  /**
   * Vacation updateMany
   */
  export type VacationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vacations.
     */
    data: XOR<VacationUpdateManyMutationInput, VacationUncheckedUpdateManyInput>
    /**
     * Filter which Vacations to update
     */
    where?: VacationWhereInput
  }

  /**
   * Vacation upsert
   */
  export type VacationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * The filter to search for the Vacation to update in case it exists.
     */
    where: VacationWhereUniqueInput
    /**
     * In case the Vacation found by the `where` argument doesn't exist, create a new Vacation with this data.
     */
    create: XOR<VacationCreateInput, VacationUncheckedCreateInput>
    /**
     * In case the Vacation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacationUpdateInput, VacationUncheckedUpdateInput>
  }

  /**
   * Vacation delete
   */
  export type VacationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
    /**
     * Filter which Vacation to delete.
     */
    where: VacationWhereUniqueInput
  }

  /**
   * Vacation deleteMany
   */
  export type VacationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacations to delete
     */
    where?: VacationWhereInput
  }

  /**
   * Vacation.vacationUsages
   */
  export type Vacation$vacationUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    where?: VacationUsageWhereInput
    orderBy?: VacationUsageOrderByWithRelationInput | VacationUsageOrderByWithRelationInput[]
    cursor?: VacationUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacationUsageScalarFieldEnum | VacationUsageScalarFieldEnum[]
  }

  /**
   * Vacation without action
   */
  export type VacationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacation
     */
    select?: VacationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationInclude<ExtArgs> | null
  }


  /**
   * Model VacationUsage
   */

  export type AggregateVacationUsage = {
    _count: VacationUsageCountAggregateOutputType | null
    _avg: VacationUsageAvgAggregateOutputType | null
    _sum: VacationUsageSumAggregateOutputType | null
    _min: VacationUsageMinAggregateOutputType | null
    _max: VacationUsageMaxAggregateOutputType | null
  }

  export type VacationUsageAvgAggregateOutputType = {
    id: number | null
    usedHours: number | null
    vacationId: number | null
  }

  export type VacationUsageSumAggregateOutputType = {
    id: number | null
    usedHours: number | null
    vacationId: number | null
  }

  export type VacationUsageMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    usedHours: number | null
    type: string | null
    reason: string | null
    vacationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VacationUsageMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    usedHours: number | null
    type: string | null
    reason: string | null
    vacationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VacationUsageCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    usedHours: number
    type: number
    reason: number
    vacationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VacationUsageAvgAggregateInputType = {
    id?: true
    usedHours?: true
    vacationId?: true
  }

  export type VacationUsageSumAggregateInputType = {
    id?: true
    usedHours?: true
    vacationId?: true
  }

  export type VacationUsageMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    usedHours?: true
    type?: true
    reason?: true
    vacationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VacationUsageMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    usedHours?: true
    type?: true
    reason?: true
    vacationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VacationUsageCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    usedHours?: true
    type?: true
    reason?: true
    vacationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VacationUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VacationUsage to aggregate.
     */
    where?: VacationUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacationUsages to fetch.
     */
    orderBy?: VacationUsageOrderByWithRelationInput | VacationUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacationUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacationUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacationUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VacationUsages
    **/
    _count?: true | VacationUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacationUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacationUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacationUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacationUsageMaxAggregateInputType
  }

  export type GetVacationUsageAggregateType<T extends VacationUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateVacationUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacationUsage[P]>
      : GetScalarType<T[P], AggregateVacationUsage[P]>
  }




  export type VacationUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacationUsageWhereInput
    orderBy?: VacationUsageOrderByWithAggregationInput | VacationUsageOrderByWithAggregationInput[]
    by: VacationUsageScalarFieldEnum[] | VacationUsageScalarFieldEnum
    having?: VacationUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacationUsageCountAggregateInputType | true
    _avg?: VacationUsageAvgAggregateInputType
    _sum?: VacationUsageSumAggregateInputType
    _min?: VacationUsageMinAggregateInputType
    _max?: VacationUsageMaxAggregateInputType
  }

  export type VacationUsageGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    usedHours: number
    type: string
    reason: string | null
    vacationId: number
    createdAt: Date
    updatedAt: Date
    _count: VacationUsageCountAggregateOutputType | null
    _avg: VacationUsageAvgAggregateOutputType | null
    _sum: VacationUsageSumAggregateOutputType | null
    _min: VacationUsageMinAggregateOutputType | null
    _max: VacationUsageMaxAggregateOutputType | null
  }

  type GetVacationUsageGroupByPayload<T extends VacationUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacationUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacationUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacationUsageGroupByOutputType[P]>
            : GetScalarType<T[P], VacationUsageGroupByOutputType[P]>
        }
      >
    >


  export type VacationUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    usedHours?: boolean
    type?: boolean
    reason?: boolean
    vacationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vacation?: boolean | VacationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacationUsage"]>

  export type VacationUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    usedHours?: boolean
    type?: boolean
    reason?: boolean
    vacationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vacation?: boolean | VacationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacationUsage"]>

  export type VacationUsageSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    usedHours?: boolean
    type?: boolean
    reason?: boolean
    vacationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VacationUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacation?: boolean | VacationDefaultArgs<ExtArgs>
  }
  export type VacationUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacation?: boolean | VacationDefaultArgs<ExtArgs>
  }

  export type $VacationUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VacationUsage"
    objects: {
      vacation: Prisma.$VacationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      usedHours: number
      type: string
      reason: string | null
      vacationId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vacationUsage"]>
    composites: {}
  }

  type VacationUsageGetPayload<S extends boolean | null | undefined | VacationUsageDefaultArgs> = $Result.GetResult<Prisma.$VacationUsagePayload, S>

  type VacationUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VacationUsageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VacationUsageCountAggregateInputType | true
    }

  export interface VacationUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VacationUsage'], meta: { name: 'VacationUsage' } }
    /**
     * Find zero or one VacationUsage that matches the filter.
     * @param {VacationUsageFindUniqueArgs} args - Arguments to find a VacationUsage
     * @example
     * // Get one VacationUsage
     * const vacationUsage = await prisma.vacationUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacationUsageFindUniqueArgs>(args: SelectSubset<T, VacationUsageFindUniqueArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VacationUsage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VacationUsageFindUniqueOrThrowArgs} args - Arguments to find a VacationUsage
     * @example
     * // Get one VacationUsage
     * const vacationUsage = await prisma.vacationUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacationUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, VacationUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VacationUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageFindFirstArgs} args - Arguments to find a VacationUsage
     * @example
     * // Get one VacationUsage
     * const vacationUsage = await prisma.vacationUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacationUsageFindFirstArgs>(args?: SelectSubset<T, VacationUsageFindFirstArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VacationUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageFindFirstOrThrowArgs} args - Arguments to find a VacationUsage
     * @example
     * // Get one VacationUsage
     * const vacationUsage = await prisma.vacationUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacationUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, VacationUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VacationUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VacationUsages
     * const vacationUsages = await prisma.vacationUsage.findMany()
     * 
     * // Get first 10 VacationUsages
     * const vacationUsages = await prisma.vacationUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacationUsageWithIdOnly = await prisma.vacationUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacationUsageFindManyArgs>(args?: SelectSubset<T, VacationUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VacationUsage.
     * @param {VacationUsageCreateArgs} args - Arguments to create a VacationUsage.
     * @example
     * // Create one VacationUsage
     * const VacationUsage = await prisma.vacationUsage.create({
     *   data: {
     *     // ... data to create a VacationUsage
     *   }
     * })
     * 
     */
    create<T extends VacationUsageCreateArgs>(args: SelectSubset<T, VacationUsageCreateArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VacationUsages.
     * @param {VacationUsageCreateManyArgs} args - Arguments to create many VacationUsages.
     * @example
     * // Create many VacationUsages
     * const vacationUsage = await prisma.vacationUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacationUsageCreateManyArgs>(args?: SelectSubset<T, VacationUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VacationUsages and returns the data saved in the database.
     * @param {VacationUsageCreateManyAndReturnArgs} args - Arguments to create many VacationUsages.
     * @example
     * // Create many VacationUsages
     * const vacationUsage = await prisma.vacationUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VacationUsages and only return the `id`
     * const vacationUsageWithIdOnly = await prisma.vacationUsage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacationUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, VacationUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VacationUsage.
     * @param {VacationUsageDeleteArgs} args - Arguments to delete one VacationUsage.
     * @example
     * // Delete one VacationUsage
     * const VacationUsage = await prisma.vacationUsage.delete({
     *   where: {
     *     // ... filter to delete one VacationUsage
     *   }
     * })
     * 
     */
    delete<T extends VacationUsageDeleteArgs>(args: SelectSubset<T, VacationUsageDeleteArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VacationUsage.
     * @param {VacationUsageUpdateArgs} args - Arguments to update one VacationUsage.
     * @example
     * // Update one VacationUsage
     * const vacationUsage = await prisma.vacationUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacationUsageUpdateArgs>(args: SelectSubset<T, VacationUsageUpdateArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VacationUsages.
     * @param {VacationUsageDeleteManyArgs} args - Arguments to filter VacationUsages to delete.
     * @example
     * // Delete a few VacationUsages
     * const { count } = await prisma.vacationUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacationUsageDeleteManyArgs>(args?: SelectSubset<T, VacationUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VacationUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VacationUsages
     * const vacationUsage = await prisma.vacationUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacationUsageUpdateManyArgs>(args: SelectSubset<T, VacationUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VacationUsage.
     * @param {VacationUsageUpsertArgs} args - Arguments to update or create a VacationUsage.
     * @example
     * // Update or create a VacationUsage
     * const vacationUsage = await prisma.vacationUsage.upsert({
     *   create: {
     *     // ... data to create a VacationUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VacationUsage we want to update
     *   }
     * })
     */
    upsert<T extends VacationUsageUpsertArgs>(args: SelectSubset<T, VacationUsageUpsertArgs<ExtArgs>>): Prisma__VacationUsageClient<$Result.GetResult<Prisma.$VacationUsagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VacationUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageCountArgs} args - Arguments to filter VacationUsages to count.
     * @example
     * // Count the number of VacationUsages
     * const count = await prisma.vacationUsage.count({
     *   where: {
     *     // ... the filter for the VacationUsages we want to count
     *   }
     * })
    **/
    count<T extends VacationUsageCountArgs>(
      args?: Subset<T, VacationUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacationUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VacationUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VacationUsageAggregateArgs>(args: Subset<T, VacationUsageAggregateArgs>): Prisma.PrismaPromise<GetVacationUsageAggregateType<T>>

    /**
     * Group by VacationUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationUsageGroupByArgs} args - Group by arguments.
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
      T extends VacationUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacationUsageGroupByArgs['orderBy'] }
        : { orderBy?: VacationUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VacationUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacationUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VacationUsage model
   */
  readonly fields: VacationUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VacationUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacationUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vacation<T extends VacationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VacationDefaultArgs<ExtArgs>>): Prisma__VacationClient<$Result.GetResult<Prisma.$VacationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the VacationUsage model
   */ 
  interface VacationUsageFieldRefs {
    readonly id: FieldRef<"VacationUsage", 'Int'>
    readonly startDate: FieldRef<"VacationUsage", 'DateTime'>
    readonly endDate: FieldRef<"VacationUsage", 'DateTime'>
    readonly usedHours: FieldRef<"VacationUsage", 'Int'>
    readonly type: FieldRef<"VacationUsage", 'String'>
    readonly reason: FieldRef<"VacationUsage", 'String'>
    readonly vacationId: FieldRef<"VacationUsage", 'Int'>
    readonly createdAt: FieldRef<"VacationUsage", 'DateTime'>
    readonly updatedAt: FieldRef<"VacationUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VacationUsage findUnique
   */
  export type VacationUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * Filter, which VacationUsage to fetch.
     */
    where: VacationUsageWhereUniqueInput
  }

  /**
   * VacationUsage findUniqueOrThrow
   */
  export type VacationUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * Filter, which VacationUsage to fetch.
     */
    where: VacationUsageWhereUniqueInput
  }

  /**
   * VacationUsage findFirst
   */
  export type VacationUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * Filter, which VacationUsage to fetch.
     */
    where?: VacationUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacationUsages to fetch.
     */
    orderBy?: VacationUsageOrderByWithRelationInput | VacationUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VacationUsages.
     */
    cursor?: VacationUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacationUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacationUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VacationUsages.
     */
    distinct?: VacationUsageScalarFieldEnum | VacationUsageScalarFieldEnum[]
  }

  /**
   * VacationUsage findFirstOrThrow
   */
  export type VacationUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * Filter, which VacationUsage to fetch.
     */
    where?: VacationUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacationUsages to fetch.
     */
    orderBy?: VacationUsageOrderByWithRelationInput | VacationUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VacationUsages.
     */
    cursor?: VacationUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacationUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacationUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VacationUsages.
     */
    distinct?: VacationUsageScalarFieldEnum | VacationUsageScalarFieldEnum[]
  }

  /**
   * VacationUsage findMany
   */
  export type VacationUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * Filter, which VacationUsages to fetch.
     */
    where?: VacationUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacationUsages to fetch.
     */
    orderBy?: VacationUsageOrderByWithRelationInput | VacationUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VacationUsages.
     */
    cursor?: VacationUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacationUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacationUsages.
     */
    skip?: number
    distinct?: VacationUsageScalarFieldEnum | VacationUsageScalarFieldEnum[]
  }

  /**
   * VacationUsage create
   */
  export type VacationUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a VacationUsage.
     */
    data: XOR<VacationUsageCreateInput, VacationUsageUncheckedCreateInput>
  }

  /**
   * VacationUsage createMany
   */
  export type VacationUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VacationUsages.
     */
    data: VacationUsageCreateManyInput | VacationUsageCreateManyInput[]
  }

  /**
   * VacationUsage createManyAndReturn
   */
  export type VacationUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VacationUsages.
     */
    data: VacationUsageCreateManyInput | VacationUsageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VacationUsage update
   */
  export type VacationUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a VacationUsage.
     */
    data: XOR<VacationUsageUpdateInput, VacationUsageUncheckedUpdateInput>
    /**
     * Choose, which VacationUsage to update.
     */
    where: VacationUsageWhereUniqueInput
  }

  /**
   * VacationUsage updateMany
   */
  export type VacationUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VacationUsages.
     */
    data: XOR<VacationUsageUpdateManyMutationInput, VacationUsageUncheckedUpdateManyInput>
    /**
     * Filter which VacationUsages to update
     */
    where?: VacationUsageWhereInput
  }

  /**
   * VacationUsage upsert
   */
  export type VacationUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the VacationUsage to update in case it exists.
     */
    where: VacationUsageWhereUniqueInput
    /**
     * In case the VacationUsage found by the `where` argument doesn't exist, create a new VacationUsage with this data.
     */
    create: XOR<VacationUsageCreateInput, VacationUsageUncheckedCreateInput>
    /**
     * In case the VacationUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacationUsageUpdateInput, VacationUsageUncheckedUpdateInput>
  }

  /**
   * VacationUsage delete
   */
  export type VacationUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
    /**
     * Filter which VacationUsage to delete.
     */
    where: VacationUsageWhereUniqueInput
  }

  /**
   * VacationUsage deleteMany
   */
  export type VacationUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VacationUsages to delete
     */
    where?: VacationUsageWhereInput
  }

  /**
   * VacationUsage without action
   */
  export type VacationUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacationUsage
     */
    select?: VacationUsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacationUsageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    joinedAt: 'joinedAt',
    leavePolicy: 'leavePolicy',
    type: 'type',
    resignedAt: 'resignedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const VacationScalarFieldEnum: {
    id: 'id',
    year: 'year',
    totalHours: 'totalHours',
    usedHours: 'usedHours',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VacationScalarFieldEnum = (typeof VacationScalarFieldEnum)[keyof typeof VacationScalarFieldEnum]


  export const VacationUsageScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    usedHours: 'usedHours',
    type: 'type',
    reason: 'reason',
    vacationId: 'vacationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VacationUsageScalarFieldEnum = (typeof VacationUsageScalarFieldEnum)[keyof typeof VacationUsageScalarFieldEnum]


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


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    joinedAt?: DateTimeFilter<"Employee"> | Date | string
    leavePolicy?: StringFilter<"Employee"> | string
    type?: StringFilter<"Employee"> | string
    resignedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    vacations?: VacationListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    joinedAt?: SortOrder
    leavePolicy?: SortOrder
    type?: SortOrder
    resignedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vacations?: VacationOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    joinedAt?: DateTimeFilter<"Employee"> | Date | string
    leavePolicy?: StringFilter<"Employee"> | string
    type?: StringFilter<"Employee"> | string
    resignedAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    vacations?: VacationListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    joinedAt?: SortOrder
    leavePolicy?: SortOrder
    type?: SortOrder
    resignedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    leavePolicy?: StringWithAggregatesFilter<"Employee"> | string
    type?: StringWithAggregatesFilter<"Employee"> | string
    resignedAt?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type VacationWhereInput = {
    AND?: VacationWhereInput | VacationWhereInput[]
    OR?: VacationWhereInput[]
    NOT?: VacationWhereInput | VacationWhereInput[]
    id?: IntFilter<"Vacation"> | number
    year?: IntFilter<"Vacation"> | number
    totalHours?: IntFilter<"Vacation"> | number
    usedHours?: IntFilter<"Vacation"> | number
    employeeId?: IntFilter<"Vacation"> | number
    createdAt?: DateTimeFilter<"Vacation"> | Date | string
    updatedAt?: DateTimeFilter<"Vacation"> | Date | string
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    vacationUsages?: VacationUsageListRelationFilter
  }

  export type VacationOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    vacationUsages?: VacationUsageOrderByRelationAggregateInput
  }

  export type VacationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employeeId_year?: VacationEmployeeIdYearCompoundUniqueInput
    AND?: VacationWhereInput | VacationWhereInput[]
    OR?: VacationWhereInput[]
    NOT?: VacationWhereInput | VacationWhereInput[]
    year?: IntFilter<"Vacation"> | number
    totalHours?: IntFilter<"Vacation"> | number
    usedHours?: IntFilter<"Vacation"> | number
    employeeId?: IntFilter<"Vacation"> | number
    createdAt?: DateTimeFilter<"Vacation"> | Date | string
    updatedAt?: DateTimeFilter<"Vacation"> | Date | string
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    vacationUsages?: VacationUsageListRelationFilter
  }, "id" | "employeeId_year">

  export type VacationOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VacationCountOrderByAggregateInput
    _avg?: VacationAvgOrderByAggregateInput
    _max?: VacationMaxOrderByAggregateInput
    _min?: VacationMinOrderByAggregateInput
    _sum?: VacationSumOrderByAggregateInput
  }

  export type VacationScalarWhereWithAggregatesInput = {
    AND?: VacationScalarWhereWithAggregatesInput | VacationScalarWhereWithAggregatesInput[]
    OR?: VacationScalarWhereWithAggregatesInput[]
    NOT?: VacationScalarWhereWithAggregatesInput | VacationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vacation"> | number
    year?: IntWithAggregatesFilter<"Vacation"> | number
    totalHours?: IntWithAggregatesFilter<"Vacation"> | number
    usedHours?: IntWithAggregatesFilter<"Vacation"> | number
    employeeId?: IntWithAggregatesFilter<"Vacation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vacation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vacation"> | Date | string
  }

  export type VacationUsageWhereInput = {
    AND?: VacationUsageWhereInput | VacationUsageWhereInput[]
    OR?: VacationUsageWhereInput[]
    NOT?: VacationUsageWhereInput | VacationUsageWhereInput[]
    id?: IntFilter<"VacationUsage"> | number
    startDate?: DateTimeFilter<"VacationUsage"> | Date | string
    endDate?: DateTimeFilter<"VacationUsage"> | Date | string
    usedHours?: IntFilter<"VacationUsage"> | number
    type?: StringFilter<"VacationUsage"> | string
    reason?: StringNullableFilter<"VacationUsage"> | string | null
    vacationId?: IntFilter<"VacationUsage"> | number
    createdAt?: DateTimeFilter<"VacationUsage"> | Date | string
    updatedAt?: DateTimeFilter<"VacationUsage"> | Date | string
    vacation?: XOR<VacationRelationFilter, VacationWhereInput>
  }

  export type VacationUsageOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usedHours?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    vacationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vacation?: VacationOrderByWithRelationInput
  }

  export type VacationUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VacationUsageWhereInput | VacationUsageWhereInput[]
    OR?: VacationUsageWhereInput[]
    NOT?: VacationUsageWhereInput | VacationUsageWhereInput[]
    startDate?: DateTimeFilter<"VacationUsage"> | Date | string
    endDate?: DateTimeFilter<"VacationUsage"> | Date | string
    usedHours?: IntFilter<"VacationUsage"> | number
    type?: StringFilter<"VacationUsage"> | string
    reason?: StringNullableFilter<"VacationUsage"> | string | null
    vacationId?: IntFilter<"VacationUsage"> | number
    createdAt?: DateTimeFilter<"VacationUsage"> | Date | string
    updatedAt?: DateTimeFilter<"VacationUsage"> | Date | string
    vacation?: XOR<VacationRelationFilter, VacationWhereInput>
  }, "id">

  export type VacationUsageOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usedHours?: SortOrder
    type?: SortOrder
    reason?: SortOrderInput | SortOrder
    vacationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VacationUsageCountOrderByAggregateInput
    _avg?: VacationUsageAvgOrderByAggregateInput
    _max?: VacationUsageMaxOrderByAggregateInput
    _min?: VacationUsageMinOrderByAggregateInput
    _sum?: VacationUsageSumOrderByAggregateInput
  }

  export type VacationUsageScalarWhereWithAggregatesInput = {
    AND?: VacationUsageScalarWhereWithAggregatesInput | VacationUsageScalarWhereWithAggregatesInput[]
    OR?: VacationUsageScalarWhereWithAggregatesInput[]
    NOT?: VacationUsageScalarWhereWithAggregatesInput | VacationUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VacationUsage"> | number
    startDate?: DateTimeWithAggregatesFilter<"VacationUsage"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"VacationUsage"> | Date | string
    usedHours?: IntWithAggregatesFilter<"VacationUsage"> | number
    type?: StringWithAggregatesFilter<"VacationUsage"> | string
    reason?: StringNullableWithAggregatesFilter<"VacationUsage"> | string | null
    vacationId?: IntWithAggregatesFilter<"VacationUsage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VacationUsage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VacationUsage"> | Date | string
  }

  export type EmployeeCreateInput = {
    name: string
    joinedAt: Date | string
    leavePolicy: string
    type: string
    resignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vacations?: VacationCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    joinedAt: Date | string
    leavePolicy: string
    type: string
    resignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vacations?: VacationUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leavePolicy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    resignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacations?: VacationUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leavePolicy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    resignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacations?: VacationUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    joinedAt: Date | string
    leavePolicy: string
    type: string
    resignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leavePolicy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    resignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leavePolicy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    resignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationCreateInput = {
    year: number
    totalHours: number
    usedHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutVacationsInput
    vacationUsages?: VacationUsageCreateNestedManyWithoutVacationInput
  }

  export type VacationUncheckedCreateInput = {
    id?: number
    year: number
    totalHours: number
    usedHours?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vacationUsages?: VacationUsageUncheckedCreateNestedManyWithoutVacationInput
  }

  export type VacationUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutVacationsNestedInput
    vacationUsages?: VacationUsageUpdateManyWithoutVacationNestedInput
  }

  export type VacationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacationUsages?: VacationUsageUncheckedUpdateManyWithoutVacationNestedInput
  }

  export type VacationCreateManyInput = {
    id?: number
    year: number
    totalHours: number
    usedHours?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageCreateInput = {
    startDate: Date | string
    endDate: Date | string
    usedHours: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vacation: VacationCreateNestedOneWithoutVacationUsagesInput
  }

  export type VacationUsageUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    usedHours: number
    type: string
    reason?: string | null
    vacationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUsageUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacation?: VacationUpdateOneRequiredWithoutVacationUsagesNestedInput
  }

  export type VacationUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    vacationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    usedHours: number
    type: string
    reason?: string | null
    vacationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUsageUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    vacationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VacationListRelationFilter = {
    every?: VacationWhereInput
    some?: VacationWhereInput
    none?: VacationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VacationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    joinedAt?: SortOrder
    leavePolicy?: SortOrder
    type?: SortOrder
    resignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    joinedAt?: SortOrder
    leavePolicy?: SortOrder
    type?: SortOrder
    resignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    joinedAt?: SortOrder
    leavePolicy?: SortOrder
    type?: SortOrder
    resignedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type VacationUsageListRelationFilter = {
    every?: VacationUsageWhereInput
    some?: VacationUsageWhereInput
    none?: VacationUsageWhereInput
  }

  export type VacationUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VacationEmployeeIdYearCompoundUniqueInput = {
    employeeId: number
    year: number
  }

  export type VacationCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacationAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
  }

  export type VacationMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacationMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacationSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    usedHours?: SortOrder
    employeeId?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VacationRelationFilter = {
    is?: VacationWhereInput
    isNot?: VacationWhereInput
  }

  export type VacationUsageCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usedHours?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    vacationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacationUsageAvgOrderByAggregateInput = {
    id?: SortOrder
    usedHours?: SortOrder
    vacationId?: SortOrder
  }

  export type VacationUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usedHours?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    vacationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacationUsageMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usedHours?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    vacationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacationUsageSumOrderByAggregateInput = {
    id?: SortOrder
    usedHours?: SortOrder
    vacationId?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VacationCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<VacationCreateWithoutEmployeeInput, VacationUncheckedCreateWithoutEmployeeInput> | VacationCreateWithoutEmployeeInput[] | VacationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VacationCreateOrConnectWithoutEmployeeInput | VacationCreateOrConnectWithoutEmployeeInput[]
    createMany?: VacationCreateManyEmployeeInputEnvelope
    connect?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
  }

  export type VacationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<VacationCreateWithoutEmployeeInput, VacationUncheckedCreateWithoutEmployeeInput> | VacationCreateWithoutEmployeeInput[] | VacationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VacationCreateOrConnectWithoutEmployeeInput | VacationCreateOrConnectWithoutEmployeeInput[]
    createMany?: VacationCreateManyEmployeeInputEnvelope
    connect?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VacationUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<VacationCreateWithoutEmployeeInput, VacationUncheckedCreateWithoutEmployeeInput> | VacationCreateWithoutEmployeeInput[] | VacationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VacationCreateOrConnectWithoutEmployeeInput | VacationCreateOrConnectWithoutEmployeeInput[]
    upsert?: VacationUpsertWithWhereUniqueWithoutEmployeeInput | VacationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: VacationCreateManyEmployeeInputEnvelope
    set?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    disconnect?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    delete?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    connect?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    update?: VacationUpdateWithWhereUniqueWithoutEmployeeInput | VacationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: VacationUpdateManyWithWhereWithoutEmployeeInput | VacationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: VacationScalarWhereInput | VacationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VacationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<VacationCreateWithoutEmployeeInput, VacationUncheckedCreateWithoutEmployeeInput> | VacationCreateWithoutEmployeeInput[] | VacationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VacationCreateOrConnectWithoutEmployeeInput | VacationCreateOrConnectWithoutEmployeeInput[]
    upsert?: VacationUpsertWithWhereUniqueWithoutEmployeeInput | VacationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: VacationCreateManyEmployeeInputEnvelope
    set?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    disconnect?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    delete?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    connect?: VacationWhereUniqueInput | VacationWhereUniqueInput[]
    update?: VacationUpdateWithWhereUniqueWithoutEmployeeInput | VacationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: VacationUpdateManyWithWhereWithoutEmployeeInput | VacationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: VacationScalarWhereInput | VacationScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutVacationsInput = {
    create?: XOR<EmployeeCreateWithoutVacationsInput, EmployeeUncheckedCreateWithoutVacationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutVacationsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type VacationUsageCreateNestedManyWithoutVacationInput = {
    create?: XOR<VacationUsageCreateWithoutVacationInput, VacationUsageUncheckedCreateWithoutVacationInput> | VacationUsageCreateWithoutVacationInput[] | VacationUsageUncheckedCreateWithoutVacationInput[]
    connectOrCreate?: VacationUsageCreateOrConnectWithoutVacationInput | VacationUsageCreateOrConnectWithoutVacationInput[]
    createMany?: VacationUsageCreateManyVacationInputEnvelope
    connect?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
  }

  export type VacationUsageUncheckedCreateNestedManyWithoutVacationInput = {
    create?: XOR<VacationUsageCreateWithoutVacationInput, VacationUsageUncheckedCreateWithoutVacationInput> | VacationUsageCreateWithoutVacationInput[] | VacationUsageUncheckedCreateWithoutVacationInput[]
    connectOrCreate?: VacationUsageCreateOrConnectWithoutVacationInput | VacationUsageCreateOrConnectWithoutVacationInput[]
    createMany?: VacationUsageCreateManyVacationInputEnvelope
    connect?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutVacationsNestedInput = {
    create?: XOR<EmployeeCreateWithoutVacationsInput, EmployeeUncheckedCreateWithoutVacationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutVacationsInput
    upsert?: EmployeeUpsertWithoutVacationsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutVacationsInput, EmployeeUpdateWithoutVacationsInput>, EmployeeUncheckedUpdateWithoutVacationsInput>
  }

  export type VacationUsageUpdateManyWithoutVacationNestedInput = {
    create?: XOR<VacationUsageCreateWithoutVacationInput, VacationUsageUncheckedCreateWithoutVacationInput> | VacationUsageCreateWithoutVacationInput[] | VacationUsageUncheckedCreateWithoutVacationInput[]
    connectOrCreate?: VacationUsageCreateOrConnectWithoutVacationInput | VacationUsageCreateOrConnectWithoutVacationInput[]
    upsert?: VacationUsageUpsertWithWhereUniqueWithoutVacationInput | VacationUsageUpsertWithWhereUniqueWithoutVacationInput[]
    createMany?: VacationUsageCreateManyVacationInputEnvelope
    set?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    disconnect?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    delete?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    connect?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    update?: VacationUsageUpdateWithWhereUniqueWithoutVacationInput | VacationUsageUpdateWithWhereUniqueWithoutVacationInput[]
    updateMany?: VacationUsageUpdateManyWithWhereWithoutVacationInput | VacationUsageUpdateManyWithWhereWithoutVacationInput[]
    deleteMany?: VacationUsageScalarWhereInput | VacationUsageScalarWhereInput[]
  }

  export type VacationUsageUncheckedUpdateManyWithoutVacationNestedInput = {
    create?: XOR<VacationUsageCreateWithoutVacationInput, VacationUsageUncheckedCreateWithoutVacationInput> | VacationUsageCreateWithoutVacationInput[] | VacationUsageUncheckedCreateWithoutVacationInput[]
    connectOrCreate?: VacationUsageCreateOrConnectWithoutVacationInput | VacationUsageCreateOrConnectWithoutVacationInput[]
    upsert?: VacationUsageUpsertWithWhereUniqueWithoutVacationInput | VacationUsageUpsertWithWhereUniqueWithoutVacationInput[]
    createMany?: VacationUsageCreateManyVacationInputEnvelope
    set?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    disconnect?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    delete?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    connect?: VacationUsageWhereUniqueInput | VacationUsageWhereUniqueInput[]
    update?: VacationUsageUpdateWithWhereUniqueWithoutVacationInput | VacationUsageUpdateWithWhereUniqueWithoutVacationInput[]
    updateMany?: VacationUsageUpdateManyWithWhereWithoutVacationInput | VacationUsageUpdateManyWithWhereWithoutVacationInput[]
    deleteMany?: VacationUsageScalarWhereInput | VacationUsageScalarWhereInput[]
  }

  export type VacationCreateNestedOneWithoutVacationUsagesInput = {
    create?: XOR<VacationCreateWithoutVacationUsagesInput, VacationUncheckedCreateWithoutVacationUsagesInput>
    connectOrCreate?: VacationCreateOrConnectWithoutVacationUsagesInput
    connect?: VacationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VacationUpdateOneRequiredWithoutVacationUsagesNestedInput = {
    create?: XOR<VacationCreateWithoutVacationUsagesInput, VacationUncheckedCreateWithoutVacationUsagesInput>
    connectOrCreate?: VacationCreateOrConnectWithoutVacationUsagesInput
    upsert?: VacationUpsertWithoutVacationUsagesInput
    connect?: VacationWhereUniqueInput
    update?: XOR<XOR<VacationUpdateToOneWithWhereWithoutVacationUsagesInput, VacationUpdateWithoutVacationUsagesInput>, VacationUncheckedUpdateWithoutVacationUsagesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VacationCreateWithoutEmployeeInput = {
    year: number
    totalHours: number
    usedHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vacationUsages?: VacationUsageCreateNestedManyWithoutVacationInput
  }

  export type VacationUncheckedCreateWithoutEmployeeInput = {
    id?: number
    year: number
    totalHours: number
    usedHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vacationUsages?: VacationUsageUncheckedCreateNestedManyWithoutVacationInput
  }

  export type VacationCreateOrConnectWithoutEmployeeInput = {
    where: VacationWhereUniqueInput
    create: XOR<VacationCreateWithoutEmployeeInput, VacationUncheckedCreateWithoutEmployeeInput>
  }

  export type VacationCreateManyEmployeeInputEnvelope = {
    data: VacationCreateManyEmployeeInput | VacationCreateManyEmployeeInput[]
  }

  export type VacationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: VacationWhereUniqueInput
    update: XOR<VacationUpdateWithoutEmployeeInput, VacationUncheckedUpdateWithoutEmployeeInput>
    create: XOR<VacationCreateWithoutEmployeeInput, VacationUncheckedCreateWithoutEmployeeInput>
  }

  export type VacationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: VacationWhereUniqueInput
    data: XOR<VacationUpdateWithoutEmployeeInput, VacationUncheckedUpdateWithoutEmployeeInput>
  }

  export type VacationUpdateManyWithWhereWithoutEmployeeInput = {
    where: VacationScalarWhereInput
    data: XOR<VacationUpdateManyMutationInput, VacationUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type VacationScalarWhereInput = {
    AND?: VacationScalarWhereInput | VacationScalarWhereInput[]
    OR?: VacationScalarWhereInput[]
    NOT?: VacationScalarWhereInput | VacationScalarWhereInput[]
    id?: IntFilter<"Vacation"> | number
    year?: IntFilter<"Vacation"> | number
    totalHours?: IntFilter<"Vacation"> | number
    usedHours?: IntFilter<"Vacation"> | number
    employeeId?: IntFilter<"Vacation"> | number
    createdAt?: DateTimeFilter<"Vacation"> | Date | string
    updatedAt?: DateTimeFilter<"Vacation"> | Date | string
  }

  export type EmployeeCreateWithoutVacationsInput = {
    name: string
    joinedAt: Date | string
    leavePolicy: string
    type: string
    resignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutVacationsInput = {
    id?: number
    name: string
    joinedAt: Date | string
    leavePolicy: string
    type: string
    resignedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutVacationsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutVacationsInput, EmployeeUncheckedCreateWithoutVacationsInput>
  }

  export type VacationUsageCreateWithoutVacationInput = {
    startDate: Date | string
    endDate: Date | string
    usedHours: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUsageUncheckedCreateWithoutVacationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    usedHours: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUsageCreateOrConnectWithoutVacationInput = {
    where: VacationUsageWhereUniqueInput
    create: XOR<VacationUsageCreateWithoutVacationInput, VacationUsageUncheckedCreateWithoutVacationInput>
  }

  export type VacationUsageCreateManyVacationInputEnvelope = {
    data: VacationUsageCreateManyVacationInput | VacationUsageCreateManyVacationInput[]
  }

  export type EmployeeUpsertWithoutVacationsInput = {
    update: XOR<EmployeeUpdateWithoutVacationsInput, EmployeeUncheckedUpdateWithoutVacationsInput>
    create: XOR<EmployeeCreateWithoutVacationsInput, EmployeeUncheckedCreateWithoutVacationsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutVacationsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutVacationsInput, EmployeeUncheckedUpdateWithoutVacationsInput>
  }

  export type EmployeeUpdateWithoutVacationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leavePolicy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    resignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutVacationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leavePolicy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    resignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageUpsertWithWhereUniqueWithoutVacationInput = {
    where: VacationUsageWhereUniqueInput
    update: XOR<VacationUsageUpdateWithoutVacationInput, VacationUsageUncheckedUpdateWithoutVacationInput>
    create: XOR<VacationUsageCreateWithoutVacationInput, VacationUsageUncheckedCreateWithoutVacationInput>
  }

  export type VacationUsageUpdateWithWhereUniqueWithoutVacationInput = {
    where: VacationUsageWhereUniqueInput
    data: XOR<VacationUsageUpdateWithoutVacationInput, VacationUsageUncheckedUpdateWithoutVacationInput>
  }

  export type VacationUsageUpdateManyWithWhereWithoutVacationInput = {
    where: VacationUsageScalarWhereInput
    data: XOR<VacationUsageUpdateManyMutationInput, VacationUsageUncheckedUpdateManyWithoutVacationInput>
  }

  export type VacationUsageScalarWhereInput = {
    AND?: VacationUsageScalarWhereInput | VacationUsageScalarWhereInput[]
    OR?: VacationUsageScalarWhereInput[]
    NOT?: VacationUsageScalarWhereInput | VacationUsageScalarWhereInput[]
    id?: IntFilter<"VacationUsage"> | number
    startDate?: DateTimeFilter<"VacationUsage"> | Date | string
    endDate?: DateTimeFilter<"VacationUsage"> | Date | string
    usedHours?: IntFilter<"VacationUsage"> | number
    type?: StringFilter<"VacationUsage"> | string
    reason?: StringNullableFilter<"VacationUsage"> | string | null
    vacationId?: IntFilter<"VacationUsage"> | number
    createdAt?: DateTimeFilter<"VacationUsage"> | Date | string
    updatedAt?: DateTimeFilter<"VacationUsage"> | Date | string
  }

  export type VacationCreateWithoutVacationUsagesInput = {
    year: number
    totalHours: number
    usedHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutVacationsInput
  }

  export type VacationUncheckedCreateWithoutVacationUsagesInput = {
    id?: number
    year: number
    totalHours: number
    usedHours?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationCreateOrConnectWithoutVacationUsagesInput = {
    where: VacationWhereUniqueInput
    create: XOR<VacationCreateWithoutVacationUsagesInput, VacationUncheckedCreateWithoutVacationUsagesInput>
  }

  export type VacationUpsertWithoutVacationUsagesInput = {
    update: XOR<VacationUpdateWithoutVacationUsagesInput, VacationUncheckedUpdateWithoutVacationUsagesInput>
    create: XOR<VacationCreateWithoutVacationUsagesInput, VacationUncheckedCreateWithoutVacationUsagesInput>
    where?: VacationWhereInput
  }

  export type VacationUpdateToOneWithWhereWithoutVacationUsagesInput = {
    where?: VacationWhereInput
    data: XOR<VacationUpdateWithoutVacationUsagesInput, VacationUncheckedUpdateWithoutVacationUsagesInput>
  }

  export type VacationUpdateWithoutVacationUsagesInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutVacationsNestedInput
  }

  export type VacationUncheckedUpdateWithoutVacationUsagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationCreateManyEmployeeInput = {
    id?: number
    year: number
    totalHours: number
    usedHours?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUpdateWithoutEmployeeInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacationUsages?: VacationUsageUpdateManyWithoutVacationNestedInput
  }

  export type VacationUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacationUsages?: VacationUsageUncheckedUpdateManyWithoutVacationNestedInput
  }

  export type VacationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: IntFieldUpdateOperationsInput | number
    usedHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageCreateManyVacationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    usedHours: number
    type: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacationUsageUpdateWithoutVacationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageUncheckedUpdateWithoutVacationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacationUsageUncheckedUpdateManyWithoutVacationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usedHours?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
     */
    export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VacationCountOutputTypeDefaultArgs instead
     */
    export type VacationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VacationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VacationDefaultArgs instead
     */
    export type VacationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VacationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VacationUsageDefaultArgs instead
     */
    export type VacationUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VacationUsageDefaultArgs<ExtArgs>

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