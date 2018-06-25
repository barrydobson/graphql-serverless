(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphQLError = __webpack_require__(12);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});

var _syntaxError = __webpack_require__(101);

Object.defineProperty(exports, 'syntaxError', {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});

var _locatedError = __webpack_require__(47);

Object.defineProperty(exports, 'locatedError', {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});

var _printError = __webpack_require__(44);

Object.defineProperty(exports, 'printError', {
  enumerable: true,
  get: function get() {
    return _printError.printError;
  }
});

var _formatError = __webpack_require__(102);

Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isType = isType;
exports.assertType = assertType;
exports.isScalarType = isScalarType;
exports.assertScalarType = assertScalarType;
exports.isObjectType = isObjectType;
exports.assertObjectType = assertObjectType;
exports.isInterfaceType = isInterfaceType;
exports.assertInterfaceType = assertInterfaceType;
exports.isUnionType = isUnionType;
exports.assertUnionType = assertUnionType;
exports.isEnumType = isEnumType;
exports.assertEnumType = assertEnumType;
exports.isInputObjectType = isInputObjectType;
exports.assertInputObjectType = assertInputObjectType;
exports.isListType = isListType;
exports.assertListType = assertListType;
exports.isNonNullType = isNonNullType;
exports.assertNonNullType = assertNonNullType;
exports.isInputType = isInputType;
exports.assertInputType = assertInputType;
exports.isOutputType = isOutputType;
exports.assertOutputType = assertOutputType;
exports.isLeafType = isLeafType;
exports.assertLeafType = assertLeafType;
exports.isCompositeType = isCompositeType;
exports.assertCompositeType = assertCompositeType;
exports.isAbstractType = isAbstractType;
exports.assertAbstractType = assertAbstractType;
exports.GraphQLList = GraphQLList;
exports.GraphQLNonNull = GraphQLNonNull;
exports.isWrappingType = isWrappingType;
exports.assertWrappingType = assertWrappingType;
exports.isNullableType = isNullableType;
exports.assertNullableType = assertNullableType;
exports.getNullableType = getNullableType;
exports.isNamedType = isNamedType;
exports.assertNamedType = assertNamedType;
exports.getNamedType = getNamedType;

var _instanceOf = __webpack_require__(29);

var _instanceOf2 = _interopRequireDefault(_instanceOf);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(2);

var _valueFromASTUntyped = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

// Predicates & Assertions

/**
 * These are all of the possible kinds of types.
 */
function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}

function assertType(type) {
  !isType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL type.') : void 0;
  return type;
}

/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return (0, _instanceOf2.default)(type, GraphQLScalarType);
}

function assertScalarType(type) {
  !isScalarType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Scalar type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return (0, _instanceOf2.default)(type, GraphQLObjectType);
}

function assertObjectType(type) {
  !isObjectType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Object type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return (0, _instanceOf2.default)(type, GraphQLInterfaceType);
}

function assertInterfaceType(type) {
  !isInterfaceType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Interface type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return (0, _instanceOf2.default)(type, GraphQLUnionType);
}

function assertUnionType(type) {
  !isUnionType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Union type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return (0, _instanceOf2.default)(type, GraphQLEnumType);
}

function assertEnumType(type) {
  !isEnumType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Enum type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return (0, _instanceOf2.default)(type, GraphQLInputObjectType);
}

function assertInputObjectType(type) {
  !isInputObjectType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Input Object type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isListType(type) {
  return (0, _instanceOf2.default)(type, GraphQLList);
}

function assertListType(type) {
  !isListType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL List type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return (0, _instanceOf2.default)(type, GraphQLNonNull);
}

function assertNonNullType(type) {
  !isNonNullType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL Non-Null type.') : void 0;
  return type;
}

/**
 * These types may be used as input types for arguments and directives.
 */
function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}

function assertInputType(type) {
  !isInputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL input type.') : void 0;
  return type;
}

/**
 * These types may be used as output types as the result of fields.
 */
function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}

function assertOutputType(type) {
  !isOutputType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL output type.') : void 0;
  return type;
}

/**
 * These types may describe types which may be leaf values.
 */
function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}

function assertLeafType(type) {
  !isLeafType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL leaf type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}

function assertCompositeType(type) {
  !isCompositeType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL composite type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */
function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}

function assertAbstractType(type) {
  !isAbstractType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL abstract type.') : void 0;
  return type;
}

/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */

// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
}

// Also provide toJSON and inspect aliases for toString.
var listProto = GraphQLList.prototype;
listProto.toString = listProto.toJSON = listProto.inspect = function toString() {
  return '[' + String(this.ofType) + ']';
};

/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
}

// Also provide toJSON and inspect aliases for toString.
var nonNullProto = GraphQLNonNull.prototype;
nonNullProto.toString = nonNullProto.toJSON = nonNullProto.inspect = function toString() {
  return String(this.ofType) + '!';
};

/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}

function assertWrappingType(type) {
  !isWrappingType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL wrapping type.') : void 0;
  return type;
}

/**
 * These types can all accept null as a value.
 */
function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}

function assertNullableType(type) {
  !isNullableType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL nullable type.') : void 0;
  return type;
}

/* eslint-disable no-redeclare */
function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}

/**
 * These named types do not include modifiers like List or NonNull.
 */
function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}

function assertNamedType(type) {
  !isNamedType(type) ? (0, _invariant2.default)(0, 'Expected ' + String(type) + ' to be a GraphQL named type.') : void 0;
  return type;
}

/* eslint-disable no-redeclare */
function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;
    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }
    return unwrappedType;
  }
}

/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */


function resolveThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */

var GraphQLScalarType = exports.GraphQLScalarType = function () {
  function GraphQLScalarType(config) {
    _classCallCheck(this, GraphQLScalarType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._scalarConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant2.default)(0, 'Must provide name.') : void 0;
    !(typeof config.serialize === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;
    if (config.parseValue || config.parseLiteral) {
      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.') : void 0;
    }
  }

  // Serializes an internal value to include in a response.


  GraphQLScalarType.prototype.serialize = function serialize(value) {
    var serializer = this._scalarConfig.serialize;
    return serializer(value);
  };

  // Parses an externally provided value to use as an input.


  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
    var parser = this._scalarConfig.parseValue;
    if ((0, _isInvalid2.default)(value)) {
      return undefined;
    }
    return parser ? parser(value) : value;
  };

  // Parses an externally provided literal value to use as an input.


  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode, variables) {
    var parser = this._scalarConfig.parseLiteral;
    return parser ? parser(valueNode, variables) : (0, _valueFromASTUntyped.valueFromASTUntyped)(valueNode, variables);
  };

  GraphQLScalarType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = exports.GraphQLObjectType = function () {
  function GraphQLObjectType(config) {
    _classCallCheck(this, GraphQLObjectType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.isTypeOf = config.isTypeOf;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant2.default)(0, 'Must provide name.') : void 0;
    if (config.isTypeOf) {
      !(typeof config.isTypeOf === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "isTypeOf" as a function.') : void 0;
    }
  }

  GraphQLObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
  };

  GraphQLObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

function defineInterfaces(type, interfacesThunk) {
  var interfaces = resolveThunk(interfacesThunk) || [];
  !Array.isArray(interfaces) ? (0, _invariant2.default)(0, type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.') : void 0;
  return interfaces;
}

function defineFieldMap(type, fieldsThunk) {
  var fieldMap = resolveThunk(fieldsThunk) || {};
  !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

  var resultFieldMap = Object.create(null);
  Object.keys(fieldMap).forEach(function (fieldName) {
    var fieldConfig = fieldMap[fieldName];
    !isPlainObj(fieldConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field config must be an object') : void 0;
    !!fieldConfig.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    var field = _extends({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName
    });
    !isValidResolver(field.resolve) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.')) : void 0;
    var argsConfig = fieldConfig.args;
    if (!argsConfig) {
      field.args = [];
    } else {
      !isPlainObj(argsConfig) ? (0, _invariant2.default)(0, type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.') : void 0;
      field.args = Object.keys(argsConfig).map(function (argName) {
        var arg = argsConfig[argName];
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          astNode: arg.astNode
        };
      });
    }
    resultFieldMap[fieldName] = field;
  });
  return resultFieldMap;
}

function isPlainObj(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
}

// If a resolver is defined, it must be a function.
function isValidResolver(resolver) {
  return resolver == null || typeof resolver === 'function';
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = exports.GraphQLInterfaceType = function () {
  function GraphQLInterfaceType(config) {
    _classCallCheck(this, GraphQLInterfaceType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.resolveType = config.resolveType;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant2.default)(0, 'Must provide name.') : void 0;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
  }

  GraphQLInterfaceType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLInterfaceType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = exports.GraphQLUnionType = function () {
  function GraphQLUnionType(config) {
    _classCallCheck(this, GraphQLUnionType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.resolveType = config.resolveType;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant2.default)(0, 'Must provide name.') : void 0;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant2.default)(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
  }

  GraphQLUnionType.prototype.getTypes = function getTypes() {
    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
  };

  GraphQLUnionType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

function defineTypes(unionType, typesThunk) {
  var types = resolveThunk(typesThunk) || [];
  !Array.isArray(types) ? (0, _invariant2.default)(0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.')) : void 0;
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType /* <T> */ = exports.GraphQLEnumType = function () {
  function GraphQLEnumType(config /* <T> */) {
    _classCallCheck(this, GraphQLEnumType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._enumConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant2.default)(0, 'Must provide name.') : void 0;
  }

  GraphQLEnumType.prototype.getValues = function getValues() {
    return this._values || (this._values = defineEnumValues(this, this._enumConfig.values));
  };

  GraphQLEnumType.prototype.getValue = function getValue(name) {
    return this._getNameLookup()[name];
  };

  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
    var enumValue = this._getValueLookup().get(value);
    if (enumValue) {
      return enumValue.name;
    }
  };

  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
    if (typeof value === 'string') {
      var enumValue = this._getNameLookup()[value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode, _variables) /* T */{
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === _kinds.Kind.ENUM) {
      var enumValue = this._getNameLookup()[valueNode.value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
    if (!this._valueLookup) {
      var lookup = new Map();
      this.getValues().forEach(function (value) {
        lookup.set(value.value, value);
      });
      this._valueLookup = lookup;
    }
    return this._valueLookup;
  };

  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
    if (!this._nameLookup) {
      var lookup = Object.create(null);
      this.getValues().forEach(function (value) {
        lookup[value.name] = value;
      });
      this._nameLookup = lookup;
    }
    return this._nameLookup;
  };

  GraphQLEnumType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

function defineEnumValues(type, valueMap /* <T> */
) {
  !isPlainObj(valueMap) ? (0, _invariant2.default)(0, type.name + ' values must be an object with value names as keys.') : void 0;
  return Object.keys(valueMap).map(function (valueName) {
    var value = valueMap[valueName];
    !isPlainObj(value) ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.')) : void 0;
    !!value.hasOwnProperty('isDeprecated') ? (0, _invariant2.default)(0, type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      astNode: value.astNode,
      value: value.hasOwnProperty('value') ? value.value : valueName
    };
  });
} /* <T> */

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = exports.GraphQLInputObjectType = function () {
  function GraphQLInputObjectType(config) {
    _classCallCheck(this, GraphQLInputObjectType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant2.default)(0, 'Must provide name.') : void 0;
  }

  GraphQLInputObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = this._defineFieldMap());
  };

  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
    var _this = this;

    var fieldMap = resolveThunk(this._typeConfig.fields) || {};
    !isPlainObj(fieldMap) ? (0, _invariant2.default)(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
    var resultFieldMap = Object.create(null);
    Object.keys(fieldMap).forEach(function (fieldName) {
      var field = _extends({}, fieldMap[fieldName], {
        name: fieldName
      });
      !!field.hasOwnProperty('resolve') ? (0, _invariant2.default)(0, _this.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.') : void 0;
      resultFieldMap[fieldName] = field;
    });
    return resultFieldMap;
  };

  GraphQLInputObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}();

// Also provide toJSON and inspect aliases for toString.


GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.toString;
GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = exports.Kind = Object.freeze({
  // Name
  NAME: 'Name',

  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  VARIABLE: 'Variable',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',

  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',

  // Values
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',

  // Directives
  DIRECTIVE: 'Directive',

  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',

  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',

  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',

  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',

  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition'
});

/**
 * The enum type representing the possible kind values of AST nodes.
 */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLSchema = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isSchema = isSchema;

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(7);

var _find = __webpack_require__(16);

var _find2 = _interopRequireDefault(_find);

var _instanceOf = __webpack_require__(29);

var _instanceOf2 = _interopRequireDefault(_instanceOf);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

// eslint-disable-next-line no-redeclare


/**
 * Test if the given value is a GraphQL schema.
 */
function isSchema(schema) {
  return (0, _instanceOf2.default)(schema, GraphQLSchema);
}

/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */

var GraphQLSchema = exports.GraphQLSchema = function () {
  // Used as a cache for validateSchema().
  function GraphQLSchema(config) {
    var _this = this;

    _classCallCheck(this, GraphQLSchema);

    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    if (config && config.assumeValid) {
      this.__validationErrors = [];
    } else {
      // Otherwise check for common mistakes during construction to produce
      // clear and early error messages.
      !((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') ? (0, _invariant2.default)(0, 'Must provide configuration object.') : void 0;
      !(!config.types || Array.isArray(config.types)) ? (0, _invariant2.default)(0, '"types" must be Array if provided but got: ' + String(config.types) + '.') : void 0;
      !(!config.directives || Array.isArray(config.directives)) ? (0, _invariant2.default)(0, '"directives" must be Array if provided but got: ' + (String(config.directives) + '.')) : void 0;
      !(!config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames)) ? (0, _invariant2.default)(0, '"allowedLegacyNames" must be Array if provided but got: ' + (String(config.allowedLegacyNames) + '.')) : void 0;
    }

    this.__allowedLegacyNames = config.allowedLegacyNames;
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription;
    // Provide specified directives (e.g. @include and @skip) by default.
    this._directives = config.directives || _directives.specifiedDirectives;
    this.astNode = config.astNode;

    // Build type map now to detect any errors within this schema.
    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection.__Schema];

    var types = config.types;
    if (types) {
      initialTypes = initialTypes.concat(types);
    }

    // Keep track of all types referenced within the schema.
    var typeMap = Object.create(null);

    // First by deeply visiting all initial types.
    typeMap = initialTypes.reduce(typeMapReducer, typeMap);

    // Then by deeply visiting all directive types.
    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap);

    // Storing the resulting map for reference by the schema.
    this._typeMap = typeMap;

    // Keep track of all implementations by interface name.
    this._implementations = Object.create(null);
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if ((0, _definition.isObjectType)(type)) {
        type.getInterfaces().forEach(function (iface) {
          if ((0, _definition.isInterfaceType)(iface)) {
            var impls = _this._implementations[iface.name];
            if (impls) {
              impls.push(type);
            } else {
              _this._implementations[iface.name] = [type];
            }
          }
        });
      }
    });
  }
  // Referenced by validateSchema().


  GraphQLSchema.prototype.getQueryType = function getQueryType() {
    return this._queryType;
  };

  GraphQLSchema.prototype.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  GraphQLSchema.prototype.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
    if ((0, _definition.isUnionType)(abstractType)) {
      return abstractType.getTypes();
    }
    return this._implementations[abstractType.name];
  };

  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;
    if (!possibleTypeMap) {
      this._possibleTypeMap = possibleTypeMap = Object.create(null);
    }

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      !Array.isArray(possibleTypes) ? (0, _invariant2.default)(0, 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.') : void 0;
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        return map[type.name] = true, map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  GraphQLSchema.prototype.getDirectives = function getDirectives() {
    return this._directives;
  };

  GraphQLSchema.prototype.getDirective = function getDirective(name) {
    return (0, _find2.default)(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  return GraphQLSchema;
}();

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }
  if ((0, _definition.isWrappingType)(type)) {
    return typeMapReducer(map, type.ofType);
  }
  if (map[type.name]) {
    !(map[type.name] === type) ? (0, _invariant2.default)(0, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".')) : void 0;
    return map;
  }
  map[type.name] = type;

  var reducedMap = map;

  if ((0, _definition.isUnionType)(type)) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if ((0, _definition.isObjectType)(type)) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
    (0, _objectValues2.default)(type.getFields()).forEach(function (field) {
      if (field.args) {
        var fieldArgTypes = field.args.map(function (arg) {
          return arg.type;
        });
        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      }
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  if ((0, _definition.isInputObjectType)(type)) {
    (0, _objectValues2.default)(type.getFields()).forEach(function (field) {
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  return reducedMap;
}

function typeMapDirectiveReducer(map, directive) {
  // Directives are not validated until validateSchema() is called.
  if (!(0, _directives.isDirective)(directive)) {
    return map;
  }
  return directive.args.reduce(function (_map, arg) {
    return typeMapReducer(_map, arg.type);
  }, map);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInvalid;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedDirectives = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = undefined;
exports.isDirective = isDirective;
exports.isSpecifiedDirective = isSpecifiedDirective;

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(9);

var _instanceOf = __webpack_require__(29);

var _instanceOf2 = _interopRequireDefault(_instanceOf);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _directiveLocation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

// eslint-disable-next-line no-redeclare


/**
 * Test if the given value is a GraphQL directive.
 */
function isDirective(directive) {
  return (0, _instanceOf2.default)(directive, GraphQLDirective);
}

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */

var GraphQLDirective = exports.GraphQLDirective = function GraphQLDirective(config) {
  _classCallCheck(this, GraphQLDirective);

  this.name = config.name;
  this.description = config.description;
  this.locations = config.locations;
  this.astNode = config.astNode;
  !config.name ? (0, _invariant2.default)(0, 'Directive must be named.') : void 0;
  !Array.isArray(config.locations) ? (0, _invariant2.default)(0, 'Must provide locations for directive.') : void 0;

  var args = config.args;
  if (!args) {
    this.args = [];
  } else {
    !!Array.isArray(args) ? (0, _invariant2.default)(0, '@' + config.name + ' args must be an object with argument names as keys.') : void 0;
    this.args = Object.keys(args).map(function (argName) {
      var arg = args[argName];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
  }
};

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = exports.GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [_directiveLocation.DirectiveLocation.FIELD, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});

/**
 * Used to conditionally skip (exclude) fields or fragments.
 */
var GraphQLSkipDirective = exports.GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [_directiveLocation.DirectiveLocation.FIELD, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});

/**
 * Constant string used for default reason for a deprecation.
 */
var DEFAULT_DEPRECATION_REASON = exports.DEFAULT_DEPRECATION_REASON = 'No longer supported';

/**
 * Used to declare element of a GraphQL schema as deprecated.
 */
var GraphQLDeprecatedDirective = exports.GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [_directiveLocation.DirectiveLocation.FIELD_DEFINITION, _directiveLocation.DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: _scalars.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});

/**
 * The full list of specified directives.
 */
var specifiedDirectives = exports.specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(function (specifiedDirective) {
    return specifiedDirective.name === directive.name;
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.introspectionTypes = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = undefined;
exports.isIntrospectionType = isIntrospectionType;

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _astFromValue = __webpack_require__(30);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(9);

var _directiveLocation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __Schema = exports.__Schema = new _definition.GraphQLObjectType({
  name: '__Schema',
  isIntrospection: true,
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: (0, _definition.GraphQLNonNull)((0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__Type))),
        resolve: function resolve(schema) {
          return (0, _objectValues2.default)(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: (0, _definition.GraphQLNonNull)(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: (0, _definition.GraphQLNonNull)((0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
}); /**
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     *  strict
     */

var __Directive = exports.__Directive = new _definition.GraphQLObjectType({
  name: '__Directive',
  isIntrospection: true,
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + "\n\nIn some cases, you need to provide options to alter GraphQL's " + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      locations: {
        type: (0, _definition.GraphQLNonNull)((0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__DirectiveLocation)))
      },
      args: {
        type: (0, _definition.GraphQLNonNull)((0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      },
      // NOTE: the following three fields are deprecated and are no longer part
      // of the GraphQL specification.
      onOperation: {
        deprecationReason: 'Use `locations`.',
        type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directiveLocation.DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(_directiveLocation.DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(_directiveLocation.DirectiveLocation.SUBSCRIPTION) !== -1;
        }
      },
      onFragment: {
        deprecationReason: 'Use `locations`.',
        type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directiveLocation.DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(_directiveLocation.DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(_directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
        }
      },
      onField: {
        deprecationReason: 'Use `locations`.',
        type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(_directiveLocation.DirectiveLocation.FIELD) !== -1;
        }
      }
    };
  }
});

var __DirectiveLocation = exports.__DirectiveLocation = new _definition.GraphQLEnumType({
  name: '__DirectiveLocation',
  isIntrospection: true,
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _directiveLocation.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _directiveLocation.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _directiveLocation.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _directiveLocation.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    SCHEMA: {
      value: _directiveLocation.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _directiveLocation.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _directiveLocation.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _directiveLocation.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _directiveLocation.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _directiveLocation.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _directiveLocation.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _directiveLocation.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});

var __Type = exports.__Type = new _definition.GraphQLObjectType({
  name: '__Type',
  isIntrospection: true,
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: (0, _definition.GraphQLNonNull)(__TypeKind),
        resolve: function resolve(type) {
          if ((0, _definition.isScalarType)(type)) {
            return TypeKind.SCALAR;
          } else if ((0, _definition.isObjectType)(type)) {
            return TypeKind.OBJECT;
          } else if ((0, _definition.isInterfaceType)(type)) {
            return TypeKind.INTERFACE;
          } else if ((0, _definition.isUnionType)(type)) {
            return TypeKind.UNION;
          } else if ((0, _definition.isEnumType)(type)) {
            return TypeKind.ENUM;
          } else if ((0, _definition.isInputObjectType)(type)) {
            return TypeKind.INPUT_OBJECT;
          } else if ((0, _definition.isListType)(type)) {
            return TypeKind.LIST;
          } else if ((0, _definition.isNonNullType)(type)) {
            return TypeKind.NON_NULL;
          }
          throw new Error('Unknown kind of type: ' + type);
        }
      },
      name: { type: _scalars.GraphQLString },
      description: { type: _scalars.GraphQLString },
      fields: {
        type: (0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__Field)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
            var fields = (0, _objectValues2.default)(type.getFields());
            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }
            return fields;
          }
          return null;
        }
      },
      interfaces: {
        type: (0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__Type)),
        resolve: function resolve(type) {
          if ((0, _definition.isObjectType)(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: (0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if ((0, _definition.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: (0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__EnumValue)),
        args: {
          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if ((0, _definition.isEnumType)(type)) {
            var values = type.getValues();
            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }
            return values;
          }
        }
      },
      inputFields: {
        type: (0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__InputValue)),
        resolve: function resolve(type) {
          if ((0, _definition.isInputObjectType)(type)) {
            return (0, _objectValues2.default)(type.getFields());
          }
        }
      },
      ofType: { type: __Type }
    };
  }
});

var __Field = exports.__Field = new _definition.GraphQLObjectType({
  name: '__Field',
  isIntrospection: true,
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      args: {
        type: (0, _definition.GraphQLNonNull)((0, _definition.GraphQLList)((0, _definition.GraphQLNonNull)(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: { type: (0, _definition.GraphQLNonNull)(__Type) },
      isDeprecated: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var __InputValue = exports.__InputValue = new _definition.GraphQLObjectType({
  name: '__InputValue',
  isIntrospection: true,
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      type: { type: (0, _definition.GraphQLNonNull)(__Type) },
      defaultValue: {
        type: _scalars.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          return (0, _isInvalid2.default)(inputVal.defaultValue) ? null : (0, _printer.print)((0, _astFromValue.astFromValue)(inputVal.defaultValue, inputVal.type));
        }
      }
    };
  }
});

var __EnumValue = exports.__EnumValue = new _definition.GraphQLObjectType({
  name: '__EnumValue',
  isIntrospection: true,
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLString) },
      description: { type: _scalars.GraphQLString },
      isDeprecated: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLBoolean) },
      deprecationReason: {
        type: _scalars.GraphQLString
      }
    };
  }
});

var TypeKind = exports.TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};

var __TypeKind = exports.__TypeKind = new _definition.GraphQLEnumType({
  name: '__TypeKind',
  isIntrospection: true,
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
    }
  }
});

/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = exports.SchemaMetaFieldDef = {
  name: '__schema',
  type: (0, _definition.GraphQLNonNull)(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};

var TypeMetaFieldDef = exports.TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{ name: 'name', type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLString) }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};

var TypeNameMetaFieldDef = exports.TypeNameMetaFieldDef = {
  name: '__typename',
  type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};

var introspectionTypes = exports.introspectionTypes = [__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind];

function isIntrospectionType(type) {
  return (0, _definition.isNamedType)(type) && (
  // Would prefer to use introspectionTypes.some(), however %checks needs
  // a simple expression.
  type.name === __Schema.name || type.name === __Directive.name || type.name === __DirectiveLocation.name || type.name === __Type.name || type.name === __Field.name || type.name === __InputValue.name || type.name === __EnumValue.name || type.name === __TypeKind.name);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFromAST = typeFromAST;

var _kinds = __webpack_require__(2);

var _definition = __webpack_require__(1);

/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */
/* eslint-disable no-redeclare */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType = void 0;
  if (typeNode.kind === _kinds.Kind.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && (0, _definition.GraphQLList)(innerType);
  }
  if (typeNode.kind === _kinds.Kind.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && (0, _definition.GraphQLNonNull)(innerType);
  }
  if (typeNode.kind === _kinds.Kind.NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  }
  /* istanbul ignore next */
  throw new Error('Unexpected type kind: ' + typeNode.kind + '.');
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedScalarTypes = exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = undefined;
exports.isSpecifiedScalarType = isSpecifiedScalarType;

var _definition = __webpack_require__(1);

var _kinds = __webpack_require__(2);

// As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function coerceInt(value) {
  if (value === '') {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
  }
  var num = Number(value);
  if (num !== num || num > MAX_INT || num < MIN_INT) {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
  }
  var int = Math.floor(num);
  if (int !== num) {
    throw new TypeError('Int cannot represent non-integer value: ' + String(value));
  }
  return int;
}

var GraphQLInt = exports.GraphQLInt = new _definition.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: coerceInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === _kinds.Kind.INT) {
      var num = parseInt(ast.value, 10);
      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }
    return undefined;
  }
});

function coerceFloat(value) {
  if (value === '') {
    throw new TypeError('Float cannot represent non numeric value: (empty string)');
  }
  var num = Number(value);
  if (num === num) {
    return num;
  }
  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
}

var GraphQLFloat = exports.GraphQLFloat = new _definition.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: coerceFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _kinds.Kind.FLOAT || ast.kind === _kinds.Kind.INT ? parseFloat(ast.value) : undefined;
  }
});

function coerceString(value) {
  if (Array.isArray(value)) {
    throw new TypeError('String cannot represent an array value: [' + String(value) + ']');
  }
  return String(value);
}

var GraphQLString = exports.GraphQLString = new _definition.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _kinds.Kind.STRING ? ast.value : undefined;
  }
});

var GraphQLBoolean = exports.GraphQLBoolean = new _definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: Boolean,
  parseValue: Boolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _kinds.Kind.BOOLEAN ? ast.value : undefined;
  }
});

var GraphQLID = exports.GraphQLID = new _definition.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: String,
  parseValue: String,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === _kinds.Kind.STRING || ast.kind === _kinds.Kind.INT ? ast.value : undefined;
  }
});

var specifiedScalarTypes = exports.specifiedScalarTypes = [GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID];

