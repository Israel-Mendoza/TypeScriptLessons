// Unknown behaves similarly to "any"
// The difference is that Unknown is more restrictive than Any

// Any
let anyValue: any;
let stringValue: string;
anyValue = "A string";
// Assigning an any type to a string type:
stringValue = anyValue;

// Unknown 
let unknownValue: unknown;
unknownValue = "A string";
// Assigning an unknown type to a string type:
// stringValue = unknownValue;
// Type 'unknown' is not assignable to type 'string'.


// The Never type is used when a function never returns anything (throws error)

function generateError(message: string, code: number): never {
    throw { message, code };
}

generateError("This is an error!", 500);