function isSpecifiedScalarType(type) {
  return (0, _definition.isNamedType)(type) && (
  // Would prefer to use specifiedScalarTypes.some(), however %checks needs
  // a simple expression.
  type.name === GraphQLString.name || type.name === GraphQLInt.name || type.name === GraphQLFloat.name || type.name === GraphQLBoolean.name || type.name === GraphQLID.name);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
exports.default = objectValues;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(14);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (
      // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      'fragment ' + name + wrap('(', join(variableDefinitions, ', '), ')') + ' ' + ('on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),

  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),

  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  }),

  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),

  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),

  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),

  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),

  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),

  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),

  ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
    var name = _ref31.name,
        directives = _ref31.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
    var name = _ref32.name,
        interfaces = _ref32.interfaces,
        directives = _ref32.directives,
        fields = _ref32.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },

  InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives,
        fields = _ref33.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeExtension: function UnionTypeExtension(_ref34) {
    var name = _ref34.name,
        directives = _ref34.directives,
        types = _ref34.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },

  EnumTypeExtension: function EnumTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        values = _ref35.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },

  InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        fields = _ref36.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  },

  DirectiveDefinition: addDescription(function (_ref37) {
    var name = _ref37.name,
        args = _ref37.arguments,
        locations = _ref37.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  })
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */
function printBlockString(value, isDescription) {
  var escaped = value.replace(/"""/g, '\\"""');
  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? '"""' + escaped.replace(/"$/, '"\n') + '"""' : '"""\n' + (isDescription ? escaped : indent(escaped)) + '\n"""';
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _printError = __webpack_require__(44);

var _location = __webpack_require__(31);

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined;

  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }
      return list;
    }, []);
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  if (positions && source) {
    _locations = positions.map(function (pos) {
      return (0, _location.getLocation)(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
      }
      return list;
    }, []);
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      value: extensions || originalError && originalError.extensions
    }
  });

  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' },
  toString: {
    value: function toString() {
      return (0, _printError.printError)(this);
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMap;


/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = item, map;
  }, Object.create(null));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;


/**
 * A visitor is comprised of visit functions, which are called on each node
 * during the visitor's traversal.
 */


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name',
  // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],

  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],

  DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
};

/**
 * A KeyMap describes each the traversable properties of each kind of node.
 */
var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = exports.DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});

/**
 * The enum type representing the directive location values.
 */

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__graphql__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__graphql__, "graphql")) __webpack_require__.d(__webpack_exports__, "graphql", function() { return __WEBPACK_IMPORTED_MODULE_0__graphql__["graphql"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__graphql__, "graphqlSync")) __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return __WEBPACK_IMPORTED_MODULE_0__graphql__["graphqlSync"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__type__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLSchema")) __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLScalarType")) __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLScalarType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLObjectType")) __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLObjectType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLInterfaceType")) __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLInterfaceType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLUnionType")) __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLUnionType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLEnumType")) __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLEnumType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLInputObjectType")) __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLInputObjectType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLList")) __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLList"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLNonNull")) __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLNonNull"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLDirective")) __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLDirective"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "TypeKind")) __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["TypeKind"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "specifiedScalarTypes")) __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["specifiedScalarTypes"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLInt")) __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLInt"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLFloat")) __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLFloat"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLString")) __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLString"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLBoolean")) __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLBoolean"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLID")) __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLID"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "specifiedDirectives")) __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["specifiedDirectives"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLIncludeDirective")) __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLIncludeDirective"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLSkipDirective")) __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLSkipDirective"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "GraphQLDeprecatedDirective")) __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["GraphQLDeprecatedDirective"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "DEFAULT_DEPRECATION_REASON")) __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["DEFAULT_DEPRECATION_REASON"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "SchemaMetaFieldDef")) __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["SchemaMetaFieldDef"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "TypeMetaFieldDef")) __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["TypeMetaFieldDef"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "TypeNameMetaFieldDef")) __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["TypeNameMetaFieldDef"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "introspectionTypes")) __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["introspectionTypes"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__Schema")) __webpack_require__.d(__webpack_exports__, "__Schema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__Schema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__Directive")) __webpack_require__.d(__webpack_exports__, "__Directive", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__Directive"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__DirectiveLocation")) __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__DirectiveLocation"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__Type")) __webpack_require__.d(__webpack_exports__, "__Type", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__Type"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__Field")) __webpack_require__.d(__webpack_exports__, "__Field", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__Field"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__InputValue")) __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__InputValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__EnumValue")) __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__EnumValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "__TypeKind")) __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["__TypeKind"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isSchema")) __webpack_require__.d(__webpack_exports__, "isSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isDirective")) __webpack_require__.d(__webpack_exports__, "isDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isDirective"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isType")) __webpack_require__.d(__webpack_exports__, "isType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isScalarType")) __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isScalarType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isObjectType")) __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isObjectType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isInterfaceType")) __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isInterfaceType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isUnionType")) __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isUnionType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isEnumType")) __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isEnumType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isInputObjectType")) __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isInputObjectType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isListType")) __webpack_require__.d(__webpack_exports__, "isListType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isListType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isNonNullType")) __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isNonNullType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isInputType")) __webpack_require__.d(__webpack_exports__, "isInputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isInputType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isOutputType")) __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isOutputType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isLeafType")) __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isLeafType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isCompositeType")) __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isCompositeType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isAbstractType")) __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isAbstractType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isWrappingType")) __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isWrappingType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isNullableType")) __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isNullableType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isNamedType")) __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isNamedType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isSpecifiedScalarType")) __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isSpecifiedScalarType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isIntrospectionType")) __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isIntrospectionType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "isSpecifiedDirective")) __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["isSpecifiedDirective"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertType")) __webpack_require__.d(__webpack_exports__, "assertType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertScalarType")) __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertScalarType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertObjectType")) __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertObjectType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertInterfaceType")) __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertInterfaceType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertUnionType")) __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertUnionType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertEnumType")) __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertEnumType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertInputObjectType")) __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertInputObjectType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertListType")) __webpack_require__.d(__webpack_exports__, "assertListType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertListType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertNonNullType")) __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertNonNullType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertInputType")) __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertInputType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertOutputType")) __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertOutputType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertLeafType")) __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertLeafType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertCompositeType")) __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertCompositeType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertAbstractType")) __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertAbstractType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertWrappingType")) __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertWrappingType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertNullableType")) __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertNullableType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertNamedType")) __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertNamedType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "getNullableType")) __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["getNullableType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "getNamedType")) __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["getNamedType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "validateSchema")) __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["validateSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__type__, "assertValidSchema")) __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["assertValidSchema"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__language__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "Source")) __webpack_require__.d(__webpack_exports__, "Source", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["Source"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "getLocation")) __webpack_require__.d(__webpack_exports__, "getLocation", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["getLocation"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "parse")) __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["parse"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "parseValue")) __webpack_require__.d(__webpack_exports__, "parseValue", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["parseValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "parseType")) __webpack_require__.d(__webpack_exports__, "parseType", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["parseType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "print")) __webpack_require__.d(__webpack_exports__, "print", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["print"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "visit")) __webpack_require__.d(__webpack_exports__, "visit", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["visit"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "visitInParallel")) __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["visitInParallel"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "visitWithTypeInfo")) __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["visitWithTypeInfo"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "getVisitFn")) __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["getVisitFn"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "Kind")) __webpack_require__.d(__webpack_exports__, "Kind", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["Kind"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "TokenKind")) __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["TokenKind"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "DirectiveLocation")) __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["DirectiveLocation"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__language__, "BREAK")) __webpack_require__.d(__webpack_exports__, "BREAK", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["BREAK"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__execution__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__execution___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__execution__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__execution__, "execute")) __webpack_require__.d(__webpack_exports__, "execute", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["execute"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__execution__, "defaultFieldResolver")) __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["defaultFieldResolver"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__execution__, "responsePathAsArray")) __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["responsePathAsArray"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__execution__, "getDirectiveValues")) __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["getDirectiveValues"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscription__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__subscription__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__subscription__, "subscribe")) __webpack_require__.d(__webpack_exports__, "subscribe", function() { return __WEBPACK_IMPORTED_MODULE_4__subscription__["subscribe"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__subscription__, "createSourceEventStream")) __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return __WEBPACK_IMPORTED_MODULE_4__subscription__["createSourceEventStream"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__validation__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "validate")) __webpack_require__.d(__webpack_exports__, "validate", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["validate"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "ValidationContext")) __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["ValidationContext"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "specifiedRules")) __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["specifiedRules"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "FieldsOnCorrectTypeRule")) __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["FieldsOnCorrectTypeRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "FragmentsOnCompositeTypesRule")) __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["FragmentsOnCompositeTypesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "KnownArgumentNamesRule")) __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["KnownArgumentNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "KnownDirectivesRule")) __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["KnownDirectivesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "KnownFragmentNamesRule")) __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["KnownFragmentNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "KnownTypeNamesRule")) __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["KnownTypeNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "LoneAnonymousOperationRule")) __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["LoneAnonymousOperationRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "NoFragmentCyclesRule")) __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["NoFragmentCyclesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "NoUndefinedVariablesRule")) __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["NoUndefinedVariablesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "NoUnusedFragmentsRule")) __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["NoUnusedFragmentsRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "NoUnusedVariablesRule")) __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["NoUnusedVariablesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "OverlappingFieldsCanBeMergedRule")) __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["OverlappingFieldsCanBeMergedRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "PossibleFragmentSpreadsRule")) __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["PossibleFragmentSpreadsRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "ProvidedNonNullArgumentsRule")) __webpack_require__.d(__webpack_exports__, "ProvidedNonNullArgumentsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["ProvidedNonNullArgumentsRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "ScalarLeafsRule")) __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["ScalarLeafsRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "SingleFieldSubscriptionsRule")) __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["SingleFieldSubscriptionsRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "UniqueArgumentNamesRule")) __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["UniqueArgumentNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "UniqueDirectivesPerLocationRule")) __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["UniqueDirectivesPerLocationRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "UniqueFragmentNamesRule")) __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["UniqueFragmentNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "UniqueInputFieldNamesRule")) __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["UniqueInputFieldNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "UniqueOperationNamesRule")) __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["UniqueOperationNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "UniqueVariableNamesRule")) __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["UniqueVariableNamesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "ValuesOfCorrectTypeRule")) __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["ValuesOfCorrectTypeRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "VariablesAreInputTypesRule")) __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["VariablesAreInputTypesRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "VariablesDefaultValueAllowedRule")) __webpack_require__.d(__webpack_exports__, "VariablesDefaultValueAllowedRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["VariablesDefaultValueAllowedRule"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__validation__, "VariablesInAllowedPositionRule")) __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["VariablesInAllowedPositionRule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__error__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__error__, "GraphQLError")) __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["GraphQLError"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__error__, "formatError")) __webpack_require__.d(__webpack_exports__, "formatError", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["formatError"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__error__, "printError")) __webpack_require__.d(__webpack_exports__, "printError", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["printError"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__utilities__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "getIntrospectionQuery")) __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["getIntrospectionQuery"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "introspectionQuery")) __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["introspectionQuery"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "getOperationAST")) __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["getOperationAST"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "introspectionFromSchema")) __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["introspectionFromSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "buildClientSchema")) __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["buildClientSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "buildASTSchema")) __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["buildASTSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "buildSchema")) __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["buildSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "getDescription")) __webpack_require__.d(__webpack_exports__, "getDescription", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["getDescription"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "extendSchema")) __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["extendSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "lexicographicSortSchema")) __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["lexicographicSortSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "printSchema")) __webpack_require__.d(__webpack_exports__, "printSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["printSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "printIntrospectionSchema")) __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["printIntrospectionSchema"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "printType")) __webpack_require__.d(__webpack_exports__, "printType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["printType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "typeFromAST")) __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["typeFromAST"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "valueFromAST")) __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["valueFromAST"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "valueFromASTUntyped")) __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["valueFromASTUntyped"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "astFromValue")) __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["astFromValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "TypeInfo")) __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["TypeInfo"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "coerceValue")) __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["coerceValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "isValidJSValue")) __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["isValidJSValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "isValidLiteralValue")) __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["isValidLiteralValue"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "concatAST")) __webpack_require__.d(__webpack_exports__, "concatAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["concatAST"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "separateOperations")) __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["separateOperations"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "isEqualType")) __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["isEqualType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "isTypeSubTypeOf")) __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["isTypeSubTypeOf"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "doTypesOverlap")) __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["doTypesOverlap"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "assertValidName")) __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["assertValidName"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "isValidNameError")) __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["isValidNameError"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "findBreakingChanges")) __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["findBreakingChanges"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "findDangerousChanges")) __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["findDangerousChanges"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "BreakingChangeType")) __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["BreakingChangeType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "DangerousChangeType")) __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["DangerousChangeType"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__utilities__, "findDeprecatedUsages")) __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["findDeprecatedUsages"]; });



// Create and operate on GraphQL type definitions and schema.
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 *     import { parse } from 'graphql';
 *     import { parse } from 'graphql/language';
 */

// The primary entry point into fulfilling a GraphQL request.


// Parse and operate on GraphQL language source files.


// Execute GraphQL queries.




// Validate GraphQL queries.


// Create, format, and print GraphQL errors.


// Utilities for operating on GraphQL type schema and parsed sources.


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/* harmony export (immutable) */ __webpack_exports__["isIterable"] = isIterable;
/* harmony export (immutable) */ __webpack_exports__["isArrayLike"] = isArrayLike;
/* harmony export (immutable) */ __webpack_exports__["isCollection"] = isCollection;
/* harmony export (immutable) */ __webpack_exports__["getIterator"] = getIterator;
/* harmony export (immutable) */ __webpack_exports__["getIteratorMethod"] = getIteratorMethod;
/* harmony export (immutable) */ __webpack_exports__["createIterator"] = createIterator;
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$asyncIterator", function() { return $$asyncIterator; });
/* harmony export (immutable) */ __webpack_exports__["isAsyncIterable"] = isAsyncIterable;
/* harmony export (immutable) */ __webpack_exports__["getAsyncIterator"] = getAsyncIterator;
/* harmony export (immutable) */ __webpack_exports__["getAsyncIteratorMethod"] = getAsyncIteratorMethod;
/* harmony export (immutable) */ __webpack_exports__["createAsyncIterator"] = createAsyncIterator;
/* harmony export (immutable) */ __webpack_exports__["forAwaitEach"] = forAwaitEach;
/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterator
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a
 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterable
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
 */

// In ES2015 environments, Symbol exists
var SYMBOL /*: any */ = typeof Symbol === 'function' ? Symbol : void 0

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * {@link getIterator} or {@link isIterable}.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$iterator: '@@iterator'; */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
/*:: declare export function isIterable(obj: any): boolean; */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
/*:: declare export function isArrayLike(obj: any): boolean; */
function isArrayLike(obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
/*:: declare export function isCollection(obj: any): boolean; */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var getIterator:
  & (<+TValue>(iterable: Iterable<TValue>) => Iterator<TValue>)
  & ((iterable: mixed) => void | Iterator<mixed>); */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
/*:: declare export var getIteratorMethod:
  & (<+TValue>(iterable: Iterable<TValue>) => (() => Iterator<TValue>))
  & ((iterable: mixed) => (void | (() => Iterator<mixed>))); */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Similar to {@link getIterator}, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var createIterator:
  & (<+TValue>(collection: Iterable<TValue>) => Iterator<TValue>)
  & ((collection: {length: number}) => Iterator<mixed>)
  & ((collection: mixed) => (void | Iterator<mixed>)); */
function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forEach:
  & (<+TValue, TCollection: Iterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void)
  & (<TCollection: {length: number}>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void); */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * an asynchronous iteration behavior, such as what values are looped over in
 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
 * loop or `iterall`'s {@link forAwaitEach} function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterable
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the
 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
 *
 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
 * also as a `next()` method, however instead of an IteratorResult,
 * calling this method returns a {@link Promise} for a IteratorResult.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterator
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = SYMBOL && SYMBOL.asyncIterator

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use {@link getAsyncIterator} or {@link isAsyncIterable}.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(resolve => {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(() => {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       })
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$asyncIterator: '@@asyncIterator'; */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
/*:: declare export function isAsyncIterable(obj: any): boolean; */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var getAsyncIterator:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => AsyncIterator<TValue>)
  & ((asyncIterable: mixed) => (void | AsyncIterator<mixed>)); */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable)
  if (method) {
    return method.call(asyncIterable)
  }
}

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
/*:: declare export var getAsyncIteratorMethod:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => (() => AsyncIterator<TValue>))
  & ((asyncIterable: mixed) => (void | (() => AsyncIterator<mixed>))); */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator']
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Similar to {@link getAsyncIterator}, this method returns a new AsyncIterator
 * given an AsyncIterable. However it will also create an AsyncIterator for a
 * non-async Iterable as well as non-Iterable Array-like collection, such as
 * Array in a pre-ES2015 environment.
 *
 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
 * "push"-based iteration.
 *
 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
 *
 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var createAsyncIterator = require('iterall').createAsyncIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createAsyncIterator(myArraylike)
 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
 * iterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var createAsyncIterator:
  & (<+TValue>(
      collection: Iterable<Promise<TValue> | TValue> | AsyncIterable<TValue>
    ) => AsyncIterator<TValue>)
  & ((collection: {length: number}) => AsyncIterator<mixed>)
  & ((collection: mixed) => (void | AsyncIterator<mixed>)); */
function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source)
    if (asyncIterator) {
      return asyncIterator
    }
    var iterator = createIterator(source)
    if (iterator) {
      return new AsyncFromSyncIterator(iterator)
    }
  }
}

// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
  this._i = iterator
}

// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function() {
  var step = this._i.next()
  return Promise.resolve(step.value).then(function(value) {
    return { value: value, done: step.done }
  })
}

/**
 * Given an object which either implements the AsyncIterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forAwaitEach` where you would expect to use a [for-await-of](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements) loop.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var forAwaitEach = require('iterall').forAwaitEach
 *
 * forAwaitEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES2017:
 * for await (let value of myAsyncIterable) {
 *   console.log(await doSomethingAsync(value))
 * }
 * console.log('done')
 *
 * // Any JavaScript environment:
 * forAwaitEach(myAsyncIterable, function (value) {
 *   return doSomethingAsync(value).then(console.log)
 * }).then(function () {
 *   console.log('done')
 * })
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
 *   The AsyncIterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forAwaitEach:
  & (<+TValue, TCollection: Iterable<Promise<TValue> | TValue> | AsyncIterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => Promise<void>)
  & (<TCollection: { length: number }>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => Promise<void>); */
function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source)
  if (asyncIterator) {
    var i = 0
    return new Promise(function(resolve, reject) {
      function next() {
        asyncIterator
          .next()
          .then(function(step) {
            if (!step.done) {
              Promise.resolve(callback.call(thisArg, step.value, i++, source))
                .then(next)
                .catch(reject)
            } else {
              resolve()
            }
            // Explicitly return null, silencing bluebird-style warnings.
            return null
          })
          .catch(reject)
        // Explicitly return null, silencing bluebird-style warnings.
        return null
      }
      next()
    })
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _source = __webpack_require__(46);

var _error = __webpack_require__(0);

var _lexer = __webpack_require__(32);

var _kinds = __webpack_require__(2);

var _directiveLocation = __webpack_require__(15);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


/**
 * Configuration options to control parser behavior
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  if (!(sourceObj instanceof _source.Source)) {
    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
  }
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer.TokenKind.EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer.TokenKind.EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.Kind.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, _lexer.TokenKind.EOF));

  return {
    kind: _kinds.Kind.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        // Note: The schema definition language is an experimental addition.
        return parseTypeSystemDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    // Note: The schema definition language is an experimental addition.
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}

/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */
function parseExecutableDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.Kind.OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: _kinds.Kind.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.Kind.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: _kinds.Kind.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */
function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, item, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * Argument[Const] : Name : Value[?Const]
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SPREAD);
  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds.Kind.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = void 0;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: _kinds.Kind.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: _kinds.Kind.FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  return {
    kind: _kinds.Kind.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);
    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);
    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.Kind.INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.Kind.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.STRING:
    case _lexer.TokenKind.BLOCK_STRING:
      return parseStringLiteral(lexer);
    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.Kind.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.Kind.NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: _kinds.Kind.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: _kinds.Kind.STRING,
    value: token.value,
    block: token.kind === _lexer.TokenKind.BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.Kind.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.BRACE_L);
  var fields = [];
  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: _kinds.Kind.OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */
function parseDirectives(lexer, isConst) {
  var directives = [];
  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer, isConst));
  }
  return directives;
}

/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */
function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.Kind.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.Kind.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.Kind.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtension
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtension(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, _lexer.TokenKind.STRING) || peek(lexer, _lexer.TokenKind.BLOCK_STRING);
}

/**
 * Description : StringValue
 */
function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}

/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.Kind.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

/**
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    // Optional leading ampersand
    skip(lexer, _lexer.TokenKind.AMP);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer.TokenKind.AMP) ||
    // Legacy support for the SDL?
    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, _lexer.TokenKind.NAME));
  }
  return types;
}

/**
 * FieldsDefinition : { FieldDefinition+ }
 */
function parseFieldsDefinition(lexer) {
  // Legacy support for the SDL?
  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, _lexer.TokenKind.BRACE_L) && lexer.lookahead().kind === _lexer.TokenKind.BRACE_R) {
    lexer.advance();
    lexer.advance();
    return [];
  }
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }
  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}

/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = void 0;
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  return {
    kind: _kinds.Kind.UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */
function parseUnionMemberTypes(lexer) {
  var types = [];
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    // Optional leading pipe
    skip(lexer, _lexer.TokenKind.PIPE);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer.TokenKind.PIPE));
  }
  return types;
}

/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */
function parseEnumValuesDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */
function parseInputFieldsDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */
function parseTypeExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'scalar':
        return parseScalarTypeExtension(lexer);
      case 'type':
        return parseObjectTypeExtension(lexer);
      case 'interface':
        return parseInterfaceTypeExtension(lexer);
      case 'union':
        return parseUnionTypeExtension(lexer);
      case 'enum':
        return parseEnumTypeExtension(lexer);
      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */
function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  if (directives.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */
function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */
function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */
function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */
function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */
function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.Kind.DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */
function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var locations = [];
  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return locations;
}

/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */
function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  if (_directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
    return name;
  }
  throw unexpected(lexer, start);
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeInfo = undefined;

var _kinds = __webpack_require__(2);

var _definition = __webpack_require__(1);

var _introspection = __webpack_require__(7);

var _typeFromAST = __webpack_require__(8);

var _find = __webpack_require__(16);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo = exports.TypeInfo = function () {
  function TypeInfo(schema,
  // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  getFieldDefFn,
  // Initial type may be provided in rare cases to facilitate traversals
  initialType) {
    _classCallCheck(this, TypeInfo);

    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;
    if (initialType) {
      if ((0, _definition.isInputType)(initialType)) {
        this._inputTypeStack.push(initialType);
      }
      if ((0, _definition.isCompositeType)(initialType)) {
        this._parentTypeStack.push(initialType);
      }
      if ((0, _definition.isOutputType)(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  TypeInfo.prototype.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  TypeInfo.prototype.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  TypeInfo.prototype.getDirective = function getDirective() {
    return this._directive;
  };

  TypeInfo.prototype.getArgument = function getArgument() {
    return this._argument;
  };

  TypeInfo.prototype.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  // Flow does not yet handle this case.


  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
    var schema = this._schema;
    // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.
    switch (node.kind) {
      case _kinds.Kind.SELECTION_SET:
        var namedType = (0, _definition.getNamedType)(this.getType());
        this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : undefined);
        break;
      case _kinds.Kind.FIELD:
        var parentType = this.getParentType();
        var fieldDef = void 0;
        var fieldType = void 0;
        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);
          if (fieldDef) {
            fieldType = fieldDef.type;
          }
        }
        this._fieldDefStack.push(fieldDef);
        this._typeStack.push((0, _definition.isOutputType)(fieldType) ? fieldType : undefined);
        break;
      case _kinds.Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;
      case _kinds.Kind.OPERATION_DEFINITION:
        var type = void 0;
        if (node.operation === 'query') {
          type = schema.getQueryType();
        } else if (node.operation === 'mutation') {
          type = schema.getMutationType();
        } else if (node.operation === 'subscription') {
          type = schema.getSubscriptionType();
        }
        this._typeStack.push((0, _definition.isObjectType)(type) ? type : undefined);
        break;
      case _kinds.Kind.INLINE_FRAGMENT:
      case _kinds.Kind.FRAGMENT_DEFINITION:
        var typeConditionAST = node.typeCondition;
        var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : (0, _definition.getNamedType)(this.getType());
        this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : undefined);
        break;
      case _kinds.Kind.VARIABLE_DEFINITION:
        var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
        this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : undefined);
        break;
      case _kinds.Kind.ARGUMENT:
        var argDef = void 0;
        var argType = void 0;
        var fieldOrDirective = this.getDirective() || this.getFieldDef();
        if (fieldOrDirective) {
          argDef = (0, _find2.default)(fieldOrDirective.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (argDef) {
            argType = argDef.type;
          }
        }
        this._argument = argDef;
        this._inputTypeStack.push((0, _definition.isInputType)(argType) ? argType : undefined);
        break;
      case _kinds.Kind.LIST:
        var listType = (0, _definition.getNullableType)(this.getInputType());
        var itemType = (0, _definition.isListType)(listType) ? listType.ofType : listType;
        this._inputTypeStack.push((0, _definition.isInputType)(itemType) ? itemType : undefined);
        break;
      case _kinds.Kind.OBJECT_FIELD:
        var objectType = (0, _definition.getNamedType)(this.getInputType());
        var inputFieldType = void 0;
        if ((0, _definition.isInputObjectType)(objectType)) {
          var inputField = objectType.getFields()[node.name.value];
          if (inputField) {
            inputFieldType = inputField.type;
          }
        }
        this._inputTypeStack.push((0, _definition.isInputType)(inputFieldType) ? inputFieldType : undefined);
        break;
      case _kinds.Kind.ENUM:
        var enumType = (0, _definition.getNamedType)(this.getInputType());
        var enumValue = void 0;
        if ((0, _definition.isEnumType)(enumType)) {
          enumValue = enumType.getValue(node.value);
        }
        this._enumValue = enumValue;
        break;
    }
  };

  TypeInfo.prototype.leave = function leave(node) {
    switch (node.kind) {
      case _kinds.Kind.SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case _kinds.Kind.FIELD:
        this._fieldDefStack.pop();
        this._typeStack.pop();
        break;
      case _kinds.Kind.DIRECTIVE:
        this._directive = null;
        break;
      case _kinds.Kind.OPERATION_DEFINITION:
      case _kinds.Kind.INLINE_FRAGMENT:
      case _kinds.Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case _kinds.Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case _kinds.Kind.ARGUMENT:
        this._argument = null;
        this._inputTypeStack.pop();
        break;
      case _kinds.Kind.LIST:
      case _kinds.Kind.OBJECT_FIELD:
        this._inputTypeStack.pop();
        break;
      case _kinds.Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */


function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;
  if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  }
  if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  }
  if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
    return _introspection.TypeNameMetaFieldDef;
  }
  if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
    return parentType.getFields()[name];
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = suggestionList;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var oLength = options.length;
  var inputThreshold = input.length / 2;
  for (var i = 0; i < oLength; i++) {
    var distance = lexicalDistance(input, options[i]);
    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);
    if (distance <= threshold) {
      optionsByDistance[options[i]] = distance;
    }
  }
  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}

/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */
function lexicalDistance(aStr, bStr) {
  if (aStr === bStr) {
    return 0;
  }

  var i = void 0;
  var j = void 0;
  var d = [];
  var a = aStr.toLowerCase();
  var b = bStr.toLowerCase();
  var aLength = a.length;
  var bLength = b.length;

  // Any case change counts as a single edit
  if (a === b) {
    return 1;
  }

  for (i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (i = 1; i <= aLength; i++) {
    for (j = 1; j <= bLength; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;

      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = validateSchema;
exports.assertValidSchema = assertValidSchema;

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(7);

var _schema = __webpack_require__(3);

var _find = __webpack_require__(16);

var _find2 = _interopRequireDefault(_find);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _GraphQLError = __webpack_require__(12);

var _assertValidName = __webpack_require__(45);

var _typeComparators = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */
function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  !(0, _schema.isSchema)(schema) ? (0, _invariant2.default)(0, 'Expected ' + String(schema) + ' to be a GraphQL schema.') : void 0;

  // If this Schema has already been validated, return the previous results.
  if (schema.__validationErrors) {
    return schema.__validationErrors;
  }

  // Validate the schema, producing a list of errors.
  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context);

  // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.
  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}

/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */
function assertValidSchema(schema) {
  var errors = validateSchema(schema);
  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext = function () {
  function SchemaValidationContext(schema) {
    _classCallCheck(this, SchemaValidationContext);

    this._errors = [];
    this.schema = schema;
  }

  SchemaValidationContext.prototype.reportError = function reportError(message, nodes) {
    var _nodes = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);
    this.addError(new _GraphQLError.GraphQLError(message, _nodes));
  };

  SchemaValidationContext.prototype.addError = function addError(error) {
    this._errors.push(error);
  };

  SchemaValidationContext.prototype.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();
  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!(0, _definition.isObjectType)(queryType)) {
    context.reportError('Query root type must be Object type, it cannot be ' + String(queryType) + '.', getOperationTypeNode(schema, queryType, 'query'));
  }

  var mutationType = schema.getMutationType();
  if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + (String(mutationType) + '.'), getOperationTypeNode(schema, mutationType, 'mutation'));
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + (String(subscriptionType) + '.'), getOperationTypeNode(schema, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema, type, operation) {
  var astNode = schema.astNode;
  var operationTypeNode = astNode && astNode.operationTypes.find(function (operationType) {
    return operationType.operation === operation;
  });
  return operationTypeNode ? operationTypeNode.type : type && type.astNode;
}

function validateDirectives(context) {
  var directives = context.schema.getDirectives();
  directives.forEach(function (directive) {
    // Ensure all directives are in fact GraphQL directives.
    if (!(0, _directives.isDirective)(directive)) {
      context.reportError('Expected directive but got: ' + String(directive) + '.', directive && directive.astNode);
      return;
    }

    // Ensure they are named correctly.
    validateName(context, directive);

    // TODO: Ensure proper locations.

    // Ensure the arguments are valid.
    var argNames = Object.create(null);
    directive.args.forEach(function (arg) {
      var argName = arg.name;

      // Ensure they are named correctly.
      validateName(context, arg);

      // Ensure they are unique per directive.
      if (argNames[argName]) {
        context.reportError('Argument @' + directive.name + '(' + argName + ':) can only be defined once.', getAllDirectiveArgNodes(directive, argName));
        return; // continue loop
      }
      argNames[argName] = true;

      // Ensure the type is an input type.
      if (!(0, _definition.isInputType)(arg.type)) {
        context.reportError('The type of @' + directive.name + '(' + argName + ':) must be Input Type ' + ('but got: ' + String(arg.type) + '.'), getDirectiveArgTypeNode(directive, argName));
      }
    });
  });
}

function validateName(context, node) {
  // If a schema explicitly allows some legacy name which is no longer valid,
  // allow it to be assumed valid.
  if (context.schema.__allowedLegacyNames && context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
    return;
  }
  // Ensure names are valid, however introspection types opt out.
  var error = (0, _assertValidName.isValidNameError)(node.name, node.astNode || undefined);
  if (error) {
    context.addError(error);
  }
}

function validateTypes(context) {
  var typeMap = context.schema.getTypeMap();
  (0, _objectValues2.default)(typeMap).forEach(function (type) {
    // Ensure all provided types are in fact GraphQL type.
    if (!(0, _definition.isNamedType)(type)) {
      context.reportError('Expected GraphQL named type but got: ' + String(type) + '.', type && type.astNode);
      return;
    }

    // Ensure it is named correctly (excluding introspection types).
    if (!(0, _introspection.isIntrospectionType)(type)) {
      validateName(context, type);
    }

    if ((0, _definition.isObjectType)(type)) {
      // Ensure fields are valid
      validateFields(context, type);

      // Ensure objects implement the interfaces they claim to.
      validateObjectInterfaces(context, type);
    } else if ((0, _definition.isInterfaceType)(type)) {
      // Ensure fields are valid.
      validateFields(context, type);
    } else if ((0, _definition.isUnionType)(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if ((0, _definition.isEnumType)(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if ((0, _definition.isInputObjectType)(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type);
    }
  });
}

function validateFields(context, type) {
  var fields = (0, _objectValues2.default)(type.getFields());

  // Objects and Interfaces both must define one or more fields.
  if (fields.length === 0) {
    context.reportError('Type ' + type.name + ' must define one or more fields.', getAllObjectOrInterfaceNodes(type));
  }

  fields.forEach(function (field) {
    // Ensure they are named correctly.
    validateName(context, field);

    // Ensure they were defined at most once.
    var fieldNodes = getAllFieldNodes(type, field.name);
    if (fieldNodes.length > 1) {
      context.reportError('Field ' + type.name + '.' + field.name + ' can only be defined once.', fieldNodes);
      return; // continue loop
    }

    // Ensure the type is an output type
    if (!(0, _definition.isOutputType)(field.type)) {
      context.reportError('The type of ' + type.name + '.' + field.name + ' must be Output Type ' + ('but got: ' + String(field.type) + '.'), getFieldTypeNode(type, field.name));
    }

    // Ensure the arguments are valid
    var argNames = Object.create(null);
    field.args.forEach(function (arg) {
      var argName = arg.name;

      // Ensure they are named correctly.
      validateName(context, arg);

      // Ensure they are unique per field.
      if (argNames[argName]) {
        context.reportError('Field argument ' + type.name + '.' + field.name + '(' + argName + ':) can only ' + 'be defined once.', getAllFieldArgNodes(type, field.name, argName));
      }
      argNames[argName] = true;

      // Ensure the type is an input type
      if (!(0, _definition.isInputType)(arg.type)) {
        context.reportError('The type of ' + type.name + '.' + field.name + '(' + argName + ':) must be Input ' + ('Type but got: ' + String(arg.type) + '.'), getFieldArgTypeNode(type, field.name, argName));
      }
    });
  });
}

function validateObjectInterfaces(context, object) {
  var implementedTypeNames = Object.create(null);
  object.getInterfaces().forEach(function (iface) {
    if (!(0, _definition.isInterfaceType)(iface)) {
      context.reportError('Type ' + String(object) + ' must only implement Interface types, ' + ('it cannot implement ' + String(iface) + '.'), getImplementsInterfaceNode(object, iface));
      return;
    }

    if (implementedTypeNames[iface.name]) {
      context.reportError('Type ' + object.name + ' can only implement ' + iface.name + ' once.', getAllImplementsInterfaceNodes(object, iface));
      return; // continue loop
    }
    implementedTypeNames[iface.name] = true;
    validateObjectImplementsInterface(context, object, iface);
  });
}

function validateObjectImplementsInterface(context, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields();

  // Assert each interface field is implemented.
  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
    var objectField = objectFieldMap[fieldName];
    var ifaceField = ifaceFieldMap[fieldName];

    // Assert interface field exists on object.
    if (!objectField) {
      context.reportError('Interface field ' + iface.name + '.' + fieldName + ' expected but ' + (object.name + ' does not provide it.'), [getFieldNode(iface, fieldName), object.astNode]);
      // Continue loop over fields.
      return;
    }

    // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)
    if (!(0, _typeComparators.isTypeSubTypeOf)(context.schema, objectField.type, ifaceField.type)) {
      context.reportError('Interface field ' + iface.name + '.' + fieldName + ' expects type ' + (String(ifaceField.type) + ' but ' + object.name + '.' + fieldName + ' ') + ('is type ' + String(objectField.type) + '.'), [getFieldTypeNode(iface, fieldName), getFieldTypeNode(object, fieldName)]);
    }

    // Assert each interface field arg is implemented.
    ifaceField.args.forEach(function (ifaceArg) {
      var argName = ifaceArg.name;
      var objectArg = (0, _find2.default)(objectField.args, function (arg) {
        return arg.name === argName;
      });

      // Assert interface field arg exists on object field.
      if (!objectArg) {
        context.reportError('Interface field argument ' + iface.name + '.' + fieldName + '(' + argName + ':) ' + ('expected but ' + object.name + '.' + fieldName + ' does not provide it.'), [getFieldArgNode(iface, fieldName, argName), getFieldNode(object, fieldName)]);
        // Continue loop over arguments.
        return;
      }

      // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?
      if (!(0, _typeComparators.isEqualType)(ifaceArg.type, objectArg.type)) {
        context.reportError('Interface field argument ' + iface.name + '.' + fieldName + '(' + argName + ':) ' + ('expects type ' + String(ifaceArg.type) + ' but ') + (object.name + '.' + fieldName + '(' + argName + ':) is type ') + (String(objectArg.type) + '.'), [getFieldArgTypeNode(iface, fieldName, argName), getFieldArgTypeNode(object, fieldName, argName)]);
      }

      // TODO: validate default values?
    });

    // Assert additional arguments must not be required.
    objectField.args.forEach(function (objectArg) {
      var argName = objectArg.name;
      var ifaceArg = (0, _find2.default)(ifaceField.args, function (arg) {
        return arg.name === argName;
      });
      if (!ifaceArg && (0, _definition.isNonNullType)(objectArg.type)) {
        context.reportError('Object field argument ' + object.name + '.' + fieldName + '(' + argName + ':) ' + ('is of required type ' + String(objectArg.type) + ' but is not also ') + ('provided by the Interface field ' + iface.name + '.' + fieldName + '.'), [getFieldArgTypeNode(object, fieldName, argName), getFieldNode(iface, fieldName)]);
      }
    });
  });
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError('Union type ' + union.name + ' must define one or more member types.', union.astNode);
  }

  var includedTypeNames = Object.create(null);
  memberTypes.forEach(function (memberType) {
    if (includedTypeNames[memberType.name]) {
      context.reportError('Union type ' + union.name + ' can only include type ' + (memberType.name + ' once.'), getUnionMemberTypeNodes(union, memberType.name));
      return; // continue loop
    }
    includedTypeNames[memberType.name] = true;
    if (!(0, _definition.isObjectType)(memberType)) {
      context.reportError('Union type ' + union.name + ' can only include Object types, ' + ('it cannot include ' + String(memberType) + '.'), getUnionMemberTypeNodes(union, String(memberType)));
    }
  });
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError('Enum type ' + enumType.name + ' must define one or more values.', enumType.astNode);
  }

  enumValues.forEach(function (enumValue) {
    var valueName = enumValue.name;

    // Ensure no duplicates.
    var allNodes = getEnumValueNodes(enumType, valueName);
    if (allNodes && allNodes.length > 1) {
      context.reportError('Enum type ' + enumType.name + ' can include value ' + valueName + ' only once.', allNodes);
    }

    // Ensure valid name.
    validateName(context, enumValue);
    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError('Enum type ' + enumType.name + ' cannot include value: ' + valueName + '.', enumValue.astNode);
    }
  });
}

function validateInputFields(context, inputObj) {
  var fields = (0, _objectValues2.default)(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError('Input Object type ' + inputObj.name + ' must define one or more fields.', inputObj.astNode);
  }

  // Ensure the arguments are valid
  fields.forEach(function (field) {
    // Ensure they are named correctly.
    validateName(context, field);

    // TODO: Ensure they are unique per field.

    // Ensure the type is an input type
    if (!(0, _definition.isInputType)(field.type)) {
      context.reportError('The type of ' + inputObj.name + '.' + field.name + ' must be Input Type ' + ('but got: ' + String(field.type) + '.'), field.astNode && field.astNode.type);
    }
  });
}

function getAllObjectNodes(type) {
  return type.astNode ? type.extensionASTNodes ? [type.astNode].concat(type.extensionASTNodes) : [type.astNode] : type.extensionASTNodes || [];
}

function getAllObjectOrInterfaceNodes(type) {
  return type.astNode ? type.extensionASTNodes ? [type.astNode].concat(type.extensionASTNodes) : [type.astNode] : type.extensionASTNodes || [];
}

function getImplementsInterfaceNode(type, iface) {
  return getAllImplementsInterfaceNodes(type, iface)[0];
}

function getAllImplementsInterfaceNodes(type, iface) {
  var implementsNodes = [];
  var astNodes = getAllObjectNodes(type);
  for (var i = 0; i < astNodes.length; i++) {
    var _astNode = astNodes[i];
    if (_astNode && _astNode.interfaces) {
      _astNode.interfaces.forEach(function (node) {
        if (node.name.value === iface.name) {
          implementsNodes.push(node);
        }
      });
    }
  }
  return implementsNodes;
}

function getFieldNode(type, fieldName) {
  return getAllFieldNodes(type, fieldName)[0];
}

function getAllFieldNodes(type, fieldName) {
  var fieldNodes = [];
  var astNodes = getAllObjectOrInterfaceNodes(type);
  for (var i = 0; i < astNodes.length; i++) {
    var _astNode2 = astNodes[i];
    if (_astNode2 && _astNode2.fields) {
      _astNode2.fields.forEach(function (node) {
        if (node.name.value === fieldName) {
          fieldNodes.push(node);
        }
      });
    }
  }
  return fieldNodes;
}

function getFieldTypeNode(type, fieldName) {
  var fieldNode = getFieldNode(type, fieldName);
  return fieldNode && fieldNode.type;
}

function getFieldArgNode(type, fieldName, argName) {
  return getAllFieldArgNodes(type, fieldName, argName)[0];
}

function getAllFieldArgNodes(type, fieldName, argName) {
  var argNodes = [];
  var fieldNode = getFieldNode(type, fieldName);
  if (fieldNode && fieldNode.arguments) {
    fieldNode.arguments.forEach(function (node) {
      if (node.name.value === argName) {
        argNodes.push(node);
      }
    });
  }
  return argNodes;
}

function getFieldArgTypeNode(type, fieldName, argName) {
  var fieldArgNode = getFieldArgNode(type, fieldName, argName);
  return fieldArgNode && fieldArgNode.type;
}

function getAllDirectiveArgNodes(directive, argName) {
  var argNodes = [];
  var directiveNode = directive.astNode;
  if (directiveNode && directiveNode.arguments) {
    directiveNode.arguments.forEach(function (node) {
      if (node.name.value === argName) {
        argNodes.push(node);
      }
    });
  }
  return argNodes;
}

function getDirectiveArgTypeNode(directive, argName) {
  var argNode = getAllDirectiveArgNodes(directive, argName)[0];
  return argNode && argNode.type;
}

function getUnionMemberTypeNodes(union, typeName) {
  return union.astNode && union.astNode.types && union.astNode.types.filter(function (type) {
    return type.name.value === typeName;
  });
}

function getEnumValueNodes(enumType, valueName) {
  return enumType.astNode && enumType.astNode.values && enumType.astNode.values.filter(function (value) {
    return value.name.value === valueName;
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyValMap;


/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = valFn(item), map;
  }, Object.create(null));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullish;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
exports.doTypesOverlap = doTypesOverlap;

var _definition = __webpack_require__(1);

/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  }

  // If either type is non-null, the other must also be non-null.
  if ((0, _definition.isNonNullType)(typeA) && (0, _definition.isNonNullType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // If either type is a list, the other must also be a list.
  if ((0, _definition.isListType)(typeA) && (0, _definition.isListType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // Otherwise the types are not equal.
  return false;
}

/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  }

  // If superType is non-null, maybeSubType must also be non-null.
  if ((0, _definition.isNonNullType)(superType)) {
    if ((0, _definition.isNonNullType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if ((0, _definition.isNonNullType)(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  }

  // If superType type is a list, maybeSubType type must also be a list.
  if ((0, _definition.isListType)(superType)) {
    if ((0, _definition.isListType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if ((0, _definition.isListType)(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  }

  // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.
  if ((0, _definition.isAbstractType)(superType) && (0, _definition.isObjectType)(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  }

  // Otherwise, the child type is not a valid subtype of the parent type.
  return false;
}

/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */
function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if ((0, _definition.isAbstractType)(typeA)) {
    if ((0, _definition.isAbstractType)(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(typeB, type);
      });
    }
    // Determine if the latter type is a possible concrete type of the former.
    return schema.isPossibleType(typeA, typeB);
  }

  if ((0, _definition.isAbstractType)(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(typeB, typeA);
  }

  // Otherwise the types do not overlap.
  return false;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFieldResolver = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *  strict
                                                                                                                                                                                                                                                                               */

exports.execute = execute;
exports.responsePathAsArray = responsePathAsArray;
exports.addPath = addPath;
exports.assertValidExecutionArguments = assertValidExecutionArguments;
exports.buildExecutionContext = buildExecutionContext;
exports.getOperationRootType = getOperationRootType;
exports.collectFields = collectFields;
exports.buildResolveInfo = buildResolveInfo;
exports.resolveFieldValueOrError = resolveFieldValueOrError;
exports.getFieldDef = getFieldDef;

var _iterall = __webpack_require__(19);

var _error = __webpack_require__(0);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _isNullish = __webpack_require__(25);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isPromise = __webpack_require__(76);

var _isPromise2 = _interopRequireDefault(_isPromise);

var _memoize = __webpack_require__(104);

var _memoize2 = _interopRequireDefault(_memoize);

var _promiseForObject = __webpack_require__(105);

var _promiseForObject2 = _interopRequireDefault(_promiseForObject);

var _promiseReduce = __webpack_require__(106);

var _promiseReduce2 = _interopRequireDefault(_promiseReduce);

var _typeFromAST = __webpack_require__(8);

var _kinds = __webpack_require__(2);

var _values = __webpack_require__(37);

var _definition = __webpack_require__(1);

var _schema = __webpack_require__(3);

var _introspection = __webpack_require__(7);

var _directives = __webpack_require__(6);

var _validate = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */


/**
 * The result of GraphQL execution.
 *
 *   - `errors` is included when any errors occurred as a non-empty array.
 *   - `data` is the result of a successful execution of the query.
 */


/**
 * Implements the "Evaluating requests" section of the GraphQL specification.
 *
 * Returns either a synchronous ExecutionResult (if all encountered resolvers
 * are synchronous), or a Promise of an ExecutionResult that will eventually be
 * resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */
function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}

function executeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrect, throw an error.
  assertValidExecutionArguments(schema, document, variableValues);

  // If a valid context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.
  var context = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

  // Return early errors if execution context failed.
  if (Array.isArray(context)) {
    return { errors: context };
  }

  // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.
  var data = executeOperation(context, context.operation, rootValue);
  return buildResponse(context, data);
}

/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */
function buildResponse(context, data) {
  if ((0, _isPromise2.default)(data)) {
    return data.then(function (resolved) {
      return buildResponse(context, resolved);
    });
  }
  return context.errors.length === 0 ? { data: data } : { errors: context.errors, data: data };
}

/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */
function responsePathAsArray(path) {
  var flattened = [];
  var curr = path;
  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }
  return flattened.reverse();
}

/**
 * Given a ResponsePath and a key, return a new ResponsePath containing the
 * new key.
 */
function addPath(prev, key) {
  return { prev: prev, key: key };
}

/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */
function assertValidExecutionArguments(schema, document, rawVariableValues) {
  !document ? (0, _invariant2.default)(0, 'Must provide document') : void 0;

  // If the schema used for execution is invalid, throw an error.
  (0, _validate.assertValidSchema)(schema);

  // Variables, if provided, must be an object.
  !(!rawVariableValues || (typeof rawVariableValues === 'undefined' ? 'undefined' : _typeof(rawVariableValues)) === 'object') ? (0, _invariant2.default)(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
}

/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */
function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver) {
  var errors = [];
  var operation = void 0;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);
  for (var i = 0; i < document.definitions.length; i++) {
    var definition = document.definitions[i];
    switch (definition.kind) {
      case _kinds.Kind.OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }
        break;
      case _kinds.Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      errors.push(new _error.GraphQLError('Unknown operation named "' + operationName + '".'));
    } else {
      errors.push(new _error.GraphQLError('Must provide an operation.'));
    }
  } else if (hasMultipleAssumedOperations) {
    errors.push(new _error.GraphQLError('Must provide operation name if query contains ' + 'multiple operations.'));
  }

  var variableValues = void 0;
  if (operation) {
    var coercedVariableValues = (0, _values.getVariableValues)(schema, operation.variableDefinitions || [], rawVariableValues || {});

    if (coercedVariableValues.errors) {
      errors.push.apply(errors, coercedVariableValues.errors);
    } else {
      variableValues = coercedVariableValues.coerced;
    }
  }

  if (errors.length !== 0) {
    return errors;
  }

  !operation ? (0, _invariant2.default)(0, 'Has operation if no errors.') : void 0;
  !variableValues ? (0, _invariant2.default)(0, 'Has variables if no errors.') : void 0;

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: variableValues,
    fieldResolver: fieldResolver || defaultFieldResolver,
    errors: errors
  };
}

/**
 * Implements the "Evaluating operations" section of the spec.
 */
function executeOperation(exeContext, operation, rootValue) {
  var type = getOperationRootType(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));

  var path = undefined;

  // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.
  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
    if ((0, _isPromise2.default)(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}

/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  switch (operation.operation) {
    case 'query':
      var queryType = schema.getQueryType();
      if (!queryType) {
        throw new _error.GraphQLError('Schema does not define the required query root type.', [operation]);
      }
      return queryType;
    case 'mutation':
      var mutationType = schema.getMutationType();
      if (!mutationType) {
        throw new _error.GraphQLError('Schema is not configured for mutations.', [operation]);
      }
      return mutationType;
    case 'subscription':
      var subscriptionType = schema.getSubscriptionType();
      if (!subscriptionType) {
        throw new _error.GraphQLError('Schema is not configured for subscriptions.', [operation]);
      }
      return subscriptionType;
    default:
      throw new _error.GraphQLError('Can only execute queries, mutations and subscriptions.', [operation]);
  }
}

/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */
function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return (0, _promiseReduce2.default)(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === undefined) {
      return results;
    }
    if ((0, _isPromise2.default)(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }
    results[responseName] = result;
    return results;
  }, Object.create(null));
}

/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */
function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var containsPromise = false;

  var finalResults = Object.keys(fields).reduce(function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === undefined) {
      return results;
    }
    results[responseName] = result;
    if (!containsPromise && (0, _isPromise2.default)(result)) {
      containsPromise = true;
    }
    return results;
  }, Object.create(null));

  // If there are no promises, we can just return the object
  if (!containsPromise) {
    return finalResults;
  }

  // Otherwise, results is a map from field name to the result
  // of resolving that field, which is possibly a promise. Return
  // a promise that will return this same map, but with any
  // promises replaced with the values they resolved to.
  return (0, _promiseForObject2.default)(finalResults);
}

/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */
function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];
    switch (selection.kind) {
      case _kinds.Kind.FIELD:
        if (!shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        var name = getFieldEntryKey(selection);
        if (!fields[name]) {
          fields[name] = [];
        }
        fields[name].push(selection);
        break;
      case _kinds.Kind.INLINE_FRAGMENT:
        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;
      case _kinds.Kind.FRAGMENT_SPREAD:
        var fragName = selection.name.value;
        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        visitedFragmentNames[fragName] = true;
        var fragment = exeContext.fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
    }
  }
  return fields;
}

/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precidence than @include.
 */
function shouldIncludeNode(exeContext, node) {
  var skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, exeContext.variableValues);
  if (skip && skip.if === true) {
    return false;
  }

  var include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, exeContext.variableValues);
  if (include && include.if === false) {
    return false;
  }
  return true;
}

/**
 * Determines if a fragment is applicable to the given type.
 */
function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  var conditionalType = (0, _typeFromAST.typeFromAST)(exeContext.schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if ((0, _definition.isAbstractType)(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }
  return false;
}

/**
 * Implements the logic to compute the key of a given field's entry
 */
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}

/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */
function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;

  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;

  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);

  // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).
  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);

  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldNodes[0].name.value,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}

// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.
function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues);

    // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.
    var context = exeContext.contextValue;

    var result = resolveFn(source, args, context, info);
    return (0, _isPromise2.default)(result) ? result.then(undefined, asErrorInstance) : result;
  } catch (error) {
    return asErrorInstance(error);
  }
}

// Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.
function asErrorInstance(error) {
  return error instanceof Error ? error : new Error(error || undefined);
}

// This is a small wrapper around completeValue which detects and logs errors
// in the execution context.
function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.
  if ((0, _definition.isNonNullType)(returnType)) {
    return completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
  }

  // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.
  try {
    var completed = completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
    if ((0, _isPromise2.default)(completed)) {
      // If `completeValueWithLocatedError` returned a rejected promise, log
      // the rejection error and resolve to null.
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return completed;
  } catch (error) {
    // If `completeValueWithLocatedError` returned abruptly (threw an error),
    // log the error and return null.
    exeContext.errors.push(error);
    return null;
  }
}

// This is a small wrapper around completeValue which annotates errors with
// location information.
function completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    if ((0, _isPromise2.default)(completed)) {
      return completed.then(undefined, function (error) {
        return Promise.reject((0, _error.locatedError)(asErrorInstance(error), fieldNodes, responsePathAsArray(path)));
      });
    }
    return completed;
  } catch (error) {
    throw (0, _error.locatedError)(asErrorInstance(error), fieldNodes, responsePathAsArray(path));
  }
}

/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */
function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is a Promise, apply-lift over completeValue.
  if ((0, _isPromise2.default)(result)) {
    return result.then(function (resolved) {
      return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
    });
  }

  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  }

  // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.
  if ((0, _definition.isNonNullType)(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
    if (completed === null) {
      throw new Error('Cannot return null for non-nullable field ' + info.parentType.name + '.' + info.fieldName + '.');
    }
    return completed;
  }

  // If result value is null-ish (null, undefined, or NaN) then return null.
  if ((0, _isNullish2.default)(result)) {
    return null;
  }

  // If field type is List, complete each item in the list with the inner type
  if ((0, _definition.isListType)(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.
  if ((0, _definition.isLeafType)(returnType)) {
    return completeLeafValue(returnType, result);
  }

  // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.
  if ((0, _definition.isAbstractType)(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // If field type is Object, execute and complete all sub-selections.
  if ((0, _definition.isObjectType)(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // Not reachable. All possible output types have been considered.
  /* istanbul ignore next */
  throw new Error('Cannot complete value of unexpected type "' + String(returnType) + '".');
}

/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */
function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  !(0, _iterall.isCollection)(result) ? (0, _invariant2.default)(0, 'Expected Iterable, but did not find one for field ' + info.parentType.name + '.' + info.fieldName + '.') : void 0;

  // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.
  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  (0, _iterall.forEach)(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = addPath(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && (0, _isPromise2.default)(completedItem)) {
      containsPromise = true;
    }
    completedResults.push(completedItem);
  });

  return containsPromise ? Promise.all(completedResults) : completedResults;
}

/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */
function completeLeafValue(returnType, result) {
  !returnType.serialize ? (0, _invariant2.default)(0, 'Missing serialize method on type') : void 0;
  var serializedResult = returnType.serialize(result);
  if ((0, _isInvalid2.default)(serializedResult)) {
    throw new Error('Expected a value of type "' + String(returnType) + '" but ' + ('received: ' + String(result)));
  }
  return serializedResult;
}

/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var runtimeType = returnType.resolveType ? returnType.resolveType(result, exeContext.contextValue, info) : defaultResolveTypeFn(result, exeContext.contextValue, info, returnType);

  if ((0, _isPromise2.default)(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!(0, _definition.isObjectType)(runtimeType)) {
    throw new _error.GraphQLError('Abstract type ' + returnType.name + ' must resolve to an Object type at ' + ('runtime for field ' + info.parentType.name + '.' + info.fieldName + ' with ') + ('value "' + String(result) + '", received "' + String(runtimeType) + '". ') + ('Either the ' + returnType.name + ' type should provide a "resolveType" ') + 'function or each possible types should provide an ' + '"isTypeOf" function.', fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new _error.GraphQLError('Runtime Object type "' + runtimeType.name + '" is not a possible type ' + ('for "' + returnType.name + '".'), fieldNodes);
  }

  return runtimeType;
}

/**
 * Complete an Object value by executing all sub-selections.
 */
function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if ((0, _isPromise2.default)(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _error.GraphQLError('Expected value of type "' + returnType.name + '" but got: ' + String(result) + '.', fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}

/**
 * A memoized collection of relevant subfields in the context of the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */
var collectSubfields = (0, _memoize2.default)(_collectSubfields);
function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);
  for (var i = 0; i < fieldNodes.length; i++) {
    var selectionSet = fieldNodes[i].selectionSet;
    if (selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }
  return subFieldNodes;
}

/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */
function defaultResolveTypeFn(value, context, info, abstractType) {
  // First, look for `__typename`.
  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.__typename === 'string') {
    return value.__typename;
  }

  // Otherwise, test each possible type.
  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, context, info);

      if ((0, _isPromise2.default)(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
        if (isTypeOfResults[_i]) {
          return possibleTypes[_i];
        }
      }
    });
  }
}

/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context.
 */
var defaultFieldResolver = exports.defaultFieldResolver = function defaultFieldResolver(source, args, context, info) {
  // ensure source is a value for which property access is acceptable.
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || typeof source === 'function') {
    var property = source[info.fieldName];
    if (typeof property === 'function') {
      return source[info.fieldName](args, context, info);
    }
    return property;
  }
};

/**
 * This method looks up the field on the given type defintion.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */
function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.SchemaMetaFieldDef;
  } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _introspection.TypeMetaFieldDef;
  } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
    return _introspection.TypeNameMetaFieldDef;
  }
  return parentType.getFields()[fieldName];
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromAST = valueFromAST;

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _kinds = __webpack_require__(2);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */
function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if ((0, _definition.isNonNullType)(type)) {
    if (valueNode.kind === _kinds.Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }
    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === _kinds.Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === _kinds.Kind.VARIABLE) {
    var variableName = valueNode.name.value;
    if (!variables || (0, _isInvalid2.default)(variables[variableName])) {
      // No valid return value.
      return;
    }
    // Note: we're not doing any checking that this variable is correct. We're
    // assuming that this query has been validated and the variable usage here
    // is of the correct type.
    return variables[variableName];
  }

  if ((0, _definition.isListType)(type)) {
    var itemType = type.ofType;
    if (valueNode.kind === _kinds.Kind.LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;
      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if ((0, _definition.isNonNullType)(itemType)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
          if ((0, _isInvalid2.default)(itemValue)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(itemValue);
        }
      }
      return coercedValues;
    }
    var coercedValue = valueFromAST(valueNode, itemType, variables);
    if ((0, _isInvalid2.default)(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }
    return [coercedValue];
  }

  if ((0, _definition.isInputObjectType)(type)) {
    if (valueNode.kind !== _kinds.Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fieldNodes = (0, _keyMap2.default)(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fields = (0, _objectValues2.default)(type.getFields());
    for (var _i = 0; _i < fields.length; _i++) {
      var field = fields[_i];
      var fieldNode = fieldNodes[field.name];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (!(0, _isInvalid2.default)(field.defaultValue)) {
          coercedObj[field.name] = field.defaultValue;
        } else if ((0, _definition.isNonNullType)(field.type)) {
          return; // Invalid: intentionally return no value.
        }
        continue;
      }
      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if ((0, _isInvalid2.default)(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }
      coercedObj[field.name] = fieldValue;
    }
    return coercedObj;
  }

  if ((0, _definition.isEnumType)(type)) {
    if (valueNode.kind !== _kinds.Kind.ENUM) {
      return; // Invalid: intentionally return no value.
    }
    var enumValue = type.getValue(valueNode.value);
    if (!enumValue) {
      return; // Invalid: intentionally return no value.
    }
    return enumValue.value;
  }

  if ((0, _definition.isScalarType)(type)) {
    // Scalars fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result = void 0;
    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }
    if ((0, _isInvalid2.default)(result)) {
      return; // Invalid: intentionally return no value.
    }
    return result;
  }

  /* istanbul ignore next */
  throw new Error('Unknown type: ' + type + '.');
}

// Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === _kinds.Kind.VARIABLE && (!variables || (0, _isInvalid2.default)(variables[valueNode.name.value]));
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = process && process.env.NODE_ENV !== 'production' ? // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }
  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;
    if (valueClass && valueClass.name === className) {
      throw new Error('Cannot use ' + className + ' "' + value + '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.');
    }
  }
  return false;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
}; /**
    * Copyright (c) 2015-present, Facebook, Inc.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    *  strict
    */

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *  strict
                                                                                                                                                                                                                                                                               */

exports.astFromValue = astFromValue;

var _iterall = __webpack_require__(19);

var _isNullish = __webpack_require__(25);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _kinds = __webpack_require__(2);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
function astFromValue(value, type) {
  if ((0, _definition.isNonNullType)(type)) {
    var astValue = astFromValue(value, type.ofType);
    if (astValue && astValue.kind === _kinds.Kind.NULL) {
      return null;
    }
    return astValue;
  }

  // only explicit null, not undefined, NaN
  if (value === null) {
    return { kind: _kinds.Kind.NULL };
  }

  // undefined, NaN
  if ((0, _isInvalid2.default)(value)) {
    return null;
  }

  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.
  if ((0, _definition.isListType)(type)) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(value)) {
      var valuesNodes = [];
      (0, _iterall.forEach)(value, function (item) {
        var itemNode = astFromValue(item, itemType);
        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return { kind: _kinds.Kind.LIST, values: valuesNodes };
    }
    return astFromValue(value, itemType);
  }

  // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.
  if ((0, _definition.isInputObjectType)(type)) {
    if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      return null;
    }
    var fields = (0, _objectValues2.default)(type.getFields());
    var fieldNodes = [];
    fields.forEach(function (field) {
      var fieldValue = astFromValue(value[field.name], field.type);
      if (fieldValue) {
        fieldNodes.push({
          kind: _kinds.Kind.OBJECT_FIELD,
          name: { kind: _kinds.Kind.NAME, value: field.name },
          value: fieldValue
        });
      }
    });
    return { kind: _kinds.Kind.OBJECT, fields: fieldNodes };
  }

  if ((0, _definition.isScalarType)(type) || (0, _definition.isEnumType)(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);
    if ((0, _isNullish2.default)(serialized)) {
      return null;
    }

    // Others serialize based on their corresponding JavaScript scalar types.
    if (typeof serialized === 'boolean') {
      return { kind: _kinds.Kind.BOOLEAN, value: serialized };
    }

    // JavaScript numbers can be Int or Float values.
    if (typeof serialized === 'number') {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? { kind: _kinds.Kind.INT, value: stringNum } : { kind: _kinds.Kind.FLOAT, value: stringNum };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if ((0, _definition.isEnumType)(type)) {
        return { kind: _kinds.Kind.ENUM, value: serialized };
      }

      // ID types can use Int literals.
      if (type === _scalars.GraphQLID && integerStringRegExp.test(serialized)) {
        return { kind: _kinds.Kind.INT, value: serialized };
      }

      return {
        kind: _kinds.Kind.STRING,
        value: serialized
      };
    }

    throw new TypeError('Cannot convert value to AST: ' + String(serialized));
  }

  /* istanbul ignore next */
  throw new Error('Unknown type: ' + type + '.');
}

/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */
var integerStringRegExp = /^-?(0|[1-9][0-9]*)$/;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = undefined;
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;

var _error = __webpack_require__(0);

var _blockStringValue = __webpack_require__(48);

var _blockStringValue2 = _interopRequireDefault(_blockStringValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;
  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }
  return token;
}

/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = exports.TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});

/**
 * The enum type representing the token kinds values.
 */


/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, pos);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    throw (0, _error.syntaxError)(source, pos, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, pos, line, col, prev);
    // $
    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &
    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (
    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )
    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =
    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @
    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [
    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {
    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |
    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }
    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "
    case 34:
      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev);
      }
      return readString(source, pos, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, pos, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';
          break;
        case 47:
          value += '/';
          break;
        case 92:
          value += '\\';
          break;
        case 98:
          value += '\b';
          break;
        case 102:
          value += '\f';
          break;
        case 110:
          value += '\n';
          break;
        case 114:
          value += '\r';
          break;
        case 116:
          value += '\t';
          break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}

/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */
function readBlockString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockStringValue2.default)(rawValue));
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    // Escape Triple-Quote (\""")
    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;
  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }
  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quotedOrList;

var _orList = __webpack_require__(34);

var _orList2 = _interopRequireDefault(_orList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given [ A, B, C ] return '"A", "B", or "C"'.
 */
function quotedOrList(items) {
  return (0, _orList2.default)(items.map(function (item) {
    return '"' + item + '"';
  }));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orList;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var MAX_LENGTH = 5;

/**
 * Given [ A, B, C ] return 'A, B, or C'.
 */
function orList(items) {
  var selected = items.slice(0, MAX_LENGTH);
  return selected.reduce(function (list, quoted, index) {
    return list + (selected.length > 2 ? ', ' : ' ') + (index === selected.length - 1 ? 'or ' : '') + quoted;
  });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badValueMessage = badValueMessage;
exports.requiredFieldMessage = requiredFieldMessage;
exports.unknownFieldMessage = unknownFieldMessage;
exports.ValuesOfCorrectType = ValuesOfCorrectType;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _orList = __webpack_require__(34);

var _orList2 = _interopRequireDefault(_orList);

var _suggestionList = __webpack_require__(22);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function badValueMessage(typeName, valueName, message) {
  return 'Expected type ' + typeName + ', found ' + valueName + (message ? '; ' + message : '.');
}

function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
  return 'Field ' + typeName + '.' + fieldName + ' of required type ' + (fieldTypeName + ' was not provided.');
}

function unknownFieldMessage(typeName, fieldName, message) {
  return 'Field "' + fieldName + '" is not defined by type ' + typeName + (message ? '; ' + message : '.');
}

/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */
function ValuesOfCorrectType(context) {
  return {
    NullValue: function NullValue(node) {
      var type = context.getInputType();
      if ((0, _definition.isNonNullType)(type)) {
        context.reportError(new _error.GraphQLError(badValueMessage(String(type), (0, _printer.print)(node)), node));
      }
    },
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = (0, _definition.getNullableType)(context.getParentInputType());
      if (!(0, _definition.isListType)(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = (0, _definition.getNamedType)(context.getInputType());
      if (!(0, _definition.isInputObjectType)(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
      // Ensure every required field exists.
      var inputFields = type.getFields();
      var fieldNodeMap = (0, _keyMap2.default)(node.fields, function (field) {
        return field.name.value;
      });
      Object.keys(inputFields).forEach(function (fieldName) {
        var fieldType = inputFields[fieldName].type;
        var fieldNode = fieldNodeMap[fieldName];
        if (!fieldNode && (0, _definition.isNonNullType)(fieldType)) {
          context.reportError(new _error.GraphQLError(requiredFieldMessage(type.name, fieldName, String(fieldType)), node));
        }
      });
    },
    ObjectField: function ObjectField(node) {
      var parentType = (0, _definition.getNamedType)(context.getParentInputType());
      var fieldType = context.getInputType();
      if (!fieldType && (0, _definition.isInputObjectType)(parentType)) {
        var suggestions = (0, _suggestionList2.default)(node.name.value, Object.keys(parentType.getFields()));
        var didYouMean = suggestions.length !== 0 ? 'Did you mean ' + (0, _orList2.default)(suggestions) + '?' : undefined;
        context.reportError(new _error.GraphQLError(unknownFieldMessage(parentType.name, node.name.value, didYouMean), node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = (0, _definition.getNamedType)(context.getInputType());
      if (!(0, _definition.isEnumType)(type)) {
        isValidScalar(context, node);
      } else if (!type.getValue(node.value)) {
        context.reportError(new _error.GraphQLError(badValueMessage(type.name, (0, _printer.print)(node), enumTypeSuggestion(type, node)), node));
      }
    },

    IntValue: function IntValue(node) {
      return isValidScalar(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidScalar(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidScalar(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidScalar(context, node);
    }
  };
}

/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */
function isValidScalar(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();
  if (!locationType) {
    return;
  }

  var type = (0, _definition.getNamedType)(locationType);

  if (!(0, _definition.isScalarType)(type)) {
    context.reportError(new _error.GraphQLError(badValueMessage(String(locationType), (0, _printer.print)(node), enumTypeSuggestion(type, node)), node));
    return;
  }

  // Scalars determine if a literal value is valid via parseLiteral() which
  // may throw or return an invalid value to indicate failure.
  try {
    var parseResult = type.parseLiteral(node, undefined /* variables */);
    if ((0, _isInvalid2.default)(parseResult)) {
      context.reportError(new _error.GraphQLError(badValueMessage(String(locationType), (0, _printer.print)(node)), node));
    }
  } catch (error) {
    // Ensure a reference to the original error is maintained.
    context.reportError(new _error.GraphQLError(badValueMessage(String(locationType), (0, _printer.print)(node), error.message), node, undefined, undefined, undefined, error));
  }
}

function enumTypeSuggestion(type, node) {
  if ((0, _definition.isEnumType)(type)) {
    var suggestions = (0, _suggestionList2.default)((0, _printer.print)(node), type.getValues().map(function (value) {
      return value.name;
    }));
    if (suggestions.length !== 0) {
      return 'Did you mean the enum value ' + (0, _orList2.default)(suggestions) + '?';
    }
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = __webpack_require__(0);

var _visitor = __webpack_require__(14);

var _kinds = __webpack_require__(2);

var _schema = __webpack_require__(3);

var _TypeInfo = __webpack_require__(21);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ValidationContext = function () {
  function ValidationContext(schema, ast, typeInfo) {
    _classCallCheck(this, ValidationContext);

    this._schema = schema;
    this._ast = ast;
    this._typeInfo = typeInfo;
    this._errors = [];
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._variableUsages = new Map();
    this._recursiveVariableUsages = new Map();
  }

  ValidationContext.prototype.reportError = function reportError(error) {
    this._errors.push(error);
  };

  ValidationContext.prototype.getErrors = function getErrors() {
    return this._errors;
  };

  ValidationContext.prototype.getSchema = function getSchema() {
    return this._schema;
  };

  ValidationContext.prototype.getDocument = function getDocument() {
    return this._ast;
  };

  ValidationContext.prototype.getFragment = function getFragment(name) {
    var fragments = this._fragments;
    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }
        return frags;
      }, Object.create(null));
    }
    return fragments[name];
  };

  ValidationContext.prototype.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);
    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];
      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();
        for (var i = 0; i < set.selections.length; i++) {
          var selection = set.selections[i];
          if (selection.kind === _kinds.Kind.FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }
      this._fragmentSpreads.set(node, spreads);
    }
    return spreads;
  };

  ValidationContext.prototype.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);
    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];
      while (nodesToVisit.length !== 0) {
        var _node = nodesToVisit.pop();
        var spreads = this.getFragmentSpreads(_node);
        for (var i = 0; i < spreads.length; i++) {
          var fragName = spreads[i].name.value;
          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);
            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }
      this._recursivelyReferencedFragments.set(operation, fragments);
    }
    return fragments;
  };

  ValidationContext.prototype.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);
    if (!usages) {
      var newUsages = [];
      var typeInfo = new _TypeInfo.TypeInfo(this._schema);
      (0, _visitor.visit)(node, (0, _visitor.visitWithTypeInfo)(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({ node: variable, type: typeInfo.getInputType() });
        }
      }));
      usages = newUsages;
      this._variableUsages.set(node, usages);
    }
    return usages;
  };

  ValidationContext.prototype.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);
    if (!usages) {
      usages = this.getVariableUsages(operation);
      var fragments = this.getRecursivelyReferencedFragments(operation);
      for (var i = 0; i < fragments.length; i++) {
        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
      }
      this._recursiveVariableUsages.set(operation, usages);
    }
    return usages;
  };

  ValidationContext.prototype.getType = function getType() {
    return this._typeInfo.getType();
  };

  ValidationContext.prototype.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  ValidationContext.prototype.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  ValidationContext.prototype.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  ValidationContext.prototype.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  ValidationContext.prototype.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  ValidationContext.prototype.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}();

exports.default = ValidationContext;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariableValues = getVariableValues;
exports.getArgumentValues = getArgumentValues;
exports.getDirectiveValues = getDirectiveValues;

var _error = __webpack_require__(0);

var _find = __webpack_require__(16);

var _find2 = _interopRequireDefault(_find);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _coerceValue = __webpack_require__(38);

var _typeFromAST = __webpack_require__(8);

var _valueFromAST = __webpack_require__(28);

var _kinds = __webpack_require__(2);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function getVariableValues(schema, varDefNodes, inputs) {
  var errors = [];
  var coercedValues = {};
  for (var i = 0; i < varDefNodes.length; i++) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
    if (!(0, _definition.isInputType)(varType)) {
      errors.push(new _error.GraphQLError('Variable "$' + varName + '" expected value of type ' + ('"' + (0, _printer.print)(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]));
    } else {
      var value = inputs[varName];
      if ((0, _isInvalid2.default)(value)) {
        if ((0, _definition.isNonNullType)(varType)) {
          errors.push(new _error.GraphQLError('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]));
        } else if (varDefNode.defaultValue) {
          coercedValues[varName] = (0, _valueFromAST.valueFromAST)(varDefNode.defaultValue, varType);
        }
      } else {
        var _coerced = (0, _coerceValue.coerceValue)(value, varType, varDefNode);
        var coercionErrors = _coerced.errors;
        if (coercionErrors) {
          (function () {
            var messagePrelude = 'Variable "$' + varName + '" got invalid value ' + JSON.stringify(value) + '; ';
            coercionErrors.forEach(function (error) {
              error.message = messagePrelude + error.message;
            });
            errors.push.apply(errors, coercionErrors);
          })();
        } else {
          coercedValues[varName] = _coerced.value;
        }
      }
    }
  }
  return errors.length === 0 ? { errors: undefined, coerced: coercedValues } : { errors: errors, coerced: undefined };
}

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argDefs = def.args;
  var argNodes = node.arguments;
  if (!argDefs || !argNodes) {
    return coercedValues;
  }
  var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
    return arg.name.value;
  });
  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var defaultValue = argDef.defaultValue;
    if (!argumentNode) {
      if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if ((0, _definition.isNonNullType)(argType)) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
      }
    } else if (argumentNode.value.kind === _kinds.Kind.VARIABLE) {
      var variableName = argumentNode.value.name.value;
      if (variableValues && Object.prototype.hasOwnProperty.call(variableValues, variableName) && !(0, _isInvalid2.default)(variableValues[variableName])) {
        // Note: this does not check that this variable value is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.
        coercedValues[name] = variableValues[variableName];
      } else if (!(0, _isInvalid2.default)(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if ((0, _definition.isNonNullType)(argType)) {
        throw new _error.GraphQLError('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
      }
    } else {
      var valueNode = argumentNode.value;
      var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
      if ((0, _isInvalid2.default)(coercedValue)) {
        // Note: ValuesOfCorrectType validation should catch this before
        // execution. This is a runtime check to ensure execution does not
        // continue with an invalid argument value.
        throw new _error.GraphQLError('Argument "' + name + '" has invalid value ' + (0, _printer.print)(valueNode) + '.', [argumentNode.value]);
      }
      coercedValues[name] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && (0, _find2.default)(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                               * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *  strict
                                                                                                                                                                                                                                                                               */

exports.coerceValue = coerceValue;

var _iterall = __webpack_require__(19);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _isNullish = __webpack_require__(25);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _orList = __webpack_require__(34);

var _orList2 = _interopRequireDefault(_orList);

var _suggestionList = __webpack_require__(22);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _error = __webpack_require__(0);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Coerces a JavaScript value given a GraphQL Type.
 *
 * Returns either a value which is valid for the provided type or a list of
 * encountered coercion errors.
 *
 */
function coerceValue(value, type, blameNode, path) {
  // A value must be provided if the type is non-null.
  if ((0, _definition.isNonNullType)(type)) {
    if ((0, _isNullish2.default)(value)) {
      return ofErrors([coercionError('Expected non-nullable type ' + String(type) + ' not to be null', blameNode, path)]);
    }
    return coerceValue(value, type.ofType, blameNode, path);
  }

  if ((0, _isNullish2.default)(value)) {
    // Explicitly return the value null.
    return ofValue(null);
  }

  if ((0, _definition.isScalarType)(type)) {
    // Scalars determine if a value is valid via parseValue(), which can
    // throw to indicate failure. If it throws, maintain a reference to
    // the original error.
    try {
      var parseResult = type.parseValue(value);
      if ((0, _isInvalid2.default)(parseResult)) {
        return ofErrors([coercionError('Expected type ' + type.name, blameNode, path)]);
      }
      return ofValue(parseResult);
    } catch (error) {
      return ofErrors([coercionError('Expected type ' + type.name, blameNode, path, error.message, error)]);
    }
  }

  if ((0, _definition.isEnumType)(type)) {
    if (typeof value === 'string') {
      var enumValue = type.getValue(value);
      if (enumValue) {
        return ofValue(enumValue.value);
      }
    }
    var suggestions = (0, _suggestionList2.default)(String(value), type.getValues().map(function (enumValue) {
      return enumValue.name;
    }));
    var didYouMean = suggestions.length !== 0 ? 'did you mean ' + (0, _orList2.default)(suggestions) + '?' : undefined;
    return ofErrors([coercionError('Expected type ' + type.name, blameNode, path, didYouMean)]);
  }

  if ((0, _definition.isListType)(type)) {
    var itemType = type.ofType;
    if ((0, _iterall.isCollection)(value)) {
      var _errors = void 0;
      var coercedValue = [];
      (0, _iterall.forEach)(value, function (itemValue, index) {
        var coercedItem = coerceValue(itemValue, itemType, blameNode, atPath(path, index));
        if (coercedItem.errors) {
          _errors = add(_errors, coercedItem.errors);
        } else if (!_errors) {
          coercedValue.push(coercedItem.value);
        }
      });
      return _errors ? ofErrors(_errors) : ofValue(coercedValue);
    }
    // Lists accept a non-list value as a list of one.
    var coercedItem = coerceValue(value, itemType, blameNode);
    return coercedItem.errors ? coercedItem : ofValue([coercedItem.value]);
  }

  if ((0, _definition.isInputObjectType)(type)) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      return ofErrors([coercionError('Expected type ' + type.name + ' to be an object', blameNode, path)]);
    }
    var _errors2 = void 0;
    var _coercedValue = {};
    var fields = type.getFields();

    // Ensure every defined field is valid.
    for (var fieldName in fields) {
      if (hasOwnProperty.call(fields, fieldName)) {
        var field = fields[fieldName];
        var fieldValue = value[fieldName];
        if ((0, _isInvalid2.default)(fieldValue)) {
          if (!(0, _isInvalid2.default)(field.defaultValue)) {
            _coercedValue[fieldName] = field.defaultValue;
          } else if ((0, _definition.isNonNullType)(field.type)) {
            _errors2 = add(_errors2, coercionError('Field ' + printPath(atPath(path, fieldName)) + ' of required ' + ('type ' + String(field.type) + ' was not provided'), blameNode));
          }
        } else {
          var coercedField = coerceValue(fieldValue, field.type, blameNode, atPath(path, fieldName));
          if (coercedField.errors) {
            _errors2 = add(_errors2, coercedField.errors);
          } else if (!_errors2) {
            _coercedValue[fieldName] = coercedField.value;
          }
        }
      }
    }

    // Ensure every provided field is defined.
    for (var _fieldName in value) {
      if (hasOwnProperty.call(value, _fieldName)) {
        if (!fields[_fieldName]) {
          var _suggestions = (0, _suggestionList2.default)(_fieldName, Object.keys(fields));
          var _didYouMean = _suggestions.length !== 0 ? 'did you mean ' + (0, _orList2.default)(_suggestions) + '?' : undefined;
          _errors2 = add(_errors2, coercionError('Field "' + _fieldName + '" is not defined by type ' + type.name, blameNode, path, _didYouMean));
        }
      }
    }

    return _errors2 ? ofErrors(_errors2) : ofValue(_coercedValue);
  }

  /* istanbul ignore next */
  throw new Error('Unexpected type: ' + type + '.');
}

function ofValue(value) {
  return { errors: undefined, value: value };
}

function ofErrors(errors) {
  return { errors: errors, value: undefined };
}

function add(errors, moreErrors) {
  return (errors || []).concat(moreErrors);
}

function atPath(prev, key) {
  return { prev: prev, key: key };
}

function coercionError(message, blameNode, path, subMessage, originalError) {
  var pathStr = printPath(path);
  // Return a GraphQLError instance
  return new _error.GraphQLError(message + (pathStr ? ' at ' + pathStr : '') + (subMessage ? '; ' + subMessage : '.'), blameNode, undefined, undefined, undefined, originalError);
}

// Build a string describing the path into the value where the error was found
function printPath(path) {
  var pathStr = '';
  var currentPath = path;
  while (currentPath) {
    pathStr = (typeof currentPath.key === 'string' ? '.' + currentPath.key : '[' + String(currentPath.key) + ']') + pathStr;
    currentPath = currentPath.prev;
  }
  return pathStr ? 'value' + pathStr : '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(40);
var util = __webpack_require__(17);
var ArraySet = __webpack_require__(41).ArraySet;
var MappingList = __webpack_require__(86).MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(85);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(17);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(18);
var graphql_extensions_1 = __webpack_require__(127);
var apollo_tracing_1 = __webpack_require__(128);
var apollo_cache_control_1 = __webpack_require__(129);
var LogAction;
(function (LogAction) {
    LogAction[LogAction["request"] = 0] = "request";
    LogAction[LogAction["parse"] = 1] = "parse";
    LogAction[LogAction["validation"] = 2] = "validation";
    LogAction[LogAction["execute"] = 3] = "execute";
})(LogAction = exports.LogAction || (exports.LogAction = {}));
var LogStep;
(function (LogStep) {
    LogStep[LogStep["start"] = 0] = "start";
    LogStep[LogStep["end"] = 1] = "end";
    LogStep[LogStep["status"] = 2] = "status";
})(LogStep = exports.LogStep || (exports.LogStep = {}));
function runQuery(options) {
    return Promise.resolve().then(function () { return doRunQuery(options); });
}
exports.runQuery = runQuery;
function printStackTrace(error) {
    console.error(error.stack);
}
function format(errors, formatter) {
    return errors.map(function (error) {
        if (formatter !== undefined) {
            try {
                return formatter(error);
            }
            catch (err) {
                console.error('Error in formatError function:', err);
                var newError = new Error('Internal server error');
                return graphql_1.formatError(newError);
            }
        }
        else {
            return graphql_1.formatError(error);
        }
    });
}
function doRunQuery(options) {
    var documentAST;
    var logFunction = options.logFunction ||
        function () {
            return null;
        };
    var debugDefault = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
    var debug = options.debug !== undefined ? options.debug : debugDefault;
    logFunction({ action: LogAction.request, step: LogStep.start });
    var context = options.context || {};
    var extensions = [];
    if (options.tracing) {
        extensions.push(apollo_tracing_1.TracingExtension);
    }
    if (options.cacheControl === true) {
        extensions.push(apollo_cache_control_1.CacheControlExtension);
    }
    else if (options.cacheControl) {
        extensions.push(new apollo_cache_control_1.CacheControlExtension(options.cacheControl));
    }
    var extensionStack = extensions.length > 0 && new graphql_extensions_1.GraphQLExtensionStack(extensions);
    if (extensionStack) {
        context._extensionStack = extensionStack;
        graphql_extensions_1.enableGraphQLExtensions(options.schema);
        extensionStack.requestDidStart();
    }
    var qry = typeof options.query === 'string' ? options.query : graphql_1.print(options.query);
    logFunction({
        action: LogAction.request,
        step: LogStep.status,
        key: 'query',
        data: qry,
    });
    logFunction({
        action: LogAction.request,
        step: LogStep.status,
        key: 'variables',
        data: options.variables,
    });
    logFunction({
        action: LogAction.request,
        step: LogStep.status,
        key: 'operationName',
        data: options.operationName,
    });
    if (typeof options.query === 'string') {
        try {
            logFunction({ action: LogAction.parse, step: LogStep.start });
            documentAST = graphql_1.parse(options.query);
            logFunction({ action: LogAction.parse, step: LogStep.end });
        }
        catch (syntaxError) {
            logFunction({ action: LogAction.parse, step: LogStep.end });
            return Promise.resolve({
                errors: format([syntaxError], options.formatError),
            });
        }
    }
    else {
        documentAST = options.query;
    }
    var rules = graphql_1.specifiedRules;
    if (options.validationRules) {
        rules = rules.concat(options.validationRules);
    }
    logFunction({ action: LogAction.validation, step: LogStep.start });
    var validationErrors = graphql_1.validate(options.schema, documentAST, rules);
    logFunction({ action: LogAction.validation, step: LogStep.end });
    if (validationErrors.length) {
        return Promise.resolve({
            errors: format(validationErrors, options.formatError),
        });
    }
    if (extensionStack) {
        extensionStack.executionDidStart();
    }
    try {
        logFunction({ action: LogAction.execute, step: LogStep.start });
        return Promise.resolve(graphql_1.execute(options.schema, documentAST, options.rootValue, context, options.variables, options.operationName, options.fieldResolver)).then(function (result) {
            logFunction({ action: LogAction.execute, step: LogStep.end });
            logFunction({ action: LogAction.request, step: LogStep.end });
            var response = {
                data: result.data,
            };
            if (result.errors) {
                response.errors = format(result.errors, options.formatError);
                if (debug) {
                    result.errors.map(printStackTrace);
                }
            }
            if (extensionStack) {
                extensionStack.executionDidEnd();
                extensionStack.requestDidEnd();
                response.extensions = extensionStack.format();
            }
            if (options.formatResponse) {
                response = options.formatResponse(response, options);
            }
            return response;
        });
    }
    catch (executionError) {
        logFunction({ action: LogAction.execute, step: LogStep.end });
        logFunction({ action: LogAction.request, step: LogStep.end });
        return Promise.resolve({
            errors: format([executionError], options.formatError),
        });
    }
}
//# sourceMappingURL=runQuery.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromASTUntyped = valueFromASTUntyped;

var _keyValMap = __webpack_require__(24);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _kinds = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _kinds.Kind.NULL:
      return null;
    case _kinds.Kind.INT:
      return parseInt(valueNode.value, 10);
    case _kinds.Kind.FLOAT:
      return parseFloat(valueNode.value);
    case _kinds.Kind.STRING:
    case _kinds.Kind.ENUM:
    case _kinds.Kind.BOOLEAN:
      return valueNode.value;
    case _kinds.Kind.LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });
    case _kinds.Kind.OBJECT:
      return (0, _keyValMap2.default)(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });
    case _kinds.Kind.VARIABLE:
      var variableName = valueNode.name.value;
      return variables && !(0, _isInvalid2.default)(variables[variableName]) ? variables[variableName] : undefined;
  }
  /* istanbul ignore next */
  throw new Error('Unexpected value kind: ' + valueNode.kind);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;

var _location = __webpack_require__(31);

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];
  if (error.nodes) {
    error.nodes.forEach(function (node) {
      if (node.loc) {
        printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, _location.getLocation)(node.loc.source, node.loc.start)));
      }
    });
  } else if (error.source && error.locations) {
    var source = error.source;
    error.locations.forEach(function (location) {
      printedLocations.push(highlightSourceAtLocation(source, location));
    });
  }
  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var lineOffset = source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var contextLine = line + lineOffset;
  var contextColumn = location.column + columnOffset;
  var prevLineNum = (contextLine - 1).toString();
  var lineNum = contextLine.toString();
  var nextLineNum = (contextLine + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
  var outputLines = [source.name + ' (' + contextLine + ':' + contextColumn + ')', line >= 2 && lpad(padLen, prevLineNum) + ': ' + lines[line - 2], lpad(padLen, lineNum) + ': ' + lines[line - 1], whitespace(2 + padLen + contextColumn - 1) + '^', line < lines.length && lpad(padLen, nextLineNum) + ': ' + lines[line]];
  return outputLines.filter(Boolean).join('\n');
}

function getColumnOffset(source, location) {
  return location.line === 1 ? source.locationOffset.column - 1 : 0;
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidName = assertValidName;
exports.isValidNameError = isValidNameError;

var _GraphQLError = __webpack_require__(12);

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/**
 * Upholds the spec rules about naming.
 */
function assertValidName(name) {
  var error = isValidNameError(name);
  if (error) {
    throw error;
  }
  return name;
}

/**
 * Returns an Error if a name is invalid.
 */
function isValidNameError(name, node) {
  !(typeof name === 'string') ? (0, _invariant2.default)(0, 'Expected string') : void 0;
  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new _GraphQLError.GraphQLError('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection.', node);
  }
  if (!NAME_RX.test(name)) {
    return new _GraphQLError.GraphQLError('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.', node);
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = exports.Source = function Source(body, name, locationOffset) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || { line: 1, column: 1 };
  !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = __webpack_require__(12);

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  // $FlowFixMe(>=0.68.0)
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStringValue;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g);

  // Remove common indentation from all lines but first.
  var commonIndent = null;
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);
    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;
      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  }

  // Remove leading and trailing blank lines.
  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }
  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  }

  // Return a string of the lines joined with U+000A.
  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;
  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }
  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _error = __webpack_require__(0);

var _visitor = __webpack_require__(14);

var _schema = __webpack_require__(3);

var _validate = __webpack_require__(23);

var _TypeInfo = __webpack_require__(21);

var _specifiedRules = __webpack_require__(50);

var _ValidationContext = __webpack_require__(36);

var _ValidationContext2 = _interopRequireDefault(_ValidationContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function validate(schema, ast, rules, typeInfo) {
  !ast ? (0, _invariant2.default)(0, 'Must provide document') : void 0;
  // If the schema used for validation is invalid, throw an error.
  (0, _validate.assertValidSchema)(schema);
  return visitUsingRules(schema, typeInfo || new _TypeInfo.TypeInfo(schema), ast, rules || _specifiedRules.specifiedRules);
}

/**
 * This uses a specialized visitor which runs multiple visitors in parallel,
 * while maintaining the visitor skip and break API.
 *
 * @internal
 */
function visitUsingRules(schema, typeInfo, documentAST, rules) {
  var context = new _ValidationContext2.default(schema, documentAST, typeInfo);
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  // Visit the whole document with each instance of all provided rules.
  (0, _visitor.visit)(documentAST, (0, _visitor.visitWithTypeInfo)(typeInfo, (0, _visitor.visitInParallel)(visitors)));
  return context.getErrors();
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedRules = undefined;

var _ExecutableDefinitions = __webpack_require__(103);

var _UniqueOperationNames = __webpack_require__(51);

var _LoneAnonymousOperation = __webpack_require__(52);

var _SingleFieldSubscriptions = __webpack_require__(53);

var _KnownTypeNames = __webpack_require__(54);

var _FragmentsOnCompositeTypes = __webpack_require__(55);

var _VariablesAreInputTypes = __webpack_require__(56);

var _ScalarLeafs = __webpack_require__(57);

var _FieldsOnCorrectType = __webpack_require__(58);

var _UniqueFragmentNames = __webpack_require__(59);

var _KnownFragmentNames = __webpack_require__(60);

var _NoUnusedFragments = __webpack_require__(61);

var _PossibleFragmentSpreads = __webpack_require__(62);

var _NoFragmentCycles = __webpack_require__(63);

var _UniqueVariableNames = __webpack_require__(64);

var _NoUndefinedVariables = __webpack_require__(65);

var _NoUnusedVariables = __webpack_require__(66);

var _KnownDirectives = __webpack_require__(67);

var _UniqueDirectivesPerLocation = __webpack_require__(68);

var _KnownArgumentNames = __webpack_require__(69);

var _UniqueArgumentNames = __webpack_require__(70);

var _ValuesOfCorrectType = __webpack_require__(35);

var _ProvidedNonNullArguments = __webpack_require__(71);

var _VariablesDefaultValueAllowed = __webpack_require__(72);

var _VariablesInAllowedPosition = __webpack_require__(73);

var _OverlappingFieldsCanBeMerged = __webpack_require__(74);

var _UniqueInputFieldNames = __webpack_require__(75);

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */


// Spec Section: "Field Selection Merging"


// Spec Section: "Variables Default Value Is Allowed"


// Spec Section: "Value Type Correctness"


// Spec Section: "Argument Names"


// Spec Section: "Directives Are Defined"


// Spec Section: "All Variable Used Defined"


// Spec Section: "Fragments must not form cycles"


// Spec Section: "Fragments must be used"


// Spec Section: "Fragment Name Uniqueness"


// Spec Section: "Leaf Field Selections"


// Spec Section: "Fragments on Composite Types"


// Spec Section: "Subscriptions with Single Root Field"


// Spec Section: "Operation Name Uniqueness"
var specifiedRules = exports.specifiedRules = [_ExecutableDefinitions.ExecutableDefinitions, _UniqueOperationNames.UniqueOperationNames, _LoneAnonymousOperation.LoneAnonymousOperation, _SingleFieldSubscriptions.SingleFieldSubscriptions, _KnownTypeNames.KnownTypeNames, _FragmentsOnCompositeTypes.FragmentsOnCompositeTypes, _VariablesAreInputTypes.VariablesAreInputTypes, _ScalarLeafs.ScalarLeafs, _FieldsOnCorrectType.FieldsOnCorrectType, _UniqueFragmentNames.UniqueFragmentNames, _KnownFragmentNames.KnownFragmentNames, _NoUnusedFragments.NoUnusedFragments, _PossibleFragmentSpreads.PossibleFragmentSpreads, _NoFragmentCycles.NoFragmentCycles, _UniqueVariableNames.UniqueVariableNames, _NoUndefinedVariables.NoUndefinedVariables, _NoUnusedVariables.NoUnusedVariables, _KnownDirectives.KnownDirectives, _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation, _KnownArgumentNames.KnownArgumentNames, _UniqueArgumentNames.UniqueArgumentNames, _ValuesOfCorrectType.ValuesOfCorrectType, _ProvidedNonNullArguments.ProvidedNonNullArguments, _VariablesDefaultValueAllowed.VariablesDefaultValueAllowed, _VariablesInAllowedPosition.VariablesInAllowedPosition, _OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged, _UniqueInputFieldNames.UniqueInputFieldNames];

// Spec Section: "Input Object Field Uniqueness"


// Spec Section: "All Variable Usages Are Allowed"


// Spec Section: "Argument Optionality"


// Spec Section: "Argument Uniqueness"


// Spec Section: "Directives Are Unique Per Location"


// Spec Section: "All Variables Used"


// Spec Section: "Variable Uniqueness"


// Spec Section: "Fragment spread is possible"


// Spec Section: "Fragment spread target defined"


// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"


// Spec Section: "Variables are Input Types"


// Spec Section: "Fragment Spread Type Existence"


// Spec Section: "Lone Anonymous Operation"
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

// Spec Section: "Executable Definitions"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateOperationNameMessage = duplicateOperationNameMessage;
exports.UniqueOperationNames = UniqueOperationNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function duplicateOperationNameMessage(operationName) {
  return 'There can be only one operation named "' + operationName + '".';
}

/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;
      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _error.GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }
      return false;
    },

    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anonOperationNotAloneMessage = anonOperationNotAloneMessage;
exports.LoneAnonymousOperation = LoneAnonymousOperation;

var _error = __webpack_require__(0);

var _kinds = __webpack_require__(2);

function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}

/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _kinds.Kind.OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _error.GraphQLError(anonOperationNotAloneMessage(), [node]));
      }
    }
  };
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleFieldOnlyMessage = singleFieldOnlyMessage;
exports.SingleFieldSubscriptions = SingleFieldSubscriptions;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function singleFieldOnlyMessage(name) {
  return (name ? 'Subscription "' + name + '" ' : 'Anonymous Subscription ') + 'must select only one top level field.';
}

/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new _error.GraphQLError(singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownTypeMessage = unknownTypeMessage;
exports.KnownTypeNames = KnownTypeNames;

var _error = __webpack_require__(0);

var _suggestionList = __webpack_require__(22);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _quotedOrList = __webpack_require__(33);

var _quotedOrList2 = _interopRequireDefault(_quotedOrList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function unknownTypeMessage(typeName, suggestedTypes) {
  var message = 'Unknown type "' + typeName + '".';
  if (suggestedTypes.length) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedTypes) + '?';
  }
  return message;
}

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
function KnownTypeNames(context) {
  return {
    // TODO: when validating IDL, re-enable these. Experimental version does not
    // add unreferenced types, resulting in false-positive errors. Squelched
    // errors for now.
    ObjectTypeDefinition: function ObjectTypeDefinition() {
      return false;
    },
    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
      return false;
    },
    UnionTypeDefinition: function UnionTypeDefinition() {
      return false;
    },
    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
      return false;
    },
    NamedType: function NamedType(node) {
      var schema = context.getSchema();
      var typeName = node.name.value;
      var type = schema.getType(typeName);
      if (!type) {
        context.reportError(new _error.GraphQLError(unknownTypeMessage(typeName, (0, _suggestionList2.default)(typeName, Object.keys(schema.getTypeMap()))), [node]));
      }
    }
  };
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineFragmentOnNonCompositeErrorMessage = inlineFragmentOnNonCompositeErrorMessage;
exports.fragmentOnNonCompositeErrorMessage = fragmentOnNonCompositeErrorMessage;
exports.FragmentsOnCompositeTypes = FragmentsOnCompositeTypes;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

var _typeFromAST = __webpack_require__(8);

function inlineFragmentOnNonCompositeErrorMessage(type) {
  return 'Fragment cannot condition on non composite type "' + String(type) + '".';
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + String(type) + '".');
}

/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;
      if (typeCondition) {
        var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition);
        if (type && !(0, _definition.isCompositeType)(type)) {
          context.reportError(new _error.GraphQLError(inlineFragmentOnNonCompositeErrorMessage((0, _printer.print)(typeCondition)), [typeCondition]));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
      if (type && !(0, _definition.isCompositeType)(type)) {
        context.reportError(new _error.GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, (0, _printer.print)(node.typeCondition)), [node.typeCondition]));
      }
    }
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonInputTypeOnVarMessage = nonInputTypeOnVarMessage;
exports.VariablesAreInputTypes = VariablesAreInputTypes;

var _error = __webpack_require__(0);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

var _typeFromAST = __webpack_require__(8);

function nonInputTypeOnVarMessage(variableName, typeName) {
  return 'Variable "$' + variableName + '" cannot be non-input type "' + typeName + '".';
}

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.type);

      // If the variable type is not an input type, return an error.
      if (type && !(0, _definition.isInputType)(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new _error.GraphQLError(nonInputTypeOnVarMessage(variableName, (0, _printer.print)(node.type)), [node.type]));
      }
    }
  };
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noSubselectionAllowedMessage = noSubselectionAllowedMessage;
exports.requiredSubselectionMessage = requiredSubselectionMessage;
exports.ScalarLeafs = ScalarLeafs;

var _error = __webpack_require__(0);

var _definition = __webpack_require__(1);

function noSubselectionAllowedMessage(fieldName, type) {
  return 'Field "' + fieldName + '" must not have a selection since ' + ('type "' + String(type) + '" has no subfields.');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

function requiredSubselectionMessage(fieldName, type) {
  return 'Field "' + fieldName + '" of type "' + String(type) + '" must have a ' + ('selection of subfields. Did you mean "' + fieldName + ' { ... }"?');
}

/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;
      if (type) {
        if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
          if (selectionSet) {
            context.reportError(new _error.GraphQLError(noSubselectionAllowedMessage(node.name.value, type), [selectionSet]));
          }
        } else if (!selectionSet) {
          context.reportError(new _error.GraphQLError(requiredSubselectionMessage(node.name.value, type), [node]));
        }
      }
    }
  };
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedFieldMessage = undefinedFieldMessage;
exports.FieldsOnCorrectType = FieldsOnCorrectType;

var _error = __webpack_require__(0);

var _suggestionList = __webpack_require__(22);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _quotedOrList = __webpack_require__(33);

var _quotedOrList2 = _interopRequireDefault(_quotedOrList);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var message = 'Cannot query field "' + fieldName + '" on type "' + type + '".';
  if (suggestedTypeNames.length !== 0) {
    var suggestions = (0, _quotedOrList2.default)(suggestedTypeNames);
    message += ' Did you mean to use an inline fragment on ' + suggestions + '?';
  } else if (suggestedFieldNames.length !== 0) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedFieldNames) + '?';
  }
  return message;
}

/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();
      if (type) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value;
          // First determine if there are any suggested types to condition on.
          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName);
          // If there are no suggested types, then perhaps this was a typo?
          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName);

          // Report an error, including helpful suggestions.
          context.reportError(new _error.GraphQLError(undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), [node]));
        }
      }
    }
  };
}

/**
 * Go through all of the implementations of type, as well as the interfaces
 * that they implement. If any of those types include the provided field,
 * suggest them, sorted by how often the type is referenced,  starting
 * with Interfaces.
 */
function getSuggestedTypeNames(schema, type, fieldName) {
  if ((0, _definition.isAbstractType)(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);
    schema.getPossibleTypes(type).forEach(function (possibleType) {
      if (!possibleType.getFields()[fieldName]) {
        return;
      }
      // This object type defines this field.
      suggestedObjectTypes.push(possibleType.name);
      possibleType.getInterfaces().forEach(function (possibleInterface) {
        if (!possibleInterface.getFields()[fieldName]) {
          return;
        }
        // This interface type defines this field.
        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
      });
    });

    // Suggest interface types based on how common they are.
    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    });

    // Suggest both interface and object types.
    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  }

  // Otherwise, must be an Object type, which does not have possible fields.
  return [];
}

/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */
function getSuggestedFieldNames(schema, type, fieldName) {
  if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return (0, _suggestionList2.default)(fieldName, possibleFieldNames);
  }
  // Otherwise, must be a Union type, which does not define fields.
  return [];
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateFragmentNameMessage = duplicateFragmentNameMessage;
exports.UniqueFragmentNames = UniqueFragmentNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function duplicateFragmentNameMessage(fragName) {
  return 'There can be only one fragment named "' + fragName + '".';
}

/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */
function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;
      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _error.GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownFragmentMessage = unknownFragmentMessage;
exports.KnownFragmentNames = KnownFragmentNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function unknownFragmentMessage(fragName) {
  return 'Unknown fragment "' + fragName + '".';
}

/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */
function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);
      if (!fragment) {
        context.reportError(new _error.GraphQLError(unknownFragmentMessage(fragmentName), [node.name]));
      }
    }
  };
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unusedFragMessage = unusedFragMessage;
exports.NoUnusedFragments = NoUnusedFragments;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function unusedFragMessage(fragName) {
  return 'Fragment "' + fragName + '" is never used.';
}

/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */
function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];

  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },

    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);
        operationDefs.forEach(function (operation) {
          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
            fragmentNameUsed[fragment.name.value] = true;
          });
        });

        fragmentDefs.forEach(function (fragmentDef) {
          var fragName = fragmentDef.name.value;
          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _error.GraphQLError(unusedFragMessage(fragName), [fragmentDef]));
          }
        });
      }
    }
  };
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeIncompatibleSpreadMessage = typeIncompatibleSpreadMessage;
exports.typeIncompatibleAnonSpreadMessage = typeIncompatibleAnonSpreadMessage;
exports.PossibleFragmentSpreads = PossibleFragmentSpreads;

var _error = __webpack_require__(0);

var _typeComparators = __webpack_require__(26);

var _typeFromAST = __webpack_require__(8);

var _definition = __webpack_require__(1);

function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return 'Fragment cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
}

/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();
      if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error.GraphQLError(typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();
      if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        context.reportError(new _error.GraphQLError(typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);
  if (frag) {
    var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
    if ((0, _definition.isCompositeType)(type)) {
      return type;
    }
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycleErrorMessage = cycleErrorMessage;
exports.NoFragmentCycles = NoFragmentCycles;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return 'Cannot spread fragment "' + fragName + '" within itself' + via + '.';
}

function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null);

  // Array of AST nodes used to produce meaningful errors
  var spreadPath = [];

  // Position in the spread path
  var spreadPathIndexByName = Object.create(null);

  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      if (!visitedFrags[node.name.value]) {
        detectCycleRecursive(node);
      }
      return false;
    }
  };

  // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.
  function detectCycleRecursive(fragment) {
    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;

    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var i = 0; i < spreadNodes.length; i++) {
      var spreadNode = spreadNodes[i];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];

      if (cycleIndex === undefined) {
        spreadPath.push(spreadNode);
        if (!visitedFrags[spreadName]) {
          var spreadFragment = context.getFragment(spreadName);
          if (spreadFragment) {
            detectCycleRecursive(spreadFragment);
          }
        }
        spreadPath.pop();
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        context.reportError(new _error.GraphQLError(cycleErrorMessage(spreadName, cyclePath.map(function (s) {
          return s.name.value;
        })), cyclePath.concat(spreadNode)));
      }
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateVariableMessage = duplicateVariableMessage;
exports.UniqueVariableNames = UniqueVariableNames;

var _error = __webpack_require__(0);

function duplicateVariableMessage(variableName) {
  return 'There can be only one variable named "' + variableName + '".';
}

/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;
      if (knownVariableNames[variableName]) {
        context.reportError(new _error.GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedVarMessage = undefinedVarMessage;
exports.NoUndefinedVariables = NoUndefinedVariables;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function undefinedVarMessage(varName, opName) {
  return opName ? 'Variable "$' + varName + '" is not defined by operation "' + opName + '".' : 'Variable "$' + varName + '" is not defined.';
}

/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);

  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        usages.forEach(function (_ref) {
          var node = _ref.node;

          var varName = node.name.value;
          if (variableNameDefined[varName] !== true) {
            context.reportError(new _error.GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unusedVariableMessage = unusedVariableMessage;
exports.NoUnusedVariables = NoUnusedVariables;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function unusedVariableMessage(varName, opName) {
  return opName ? 'Variable "$' + varName + '" is never used in operation "' + opName + '".' : 'Variable "$' + varName + '" is never used.';
}

/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */
function NoUnusedVariables(context) {
  var variableDefs = [];

  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;

        usages.forEach(function (_ref) {
          var node = _ref.node;

          variableNameUsed[node.name.value] = true;
        });

        variableDefs.forEach(function (variableDef) {
          var variableName = variableDef.variable.name.value;
          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _error.GraphQLError(unusedVariableMessage(variableName, opName), [variableDef]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownDirectiveMessage = unknownDirectiveMessage;
exports.misplacedDirectiveMessage = misplacedDirectiveMessage;
exports.KnownDirectives = KnownDirectives;

var _error = __webpack_require__(0);

var _find = __webpack_require__(16);

var _find2 = _interopRequireDefault(_find);

var _kinds = __webpack_require__(2);

var _directiveLocation = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unknownDirectiveMessage(directiveName) {
  return 'Unknown directive "' + directiveName + '".';
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

function misplacedDirectiveMessage(directiveName, location) {
  return 'Directive "' + directiveName + '" may not be used on ' + location + '.';
}

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
function KnownDirectives(context) {
  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var directiveDef = (0, _find2.default)(context.getSchema().getDirectives(), function (def) {
        return def.name === node.name.value;
      });
      if (!directiveDef) {
        context.reportError(new _error.GraphQLError(unknownDirectiveMessage(node.name.value), [node]));
        return;
      }
      var candidateLocation = getDirectiveLocationForASTPath(ancestors);
      if (candidateLocation && directiveDef.locations.indexOf(candidateLocation) === -1) {
        context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, candidateLocation), [node]));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];
  if (!Array.isArray(appliedTo)) {
    switch (appliedTo.kind) {
      case _kinds.Kind.OPERATION_DEFINITION:
        switch (appliedTo.operation) {
          case 'query':
            return _directiveLocation.DirectiveLocation.QUERY;
          case 'mutation':
            return _directiveLocation.DirectiveLocation.MUTATION;
          case 'subscription':
            return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
        }
        break;
      case _kinds.Kind.FIELD:
        return _directiveLocation.DirectiveLocation.FIELD;
      case _kinds.Kind.FRAGMENT_SPREAD:
        return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;
      case _kinds.Kind.INLINE_FRAGMENT:
        return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;
      case _kinds.Kind.FRAGMENT_DEFINITION:
        return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;
      case _kinds.Kind.SCHEMA_DEFINITION:
        return _directiveLocation.DirectiveLocation.SCHEMA;
      case _kinds.Kind.SCALAR_TYPE_DEFINITION:
      case _kinds.Kind.SCALAR_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.SCALAR;
      case _kinds.Kind.OBJECT_TYPE_DEFINITION:
      case _kinds.Kind.OBJECT_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.OBJECT;
      case _kinds.Kind.FIELD_DEFINITION:
        return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;
      case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
      case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.INTERFACE;
      case _kinds.Kind.UNION_TYPE_DEFINITION:
      case _kinds.Kind.UNION_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.UNION;
      case _kinds.Kind.ENUM_TYPE_DEFINITION:
      case _kinds.Kind.ENUM_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.ENUM;
      case _kinds.Kind.ENUM_VALUE_DEFINITION:
        return _directiveLocation.DirectiveLocation.ENUM_VALUE;
      case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
      case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.INPUT_OBJECT;
      case _kinds.Kind.INPUT_VALUE_DEFINITION:
        var parentNode = ancestors[ancestors.length - 3];
        return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
    }
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateDirectiveMessage = duplicateDirectiveMessage;
exports.UniqueDirectivesPerLocation = UniqueDirectivesPerLocation;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function duplicateDirectiveMessage(directiveName) {
  return 'The directive "' + directiveName + '" can only be used once at ' + 'this location.';
}

/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all directives at a given location
 * are uniquely named.
 */
function UniqueDirectivesPerLocation(context) {
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      // Flow can't refine that node.directives will only contain directives,
      var directives = node.directives;
      if (directives) {
        var knownDirectives = Object.create(null);
        directives.forEach(function (directive) {
          var directiveName = directive.name.value;
          if (knownDirectives[directiveName]) {
            context.reportError(new _error.GraphQLError(duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
          } else {
            knownDirectives[directiveName] = directive;
          }
        });
      }
    }
  };
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownArgMessage = unknownArgMessage;
exports.unknownDirectiveArgMessage = unknownDirectiveArgMessage;
exports.KnownArgumentNames = KnownArgumentNames;

var _error = __webpack_require__(0);

var _suggestionList = __webpack_require__(22);

var _suggestionList2 = _interopRequireDefault(_suggestionList);

var _quotedOrList = __webpack_require__(33);

var _quotedOrList2 = _interopRequireDefault(_quotedOrList);

var _kinds = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  var message = 'Unknown argument "' + argName + '" on field "' + fieldName + '" of ' + ('type "' + typeName + '".');
  if (suggestedArgs.length) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedArgs) + '?';
  }
  return message;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  var message = 'Unknown argument "' + argName + '" on directive "@' + directiveName + '".';
  if (suggestedArgs.length) {
    message += ' Did you mean ' + (0, _quotedOrList2.default)(suggestedArgs) + '?';
  }
  return message;
}

/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */
function KnownArgumentNames(context) {
  return {
    Argument: function Argument(node, key, parent, path, ancestors) {
      var argDef = context.getArgument();
      if (!argDef) {
        var argumentOf = ancestors[ancestors.length - 1];
        if (argumentOf.kind === _kinds.Kind.FIELD) {
          var fieldDef = context.getFieldDef();
          var parentType = context.getParentType();
          if (fieldDef && parentType) {
            context.reportError(new _error.GraphQLError(unknownArgMessage(node.name.value, fieldDef.name, parentType.name, (0, _suggestionList2.default)(node.name.value, fieldDef.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        } else if (argumentOf.kind === _kinds.Kind.DIRECTIVE) {
          var directive = context.getDirective();
          if (directive) {
            context.reportError(new _error.GraphQLError(unknownDirectiveArgMessage(node.name.value, directive.name, (0, _suggestionList2.default)(node.name.value, directive.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        }
      }
    }
  };
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateArgMessage = duplicateArgMessage;
exports.UniqueArgumentNames = UniqueArgumentNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function duplicateArgMessage(argName) {
  return 'There can be only one argument named "' + argName + '".';
}

/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;
      if (knownArgNames[argName]) {
        context.reportError(new _error.GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.missingFieldArgMessage = missingFieldArgMessage;
exports.missingDirectiveArgMessage = missingDirectiveArgMessage;
exports.ProvidedNonNullArguments = ProvidedNonNullArguments;

var _error = __webpack_require__(0);

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _definition = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function missingFieldArgMessage(fieldName, argName, type) {
  return 'Field "' + fieldName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
}

function missingDirectiveArgMessage(directiveName, argName, type) {
  return 'Directive "@' + directiveName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
}

/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null) field arguments
 * have been provided.
 */
function ProvidedNonNullArguments(context) {
  return {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          return false;
        }
        var argNodes = node.arguments || [];

        var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
          return arg.name.value;
        });
        fieldDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];
          if (!argNode && (0, _definition.isNonNullType)(argDef.type)) {
            context.reportError(new _error.GraphQLError(missingFieldArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    },

    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var directiveDef = context.getDirective();
        if (!directiveDef) {
          return false;
        }
        var argNodes = node.arguments || [];

        var argNodeMap = (0, _keyMap2.default)(argNodes, function (arg) {
          return arg.name.value;
        });
        directiveDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];
          if (!argNode && (0, _definition.isNonNullType)(argDef.type)) {
            context.reportError(new _error.GraphQLError(missingDirectiveArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    }
  };
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultForRequiredVarMessage = defaultForRequiredVarMessage;
exports.VariablesDefaultValueAllowed = VariablesDefaultValueAllowed;

var _error = __webpack_require__(0);

var _definition = __webpack_require__(1);

function defaultForRequiredVarMessage(varName, type, guessType) {
  return 'Variable "$' + varName + '" of type "' + String(type) + '" is required and ' + 'will not use the default value. ' + ('Perhaps you meant to use type "' + String(guessType) + '".');
}

/**
 * Variable's default value is allowed
 *
 * A GraphQL document is only valid if all variable default values are allowed
 * due to a variable not being required.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function VariablesDefaultValueAllowed(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var name = node.variable.name.value;
      var defaultValue = node.defaultValue;
      var type = context.getInputType();
      if ((0, _definition.isNonNullType)(type) && defaultValue) {
        context.reportError(new _error.GraphQLError(defaultForRequiredVarMessage(name, type, type.ofType), [defaultValue]));
      }
      return false; // Do not traverse further.
    },

    SelectionSet: function SelectionSet() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badVarPosMessage = badVarPosMessage;
exports.VariablesInAllowedPosition = VariablesInAllowedPosition;

var _error = __webpack_require__(0);

var _definition = __webpack_require__(1);

var _typeComparators = __webpack_require__(26);

var _typeFromAST = __webpack_require__(8);

function badVarPosMessage(varName, varType, expectedType) {
  return 'Variable "$' + varName + '" of type "' + String(varType) + '" used in ' + ('position expecting type "' + String(expectedType) + '".');
}

/**
 * Variables passed to field arguments conform to type
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);

  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        usages.forEach(function (_ref) {
          var node = _ref.node,
              type = _ref.type;

          var varName = node.name.value;
          var varDef = varDefMap[varName];
          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
            if (varType && !(0, _typeComparators.isTypeSubTypeOf)(schema, effectiveType(varType, varDef), type)) {
              context.reportError(new _error.GraphQLError(badVarPosMessage(varName, varType, type), [varDef, node]));
            }
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}

// If a variable definition has a default value, it's effectively non-null.
function effectiveType(varType, varDef) {
  return !varDef.defaultValue || (0, _definition.isNonNullType)(varType) ? varType : (0, _definition.GraphQLNonNull)(varType);
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldsConflictMessage = fieldsConflictMessage;
exports.OverlappingFieldsCanBeMerged = OverlappingFieldsCanBeMerged;

var _error = __webpack_require__(0);

var _find = __webpack_require__(16);

var _find2 = _interopRequireDefault(_find);

var _kinds = __webpack_require__(2);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

var _typeFromAST = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

function fieldsConflictMessage(responseName, reason) {
  return 'Fields "' + responseName + '" conflict because ' + reasonMessage(reason) + '. Use different aliases on the fields to fetch both if this was ' + 'intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return 'subfields "' + responseName + '" conflict because ' + reasonMessage(subreason);
    }).join(' and ');
  }
  return reason;
}

/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */
function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet();

  // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.
  var cachedFieldsAndFragmentNames = new Map();

  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
      conflicts.forEach(function (_ref2) {
        var _ref2$ = _ref2[0],
            responseName = _ref2$[0],
            reason = _ref2$[1],
            fields1 = _ref2[1],
            fields2 = _ref2[2];
        return context.reportError(new _error.GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      });
    }
  };
}
// Field name and reason.

// Reason is a string, or a nested list of conflicts.

// Tuple defining a field node in a context.

// Map of array of those.


/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */

// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1];

  // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    var comparedFragments = Object.create(null);
    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]);
      // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).
      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }
  return conflicts;
}

// Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.
function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  // Memoize so a fragment is not compared for conflicts more than once.
  if (comparedFragments[fragmentName]) {
    return;
  }
  comparedFragments[fragmentName] = true;

  var fragment = context.getFragment(fragmentName);
  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1];

  // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  }

  // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.
  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2);

  // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.
  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
}

// Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.
function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  }

  // Memoize so two fragments are not compared for conflicts more than once.
  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }
  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);

  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);
  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1];

  // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);

  // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.
  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  }

  // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.
  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
}

// Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.
function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1];

  // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);

  // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.
  if (fragmentNames2.length !== 0) {
    var comparedFragments = Object.create(null);
    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  }

  // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.
  if (fragmentNames1.length !== 0) {
    var _comparedFragments = Object.create(null);
    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  }

  // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.
  for (var _i = 0; _i < fragmentNames1.length; _i++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i], fragmentNames2[_j]);
    }
  }
  return conflicts;
}

// Collect all Conflicts "within" one collection of fields.
function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  Object.keys(fieldMap).forEach(function (responseName) {
    var fields = fieldMap[responseName];
    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
}

// Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.
function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  Object.keys(fieldMap1).forEach(function (responseName) {
    var fields2 = fieldMap2[responseName];
    if (fields2) {
      var fields1 = fieldMap1[responseName];
      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
}

// Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.
function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2];

  // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, _definition.isObjectType)(parentType1) && (0, _definition.isObjectType)(parentType2);

  // The return type for each field.
  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;
    if (name1 !== name2) {
      return [[responseName, name1 + ' and ' + name2 + ' are different fields'], [node1], [node2]];
    }

    // Two field calls must have the same arguments.
    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, 'they return conflicting types ' + String(type1) + ' and ' + String(type2)], [node1], [node2]];
  }

  // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.
  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;
  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }
  return arguments1.every(function (argument1) {
    var argument2 = (0, _find2.default)(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });
    if (!argument2) {
      return false;
    }
    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || (0, _printer.print)(value1) === (0, _printer.print)(value2);
}

// Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.
function doTypesConflict(type1, type2) {
  if ((0, _definition.isListType)(type1)) {
    return (0, _definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if ((0, _definition.isListType)(type2)) {
    return true;
  }
  if ((0, _definition.isNonNullType)(type1)) {
    return (0, _definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if ((0, _definition.isNonNullType)(type2)) {
    return true;
  }
  if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
    return type1 !== type2;
  }
  return false;
}

// Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.
function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);
  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);
    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }
  return cached;
}

// Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.
function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
  if (cached) {
    return cached;
  }

  var fragmentType = (0, _typeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];
    switch (selection.kind) {
      case _kinds.Kind.FIELD:
        var fieldName = selection.name.value;
        var fieldDef = void 0;
        if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
          fieldDef = parentType.getFields()[fieldName];
        }
        var responseName = selection.alias ? selection.alias.value : fieldName;
        if (!nodeAndDefs[responseName]) {
          nodeAndDefs[responseName] = [];
        }
        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
        break;
      case _kinds.Kind.FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;
      case _kinds.Kind.INLINE_FRAGMENT:
        var typeCondition = selection.typeCondition;
        var inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
        _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
        break;
    }
  }
}

// Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.
function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref3) {
      var reason = _ref3[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref4) {
      var fields1 = _ref4[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref5) {
      var fields2 = _ref5[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}

/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */

var PairSet = function () {
  function PairSet() {
    _classCallCheck(this, PairSet);

    this._data = Object.create(null);
  }

  PairSet.prototype.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];
    if (result === undefined) {
      return false;
    }
    // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.
    if (areMutuallyExclusive === false) {
      return result === false;
    }
    return true;
  };

  PairSet.prototype.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);
    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];
  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }
  map[b] = areMutuallyExclusive;
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateInputFieldMessage = duplicateInputFieldMessage;
exports.UniqueInputFieldNames = UniqueInputFieldNames;

var _error = __webpack_require__(0);

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function duplicateInputFieldMessage(fieldName) {
  return 'There can be only one input field named "' + fieldName + '".';
}

/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */
function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);

  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;
      if (knownNames[fieldName]) {
        context.reportError(new _error.GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPromise;


// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntrospectionQuery = getIntrospectionQuery;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function getIntrospectionQuery(options) {
  var descriptions = !(options && options.descriptions === false);
  return '\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ' + (descriptions ? 'description' : '') + '\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ' + (descriptions ? 'description' : '') + '\n      fields(includeDeprecated: true) {\n        name\n        ' + (descriptions ? 'description' : '') + '\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ' + (descriptions ? 'description' : '') + '\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ' + (descriptions ? 'description' : '') + '\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ';
}

var introspectionQuery = exports.introspectionQuery = getIntrospectionQuery();

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ASTDefinitionBuilder = undefined;
exports.buildASTSchema = buildASTSchema;
exports.getDescription = getDescription;
exports.buildSchema = buildSchema;

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(24);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(28);

var _blockStringValue = __webpack_require__(48);

var _blockStringValue2 = _interopRequireDefault(_blockStringValue);

var _lexer = __webpack_require__(32);

var _parser = __webpack_require__(20);

var _values = __webpack_require__(37);

var _kinds = __webpack_require__(2);

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(7);

var _scalars = __webpack_require__(9);

var _schema = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           *  strict
                                                                                                                                                           */

function buildWrappedType(innerType, inputTypeNode) {
  if (inputTypeNode.kind === _kinds.Kind.LIST_TYPE) {
    return (0, _definition.GraphQLList)(buildWrappedType(innerType, inputTypeNode.type));
  }
  if (inputTypeNode.kind === _kinds.Kind.NON_NULL_TYPE) {
    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
    return (0, _definition.GraphQLNonNull)((0, _definition.assertNullableType)(wrappedType));
  }
  return innerType;
}

function getNamedTypeNode(typeNode) {
  var namedType = typeNode;
  while (namedType.kind === _kinds.Kind.LIST_TYPE || namedType.kind === _kinds.Kind.NON_NULL_TYPE) {
    namedType = namedType.type;
  }
  return namedType;
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(ast, options) {
  if (!ast || ast.kind !== _kinds.Kind.DOCUMENT) {
    throw new Error('Must provide a document ast.');
  }

  var schemaDef = void 0;

  var typeDefs = [];
  var nodeMap = Object.create(null);
  var directiveDefs = [];
  for (var i = 0; i < ast.definitions.length; i++) {
    var d = ast.definitions[i];
    switch (d.kind) {
      case _kinds.Kind.SCHEMA_DEFINITION:
        if (schemaDef) {
          throw new Error('Must provide only one schema definition.');
        }
        schemaDef = d;
        break;
      case _kinds.Kind.SCALAR_TYPE_DEFINITION:
      case _kinds.Kind.OBJECT_TYPE_DEFINITION:
      case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
      case _kinds.Kind.ENUM_TYPE_DEFINITION:
      case _kinds.Kind.UNION_TYPE_DEFINITION:
      case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        var typeName = d.name.value;
        if (nodeMap[typeName]) {
          throw new Error('Type "' + typeName + '" was defined more than once.');
        }
        typeDefs.push(d);
        nodeMap[typeName] = d;
        break;
      case _kinds.Kind.DIRECTIVE_DEFINITION:
        directiveDefs.push(d);
        break;
    }
  }

  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
    query: nodeMap.Query,
    mutation: nodeMap.Mutation,
    subscription: nodeMap.Subscription
  };

  var definitionBuilder = new ASTDefinitionBuilder(nodeMap, options, function (typeRef) {
    throw new Error('Type "' + typeRef.name.value + '" not found in document.');
  });

  var types = definitionBuilder.buildTypes(typeDefs);
  var directives = directiveDefs.map(function (def) {
    return definitionBuilder.buildDirective(def);
  });

  // If specified directives were not explicitly declared, add them.
  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_directives.GraphQLSkipDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_directives.GraphQLIncludeDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_directives.GraphQLDeprecatedDirective);
  }

  // Note: While this could make early assertions to get the correctly
  // typed values below, that would throw immediately while type system
  // validation with validateSchema() will produce more actionable results.
  return new _schema.GraphQLSchema({
    query: operationTypes.query ? definitionBuilder.buildType(operationTypes.query) : null,
    mutation: operationTypes.mutation ? definitionBuilder.buildType(operationTypes.mutation) : null,
    subscription: operationTypes.subscription ? definitionBuilder.buildType(operationTypes.subscription) : null,
    types: types,
    directives: directives,
    astNode: schemaDef,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });

  function getOperationTypes(schema) {
    var opTypes = {};
    schema.operationTypes.forEach(function (operationType) {
      var typeName = operationType.type.name.value;
      var operation = operationType.operation;
      if (opTypes[operation]) {
        throw new Error('Must provide only one ' + operation + ' type in schema.');
      }
      if (!nodeMap[typeName]) {
        throw new Error('Specified ' + operation + ' type "' + typeName + '" not found in document.');
      }
      opTypes[operation] = operationType.type;
    });
    return opTypes;
  }
}

var ASTDefinitionBuilder = exports.ASTDefinitionBuilder = function () {
  function ASTDefinitionBuilder(typeDefinitionsMap, options, resolveType) {
    _classCallCheck(this, ASTDefinitionBuilder);

    this._typeDefinitionsMap = typeDefinitionsMap;
    this._options = options;
    this._resolveType = resolveType;
    // Initialize to the GraphQL built in scalars and introspection types.
    this._cache = (0, _keyMap2.default)(_scalars.specifiedScalarTypes.concat(_introspection.introspectionTypes), function (type) {
      return type.name;
    });
  }

  ASTDefinitionBuilder.prototype.buildTypes = function buildTypes(nodes) {
    var _this = this;

    return nodes.map(function (node) {
      return _this.buildType(node);
    });
  };

  ASTDefinitionBuilder.prototype.buildType = function buildType(node) {
    var typeName = node.name.value;
    if (!this._cache[typeName]) {
      if (node.kind === _kinds.Kind.NAMED_TYPE) {
        var defNode = this._typeDefinitionsMap[typeName];
        this._cache[typeName] = defNode ? this._makeSchemaDef(defNode) : this._resolveType(node);
      } else {
        this._cache[typeName] = this._makeSchemaDef(node);
      }
    }
    return this._cache[typeName];
  };

  ASTDefinitionBuilder.prototype._buildWrappedType = function _buildWrappedType(typeNode) {
    var typeDef = this.buildType(getNamedTypeNode(typeNode));
    return buildWrappedType(typeDef, typeNode);
  };

  ASTDefinitionBuilder.prototype.buildDirective = function buildDirective(directiveNode) {
    return new _directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: getDescription(directiveNode, this._options),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && this._makeInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  };

  ASTDefinitionBuilder.prototype.buildField = function buildField(field) {
    return {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      type: this._buildWrappedType(field.type),
      description: getDescription(field, this._options),
      args: field.arguments && this._makeInputValues(field.arguments),
      deprecationReason: getDeprecationReason(field),
      astNode: field
    };
  };

  ASTDefinitionBuilder.prototype._makeSchemaDef = function _makeSchemaDef(def) {
    switch (def.kind) {
      case _kinds.Kind.OBJECT_TYPE_DEFINITION:
        return this._makeTypeDef(def);
      case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
        return this._makeInterfaceDef(def);
      case _kinds.Kind.ENUM_TYPE_DEFINITION:
        return this._makeEnumDef(def);
      case _kinds.Kind.UNION_TYPE_DEFINITION:
        return this._makeUnionDef(def);
      case _kinds.Kind.SCALAR_TYPE_DEFINITION:
        return this._makeScalarDef(def);
      case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return this._makeInputObjectDef(def);
      default:
        throw new Error('Type kind "' + def.kind + '" not supported.');
    }
  };

  ASTDefinitionBuilder.prototype._makeTypeDef = function _makeTypeDef(def) {
    var _this2 = this;

    var typeName = def.name.value;
    var interfaces = def.interfaces;
    return new _definition.GraphQLObjectType({
      name: typeName,
      description: getDescription(def, this._options),
      fields: function fields() {
        return _this2._makeFieldDefMap(def);
      },
      // Note: While this could make early assertions to get the correctly
      // typed values, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      interfaces: interfaces ? function () {
        return _this2.buildTypes(interfaces);
      } : [],
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeFieldDefMap = function _makeFieldDefMap(def) {
    var _this3 = this;

    return def.fields ? (0, _keyValMap2.default)(def.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return _this3.buildField(field);
    }) : {};
  };

  ASTDefinitionBuilder.prototype._makeInputValues = function _makeInputValues(values) {
    var _this4 = this;

    return (0, _keyValMap2.default)(values, function (value) {
      return value.name.value;
    }, function (value) {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      var type = _this4._buildWrappedType(value.type);
      return {
        type: type,
        description: getDescription(value, _this4._options),
        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type),
        astNode: value
      };
    });
  };

  ASTDefinitionBuilder.prototype._makeInterfaceDef = function _makeInterfaceDef(def) {
    var _this5 = this;

    return new _definition.GraphQLInterfaceType({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: function fields() {
        return _this5._makeFieldDefMap(def);
      },
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeEnumDef = function _makeEnumDef(def) {
    var _this6 = this;

    return new _definition.GraphQLEnumType({
      name: def.name.value,
      description: getDescription(def, this._options),
      values: def.values ? (0, _keyValMap2.default)(def.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: getDescription(enumValue, _this6._options),
          deprecationReason: getDeprecationReason(enumValue),
          astNode: enumValue
        };
      }) : {},
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeUnionDef = function _makeUnionDef(def) {
    return new _definition.GraphQLUnionType({
      name: def.name.value,
      description: getDescription(def, this._options),
      // Note: While this could make assertions to get the correctly typed
      // values below, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      types: def.types ? this.buildTypes(def.types) : [],
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeScalarDef = function _makeScalarDef(def) {
    return new _definition.GraphQLScalarType({
      name: def.name.value,
      description: getDescription(def, this._options),
      astNode: def,
      serialize: function serialize(value) {
        return value;
      }
    });
  };

  ASTDefinitionBuilder.prototype._makeInputObjectDef = function _makeInputObjectDef(def) {
    var _this7 = this;

    return new _definition.GraphQLInputObjectType({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: function fields() {
        return def.fields ? _this7._makeInputValues(def.fields) : {};
      },
      astNode: def
    });
  };

  return ASTDefinitionBuilder;
}();

/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */


function getDeprecationReason(node) {
  var deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node);
  return deprecated && deprecated.reason;
}

/**
 * Given an ast node, returns its string description.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }
  if (options && options.commentDescriptions) {
    var rawValue = getLeadingCommentBlock(node);
    if (rawValue !== undefined) {
      return (0, _blockStringValue2.default)('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;
  if (!loc) {
    return;
  }
  var comments = [];
  var token = loc.startToken.prev;
  while (token && token.kind === _lexer.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }
  return comments.reverse().join('\n');
}

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
function buildSchema(source, options) {
  return buildASTSchema((0, _parser.parse)(source, options), options);
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function resolveGraphqlOptions(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(typeof options === 'function')) return [3, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, options.apply(void 0, args)];
                case 2: return [2, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("Invalid options provided to ApolloServer: " + e_1.message);
                case 4: return [3, 6];
                case 5: return [2, options];
                case 6: return [2];
            }
        });
    });
}
exports.resolveGraphqlOptions = resolveGraphqlOptions;
//# sourceMappingURL=graphqlOptions.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GRAPHIQL_VERSION = '0.11.11';
var SUBSCRIPTIONS_TRANSPORT_VERSION = '0.8.2';
function safeSerialize(data) {
    return data ? JSON.stringify(data).replace(/\//g, '\\/') : null;
}
function renderGraphiQL(data) {
    var endpointURL = data.endpointURL;
    var endpointWs = endpointURL.startsWith('ws://') || endpointURL.startsWith('wss://');
    var subscriptionsEndpoint = data.subscriptionsEndpoint;
    var usingHttp = !endpointWs;
    var usingWs = endpointWs || !!subscriptionsEndpoint;
    var endpointURLWs = usingWs && (endpointWs ? endpointURL : subscriptionsEndpoint);
    var queryString = data.query;
    var variablesString = data.variables
        ? JSON.stringify(data.variables, null, 2)
        : null;
    var resultString = null;
    var operationName = data.operationName;
    var passHeader = data.passHeader ? data.passHeader : '';
    var editorTheme = data.editorTheme;
    var usingEditorTheme = !!editorTheme;
    var websocketConnectionParams = data.websocketConnectionParams || null;
    return "\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <title>GraphiQL</title>\n  <meta name=\"robots\" content=\"noindex\" />\n  <style>\n    html, body {\n      height: 100%;\n      margin: 0;\n      overflow: hidden;\n      width: 100%;\n    }\n  </style>\n  <link href=\"//unpkg.com/graphiql@" + GRAPHIQL_VERSION + "/graphiql.css\" rel=\"stylesheet\" />\n  <script src=\"//unpkg.com/react@15.6.1/dist/react.min.js\"></script>\n  <script src=\"//unpkg.com/react-dom@15.6.1/dist/react-dom.min.js\"></script>\n  <script src=\"//unpkg.com/graphiql@" + GRAPHIQL_VERSION + "/graphiql.min.js\"></script>\n  " + (usingEditorTheme
        ? "<link href=\"//cdn.jsdelivr.net/npm/codemirror@5/theme/" + editorTheme + ".min.css\" rel=\"stylesheet\" />"
        : '') + "\n  " + (usingHttp
        ? "<script src=\"//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js\"></script>"
        : '') + "\n  " + (usingWs
        ? "<script src=\"//unpkg.com/subscriptions-transport-ws@" + SUBSCRIPTIONS_TRANSPORT_VERSION + "/browser/client.js\"></script>"
        : '') + "\n  " + (usingWs && usingHttp
        ? '<script src="//unpkg.com/graphiql-subscriptions-fetcher@0.0.2/browser/client.js"></script>'
        : '') + "\n\n</head>\n<body>\n  <script>\n    // Collect the URL parameters\n    var parameters = {};\n    window.location.search.substr(1).split('&').forEach(function (entry) {\n      var eq = entry.indexOf('=');\n      if (eq >= 0) {\n        parameters[decodeURIComponent(entry.slice(0, eq))] =\n          decodeURIComponent(entry.slice(eq + 1));\n      }\n    });\n    // Produce a Location query string from a parameter object.\n    function locationQuery(params, location) {\n      return (location ? location: '') + '?' + Object.keys(params).map(function (key) {\n        return encodeURIComponent(key) + '=' +\n          encodeURIComponent(params[key]);\n      }).join('&');\n    }\n    // Derive a fetch URL from the current URL, sans the GraphQL parameters.\n    var graphqlParamNames = {\n      query: true,\n      variables: true,\n      operationName: true\n    };\n    var otherParams = {};\n    for (var k in parameters) {\n      if (parameters.hasOwnProperty(k) && graphqlParamNames[k] !== true) {\n        otherParams[k] = parameters[k];\n      }\n    }\n\n    " + (usingWs
        ? "\n    var subscriptionsClient = new window.SubscriptionsTransportWs.SubscriptionClient('" + endpointURLWs + "', {\n      reconnect: true" + (websocketConnectionParams
            ? ",\n      connectionParams: " + JSON.stringify(websocketConnectionParams)
            : '') + "\n    });\n\n    var graphQLWSFetcher = subscriptionsClient.request.bind(subscriptionsClient);\n    "
        : '') + "\n\n    " + (usingHttp
        ? "\n      // We don't use safe-serialize for location, because it's not client input.\n      var fetchURL = locationQuery(otherParams, '" + endpointURL + "');\n\n      // Defines a GraphQL fetcher using the fetch API.\n      function graphQLHttpFetcher(graphQLParams) {\n          return fetch(fetchURL, {\n            method: 'post',\n            headers: {\n              'Accept': 'application/json',\n              'Content-Type': 'application/json',\n              " + passHeader + "\n            },\n            body: JSON.stringify(graphQLParams),\n            credentials: 'same-origin',\n          }).then(function (response) {\n            return response.text();\n          }).then(function (responseBody) {\n            try {\n              return JSON.parse(responseBody);\n            } catch (error) {\n              return responseBody;\n            }\n          });\n      }\n    "
        : '') + "\n\n    " + (usingWs && usingHttp
        ? "\n      var fetcher =\n        window.GraphiQLSubscriptionsFetcher.graphQLFetcher(subscriptionsClient, graphQLHttpFetcher);\n    "
        : "\n      var fetcher = " + (usingWs ? 'graphQLWSFetcher' : 'graphQLHttpFetcher') + ";\n    ") + "\n\n    // When the query and variables string is edited, update the URL bar so\n    // that it can be easily shared.\n    function onEditQuery(newQuery) {\n      parameters.query = newQuery;\n      updateURL();\n    }\n    function onEditVariables(newVariables) {\n      parameters.variables = newVariables;\n      updateURL();\n    }\n    function onEditOperationName(newOperationName) {\n      parameters.operationName = newOperationName;\n      updateURL();\n    }\n    function updateURL() {\n      var cleanParams = Object.keys(parameters).filter(function(v) {\n        return parameters[v];\n      }).reduce(function(old, v) {\n        old[v] = parameters[v];\n        return old;\n      }, {});\n\n      history.replaceState(null, null, locationQuery(cleanParams) + window.location.hash);\n    }\n    // Render <GraphiQL /> into the body.\n    ReactDOM.render(\n      React.createElement(GraphiQL, {\n        fetcher: fetcher,\n        onEditQuery: onEditQuery,\n        onEditVariables: onEditVariables,\n        onEditOperationName: onEditOperationName,\n        query: " + safeSerialize(queryString) + ",\n        response: " + safeSerialize(resultString) + ",\n        variables: " + safeSerialize(variablesString) + ",\n        operationName: " + safeSerialize(operationName) + ",\n        editorTheme: " + safeSerialize(editorTheme) + ",\n        websocketConnectionParams: " + safeSerialize(websocketConnectionParams) + ",\n      }),\n      document.body\n    );\n  </script>\n</body>\n</html>";
}
exports.renderGraphiQL = renderGraphiQL;
//# sourceMappingURL=renderGraphiQL.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(82);

var _require = __webpack_require__(95),
    graphiqlAzureFunctions = _require.graphiqlAzureFunctions;

module.exports.handler = function run(context, request) {
  var query = '\n    {\n      rands {\n        id\n        rand\n      }\n    }\n  ';

  // End point points to the path to the GraphQL API function
  graphiqlAzureFunctions({ endpointURL: '/api/graphql', query: query })(context, request);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83).install();


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var SourceMapConsumer = __webpack_require__(84).SourceMapConsumer;
var path = __webpack_require__(91);

var fs;
try {
  fs = __webpack_require__(92);
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(93);

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = null;
  if (!fs) {
    // Use SJAX if we are in the browser
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, false);
    xhr.send(null);
    var contents = null
    if (xhr.readyState === 4 && xhr.status === 200) {
      contents = xhr.responseText
    }
  } else if (fs.existsSync(path)) {
    // Otherwise, use the filesystem
    try {
      contents = fs.readFileSync(path, 'utf8');
    } catch (er) {
      contents = '';
    }
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map) {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame) {
  if(frame.isNative()) {
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    var headerLength = 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  return error + stack.map(function(frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  if (source) {
    fs.writeSync(2, "\n" + source + "\n");
  }

  fs.writeSync(2, error.stack + "\n");
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    var Module;
    try {
      Module = __webpack_require__(94);
    } catch (err) {
      // NOP: Loading in catch block to convert webpack error to warning.
    }
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(39).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(87).SourceMapConsumer;
exports.SourceNode = __webpack_require__(90).SourceNode;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(17);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(17);
var binarySearch = __webpack_require__(88);
var ArraySet = __webpack_require__(41).ArraySet;
var base64VLQ = __webpack_require__(40);
var quickSort = __webpack_require__(89).quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(39).SourceMapGenerator;
var util = __webpack_require__(17);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var azureFunctionsApollo_1 = __webpack_require__(96);
exports.graphqlAzureFunctions = azureFunctionsApollo_1.graphqlAzureFunctions;
exports.graphiqlAzureFunctions = azureFunctionsApollo_1.graphiqlAzureFunctions;
//# sourceMappingURL=index.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var azure_functions_typescript_1 = __webpack_require__(97);
var apollo_server_core_1 = __webpack_require__(99);
var apollo_server_module_graphiql_1 = __webpack_require__(131);
function graphqlAzureFunctions(options) {
    if (!options) {
        throw new Error('Apollo Server requires options.');
    }
    if (arguments.length > 1) {
        throw new Error("Apollo Server expects exactly one argument, got " + arguments.length);
    }
    var graphqlHandler = function (httpContext, request) {
        var queryRequest = {
            method: request.method,
            options: options,
            query: request.method === 'POST' ? request.body : request.query,
        };
        if (queryRequest.query && typeof queryRequest.query === 'string') {
            queryRequest.query = JSON.parse(queryRequest.query);
        }
        return apollo_server_core_1.runHttpQuery([httpContext, request], queryRequest)
            .then(function (gqlResponse) {
            var result = {
                status: azure_functions_typescript_1.HttpStatusCodes.OK,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: gqlResponse,
                isRaw: true,
            };
            httpContext.res = result;
            httpContext.done(null, result);
        })
            .catch(function (error) {
            var result = {
                status: error.statusCode,
                headers: error.headers,
                body: error.message,
            };
            httpContext.res = result;
            httpContext.done(null, result);
        });
    };
    return graphqlHandler;
}
exports.graphqlAzureFunctions = graphqlAzureFunctions;
function graphiqlAzureFunctions(options) {
    var graphiqlHandler = function (httpContext, request) {
        var query = request.query;
        apollo_server_module_graphiql_1.resolveGraphiQLString(query, options, httpContext, request).then(function (graphiqlString) {
            var result = {
                status: azure_functions_typescript_1.HttpStatusCodes.OK,
                headers: {
                    'Content-Type': 'text/html',
                },
                body: graphiqlString,
                isRaw: true,
            };
            httpContext.res = result;
            httpContext.done(null, result);
        }, function (error) {
            httpContext.res = {
                status: 500,
                body: error.message,
            };
            httpContext.done(null, httpContext.res);
        });
    };
    return graphiqlHandler;
}
exports.graphiqlAzureFunctions = graphiqlAzureFunctions;
//# sourceMappingURL=azureFunctionsApollo.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var http_1 = __webpack_require__(98);
exports.HttpStatusCodes = http_1.HttpStatusCodes;
//# sourceMappingURL=index.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["Continue"] = 100] = "Continue";
    HttpStatusCodes[HttpStatusCodes["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    HttpStatusCodes[HttpStatusCodes["Processing"] = 102] = "Processing";
    HttpStatusCodes[HttpStatusCodes["Checkpoint"] = 103] = "Checkpoint";
    HttpStatusCodes[HttpStatusCodes["OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes["Created"] = 201] = "Created";
    HttpStatusCodes[HttpStatusCodes["Accepted"] = 202] = "Accepted";
    HttpStatusCodes[HttpStatusCodes["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    HttpStatusCodes[HttpStatusCodes["NoContent"] = 204] = "NoContent";
    HttpStatusCodes[HttpStatusCodes["ResetContent"] = 205] = "ResetContent";
    HttpStatusCodes[HttpStatusCodes["PartialContent"] = 206] = "PartialContent";
    HttpStatusCodes[HttpStatusCodes["MultiStatus"] = 207] = "MultiStatus";
    HttpStatusCodes[HttpStatusCodes["AlreadyReported"] = 208] = "AlreadyReported";
    HttpStatusCodes[HttpStatusCodes["IMUsed"] = 226] = "IMUsed";
    HttpStatusCodes[HttpStatusCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpStatusCodes[HttpStatusCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpStatusCodes[HttpStatusCodes["Found"] = 302] = "Found";
    HttpStatusCodes[HttpStatusCodes["SeeOther"] = 303] = "SeeOther";
    HttpStatusCodes[HttpStatusCodes["NotModified"] = 304] = "NotModified";
    HttpStatusCodes[HttpStatusCodes["UseProxy"] = 305] = "UseProxy";
    HttpStatusCodes[HttpStatusCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpStatusCodes[HttpStatusCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpStatusCodes[HttpStatusCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpStatusCodes[HttpStatusCodes["BadRequest"] = 400] = "BadRequest";
    HttpStatusCodes[HttpStatusCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCodes[HttpStatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpStatusCodes[HttpStatusCodes["Forbidden"] = 403] = "Forbidden";
    HttpStatusCodes[HttpStatusCodes["NotFound"] = 404] = "NotFound";
    HttpStatusCodes[HttpStatusCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCodes[HttpStatusCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCodes[HttpStatusCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpStatusCodes[HttpStatusCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStatusCodes[HttpStatusCodes["Conflict"] = 409] = "Conflict";
    HttpStatusCodes[HttpStatusCodes["Gone"] = 410] = "Gone";
    HttpStatusCodes[HttpStatusCodes["LengthRequired"] = 411] = "LengthRequired";
    HttpStatusCodes[HttpStatusCodes["PreconditionFailed"] = 412] = "PreconditionFailed";
    HttpStatusCodes[HttpStatusCodes["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    HttpStatusCodes[HttpStatusCodes["URITooLong"] = 414] = "URITooLong";
    HttpStatusCodes[HttpStatusCodes["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStatusCodes[HttpStatusCodes["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
    HttpStatusCodes[HttpStatusCodes["ExpectationFailed"] = 417] = "ExpectationFailed";
    HttpStatusCodes[HttpStatusCodes["ImATeapot"] = 418] = "ImATeapot";
    HttpStatusCodes[HttpStatusCodes["MethodFailure"] = 420] = "MethodFailure";
    HttpStatusCodes[HttpStatusCodes["EnhanceYourCalm"] = 420] = "EnhanceYourCalm";
    HttpStatusCodes[HttpStatusCodes["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    HttpStatusCodes[HttpStatusCodes["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    HttpStatusCodes[HttpStatusCodes["Locked"] = 423] = "Locked";
    HttpStatusCodes[HttpStatusCodes["FailedDependency"] = 424] = "FailedDependency";
    HttpStatusCodes[HttpStatusCodes["UpgradeRequired"] = 426] = "UpgradeRequired";
    HttpStatusCodes[HttpStatusCodes["PreconditionRequired"] = 428] = "PreconditionRequired";
    HttpStatusCodes[HttpStatusCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpStatusCodes[HttpStatusCodes["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    HttpStatusCodes[HttpStatusCodes["LoginTimeout"] = 440] = "LoginTimeout";
    HttpStatusCodes[HttpStatusCodes["NoResponse"] = 444] = "NoResponse";
    HttpStatusCodes[HttpStatusCodes["RetryWith"] = 449] = "RetryWith";
    HttpStatusCodes[HttpStatusCodes["BlockedByWindowsParentalControls"] = 450] = "BlockedByWindowsParentalControls";
    HttpStatusCodes[HttpStatusCodes["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    HttpStatusCodes[HttpStatusCodes["Redirect"] = 451] = "Redirect";
    HttpStatusCodes[HttpStatusCodes["SSLCertificateError"] = 495] = "SSLCertificateError";
    HttpStatusCodes[HttpStatusCodes["SSLCertificateRequired"] = 496] = "SSLCertificateRequired";
    HttpStatusCodes[HttpStatusCodes["HttpRequestSentToHttpsPort"] = 497] = "HttpRequestSentToHttpsPort";
    HttpStatusCodes[HttpStatusCodes["ClientClosedRequest"] = 499] = "ClientClosedRequest";
    HttpStatusCodes[HttpStatusCodes["InvalidToken"] = 498] = "InvalidToken";
    HttpStatusCodes[HttpStatusCodes["TokenRequired"] = 499] = "TokenRequired";
    HttpStatusCodes[HttpStatusCodes["RequestWasForbiddenByAntivirus"] = 499] = "RequestWasForbiddenByAntivirus";
    HttpStatusCodes[HttpStatusCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCodes[HttpStatusCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCodes[HttpStatusCodes["BadGateway"] = 502] = "BadGateway";
    HttpStatusCodes[HttpStatusCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpStatusCodes[HttpStatusCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
    HttpStatusCodes[HttpStatusCodes["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    HttpStatusCodes[HttpStatusCodes["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    HttpStatusCodes[HttpStatusCodes["InsufficientStorage"] = 507] = "InsufficientStorage";
    HttpStatusCodes[HttpStatusCodes["LoopDetected"] = 508] = "LoopDetected";
    HttpStatusCodes[HttpStatusCodes["BandwidthLimitExceeded"] = 509] = "BandwidthLimitExceeded";
    HttpStatusCodes[HttpStatusCodes["NotExtended"] = 510] = "NotExtended";
    HttpStatusCodes[HttpStatusCodes["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
    HttpStatusCodes[HttpStatusCodes["UnknownError"] = 520] = "UnknownError";
    HttpStatusCodes[HttpStatusCodes["WebServerIsDown"] = 521] = "WebServerIsDown";
    HttpStatusCodes[HttpStatusCodes["ConnectionTimedOut"] = 522] = "ConnectionTimedOut";
    HttpStatusCodes[HttpStatusCodes["OriginIsUnreachable"] = 523] = "OriginIsUnreachable";
    HttpStatusCodes[HttpStatusCodes["ATimeoutOccurred"] = 524] = "ATimeoutOccurred";
    HttpStatusCodes[HttpStatusCodes["SSLHandshakeFailed"] = 525] = "SSLHandshakeFailed";
    HttpStatusCodes[HttpStatusCodes["InvalidSSLCertificate"] = 526] = "InvalidSSLCertificate";
    HttpStatusCodes[HttpStatusCodes["SiteIsFrozen"] = 530] = "SiteIsFrozen";
})(exports.HttpStatusCodes || (exports.HttpStatusCodes = {}));
var HttpStatusCodes = exports.HttpStatusCodes;
//# sourceMappingURL=http.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var runQuery_1 = __webpack_require__(42);
exports.runQuery = runQuery_1.runQuery;
exports.LogStep = runQuery_1.LogStep;
exports.LogAction = runQuery_1.LogAction;
var runHttpQuery_1 = __webpack_require__(130);
exports.runHttpQuery = runHttpQuery_1.runHttpQuery;
exports.HttpQueryError = runHttpQuery_1.HttpQueryError;
var graphqlOptions_1 = __webpack_require__(79);
exports.resolveGraphqlOptions = graphqlOptions_1.resolveGraphqlOptions;
//# sourceMappingURL=index.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphql = graphql;
exports.graphqlSync = graphqlSync;

var _validate = __webpack_require__(23);

var _parser = __webpack_require__(20);

var _validate2 = __webpack_require__(49);

var _execute = __webpack_require__(27);

/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 */

/* eslint-disable no-redeclare */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve(
    // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver));
  });
}

/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

/* eslint-disable no-redeclare */
function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver);

  // Assert that the execution was synchronous.
  if (result.then) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Validate Schema
  var schemaValidationErrors = (0, _validate.validateSchema)(schema);
  if (schemaValidationErrors.length > 0) {
    return { errors: schemaValidationErrors };
  }

  // Parse
  var document = void 0;
  try {
    document = (0, _parser.parse)(source);
  } catch (syntaxError) {
    return { errors: [syntaxError] };
  }

  // Validate
  var validationErrors = (0, _validate2.validate)(schema, document);
  if (validationErrors.length > 0) {
    return { errors: validationErrors };
  }

  // Execute
  return (0, _execute.execute)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _GraphQLError = __webpack_require__(12);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError('Syntax Error: ' + description, undefined, source, [position]);
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  strict
                                                                                                                                                                                                                                                                   */

exports.formatError = formatError;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
  return _extends({}, error.extensions, {
    message: error.message || 'An unknown error occurred.',
    locations: error.locations,
    path: error.path
  });
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonExecutableDefinitionMessage = nonExecutableDefinitionMessage;
exports.ExecutableDefinitions = ExecutableDefinitions;

var _error = __webpack_require__(0);

var _kinds = __webpack_require__(2);

function nonExecutableDefinitionMessage(defName) {
  return 'The ' + defName + ' definition is not executable.';
}

/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function ExecutableDefinitions(context) {
  return {
    Document: function Document(node) {
      node.definitions.forEach(function (definition) {
        if (definition.kind !== _kinds.Kind.OPERATION_DEFINITION && definition.kind !== _kinds.Kind.FRAGMENT_DEFINITION) {
          context.reportError(new _error.GraphQLError(nonExecutableDefinitionMessage(definition.kind === _kinds.Kind.SCHEMA_DEFINITION ? 'schema' : definition.name.value), [definition]));
        }
      });
      return false;
    }
  };
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize3;
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0 = void 0;
  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }
    var cache1 = cache0.get(a1);
    var cache2 = void 0;
    if (cache1) {
      cache2 = cache1.get(a2);
      if (cache2) {
        var cachedValue = cache2.get(a3);
        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }
    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }
    var newValue = fn.apply(this, arguments);
    cache2.set(a3, newValue);
    return newValue;
  }
  return memoized;
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseForObject;


/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseReduce;

var _isPromise = __webpack_require__(76);

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return (0, _isPromise2.default)(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schema = __webpack_require__(3);

Object.defineProperty(exports, 'isSchema', {
  enumerable: true,
  get: function get() {
    return _schema.isSchema;
  }
});
Object.defineProperty(exports, 'GraphQLSchema', {
  enumerable: true,
  get: function get() {
    return _schema.GraphQLSchema;
  }
});

var _definition = __webpack_require__(1);

Object.defineProperty(exports, 'isType', {
  enumerable: true,
  get: function get() {
    return _definition.isType;
  }
});
Object.defineProperty(exports, 'isScalarType', {
  enumerable: true,
  get: function get() {
    return _definition.isScalarType;
  }
});
Object.defineProperty(exports, 'isObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.isObjectType;
  }
});
Object.defineProperty(exports, 'isInterfaceType', {
  enumerable: true,
  get: function get() {
    return _definition.isInterfaceType;
  }
});
Object.defineProperty(exports, 'isUnionType', {
  enumerable: true,
  get: function get() {
    return _definition.isUnionType;
  }
});
Object.defineProperty(exports, 'isEnumType', {
  enumerable: true,
  get: function get() {
    return _definition.isEnumType;
  }
});
Object.defineProperty(exports, 'isInputObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.isInputObjectType;
  }
});
Object.defineProperty(exports, 'isListType', {
  enumerable: true,
  get: function get() {
    return _definition.isListType;
  }
});
Object.defineProperty(exports, 'isNonNullType', {
  enumerable: true,
  get: function get() {
    return _definition.isNonNullType;
  }
});
Object.defineProperty(exports, 'isInputType', {
  enumerable: true,
  get: function get() {
    return _definition.isInputType;
  }
});
Object.defineProperty(exports, 'isOutputType', {
  enumerable: true,
  get: function get() {
    return _definition.isOutputType;
  }
});
Object.defineProperty(exports, 'isLeafType', {
  enumerable: true,
  get: function get() {
    return _definition.isLeafType;
  }
});
Object.defineProperty(exports, 'isCompositeType', {
  enumerable: true,
  get: function get() {
    return _definition.isCompositeType;
  }
});
Object.defineProperty(exports, 'isAbstractType', {
  enumerable: true,
  get: function get() {
    return _definition.isAbstractType;
  }
});
Object.defineProperty(exports, 'isWrappingType', {
  enumerable: true,
  get: function get() {
    return _definition.isWrappingType;
  }
});
Object.defineProperty(exports, 'isNullableType', {
  enumerable: true,
  get: function get() {
    return _definition.isNullableType;
  }
});
Object.defineProperty(exports, 'isNamedType', {
  enumerable: true,
  get: function get() {
    return _definition.isNamedType;
  }
});
Object.defineProperty(exports, 'assertType', {
  enumerable: true,
  get: function get() {
    return _definition.assertType;
  }
});
Object.defineProperty(exports, 'assertScalarType', {
  enumerable: true,
  get: function get() {
    return _definition.assertScalarType;
  }
});
Object.defineProperty(exports, 'assertObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.assertObjectType;
  }
});
Object.defineProperty(exports, 'assertInterfaceType', {
  enumerable: true,
  get: function get() {
    return _definition.assertInterfaceType;
  }
});
Object.defineProperty(exports, 'assertUnionType', {
  enumerable: true,
  get: function get() {
    return _definition.assertUnionType;
  }
});
Object.defineProperty(exports, 'assertEnumType', {
  enumerable: true,
  get: function get() {
    return _definition.assertEnumType;
  }
});
Object.defineProperty(exports, 'assertInputObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.assertInputObjectType;
  }
});
Object.defineProperty(exports, 'assertListType', {
  enumerable: true,
  get: function get() {
    return _definition.assertListType;
  }
});
Object.defineProperty(exports, 'assertNonNullType', {
  enumerable: true,
  get: function get() {
    return _definition.assertNonNullType;
  }
});
Object.defineProperty(exports, 'assertInputType', {
  enumerable: true,
  get: function get() {
    return _definition.assertInputType;
  }
});
Object.defineProperty(exports, 'assertOutputType', {
  enumerable: true,
  get: function get() {
    return _definition.assertOutputType;
  }
});
Object.defineProperty(exports, 'assertLeafType', {
  enumerable: true,
  get: function get() {
    return _definition.assertLeafType;
  }
});
Object.defineProperty(exports, 'assertCompositeType', {
  enumerable: true,
  get: function get() {
    return _definition.assertCompositeType;
  }
});
Object.defineProperty(exports, 'assertAbstractType', {
  enumerable: true,
  get: function get() {
    return _definition.assertAbstractType;
  }
});
Object.defineProperty(exports, 'assertWrappingType', {
  enumerable: true,
  get: function get() {
    return _definition.assertWrappingType;
  }
});
Object.defineProperty(exports, 'assertNullableType', {
  enumerable: true,
  get: function get() {
    return _definition.assertNullableType;
  }
});
Object.defineProperty(exports, 'assertNamedType', {
  enumerable: true,
  get: function get() {
    return _definition.assertNamedType;
  }
});
Object.defineProperty(exports, 'getNullableType', {
  enumerable: true,
  get: function get() {
    return _definition.getNullableType;
  }
});
Object.defineProperty(exports, 'getNamedType', {
  enumerable: true,
  get: function get() {
    return _definition.getNamedType;
  }
});
Object.defineProperty(exports, 'GraphQLScalarType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLScalarType;
  }
});
Object.defineProperty(exports, 'GraphQLObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLObjectType;
  }
});
Object.defineProperty(exports, 'GraphQLInterfaceType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, 'GraphQLUnionType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLUnionType;
  }
});
Object.defineProperty(exports, 'GraphQLEnumType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLEnumType;
  }
});
Object.defineProperty(exports, 'GraphQLInputObjectType', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, 'GraphQLList', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLList;
  }
});
Object.defineProperty(exports, 'GraphQLNonNull', {
  enumerable: true,
  get: function get() {
    return _definition.GraphQLNonNull;
  }
});

var _directives = __webpack_require__(6);

Object.defineProperty(exports, 'isDirective', {
  enumerable: true,
  get: function get() {
    return _directives.isDirective;
  }
});
Object.defineProperty(exports, 'GraphQLDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLDirective;
  }
});
Object.defineProperty(exports, 'isSpecifiedDirective', {
  enumerable: true,
  get: function get() {
    return _directives.isSpecifiedDirective;
  }
});
Object.defineProperty(exports, 'specifiedDirectives', {
  enumerable: true,
  get: function get() {
    return _directives.specifiedDirectives;
  }
});
Object.defineProperty(exports, 'GraphQLIncludeDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, 'GraphQLSkipDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
  enumerable: true,
  get: function get() {
    return _directives.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
  enumerable: true,
  get: function get() {
    return _directives.DEFAULT_DEPRECATION_REASON;
  }
});

var _scalars = __webpack_require__(9);

Object.defineProperty(exports, 'isSpecifiedScalarType', {
  enumerable: true,
  get: function get() {
    return _scalars.isSpecifiedScalarType;
  }
});
Object.defineProperty(exports, 'specifiedScalarTypes', {
  enumerable: true,
  get: function get() {
    return _scalars.specifiedScalarTypes;
  }
});
Object.defineProperty(exports, 'GraphQLInt', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLInt;
  }
});
Object.defineProperty(exports, 'GraphQLFloat', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLFloat;
  }
});
Object.defineProperty(exports, 'GraphQLString', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLString;
  }
});
Object.defineProperty(exports, 'GraphQLBoolean', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLBoolean;
  }
});
Object.defineProperty(exports, 'GraphQLID', {
  enumerable: true,
  get: function get() {
    return _scalars.GraphQLID;
  }
});

var _introspection = __webpack_require__(7);

Object.defineProperty(exports, 'TypeKind', {
  enumerable: true,
  get: function get() {
    return _introspection.TypeKind;
  }
});
Object.defineProperty(exports, 'isIntrospectionType', {
  enumerable: true,
  get: function get() {
    return _introspection.isIntrospectionType;
  }
});
Object.defineProperty(exports, 'introspectionTypes', {
  enumerable: true,
  get: function get() {
    return _introspection.introspectionTypes;
  }
});
Object.defineProperty(exports, '__Schema', {
  enumerable: true,
  get: function get() {
    return _introspection.__Schema;
  }
});
Object.defineProperty(exports, '__Directive', {
  enumerable: true,
  get: function get() {
    return _introspection.__Directive;
  }
});
Object.defineProperty(exports, '__DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _introspection.__DirectiveLocation;
  }
});
Object.defineProperty(exports, '__Type', {
  enumerable: true,
  get: function get() {
    return _introspection.__Type;
  }
});
Object.defineProperty(exports, '__Field', {
  enumerable: true,
  get: function get() {
    return _introspection.__Field;
  }
});
Object.defineProperty(exports, '__InputValue', {
  enumerable: true,
  get: function get() {
    return _introspection.__InputValue;
  }
});
Object.defineProperty(exports, '__EnumValue', {
  enumerable: true,
  get: function get() {
    return _introspection.__EnumValue;
  }
});
Object.defineProperty(exports, '__TypeKind', {
  enumerable: true,
  get: function get() {
    return _introspection.__TypeKind;
  }
});
Object.defineProperty(exports, 'SchemaMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _introspection.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, 'TypeMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _introspection.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
  enumerable: true,
  get: function get() {
    return _introspection.TypeNameMetaFieldDef;
  }
});

var _validate = __webpack_require__(23);

Object.defineProperty(exports, 'validateSchema', {
  enumerable: true,
  get: function get() {
    return _validate.validateSchema;
  }
});
Object.defineProperty(exports, 'assertValidSchema', {
  enumerable: true,
  get: function get() {
    return _validate.assertValidSchema;
  }
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _location = __webpack_require__(31);

Object.defineProperty(exports, 'getLocation', {
  enumerable: true,
  get: function get() {
    return _location.getLocation;
  }
});

var _kinds = __webpack_require__(2);

Object.defineProperty(exports, 'Kind', {
  enumerable: true,
  get: function get() {
    return _kinds.Kind;
  }
});

var _lexer = __webpack_require__(32);

Object.defineProperty(exports, 'createLexer', {
  enumerable: true,
  get: function get() {
    return _lexer.createLexer;
  }
});
Object.defineProperty(exports, 'TokenKind', {
  enumerable: true,
  get: function get() {
    return _lexer.TokenKind;
  }
});

var _parser = __webpack_require__(20);

Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function get() {
    return _parser.parse;
  }
});
Object.defineProperty(exports, 'parseValue', {
  enumerable: true,
  get: function get() {
    return _parser.parseValue;
  }
});
Object.defineProperty(exports, 'parseType', {
  enumerable: true,
  get: function get() {
    return _parser.parseType;
  }
});

var _printer = __webpack_require__(11);

Object.defineProperty(exports, 'print', {
  enumerable: true,
  get: function get() {
    return _printer.print;
  }
});

var _source = __webpack_require__(46);

Object.defineProperty(exports, 'Source', {
  enumerable: true,
  get: function get() {
    return _source.Source;
  }
});

var _visitor = __webpack_require__(14);

Object.defineProperty(exports, 'visit', {
  enumerable: true,
  get: function get() {
    return _visitor.visit;
  }
});
Object.defineProperty(exports, 'visitInParallel', {
  enumerable: true,
  get: function get() {
    return _visitor.visitInParallel;
  }
});
Object.defineProperty(exports, 'visitWithTypeInfo', {
  enumerable: true,
  get: function get() {
    return _visitor.visitWithTypeInfo;
  }
});
Object.defineProperty(exports, 'getVisitFn', {
  enumerable: true,
  get: function get() {
    return _visitor.getVisitFn;
  }
});
Object.defineProperty(exports, 'BREAK', {
  enumerable: true,
  get: function get() {
    return _visitor.BREAK;
  }
});

var _directiveLocation = __webpack_require__(15);

Object.defineProperty(exports, 'DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _directiveLocation.DirectiveLocation;
  }
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _execute = __webpack_require__(27);

Object.defineProperty(exports, 'execute', {
  enumerable: true,
  get: function get() {
    return _execute.execute;
  }
});
Object.defineProperty(exports, 'defaultFieldResolver', {
  enumerable: true,
  get: function get() {
    return _execute.defaultFieldResolver;
  }
});
Object.defineProperty(exports, 'responsePathAsArray', {
  enumerable: true,
  get: function get() {
    return _execute.responsePathAsArray;
  }
});

var _values = __webpack_require__(37);

Object.defineProperty(exports, 'getDirectiveValues', {
  enumerable: true,
  get: function get() {
    return _values.getDirectiveValues;
  }
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subscribe = __webpack_require__(111);

Object.defineProperty(exports, 'subscribe', {
  enumerable: true,
  get: function get() {
    return _subscribe.subscribe;
  }
});
Object.defineProperty(exports, 'createSourceEventStream', {
  enumerable: true,
  get: function get() {
    return _subscribe.createSourceEventStream;
  }
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.createSourceEventStream = createSourceEventStream;

var _iterall = __webpack_require__(19);

var _GraphQLError = __webpack_require__(12);

var _locatedError = __webpack_require__(47);

var _execute = __webpack_require__(27);

var _schema = __webpack_require__(3);

var _mapAsyncIterator = __webpack_require__(112);

var _mapAsyncIterator2 = _interopRequireDefault(_mapAsyncIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (client error). The promise will be rejected if a
 * server error occurs.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.subscribeFieldResolver) : subscribeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
}

/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */
function reportGraphQLError(error) {
  if (error instanceof _GraphQLError.GraphQLError) {
    return { errors: [error] };
  }
  throw error;
}

function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);

  // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.
  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return (0, _execute.execute)(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  };

  // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.
  return sourcePromise.then(function (resultOrStream) {
    return (
      // Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      (0, _iterall.isAsyncIterable)(resultOrStream) ? (0, _mapAsyncIterator2.default)(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  }, reportGraphQLError);
}

/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise<AsyncIterable>.
 *
 * If the client-provided invalid arguments, the source stream could not be
 * created, or the resolver did not return an AsyncIterable, this function will
 * will throw an error, which should be caught and handled by the caller.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  (0, _execute.assertValidExecutionArguments)(schema, document, variableValues);

  try {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = (0, _execute.buildExecutionContext)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

    // Return early errors if execution context failed.
    if (Array.isArray(exeContext)) {
      return Promise.resolve({ errors: exeContext });
    }

    var type = (0, _execute.getOperationRootType)(schema, exeContext.operation);
    var fields = (0, _execute.collectFields)(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = (0, _execute.getFieldDef)(schema, type, fieldName);

    if (!fieldDef) {
      throw new _GraphQLError.GraphQLError('The subscription field "' + fieldName + '" is not defined.', fieldNodes);
    }

    // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.
    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;

    var path = (0, _execute.addPath)(undefined, responseName);

    var info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, path);

    // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.
    var result = (0, _execute.resolveFieldValueOrError)(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info);

    // Coerce to Promise for easier error handling and consistent return type.
    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        throw (0, _locatedError.locatedError)(eventStream, fieldNodes, (0, _execute.responsePathAsArray)(path));
      }

      // Assert field returned an event stream, otherwise yield an error.
      if ((0, _iterall.isAsyncIterable)(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }
      throw new Error('Subscription field must return Async Iterable. Received: ' + String(eventStream));
    });
  } catch (error) {
    return Promise.reject(error);
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapAsyncIterator;

var _iterall = __webpack_require__(19);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Copyright (c) 2017-present, Facebook, Inc.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   *  strict
                                                                                                                                                                                                                   */

/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = (0, _iterall.getAsyncIterator)(iterable);
  var $return = void 0;
  var abruptClose = void 0;
  // $FlowFixMe(>=0.68.0)
  if (typeof iterator.return === 'function') {
    $return = iterator.return;
    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };
      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject = void 0;
  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;
    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }

  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */
  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({ value: undefined, done: true });
    },
    throw: function _throw(error) {
      // $FlowFixMe(>=0.68.0)
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }
      return Promise.reject(error).catch(abruptClose);
    }
  }, _iterall.$$asyncIterator, function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return { value: value, done: false };
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariablesInAllowedPositionRule = exports.VariablesDefaultValueAllowedRule = exports.VariablesAreInputTypesRule = exports.ValuesOfCorrectTypeRule = exports.UniqueVariableNamesRule = exports.UniqueOperationNamesRule = exports.UniqueInputFieldNamesRule = exports.UniqueFragmentNamesRule = exports.UniqueDirectivesPerLocationRule = exports.UniqueArgumentNamesRule = exports.SingleFieldSubscriptionsRule = exports.ScalarLeafsRule = exports.ProvidedNonNullArgumentsRule = exports.PossibleFragmentSpreadsRule = exports.OverlappingFieldsCanBeMergedRule = exports.NoUnusedVariablesRule = exports.NoUnusedFragmentsRule = exports.NoUndefinedVariablesRule = exports.NoFragmentCyclesRule = exports.LoneAnonymousOperationRule = exports.KnownTypeNamesRule = exports.KnownFragmentNamesRule = exports.KnownDirectivesRule = exports.KnownArgumentNamesRule = exports.FragmentsOnCompositeTypesRule = exports.FieldsOnCorrectTypeRule = exports.specifiedRules = exports.ValidationContext = exports.validate = undefined;

var _validate = __webpack_require__(49);

Object.defineProperty(exports, 'validate', {
  enumerable: true,
  get: function get() {
    return _validate.validate;
  }
});

var _specifiedRules = __webpack_require__(50);

Object.defineProperty(exports, 'specifiedRules', {
  enumerable: true,
  get: function get() {
    return _specifiedRules.specifiedRules;
  }
});

var _FieldsOnCorrectType = __webpack_require__(58);

Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _FieldsOnCorrectType.FieldsOnCorrectType;
  }
});

var _FragmentsOnCompositeTypes = __webpack_require__(55);

Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
  enumerable: true,
  get: function get() {
    return _FragmentsOnCompositeTypes.FragmentsOnCompositeTypes;
  }
});

var _KnownArgumentNames = __webpack_require__(69);

Object.defineProperty(exports, 'KnownArgumentNamesRule', {
  enumerable: true,
  get: function get() {
    return _KnownArgumentNames.KnownArgumentNames;
  }
});

var _KnownDirectives = __webpack_require__(67);

Object.defineProperty(exports, 'KnownDirectivesRule', {
  enumerable: true,
  get: function get() {
    return _KnownDirectives.KnownDirectives;
  }
});

var _KnownFragmentNames = __webpack_require__(60);

Object.defineProperty(exports, 'KnownFragmentNamesRule', {
  enumerable: true,
  get: function get() {
    return _KnownFragmentNames.KnownFragmentNames;
  }
});

var _KnownTypeNames = __webpack_require__(54);

Object.defineProperty(exports, 'KnownTypeNamesRule', {
  enumerable: true,
  get: function get() {
    return _KnownTypeNames.KnownTypeNames;
  }
});

var _LoneAnonymousOperation = __webpack_require__(52);

Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
  enumerable: true,
  get: function get() {
    return _LoneAnonymousOperation.LoneAnonymousOperation;
  }
});

var _NoFragmentCycles = __webpack_require__(63);

Object.defineProperty(exports, 'NoFragmentCyclesRule', {
  enumerable: true,
  get: function get() {
    return _NoFragmentCycles.NoFragmentCycles;
  }
});

var _NoUndefinedVariables = __webpack_require__(65);

Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
  enumerable: true,
  get: function get() {
    return _NoUndefinedVariables.NoUndefinedVariables;
  }
});

var _NoUnusedFragments = __webpack_require__(61);

Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
  enumerable: true,
  get: function get() {
    return _NoUnusedFragments.NoUnusedFragments;
  }
});

var _NoUnusedVariables = __webpack_require__(66);

Object.defineProperty(exports, 'NoUnusedVariablesRule', {
  enumerable: true,
  get: function get() {
    return _NoUnusedVariables.NoUnusedVariables;
  }
});

var _OverlappingFieldsCanBeMerged = __webpack_require__(74);

Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
  enumerable: true,
  get: function get() {
    return _OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged;
  }
});

var _PossibleFragmentSpreads = __webpack_require__(62);

Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
  enumerable: true,
  get: function get() {
    return _PossibleFragmentSpreads.PossibleFragmentSpreads;
  }
});

var _ProvidedNonNullArguments = __webpack_require__(71);

Object.defineProperty(exports, 'ProvidedNonNullArgumentsRule', {
  enumerable: true,
  get: function get() {
    return _ProvidedNonNullArguments.ProvidedNonNullArguments;
  }
});

var _ScalarLeafs = __webpack_require__(57);

Object.defineProperty(exports, 'ScalarLeafsRule', {
  enumerable: true,
  get: function get() {
    return _ScalarLeafs.ScalarLeafs;
  }
});

var _SingleFieldSubscriptions = __webpack_require__(53);

Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
  enumerable: true,
  get: function get() {
    return _SingleFieldSubscriptions.SingleFieldSubscriptions;
  }
});

var _UniqueArgumentNames = __webpack_require__(70);

Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueArgumentNames.UniqueArgumentNames;
  }
});

var _UniqueDirectivesPerLocation = __webpack_require__(68);

Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
  enumerable: true,
  get: function get() {
    return _UniqueDirectivesPerLocation.UniqueDirectivesPerLocation;
  }
});

var _UniqueFragmentNames = __webpack_require__(59);

Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueFragmentNames.UniqueFragmentNames;
  }
});

var _UniqueInputFieldNames = __webpack_require__(75);

Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueInputFieldNames.UniqueInputFieldNames;
  }
});

var _UniqueOperationNames = __webpack_require__(51);

Object.defineProperty(exports, 'UniqueOperationNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueOperationNames.UniqueOperationNames;
  }
});

var _UniqueVariableNames = __webpack_require__(64);

Object.defineProperty(exports, 'UniqueVariableNamesRule', {
  enumerable: true,
  get: function get() {
    return _UniqueVariableNames.UniqueVariableNames;
  }
});

var _ValuesOfCorrectType = __webpack_require__(35);

Object.defineProperty(exports, 'ValuesOfCorrectTypeRule', {
  enumerable: true,
  get: function get() {
    return _ValuesOfCorrectType.ValuesOfCorrectType;
  }
});

var _VariablesAreInputTypes = __webpack_require__(56);

Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
  enumerable: true,
  get: function get() {
    return _VariablesAreInputTypes.VariablesAreInputTypes;
  }
});

var _VariablesDefaultValueAllowed = __webpack_require__(72);

Object.defineProperty(exports, 'VariablesDefaultValueAllowedRule', {
  enumerable: true,
  get: function get() {
    return _VariablesDefaultValueAllowed.VariablesDefaultValueAllowed;
  }
});

var _VariablesInAllowedPosition = __webpack_require__(73);

Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
  enumerable: true,
  get: function get() {
    return _VariablesInAllowedPosition.VariablesInAllowedPosition;
  }
});

var _ValidationContext = __webpack_require__(36);

var _ValidationContext2 = _interopRequireDefault(_ValidationContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ValidationContext = _ValidationContext2.default;

// https://github.com/tc39/proposal-export-default-from

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _introspectionQuery = __webpack_require__(77);

Object.defineProperty(exports, 'getIntrospectionQuery', {
  enumerable: true,
  get: function get() {
    return _introspectionQuery.getIntrospectionQuery;
  }
});
Object.defineProperty(exports, 'introspectionQuery', {
  enumerable: true,
  get: function get() {
    return _introspectionQuery.introspectionQuery;
  }
});

var _getOperationAST = __webpack_require__(115);

Object.defineProperty(exports, 'getOperationAST', {
  enumerable: true,
  get: function get() {
    return _getOperationAST.getOperationAST;
  }
});

var _introspectionFromSchema = __webpack_require__(116);

Object.defineProperty(exports, 'introspectionFromSchema', {
  enumerable: true,
  get: function get() {
    return _introspectionFromSchema.introspectionFromSchema;
  }
});

var _buildClientSchema = __webpack_require__(117);

Object.defineProperty(exports, 'buildClientSchema', {
  enumerable: true,
  get: function get() {
    return _buildClientSchema.buildClientSchema;
  }
});

var _buildASTSchema = __webpack_require__(78);

Object.defineProperty(exports, 'buildASTSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildASTSchema;
  }
});
Object.defineProperty(exports, 'buildSchema', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.buildSchema;
  }
});
Object.defineProperty(exports, 'getDescription', {
  enumerable: true,
  get: function get() {
    return _buildASTSchema.getDescription;
  }
});

var _extendSchema = __webpack_require__(118);

Object.defineProperty(exports, 'extendSchema', {
  enumerable: true,
  get: function get() {
    return _extendSchema.extendSchema;
  }
});

var _lexicographicSortSchema = __webpack_require__(119);

Object.defineProperty(exports, 'lexicographicSortSchema', {
  enumerable: true,
  get: function get() {
    return _lexicographicSortSchema.lexicographicSortSchema;
  }
});

var _schemaPrinter = __webpack_require__(120);

Object.defineProperty(exports, 'printSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printSchema;
  }
});
Object.defineProperty(exports, 'printType', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printType;
  }
});
Object.defineProperty(exports, 'printIntrospectionSchema', {
  enumerable: true,
  get: function get() {
    return _schemaPrinter.printIntrospectionSchema;
  }
});

var _typeFromAST = __webpack_require__(8);

Object.defineProperty(exports, 'typeFromAST', {
  enumerable: true,
  get: function get() {
    return _typeFromAST.typeFromAST;
  }
});

var _valueFromAST = __webpack_require__(28);

Object.defineProperty(exports, 'valueFromAST', {
  enumerable: true,
  get: function get() {
    return _valueFromAST.valueFromAST;
  }
});

var _valueFromASTUntyped = __webpack_require__(43);

Object.defineProperty(exports, 'valueFromASTUntyped', {
  enumerable: true,
  get: function get() {
    return _valueFromASTUntyped.valueFromASTUntyped;
  }
});

var _astFromValue = __webpack_require__(30);

Object.defineProperty(exports, 'astFromValue', {
  enumerable: true,
  get: function get() {
    return _astFromValue.astFromValue;
  }
});

var _TypeInfo = __webpack_require__(21);

Object.defineProperty(exports, 'TypeInfo', {
  enumerable: true,
  get: function get() {
    return _TypeInfo.TypeInfo;
  }
});

var _coerceValue = __webpack_require__(38);

Object.defineProperty(exports, 'coerceValue', {
  enumerable: true,
  get: function get() {
    return _coerceValue.coerceValue;
  }
});

var _isValidJSValue = __webpack_require__(121);

Object.defineProperty(exports, 'isValidJSValue', {
  enumerable: true,
  get: function get() {
    return _isValidJSValue.isValidJSValue;
  }
});

var _isValidLiteralValue = __webpack_require__(122);

Object.defineProperty(exports, 'isValidLiteralValue', {
  enumerable: true,
  get: function get() {
    return _isValidLiteralValue.isValidLiteralValue;
  }
});

var _concatAST = __webpack_require__(123);

Object.defineProperty(exports, 'concatAST', {
  enumerable: true,
  get: function get() {
    return _concatAST.concatAST;
  }
});

var _separateOperations = __webpack_require__(124);

Object.defineProperty(exports, 'separateOperations', {
  enumerable: true,
  get: function get() {
    return _separateOperations.separateOperations;
  }
});

var _typeComparators = __webpack_require__(26);

Object.defineProperty(exports, 'isEqualType', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isEqualType;
  }
});
Object.defineProperty(exports, 'isTypeSubTypeOf', {
  enumerable: true,
  get: function get() {
    return _typeComparators.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, 'doTypesOverlap', {
  enumerable: true,
  get: function get() {
    return _typeComparators.doTypesOverlap;
  }
});

var _assertValidName = __webpack_require__(45);

Object.defineProperty(exports, 'assertValidName', {
  enumerable: true,
  get: function get() {
    return _assertValidName.assertValidName;
  }
});
Object.defineProperty(exports, 'isValidNameError', {
  enumerable: true,
  get: function get() {
    return _assertValidName.isValidNameError;
  }
});

var _findBreakingChanges = __webpack_require__(125);

Object.defineProperty(exports, 'BreakingChangeType', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.BreakingChangeType;
  }
});
Object.defineProperty(exports, 'DangerousChangeType', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.DangerousChangeType;
  }
});
Object.defineProperty(exports, 'findBreakingChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findBreakingChanges;
  }
});
Object.defineProperty(exports, 'findDangerousChanges', {
  enumerable: true,
  get: function get() {
    return _findBreakingChanges.findDangerousChanges;
  }
});

var _findDeprecatedUsages = __webpack_require__(126);

Object.defineProperty(exports, 'findDeprecatedUsages', {
  enumerable: true,
  get: function get() {
    return _findDeprecatedUsages.findDeprecatedUsages;
  }
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationAST = getOperationAST;

var _kinds = __webpack_require__(2);

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;
  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];
    if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }
  return operation;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.introspectionFromSchema = introspectionFromSchema;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _introspectionQuery = __webpack_require__(77);

var _schema = __webpack_require__(3);

var _execute = __webpack_require__(27);

var _parser = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */
function introspectionFromSchema(schema, options) {
  var queryAST = (0, _parser.parse)((0, _introspectionQuery.getIntrospectionQuery)(options));
  var result = (0, _execute.execute)(schema, queryAST);
  !(!result.then && !result.errors && result.data) ? (0, _invariant2.default)(0) : void 0;
  return result.data;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientSchema = buildClientSchema;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _keyValMap = __webpack_require__(24);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _valueFromAST = __webpack_require__(28);

var _parser = __webpack_require__(20);

var _schema = __webpack_require__(3);

var _directiveLocation = __webpack_require__(15);

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(7);

var _scalars = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  // Get the schema from the introspection result.
  var schemaIntrospection = introspection.__schema;

  // Converts the list of types into a keyMap based on the type names.
  var typeIntrospectionMap = (0, _keyMap2.default)(schemaIntrospection.types, function (type) {
    return type.name;
  });

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars. All functions below are inline
  // so that this type def cache is within the scope of the closure.
  var typeDefCache = (0, _keyMap2.default)(_scalars.specifiedScalarTypes.concat(_introspection.introspectionTypes), function (type) {
    return type.name;
  });

  // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.
  function getType(typeRef) {
    if (typeRef.kind === _introspection.TypeKind.LIST) {
      var itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      return (0, _definition.GraphQLList)(getType(itemRef));
    }
    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      var nullableType = getType(nullableRef);
      return (0, _definition.GraphQLNonNull)((0, _definition.assertNullableType)(nullableType));
    }
    if (!typeRef.name) {
      throw new Error('Unknown type reference: ' + JSON.stringify(typeRef));
    }
    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    if (typeDefCache[typeName]) {
      return typeDefCache[typeName];
    }
    var typeIntrospection = typeIntrospectionMap[typeName];
    if (!typeIntrospection) {
      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
    var typeDef = buildType(typeIntrospection);
    typeDefCache[typeName] = typeDef;
    return typeDef;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    !(0, _definition.isInputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide input type for arguments.') : void 0;
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    !(0, _definition.isOutputType)(type) ? (0, _invariant2.default)(0, 'Introspection must provide output type for fields.') : void 0;
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    return (0, _definition.assertObjectType)(type);
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    return (0, _definition.assertInterfaceType)(type);
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function buildType(type) {
    if (type && type.name && type.kind) {
      switch (type.kind) {
        case _introspection.TypeKind.SCALAR:
          return buildScalarDef(type);
        case _introspection.TypeKind.OBJECT:
          return buildObjectDef(type);
        case _introspection.TypeKind.INTERFACE:
          return buildInterfaceDef(type);
        case _introspection.TypeKind.UNION:
          return buildUnionDef(type);
        case _introspection.TypeKind.ENUM:
          return buildEnumDef(type);
        case _introspection.TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }
    throw new Error('Invalid or incomplete introspection result. Ensure that a full ' + 'introspection query is used in order to build a client schema:' + JSON.stringify(type));
  }

  function buildScalarDef(scalarIntrospection) {
    return new _definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(value) {
        return value;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    if (!objectIntrospection.interfaces) {
      throw new Error('Introspection result missing interfaces: ' + JSON.stringify(objectIntrospection));
    }
    return new _definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      throw new Error('Introspection result missing possibleTypes: ' + JSON.stringify(unionIntrospection));
    }
    return new _definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: unionIntrospection.possibleTypes.map(getObjectType)
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      throw new Error('Introspection result missing enumValues: ' + JSON.stringify(enumIntrospection));
    }
    return new _definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap2.default)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      throw new Error('Introspection result missing inputFields: ' + JSON.stringify(inputObjectIntrospection));
    }
    return new _definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error('Introspection result missing fields: ' + JSON.stringify(typeIntrospection));
    }
    return (0, _keyValMap2.default)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      if (!fieldIntrospection.args) {
        throw new Error('Introspection result missing field args: ' + JSON.stringify(fieldIntrospection));
      }
      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap2.default)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      name: inputValueIntrospection.name,
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    // Support deprecated `on****` fields for building `locations`, as this
    // is used by GraphiQL which may need to support outdated servers.
    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [_directiveLocation.DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [_directiveLocation.DirectiveLocation.QUERY, _directiveLocation.DirectiveLocation.MUTATION, _directiveLocation.DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [_directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT]);
    if (!directiveIntrospection.args) {
      throw new Error('Introspection result missing directive args: ' + JSON.stringify(directiveIntrospection));
    }
    return new _directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: locations,
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var types = schemaIntrospection.types.map(function (typeIntrospection) {
    return getNamedType(typeIntrospection.name);
  });

  // Get the root Query, Mutation, and Subscription types.
  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;

  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

  // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.
  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: directives,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSchema = extendSchema;

var _invariant = __webpack_require__(4);

var _invariant2 = _interopRequireDefault(_invariant);

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _buildASTSchema = __webpack_require__(78);

var _GraphQLError = __webpack_require__(12);

var _schema = __webpack_require__(3);

var _introspection = __webpack_require__(7);

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _kinds = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function extendSchema(schema, documentAST, options) {
  !(0, _schema.isSchema)(schema) ? (0, _invariant2.default)(0, 'Must provide valid GraphQLSchema') : void 0;

  !(documentAST && documentAST.kind === _kinds.Kind.DOCUMENT) ? (0, _invariant2.default)(0, 'Must provide valid Document AST') : void 0;

  // Collect the type definitions and extensions found in the document.
  var typeDefinitionMap = Object.create(null);
  var typeExtensionsMap = Object.create(null);

  // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".
  var directiveDefinitions = [];

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var def = documentAST.definitions[i];
    switch (def.kind) {
      case _kinds.Kind.OBJECT_TYPE_DEFINITION:
      case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
      case _kinds.Kind.ENUM_TYPE_DEFINITION:
      case _kinds.Kind.UNION_TYPE_DEFINITION:
      case _kinds.Kind.SCALAR_TYPE_DEFINITION:
      case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        // Sanity check that none of the defined types conflict with the
        // schema's existing types.
        var typeName = def.name.value;
        if (schema.getType(typeName)) {
          throw new _GraphQLError.GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
        }
        typeDefinitionMap[typeName] = def;
        break;
      case _kinds.Kind.OBJECT_TYPE_EXTENSION:
      case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
        // Sanity check that this type extension exists within the
        // schema's existing types.
        var extendedTypeName = def.name.value;
        var existingType = schema.getType(extendedTypeName);
        if (!existingType) {
          throw new _GraphQLError.GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def]);
        }
        checkExtensionNode(existingType, def);

        var existingTypeExtensions = typeExtensionsMap[extendedTypeName];
        typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
        break;
      case _kinds.Kind.DIRECTIVE_DEFINITION:
        var directiveName = def.name.value;
        var existingDirective = schema.getDirective(directiveName);
        if (existingDirective) {
          throw new _GraphQLError.GraphQLError('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
        }
        directiveDefinitions.push(def);
        break;
      case _kinds.Kind.SCALAR_TYPE_EXTENSION:
      case _kinds.Kind.UNION_TYPE_EXTENSION:
      case _kinds.Kind.ENUM_TYPE_EXTENSION:
      case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
        throw new Error('The ' + def.kind + ' kind is not yet supported by extendSchema().');
    }
  }

  // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.
  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
    return schema;
  }

  var astBuilder = new _buildASTSchema.ASTDefinitionBuilder(typeDefinitionMap, options, function (typeRef) {
    var typeName = typeRef.name.value;
    var existingType = schema.getType(typeName);
    if (existingType) {
      return getExtendedType(existingType);
    }

    throw new _GraphQLError.GraphQLError('Unknown type: "' + typeName + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [typeRef]);
  });

  var extendTypeCache = Object.create(null);

  // Get the root Query, Mutation, and Subscription object types.
  var existingQueryType = schema.getQueryType();
  var queryType = existingQueryType ? getExtendedType(existingQueryType) : null;

  var existingMutationType = schema.getMutationType();
  var mutationType = existingMutationType ? getExtendedType(existingMutationType) : null;

  var existingSubscriptionType = schema.getSubscriptionType();
  var subscriptionType = existingSubscriptionType ? getExtendedType(existingSubscriptionType) : null;

  var types = [].concat((0, _objectValues2.default)(schema.getTypeMap()).map(function (type) {
    return getExtendedType(type);
  }), astBuilder.buildTypes((0, _objectValues2.default)(typeDefinitionMap)));

  // Support both original legacy names and extended legacy names.
  var schemaAllowedLegacyNames = schema.__allowedLegacyNames;
  var extendAllowedLegacyNames = options && options.allowedLegacyNames;
  var allowedLegacyNames = schemaAllowedLegacyNames && extendAllowedLegacyNames ? schemaAllowedLegacyNames.concat(extendAllowedLegacyNames) : schemaAllowedLegacyNames || extendAllowedLegacyNames;

  // Then produce and return a Schema with these types.
  return new _schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: getMergedDirectives(),
    astNode: schema.astNode,
    allowedLegacyNames: allowedLegacyNames
  });

  // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives();
    !existingDirectives ? (0, _invariant2.default)(0, 'schema must have default directives') : void 0;

    return existingDirectives.concat(directiveDefinitions.map(function (node) {
      return astBuilder.buildDirective(node);
    }));
  }

  function getExtendedType(type) {
    if (!extendTypeCache[type.name]) {
      extendTypeCache[type.name] = extendType(type);
    }
    return extendTypeCache[type.name];
  }

  // To be called at most once per type. Only getExtendedType should call this.
  function extendType(type) {
    if ((0, _introspection.isIntrospectionType)(type)) {
      // Introspection types are not extended.
      return type;
    }
    if ((0, _definition.isObjectType)(type)) {
      return extendObjectType(type);
    }
    if ((0, _definition.isInterfaceType)(type)) {
      return extendInterfaceType(type);
    }
    if ((0, _definition.isUnionType)(type)) {
      return extendUnionType(type);
    }
    // This type is not yet extendable.
    return type;
  }

  function extendObjectType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new _definition.GraphQLObjectType({
      name: name,
      description: type.description,
      interfaces: function interfaces() {
        return extendImplementedInterfaces(type);
      },
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      isTypeOf: type.isTypeOf
    });
  }

  function extendInterfaceType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new _definition.GraphQLInterfaceType({
      name: type.name,
      description: type.description,
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      resolveType: type.resolveType
    });
  }

  function extendUnionType(type) {
    return new _definition.GraphQLUnionType({
      name: type.name,
      description: type.description,
      types: type.getTypes().map(getExtendedType),
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendImplementedInterfaces(type) {
    var interfaces = type.getInterfaces().map(getExtendedType);

    // If there are any extensions to the interfaces, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.interfaces.forEach(function (namedType) {
          // Note: While this could make early assertions to get the correctly
          // typed values, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          interfaces.push(astBuilder.buildType(namedType));
        });
      });
    }

    return interfaces;
  }

  function extendFieldMap(type) {
    var newFieldMap = Object.create(null);
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        deprecationReason: field.deprecationReason,
        type: extendFieldType(field.type),
        args: (0, _keyMap2.default)(field.args, function (arg) {
          return arg.name;
        }),
        astNode: field.astNode,
        resolve: field.resolve
      };
    });

    // If there are any extensions to the fields, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.fields.forEach(function (field) {
          var fieldName = field.name.value;
          if (oldFieldMap[fieldName]) {
            throw new _GraphQLError.GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
          }
          newFieldMap[fieldName] = astBuilder.buildField(field);
        });
      });
    }

    return newFieldMap;
  }

  function extendFieldType(typeDef) {
    if ((0, _definition.isListType)(typeDef)) {
      return (0, _definition.GraphQLList)(extendFieldType(typeDef.ofType));
    }
    if ((0, _definition.isNonNullType)(typeDef)) {
      return (0, _definition.GraphQLNonNull)(extendFieldType(typeDef.ofType));
    }
    return getExtendedType(typeDef);
  }
}

function checkExtensionNode(type, node) {
  switch (node.kind) {
    case _kinds.Kind.OBJECT_TYPE_EXTENSION:
      if (!(0, _definition.isObjectType)(type)) {
        throw new _GraphQLError.GraphQLError('Cannot extend non-object type "' + type.name + '".', [node]);
      }
      break;
    case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
      if (!(0, _definition.isInterfaceType)(type)) {
        throw new _GraphQLError.GraphQLError('Cannot extend non-interface type "' + type.name + '".', [node]);
      }
      break;
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  strict
                                                                                                                                                                                                                                                                   */

exports.lexicographicSortSchema = lexicographicSortSchema;

var _keyValMap = __webpack_require__(24);

var _keyValMap2 = _interopRequireDefault(_keyValMap);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _schema = __webpack_require__(3);

var _directives = __webpack_require__(6);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(9);

var _introspection = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sort GraphQLSchema.
 */
function lexicographicSortSchema(schema) {
  var cache = Object.create(null);

  var sortMaybeType = function sortMaybeType(maybeType) {
    return maybeType && sortNamedType(maybeType);
  };
  return new _schema.GraphQLSchema({
    types: sortTypes((0, _objectValues2.default)(schema.getTypeMap())),
    directives: sortByName(schema.getDirectives()).map(sortDirective),
    query: sortMaybeType(schema.getQueryType()),
    mutation: sortMaybeType(schema.getMutationType()),
    subscription: sortMaybeType(schema.getSubscriptionType()),
    astNode: schema.astNode
  });

  function sortDirective(directive) {
    return new _directives.GraphQLDirective({
      name: directive.name,
      description: directive.description,
      locations: sortBy(directive.locations, function (x) {
        return x;
      }),
      args: sortArgs(directive.args),
      astNode: directive.astNode
    });
  }

  function sortArgs(args) {
    return (0, _keyValMap2.default)(sortByName(args), function (arg) {
      return arg.name;
    }, function (arg) {
      return _extends({}, arg, {
        type: sortType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return {
        type: sortType(field.type),
        args: sortArgs(field.args),
        resolve: field.resolve,
        subscribe: field.subscribe,
        deprecationReason: field.deprecationReason,
        description: field.description,
        astNode: field.astNode
      };
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return {
        type: sortType(field.type),
        defaultValue: field.defaultValue,
        description: field.description,
        astNode: field.astNode
      };
    });
  }

  function sortType(type) {
    if ((0, _definition.isListType)(type)) {
      return new _definition.GraphQLList(sortType(type.ofType));
    } else if ((0, _definition.isNonNullType)(type)) {
      return new _definition.GraphQLNonNull(sortType(type.ofType));
    }
    return sortNamedType(type);
  }

  function sortTypes(arr) {
    return sortByName(arr).map(sortNamedType);
  }

  function sortNamedType(type) {
    if ((0, _scalars.isSpecifiedScalarType)(type) || (0, _introspection.isIntrospectionType)(type)) {
      return type;
    }

    var sortedType = cache[type.name];
    if (!sortedType) {
      sortedType = sortNamedTypeImpl(type);
      cache[type.name] = sortedType;
    }
    return sortedType;
  }

  function sortNamedTypeImpl(type) {
    if ((0, _definition.isScalarType)(type)) {
      return type;
    } else if ((0, _definition.isObjectType)(type)) {
      return new _definition.GraphQLObjectType({
        name: type.name,
        interfaces: function interfaces() {
          return sortTypes(type.getInterfaces());
        },
        fields: function fields() {
          return sortFields(type.getFields());
        },
        isTypeOf: type.isTypeOf,
        description: type.description,
        astNode: type.astNode,
        extensionASTNodes: type.extensionASTNodes
      });
    } else if ((0, _definition.isInterfaceType)(type)) {
      return new _definition.GraphQLInterfaceType({
        name: type.name,
        fields: function fields() {
          return sortFields(type.getFields());
        },
        resolveType: type.resolveType,
        description: type.description,
        astNode: type.astNode,
        extensionASTNodes: type.extensionASTNodes
      });
    } else if ((0, _definition.isUnionType)(type)) {
      return new _definition.GraphQLUnionType({
        name: type.name,
        types: function types() {
          return sortTypes(type.getTypes());
        },
        resolveType: type.resolveType,
        description: type.description,
        astNode: type.astNode
      });
    } else if ((0, _definition.isEnumType)(type)) {
      return new _definition.GraphQLEnumType({
        name: type.name,
        values: (0, _keyValMap2.default)(sortByName(type.getValues()), function (val) {
          return val.name;
        }, function (val) {
          return {
            value: val.value,
            deprecationReason: val.deprecationReason,
            description: val.description,
            astNode: val.astNode
          };
        }),
        description: type.description,
        astNode: type.astNode
      });
    } else if ((0, _definition.isInputObjectType)(type)) {
      return new _definition.GraphQLInputObjectType({
        name: type.name,
        fields: function fields() {
          return sortInputFields(type.getFields());
        },
        description: type.description,
        astNode: type.astNode
      });
    }
    throw new Error('Unknown type: "' + type + '"');
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var value = map[key];
      sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSchema = printSchema;
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printType = printType;

var _isNullish = __webpack_require__(25);

var _isNullish2 = _interopRequireDefault(_isNullish);

var _isInvalid = __webpack_require__(5);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _objectValues = __webpack_require__(10);

var _objectValues2 = _interopRequireDefault(_objectValues);

var _astFromValue = __webpack_require__(30);

var _printer = __webpack_require__(11);

var _definition = __webpack_require__(1);

var _scalars = __webpack_require__(9);

var _directives = __webpack_require__(6);

var _introspection = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !(0, _directives.isSpecifiedDirective)(n);
  }, isDefinedType, options);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, _directives.isSpecifiedDirective, _introspection.isIntrospectionType, options);
}

function isDefinedType(type) {
  return !(0, _scalars.isSpecifiedScalarType)(type) && !(0, _introspection.isIntrospectionType)(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var typeMap = schema.getTypeMap();
  var types = (0, _objectValues2.default)(typeMap).sort(function (type1, type2) {
    return type1.name.localeCompare(type2.name);
  }).filter(typeFilter);

  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];

  var queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push('  query: ' + queryType.name);
  }

  var mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push('  mutation: ' + mutationType.name);
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push('  subscription: ' + subscriptionType.name);
  }

  return 'schema {\n' + operationTypes.join('\n') + '\n}';
}

/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */
function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();
  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if ((0, _definition.isScalarType)(type)) {
    return printScalar(type, options);
  } else if ((0, _definition.isObjectType)(type)) {
    return printObject(type, options);
  } else if ((0, _definition.isInterfaceType)(type)) {
    return printInterface(type, options);
  } else if ((0, _definition.isUnionType)(type)) {
    return printUnion(type, options);
  } else if ((0, _definition.isEnumType)(type)) {
    return printEnum(type, options);
  } else if ((0, _definition.isInputObjectType)(type)) {
    return printInputObject(type, options);
  }
  /* istanbul ignore next */
  throw new Error('Unknown type: ' + type + '.');
}

function printScalar(type, options) {
  return printDescription(options, type) + ('scalar ' + type.name);
}

function printObject(type, options) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
  return printDescription(options, type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(options, type) + '\n' + '}';
}

function printInterface(type, options) {
  return printDescription(options, type) + ('interface ' + type.name + ' {\n') + printFields(options, type) + '\n' + '}';
}

function printUnion(type, options) {
  return printDescription(options, type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
}

function printEnum(type, options) {
  return printDescription(options, type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues(), options) + '\n' + '}';
}

function printEnumValues(values, options) {
  return values.map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  }).join('\n');
}

function printInputObject(type, options) {
  var fields = (0, _objectValues2.default)(type.getFields());
  return printDescription(options, type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  }).join('\n') + '\n' + '}';
}

function printFields(options, type) {
  var fields = (0, _objectValues2.default)(type.getFields());
  return fields.map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  }).join('\n');
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  }

  // If every arg does not have a description, print them on one line.
  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var argDecl = arg.name + ': ' + String(arg.type);
  if (!(0, _isInvalid2.default)(arg.defaultValue)) {
    argDecl += ' = ' + (0, _printer.print)((0, _astFromValue.astFromValue)(arg.defaultValue, arg.type));
  }
  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }
  var reason = fieldOrEnumVal.deprecationReason;
  if ((0, _isNullish2.default)(reason) || reason === '' || reason === _directives.DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated';
  }
  return ' @deprecated(reason: ' + (0, _printer.print)((0, _astFromValue.astFromValue)(reason, _scalars.GraphQLString)) + ')';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!def.description) {
    return '';
  }

  var lines = descriptionLines(def.description, 120 - indentation.length);
  if (options && options.commentDescriptions) {
    return printDescriptionWithComments(lines, indentation, firstInBlock);
  }

  var description = indentation && !firstInBlock ? '\n' + indentation + '"""' : indentation + '"""';

  // In some circumstances, a single line can be used for the description.
  if (lines.length === 1 && lines[0].length < 70 && lines[0][lines[0].length - 1] !== '"') {
    return description + escapeQuote(lines[0]) + '"""\n';
  }

  // Format a multi-line block quote to account for leading space.
  var hasLeadingSpace = lines[0][0] === ' ' || lines[0][0] === '\t';
  if (!hasLeadingSpace) {
    description += '\n';
  }
  for (var i = 0; i < lines.length; i++) {
    if (i !== 0 || !hasLeadingSpace) {
      description += indentation;
    }
    description += escapeQuote(lines[i]) + '\n';
  }
  description += indentation + '"""\n';
  return description;
}

function escapeQuote(line) {
  return line.replace(/"""/g, '\\"""');
}

function printDescriptionWithComments(lines, indentation, firstInBlock) {
  var description = indentation && !firstInBlock ? '\n' : '';
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      description += indentation + '# ' + lines[i] + '\n';
    }
  }
  return description;
}

function descriptionLines(description, maxLen) {
  var lines = [];
  var rawLines = description.split('\n');
  for (var i = 0; i < rawLines.length; i++) {
    if (rawLines[i] === '') {
      lines.push(rawLines[i]);
    } else {
      // For > 120 character long lines, cut at space boundaries into sublines
      // of ~80 chars.
      var sublines = breakLine(rawLines[i], maxLen);
      for (var j = 0; j < sublines.length; j++) {
        lines.push(sublines[j]);
      }
    }
  }
  return lines;
}

function breakLine(line, maxLen) {
  if (line.length < maxLen + 5) {
    return [line];
  }
  var parts = line.split(new RegExp('((?: |^).{15,' + (maxLen - 40) + '}(?= |$))'));
  if (parts.length < 4) {
    return [line];
  }
  var sublines = [parts[0] + parts[1] + parts[2]];
  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }
  return sublines;
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidJSValue = isValidJSValue;

var _coerceValue = __webpack_require__(38);

/**
 * Deprecated. Use coerceValue() directly for richer information.
 */
function isValidJSValue(value, type) {
  var errors = (0, _coerceValue.coerceValue)(value, type).errors;
  return errors ? errors.map(function (error) {
    return error.message;
  }) : [];
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidLiteralValue = isValidLiteralValue;

var _TypeInfo = __webpack_require__(21);

var _kinds = __webpack_require__(2);

var _visitor = __webpack_require__(14);

var _schema = __webpack_require__(3);

var _ValuesOfCorrectType = __webpack_require__(35);

var _ValidationContext = __webpack_require__(36);

var _ValidationContext2 = _interopRequireDefault(_ValidationContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

function isValidLiteralValue(type, valueNode) {
  var emptySchema = new _schema.GraphQLSchema({});
  var emptyDoc = { kind: _kinds.Kind.DOCUMENT, definitions: [] };
  var typeInfo = new _TypeInfo.TypeInfo(emptySchema, undefined, type);
  var context = new _ValidationContext2.default(emptySchema, emptyDoc, typeInfo);
  var visitor = (0, _ValuesOfCorrectType.ValuesOfCorrectType)(context);
  (0, _visitor.visit)(valueNode, (0, _visitor.visitWithTypeInfo)(typeInfo, visitor));
  return context.getErrors();
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAST = concatAST;


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  var batchDefinitions = [];
  for (var i = 0; i < asts.length; i++) {
    var definitions = asts[i].definitions;
    for (var j = 0; j < definitions.length; j++) {
      batchDefinitions.push(definitions[j]);
    }
  }
  return {
    kind: 'Document',
    definitions: batchDefinitions
  };
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateOperations = separateOperations;

var _visitor = __webpack_require__(14);

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName = void 0;
  var idx = 0;

  // Populate metadata and build a dependency graph.
  (0, _visitor.visit)(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  });

  // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.
  var separatedDocumentASTs = Object.create(null);
  operations.forEach(function (operation) {
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName);

    // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.
    var definitions = [operation];
    Object.keys(dependencies).forEach(function (name) {
      definitions.push(fragments[name]);
    });
    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });

    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  });

  return separatedDocumentASTs;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];
  if (immediateDeps) {
    Object.keys(immediateDeps).forEach(function (toName) {
      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    });
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerousChangeType = exports.BreakingChangeType = undefined;
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
exports.findRemovedTypes = findRemovedTypes;
exports.findTypesThatChangedKind = findTypesThatChangedKind;
exports.findArgChanges = findArgChanges;
exports.findFieldsThatChangedTypeOnObjectOrInterfaceTypes = findFieldsThatChangedTypeOnObjectOrInterfaceTypes;
exports.findFieldsThatChangedTypeOnInputObjectTypes = findFieldsThatChangedTypeOnInputObjectTypes;
exports.findTypesRemovedFromUnions = findTypesRemovedFromUnions;
exports.findTypesAddedToUnions = findTypesAddedToUnions;
exports.findValuesRemovedFromEnums = findValuesRemovedFromEnums;
exports.findValuesAddedToEnums = findValuesAddedToEnums;
exports.findInterfacesRemovedFromObjectTypes = findInterfacesRemovedFromObjectTypes;
exports.findInterfacesAddedToObjectTypes = findInterfacesAddedToObjectTypes;
exports.findRemovedDirectives = findRemovedDirectives;
exports.findRemovedDirectiveArgs = findRemovedDirectiveArgs;
exports.findAddedNonNullDirectiveArgs = findAddedNonNullDirectiveArgs;
exports.findRemovedLocationsForDirective = findRemovedLocationsForDirective;
exports.findRemovedDirectiveLocations = findRemovedDirectiveLocations;

var _definition = __webpack_require__(1);

var _directives = __webpack_require__(6);

var _schema = __webpack_require__(3);

var _keyMap = __webpack_require__(13);

var _keyMap2 = _interopRequireDefault(_keyMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

var BreakingChangeType = exports.BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED',
  NON_NULL_DIRECTIVE_ARG_ADDED: 'NON_NULL_DIRECTIVE_ARG_ADDED'
};

var DangerousChangeType = exports.DangerousChangeType = {
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  NULLABLE_INPUT_FIELD_ADDED: 'NULLABLE_INPUT_FIELD_ADDED',
  NULLABLE_ARG_ADDED: 'NULLABLE_ARG_ADDED'
};

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).breakingChanges, findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema), findRemovedDirectives(oldSchema, newSchema), findRemovedDirectiveArgs(oldSchema, newSchema), findAddedNonNullDirectiveArgs(oldSchema, newSchema), findRemovedDirectiveLocations(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */
function findDangerousChanges(oldSchema, newSchema) {
  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findInterfacesAddedToObjectTypes(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).dangerousChanges);
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: typeName + ' was removed.'
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      return;
    }
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (oldType.constructor !== newType.constructor) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */
function findArgChanges(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  var dangerousChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!((0, _definition.isObjectType)(oldType) || (0, _definition.isInterfaceType)(oldType)) || !((0, _definition.isObjectType)(newType) || (0, _definition.isInterfaceType)(newType)) || newType.constructor !== oldType.constructor) {
      return;
    }

    var oldTypeFields = oldType.getFields();
    var newTypeFields = newType.getFields();

    Object.keys(oldTypeFields).forEach(function (fieldName) {
      if (!newTypeFields[fieldName]) {
        return;
      }

      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
        var newArgs = newTypeFields[fieldName].args;
        var newArgDef = newArgs.find(function (arg) {
          return arg.name === oldArgDef.name;
        });

        // Arg not present
        if (!newArgDef) {
          breakingChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' was removed')
          });
        } else {
          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);
          if (!isSafe) {
            breakingChanges.push({
              type: BreakingChangeType.ARG_CHANGED_KIND,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed type from ') + (oldArgDef.type.toString() + ' to ' + newArgDef.type.toString())
            });
          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
            dangerousChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed defaultValue')
            });
          }
        }
      });
      // Check if a non-null arg was added to the field
      newTypeFields[fieldName].args.forEach(function (newArgDef) {
        var oldArgs = oldTypeFields[fieldName].args;
        var oldArgDef = oldArgs.find(function (arg) {
          return arg.name === newArgDef.name;
        });
        if (!oldArgDef) {
          if ((0, _definition.isNonNullType)(newArgDef.type)) {
            breakingChanges.push({
              type: BreakingChangeType.NON_NULL_ARG_ADDED,
              description: 'A non-null arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
            });
          } else {
            dangerousChanges.push({
              type: DangerousChangeType.NULLABLE_ARG_ADDED,
              description: 'A nullable arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
            });
          }
        }
      });
    });
  });

  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function typeKindName(type) {
  if ((0, _definition.isScalarType)(type)) {
    return 'a Scalar type';
  }
  if ((0, _definition.isObjectType)(type)) {
    return 'an Object type';
  }
  if ((0, _definition.isInterfaceType)(type)) {
    return 'an Interface type';
  }
  if ((0, _definition.isUnionType)(type)) {
    return 'a Union type';
  }
  if ((0, _definition.isEnumType)(type)) {
    return 'an Enum type';
  }
  if ((0, _definition.isInputObjectType)(type)) {
    return 'an Input type';
  }
  throw new TypeError('Unknown type ' + type.constructor.name);
}

function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!((0, _definition.isObjectType)(oldType) || (0, _definition.isInterfaceType)(oldType)) || !((0, _definition.isObjectType)(newType) || (0, _definition.isInterfaceType)(newType)) || newType.constructor !== oldType.constructor) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
  });
  return breakingChanges;
}

function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  var dangerousChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isInputObjectType)(oldType) || !(0, _definition.isInputObjectType)(newType)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;

        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = (0, _definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, _definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
    // Check if a field was added to the input object type
    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
      if (!(fieldName in oldTypeFieldsDef)) {
        if ((0, _definition.isNonNullType)(newTypeFieldsDef[fieldName].type)) {
          breakingChanges.push({
            type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
            description: 'A non-null field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
          });
        } else {
          dangerousChanges.push({
            type: DangerousChangeType.NULLABLE_INPUT_FIELD_ADDED,
            description: 'A nullable field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
          });
        }
      }
    });
  });
  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if ((0, _definition.isNamedType)(oldType)) {
    return (
      // if they're both named types, see if their names are equivalent
      (0, _definition.isNamedType)(newType) && oldType.name === newType.name ||
      // moving from nullable to non-null of the same underlying type is safe
      (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if ((0, _definition.isListType)(oldType)) {
    return (
      // if they're both lists, make sure the underlying types are compatible
      (0, _definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
      // moving from nullable to non-null of the same underlying type is safe
      (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if ((0, _definition.isNonNullType)(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }
  return false;
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if ((0, _definition.isNamedType)(oldType)) {
    // if they're both named types, see if their names are equivalent
    return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
  } else if ((0, _definition.isListType)(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return (0, _definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  } else if ((0, _definition.isNonNullType)(oldType)) {
    return (
      // if they're both non-null, make sure the underlying types are
      // compatible
      (0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
      // moving from non-null to nullable of the same underlying type is safe
      !(0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  }
  return false;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesRemovedFromUnion = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isUnionType)(oldType) || !(0, _definition.isUnionType)(newType)) {
      return;
    }
    var typeNamesInNewUnion = Object.create(null);
    newType.getTypes().forEach(function (type) {
      typeNamesInNewUnion[type.name] = true;
    });
    oldType.getTypes().forEach(function (type) {
      if (!typeNamesInNewUnion[type.name]) {
        typesRemovedFromUnion.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: type.name + ' was removed from union type ' + typeName + '.'
        });
      }
    });
  });
  return typesRemovedFromUnion;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */
function findTypesAddedToUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesAddedToUnion = [];
  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isUnionType)(oldType) || !(0, _definition.isUnionType)(newType)) {
      return;
    }
    var typeNamesInOldUnion = Object.create(null);
    oldType.getTypes().forEach(function (type) {
      typeNamesInOldUnion[type.name] = true;
    });
    newType.getTypes().forEach(function (type) {
      if (!typeNamesInOldUnion[type.name]) {
        typesAddedToUnion.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: type.name + ' was added to union type ' + typeName + '.'
        });
      }
    });
  });
  return typesAddedToUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesRemovedFromEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isEnumType)(oldType) || !(0, _definition.isEnumType)(newType)) {
      return;
    }
    var valuesInNewEnum = Object.create(null);
    newType.getValues().forEach(function (value) {
      valuesInNewEnum[value.name] = true;
    });
    oldType.getValues().forEach(function (value) {
      if (!valuesInNewEnum[value.name]) {
        valuesRemovedFromEnums.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: value.name + ' was removed from enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesRemovedFromEnums;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */
function findValuesAddedToEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesAddedToEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isEnumType)(oldType) || !(0, _definition.isEnumType)(newType)) {
      return;
    }

    var valuesInOldEnum = Object.create(null);
    oldType.getValues().forEach(function (value) {
      valuesInOldEnum[value.name] = true;
    });
    newType.getValues().forEach(function (value) {
      if (!valuesInOldEnum[value.name]) {
        valuesAddedToEnums.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: value.name + ' was added to enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesAddedToEnums;
}

function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isObjectType)(oldType) || !(0, _definition.isObjectType)(newType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    oldInterfaces.forEach(function (oldInterface) {
      if (!newInterfaces.some(function (int) {
        return int.name === oldInterface.name;
      })) {
        breakingChanges.push({
          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
          description: typeName + ' no longer implements interface ' + (oldInterface.name + '.')
        });
      }
    });
  });
  return breakingChanges;
}

function findInterfacesAddedToObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var interfacesAddedToObjectTypes = [];

  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(0, _definition.isObjectType)(oldType) || !(0, _definition.isObjectType)(newType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    newInterfaces.forEach(function (newInterface) {
      if (!oldInterfaces.some(function (int) {
        return int.name === newInterface.name;
      })) {
        interfacesAddedToObjectTypes.push({
          type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
          description: newInterface.name + ' added to interfaces implemented ' + ('by ' + typeName + '.')
        });
      }
    });
  });
  return interfacesAddedToObjectTypes;
}

function findRemovedDirectives(oldSchema, newSchema) {
  var removedDirectives = [];

  var newSchemaDirectiveMap = getDirectiveMapForSchema(newSchema);
  oldSchema.getDirectives().forEach(function (directive) {
    if (!newSchemaDirectiveMap[directive.name]) {
      removedDirectives.push({
        type: BreakingChangeType.DIRECTIVE_REMOVED,
        description: directive.name + ' was removed'
      });
    }
  });

  return removedDirectives;
}

function findRemovedArgsForDirective(oldDirective, newDirective) {
  var removedArgs = [];
  var newArgMap = getArgumentMapForDirective(newDirective);

  oldDirective.args.forEach(function (arg) {
    if (!newArgMap[arg.name]) {
      removedArgs.push(arg);
    }
  });

  return removedArgs;
}

function findRemovedDirectiveArgs(oldSchema, newSchema) {
  var removedDirectiveArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
    if (!oldDirective) {
      return;
    }

    findRemovedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
      removedDirectiveArgs.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: arg.name + ' was removed from ' + newDirective.name
      });
    });
  });

  return removedDirectiveArgs;
}

function findAddedArgsForDirective(oldDirective, newDirective) {
  var addedArgs = [];
  var oldArgMap = getArgumentMapForDirective(oldDirective);

  newDirective.args.forEach(function (arg) {
    if (!oldArgMap[arg.name]) {
      addedArgs.push(arg);
    }
  });

  return addedArgs;
}

function findAddedNonNullDirectiveArgs(oldSchema, newSchema) {
  var addedNonNullableArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
    if (!oldDirective) {
      return;
    }

    findAddedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
      if (!(0, _definition.isNonNullType)(arg.type)) {
        return;
      }

      addedNonNullableArgs.push({
        type: BreakingChangeType.NON_NULL_DIRECTIVE_ARG_ADDED,
        description: 'A non-null arg ' + arg.name + ' on directive ' + (newDirective.name + ' was added')
      });
    });
  });

  return addedNonNullableArgs;
}

function findRemovedLocationsForDirective(oldDirective, newDirective) {
  var removedLocations = [];
  var newLocationSet = new Set(newDirective.locations);

  oldDirective.locations.forEach(function (oldLocation) {
    if (!newLocationSet.has(oldLocation)) {
      removedLocations.push(oldLocation);
    }
  });

  return removedLocations;
}

function findRemovedDirectiveLocations(oldSchema, newSchema) {
  var removedLocations = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
    if (!oldDirective) {
      return;
    }

    findRemovedLocationsForDirective(oldDirective, newDirective).forEach(function (location) {
      removedLocations.push({
        type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
        description: location + ' was removed from ' + newDirective.name
      });
    });
  });

  return removedLocations;
}

function getDirectiveMapForSchema(schema) {
  return (0, _keyMap2.default)(schema.getDirectives(), function (dir) {
    return dir.name;
  });
}

function getArgumentMapForDirective(directive) {
  return (0, _keyMap2.default)(directive.args, function (arg) {
    return arg.name;
  });
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDeprecatedUsages = findDeprecatedUsages;

var _GraphQLError = __webpack_require__(12);

var _visitor = __webpack_require__(14);

var _definition = __webpack_require__(1);

var _schema = __webpack_require__(3);

var _TypeInfo = __webpack_require__(21);

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo.TypeInfo(schema);

  (0, _visitor.visit)(ast, (0, _visitor.visitWithTypeInfo)(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();
      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();
        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();
      if (enumVal && enumVal.isDeprecated) {
        var type = (0, _definition.getNamedType)(typeInfo.getInputType());
        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new _GraphQLError.GraphQLError('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    }
  }));

  return errors;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *  strict
   */

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(18);
var GraphQLExtension = /** @class */ (function () {
    function GraphQLExtension() {
    }
    return GraphQLExtension;
}());
exports.GraphQLExtension = GraphQLExtension;
var GraphQLExtensionStack = /** @class */ (function () {
    function GraphQLExtensionStack(extensions) {
        this.extensions = extensions.map(function (extension) {
            return typeof extension === 'function' ? new extension() : extension;
        });
    }
    GraphQLExtensionStack.prototype.requestDidStart = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.requestDidStart) {
                extension.requestDidStart();
            }
        }
    };
    GraphQLExtensionStack.prototype.parsingDidStart = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.parsingDidStart) {
                extension.parsingDidStart();
            }
        }
    };
    GraphQLExtensionStack.prototype.parsingDidEnd = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.parsingDidEnd) {
                extension.parsingDidEnd();
            }
        }
    };
    GraphQLExtensionStack.prototype.validationDidStart = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.validationDidStart) {
                extension.validationDidStart();
            }
        }
    };
    GraphQLExtensionStack.prototype.validationDidEnd = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.validationDidEnd) {
                extension.validationDidEnd();
            }
        }
    };
    GraphQLExtensionStack.prototype.executionDidStart = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.executionDidStart) {
                extension.executionDidStart();
            }
        }
    };
    GraphQLExtensionStack.prototype.willResolveField = function (source, args, context, info) {
        var handlers = this.extensions
            .map(function (extension) { return extension.willResolveField && extension.willResolveField(source, args, context, info); })
            .filter(function (x) { return x; });
        return function (result) {
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var handler = handlers_1[_i];
                handler(result);
            }
        };
    };
    GraphQLExtensionStack.prototype.executionDidEnd = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.executionDidEnd) {
                extension.executionDidEnd();
            }
        }
    };
    GraphQLExtensionStack.prototype.requestDidEnd = function () {
        for (var _i = 0, _a = this.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            if (extension.requestDidEnd) {
                extension.requestDidEnd();
            }
        }
    };
    GraphQLExtensionStack.prototype.format = function () {
        return this.extensions.map(function (extension) { return extension.format && extension.format(); }).filter(function (x) { return x; }).reduce(function (extensions, _a) {
            var key = _a[0], value = _a[1];
            return Object.assign(extensions, (_b = {}, _b[key] = value, _b));
            var _b;
        }, {});
    };
    return GraphQLExtensionStack;
}());
exports.GraphQLExtensionStack = GraphQLExtensionStack;
function enableGraphQLExtensions(schema) {
    if (schema._extensionsEnabled) {
        return schema;
    }
    schema._extensionsEnabled = true;
    forEachField(schema, wrapField);
    return schema;
}
exports.enableGraphQLExtensions = enableGraphQLExtensions;
function wrapField(field) {
    var fieldResolver = field.resolve;
    field.resolve = function (source, args, context, info) {
        var extensionStack = context && context._extensionStack;
        var handler = extensionStack && extensionStack.willResolveField(source, args, context, info);
        // If no resolver has been defined for a field, use the default field resolver
        // (which matches the behavior of graphql-js when there is no explicit resolve function defined).
        // TODO: Find a way to respect custom field resolvers, see https://github.com/graphql/graphql-js/pull/865
        try {
            var result_1 = (fieldResolver || graphql_1.defaultFieldResolver)(source, args, context, info);
            whenResultIsFinished(result_1, function () {
                handler && handler(result_1);
            });
            return result_1;
        }
        catch (error) {
            handler && handler();
            throw error;
        }
    };
}
function whenResultIsFinished(result, callback) {
    if (result === null || typeof result === 'undefined') {
        callback();
    }
    else if (typeof result.then === 'function') {
        result.then(callback, callback);
    }
    else if (Array.isArray(result)) {
        var promises_1 = [];
        result.forEach(function (value) {
            if (value && typeof value.then === 'function') {
                promises_1.push(value);
            }
        });
        if (promises_1.length > 0) {
            Promise.all(promises_1).then(callback, callback);
        }
        else {
            callback();
        }
    }
    else {
        callback();
    }
}
function forEachField(schema, fn) {
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        if (!graphql_1.getNamedType(type).name.startsWith('__') && type instanceof graphql_1.GraphQLObjectType) {
            var fields_1 = type.getFields();
            Object.keys(fields_1).forEach(function (fieldName) {
                var field = fields_1[fieldName];
                fn(field, typeName, fieldName);
            });
        }
    });
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(18);
var TracingExtension = /** @class */ (function () {
    function TracingExtension() {
        this.resolverCalls = [];
    }
    TracingExtension.prototype.requestDidStart = function () {
        this.startWallTime = new Date();
        this.startHrTime = process.hrtime();
    };
    TracingExtension.prototype.executionDidStart = function () { };
    TracingExtension.prototype.willResolveField = function (_source, _args, _context, info) {
        var _this = this;
        var resolverCall = {
            path: info.path,
            fieldName: info.fieldName,
            parentType: info.parentType,
            returnType: info.returnType,
            startOffset: process.hrtime(this.startHrTime)
        };
        this.resolverCalls.push(resolverCall);
        return function () {
            resolverCall.endOffset = process.hrtime(_this.startHrTime);
        };
    };
    TracingExtension.prototype.didResolveField = function (_source, _args, _context, info) { };
    TracingExtension.prototype.requestDidEnd = function () {
        this.duration = process.hrtime(this.startHrTime);
        this.endWallTime = new Date();
    };
    TracingExtension.prototype.format = function () {
        // In the event that we are called prior to the initialization of critical
        // date metrics, we'll return undefined to signal that the extension did not
        // format properly.  Any undefined extension results are simply purged by
        // the graphql-extensions module.
        if (typeof this.startWallTime === "undefined" ||
            typeof this.endWallTime === "undefined" ||
            typeof this.duration === "undefined") {
            return;
        }
        return [
            "tracing",
            {
                version: 1,
                startTime: this.startWallTime.toISOString(),
                endTime: this.endWallTime.toISOString(),
                duration: durationHrTimeToNanos(this.duration),
                execution: {
                    resolvers: this.resolverCalls.map(function (resolverCall) {
                        var startOffset = durationHrTimeToNanos(resolverCall.startOffset);
                        var duration = resolverCall.endOffset
                            ? durationHrTimeToNanos(resolverCall.endOffset) - startOffset
                            : 0;
                        return {
                            path: graphql_1.responsePathAsArray(resolverCall.path),
                            parentType: resolverCall.parentType.toString(),
                            fieldName: resolverCall.fieldName,
                            returnType: resolverCall.returnType.toString(),
                            startOffset: startOffset,
                            duration: duration
                        };
                    })
                }
            }
        ];
    };
    return TracingExtension;
}());
exports.TracingExtension = TracingExtension;
// Converts an hrtime array (as returned from process.hrtime) to nanoseconds.
//
// ONLY CALL THIS ON VALUES REPRESENTING DELTAS, NOT ON THE RAW RETURN VALUE
// FROM process.hrtime() WITH NO ARGUMENTS.
//
// The entire point of the hrtime data structure is that the JavaScript Number
// type can't represent all int64 values without loss of precision:
// Number.MAX_SAFE_INTEGER nanoseconds is about 104 days. Calling this function
// on a duration that represents a value less than 104 days is fine. Calling
// this function on an absolute time (which is generally roughly time since
// system boot) is not a good idea.
function durationHrTimeToNanos(hrtime) {
    return hrtime[0] * 1e9 + hrtime[1];
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(18);
var CacheScope;
(function (CacheScope) {
    CacheScope["Public"] = "PUBLIC";
    CacheScope["Private"] = "PRIVATE";
})(CacheScope = exports.CacheScope || (exports.CacheScope = {}));
var CacheControlExtension = /** @class */ (function () {
    function CacheControlExtension(options) {
        if (options === void 0) { options = {}; }
        this.hints = new Map();
        this.defaultMaxAge = options.defaultMaxAge || 0;
    }
    CacheControlExtension.prototype.willResolveField = function (_source, _args, _context, info) {
        var _this = this;
        var hint = {};
        // If this field's resolver returns an object or interface, look for hints
        // on that return type.
        var targetType = graphql_1.getNamedType(info.returnType);
        if (targetType instanceof graphql_1.GraphQLObjectType
            || targetType instanceof graphql_1.GraphQLInterfaceType) {
            if (targetType.astNode) {
                hint = mergeHints(hint, cacheHintFromDirectives(targetType.astNode.directives));
            }
        }
        // If this field is a field on an object, look for hints on the field
        // itself, taking precedence over previously calculated hints.
        var parentType = info.parentType;
        if (parentType instanceof graphql_1.GraphQLObjectType) {
            var fieldDef = parentType.getFields()[info.fieldName];
            if (fieldDef.astNode) {
                hint = mergeHints(hint, cacheHintFromDirectives(fieldDef.astNode.directives));
            }
        }
        // If this resolver returns an object and we haven't seen an explicit maxAge
        // hint, set the maxAge to 0 (uncached) or the default if specified in the
        // constructor.  (Non-object fields by default are assumed to inherit their
        // cacheability from their parents.)
        if (targetType instanceof graphql_1.GraphQLObjectType && hint.maxAge === undefined) {
            hint.maxAge = this.defaultMaxAge;
        }
        if (hint.maxAge !== undefined || hint.scope !== undefined) {
            this.addHint(info.path, hint);
        }
        info.cacheControl = {
            setCacheHint: function (hint) {
                _this.addHint(info.path, hint);
            },
            cacheHint: hint
        };
    };
    CacheControlExtension.prototype.addHint = function (path, hint) {
        var existingCacheHint = this.hints.get(path);
        if (existingCacheHint) {
            this.hints.set(path, mergeHints(existingCacheHint, hint));
        }
        else {
            this.hints.set(path, hint);
        }
    };
    CacheControlExtension.prototype.format = function () {
        return [
            'cacheControl',
            {
                version: 1,
                hints: Array.from(this.hints).map(function (_a) {
                    var path = _a[0], hint = _a[1];
                    return (__assign({ path: graphql_1.responsePathAsArray(path) }, hint));
                })
            }
        ];
    };
    return CacheControlExtension;
}());
exports.CacheControlExtension = CacheControlExtension;
function cacheHintFromDirectives(directives) {
    if (!directives)
        return undefined;
    var cacheControlDirective = directives.find(function (directive) { return directive.name.value === 'cacheControl'; });
    if (!cacheControlDirective)
        return undefined;
    if (!cacheControlDirective.arguments)
        return undefined;
    var maxAgeArgument = cacheControlDirective.arguments.find(function (argument) { return argument.name.value === 'maxAge'; });
    var scopeArgument = cacheControlDirective.arguments.find(function (argument) { return argument.name.value === 'scope'; });
    // TODO: Add proper typechecking of arguments
    return {
        maxAge: maxAgeArgument && maxAgeArgument.value && maxAgeArgument.value.kind === 'IntValue'
            ? parseInt(maxAgeArgument.value.value)
            : undefined,
        scope: scopeArgument && scopeArgument.value && scopeArgument.value.kind === 'EnumValue'
            ? scopeArgument.value.value
            : undefined
    };
}
function mergeHints(hint, otherHint) {
    if (!otherHint)
        return hint;
    return {
        maxAge: otherHint.maxAge !== undefined ? otherHint.maxAge : hint.maxAge,
        scope: otherHint.scope || hint.scope
    };
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(18);
var runQuery_1 = __webpack_require__(42);
var graphqlOptions_1 = __webpack_require__(79);
var HttpQueryError = (function (_super) {
    __extends(HttpQueryError, _super);
    function HttpQueryError(statusCode, message, isGraphQLError, headers) {
        if (isGraphQLError === void 0) { isGraphQLError = false; }
        var _this = _super.call(this, message) || this;
        _this.name = 'HttpQueryError';
        _this.statusCode = statusCode;
        _this.isGraphQLError = isGraphQLError;
        _this.headers = headers;
        return _this;
    }
    return HttpQueryError;
}(Error));
exports.HttpQueryError = HttpQueryError;
function isQueryOperation(query, operationName) {
    var operationAST = graphql_1.getOperationAST(query, operationName);
    return operationAST.operation === 'query';
}
function runHttpQuery(handlerArguments, request) {
    return __awaiter(this, void 0, void 0, function () {
        var isGetRequest, optionsObject, e_1, formatErrorFn, requestPayload, isBatch, requests, responses, gqlResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isGetRequest = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, graphqlOptions_1.resolveGraphqlOptions.apply(void 0, [request.options].concat(handlerArguments))];
                case 2:
                    optionsObject = _a.sent();
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    throw new HttpQueryError(500, e_1.message);
                case 4:
                    formatErrorFn = optionsObject.formatError || graphql_1.formatError;
                    switch (request.method) {
                        case 'POST':
                            if (!request.query || Object.keys(request.query).length === 0) {
                                throw new HttpQueryError(500, 'POST body missing. Did you forget use body-parser middleware?');
                            }
                            requestPayload = request.query;
                            break;
                        case 'GET':
                            if (!request.query || Object.keys(request.query).length === 0) {
                                throw new HttpQueryError(400, 'GET query missing.');
                            }
                            isGetRequest = true;
                            requestPayload = request.query;
                            break;
                        default:
                            throw new HttpQueryError(405, 'Apollo Server supports only GET/POST requests.', false, {
                                Allow: 'GET, POST',
                            });
                    }
                    isBatch = true;
                    if (!Array.isArray(requestPayload)) {
                        isBatch = false;
                        requestPayload = [requestPayload];
                    }
                    requests = requestPayload.map(function (requestParams) {
                        try {
                            var query = requestParams.query;
                            var extensions = requestParams.extensions;
                            if (isGetRequest && extensions) {
                                try {
                                    extensions = JSON.parse(extensions);
                                }
                                catch (error) {
                                    throw new HttpQueryError(400, 'Extensions are invalid JSON.');
                                }
                            }
                            if (query === undefined && extensions && extensions.persistedQuery) {
                                throw new HttpQueryError(200, JSON.stringify({
                                    errors: [
                                        {
                                            message: 'PersistedQueryNotSupported',
                                        },
                                    ],
                                }), true, {
                                    'Content-Type': 'application/json',
                                });
                            }
                            if (isGetRequest) {
                                if (typeof query === 'string') {
                                    query = graphql_1.parse(query);
                                }
                                else if (!query) {
                                    throw new HttpQueryError(400, 'Must provide query string.');
                                }
                                if (!isQueryOperation(query, requestParams.operationName)) {
                                    throw new HttpQueryError(405, "GET supports only query operation", false, {
                                        Allow: 'POST',
                                    });
                                }
                            }
                            var operationName = requestParams.operationName;
                            var variables = requestParams.variables;
                            if (typeof variables === 'string') {
                                try {
                                    variables = JSON.parse(variables);
                                }
                                catch (error) {
                                    throw new HttpQueryError(400, 'Variables are invalid JSON.');
                                }
                            }
                            var context_1 = optionsObject.context || {};
                            if (typeof context_1 === 'function') {
                                context_1 = context_1();
                            }
                            else if (isBatch) {
                                context_1 = Object.assign(Object.create(Object.getPrototypeOf(context_1)), context_1);
                            }
                            var params = {
                                schema: optionsObject.schema,
                                query: query,
                                variables: variables,
                                context: context_1,
                                rootValue: optionsObject.rootValue,
                                operationName: operationName,
                                logFunction: optionsObject.logFunction,
                                validationRules: optionsObject.validationRules,
                                formatError: formatErrorFn,
                                formatResponse: optionsObject.formatResponse,
                                fieldResolver: optionsObject.fieldResolver,
                                debug: optionsObject.debug,
                                tracing: optionsObject.tracing,
                                cacheControl: optionsObject.cacheControl,
                            };
                            if (optionsObject.formatParams) {
                                params = optionsObject.formatParams(params);
                            }
                            return runQuery_1.runQuery(params);
                        }
                        catch (e) {
                            if (e.name === 'HttpQueryError') {
                                return Promise.reject(e);
                            }
                            return Promise.resolve({ errors: [formatErrorFn(e)] });
                        }
                    });
                    return [4, Promise.all(requests)];
                case 5:
                    responses = _a.sent();
                    if (!isBatch) {
                        gqlResponse = responses[0];
                        if (gqlResponse.errors && typeof gqlResponse.data === 'undefined') {
                            throw new HttpQueryError(400, JSON.stringify(gqlResponse), true, {
                                'Content-Type': 'application/json',
                            });
                        }
                        return [2, JSON.stringify(gqlResponse)];
                    }
                    return [2, JSON.stringify(responses)];
            }
        });
    });
}
exports.runHttpQuery = runHttpQuery;
//# sourceMappingURL=runHttpQuery.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var renderGraphiQL_1 = __webpack_require__(80);
exports.renderGraphiQL = renderGraphiQL_1.renderGraphiQL;
var resolveGraphiQLString_1 = __webpack_require__(132);
exports.resolveGraphiQLString = resolveGraphiQLString_1.resolveGraphiQLString;
//# sourceMappingURL=index.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var renderGraphiQL_1 = __webpack_require__(80);
function isOptionsFunction(arg) {
    return typeof arg === 'function';
}
function resolveGraphiQLOptions(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isOptionsFunction(options)) return [3, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, options.apply(void 0, args)];
                case 2: return [2, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("Invalid options provided for GraphiQL: " + e_1.message);
                case 4: return [3, 6];
                case 5: return [2, options];
                case 6: return [2];
            }
        });
    });
}
function createGraphiQLParams(query) {
    var queryObject = query || {};
    return {
        query: queryObject.query || '',
        variables: queryObject.variables,
        operationName: queryObject.operationName || '',
    };
}
function createGraphiQLData(params, options) {
    return {
        endpointURL: options.endpointURL,
        subscriptionsEndpoint: options.subscriptionsEndpoint,
        query: params.query || options.query,
        variables: (params.variables && JSON.parse(params.variables)) || options.variables,
        operationName: params.operationName || options.operationName,
        passHeader: options.passHeader,
        editorTheme: options.editorTheme,
        websocketConnectionParams: options.websocketConnectionParams,
    };
}
function resolveGraphiQLString(query, options) {
    if (query === void 0) { query = {}; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var graphiqlParams, graphiqlOptions, graphiqlData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    graphiqlParams = createGraphiQLParams(query);
                    return [4, resolveGraphiQLOptions.apply(void 0, [options].concat(args))];
                case 1:
                    graphiqlOptions = _a.sent();
                    graphiqlData = createGraphiQLData(graphiqlParams, graphiqlOptions);
                    return [2, renderGraphiQL_1.renderGraphiQL(graphiqlData)];
            }
        });
    });
}
exports.resolveGraphiQLString = resolveGraphiQLString;
//# sourceMappingURL=resolveGraphiQLString.js.map

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map