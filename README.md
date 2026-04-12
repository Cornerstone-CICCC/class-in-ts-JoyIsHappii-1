# TypeScript Class Practice

In this exercise, you will simulate an airport luggage system using TypeScript classes. Airports typically allow luggage up to 23kg without extra charges. Beyond this limit, an extra fee is charged per additional kilo. If the luggage has a different priority status,the extra kilo charge increases.

## Instructions

### Repository Setup

It is your turn to find out how you want to setup the repository with typescript. 😎😎😎

### Luggage Types

You will implement three types of luggage:

1. Carry-on luggage
2. Fragile luggage
3. Regular luggage

### Properties

Each luggage type should have basic and special properties:

#### Basic Properties

These properties are shared among all luggage types and should be `private`, `protected`, and `readonly` accordingly:

1. `weight` (number): The weight of the luggage.
2. `description` (string): A description of the luggage.
3. `priority` (enum): The priority status of the luggage.
4. `fee` (number): The extra kilo fee, fixed at 5.20 and not changeable.

#### Special Properties

Only the fragile luggage has an additional property:

1. `insurance` (number): The insurance value of the fragile luggage.

#### Enum

For the `priority` property, implement an enum with these values:

1. `Normal`
2. `Priority`
3. `Urgent`

### Methods

You will implement the following methods:

1. `getWeight()`: Returns the weight of the luggage.
2. `setWeight(weight: number)`: Sets the weight of the luggage.
3. `getDescription()`: Returns the description of the luggage.
4. `getPriority()`: Returns the priority of the luggage.
5. `getInsuranceValue()`: Returns the insurance value of the luggage.
6. `setInsuranceValue(value: number)`: Sets the insurance value of the luggage.
7. `getPrice()`: Returns the price of the luggage.
8. `toString()`: Returns a string with the description and type of the luggage. For fragile luggage, include the insurance value.

#### getPrice()

The `getPrice` method calculates the luggage price based on the following rules:

1. **Regular luggage**:

   - If the weight is ≤ 23kg, the price is zero.
   - If the weight is > 23kg, calculate the extra weight fee:
     - `Normal` priority: fee × extra weight.
     - `Priority` priority: fee × 5 × extra weight.
     - `Urgent` priority: fee × 10 × extra weight.

2. **Fragile luggage**:

   - For `Normal` priority: return the insurance value.
   - For `Priority` priority: fee × 5 + insurance value.
   - For `Urgent` priority: fee × 10 + insurance value.

3. **Carry-on luggage**:
   - If the weight is ≤ 5kg, the price is zero.
   - If the weight is > 5kg, calculate the extra weight fee: fee × 3 × extra weight.

### getInsuranceValue()

This method returns the insurance value for fragile luggage. For other luggage types, return 0.

### setInsuranceValue()

This method sets the insurance value for fragile luggage. For other luggage types, return an error message stating that insurance is only applicable to fragile luggage.

## Luggage List

Implement a class to manage a list of luggages for a flight manifest.

### Properties

1. An array of luggages.

### Methods

1. `insertLuggage(luggage: Luggage)`: Adds a luggage to the list.
2. `printAllLuggages()`: Prints all the luggages in the list.
3. `priceOfEachLuggage()`: Prints the price of each luggage in the list.
4. `totalPrice()`: Prints the total price of all the luggages in the list.
5. `getFragileLuggageWithInsurance()`: Returns the quantity of fragile luggages and the total insurance value.
6. `sortByPrice()`: Sorts the luggages by price.
7. `sortByWeight()`: Sorts the luggages by weight.

### Additional Information

1. Do not allow instantiation of non-specified luggage types.
2. Create a new file for each class.
3. Use `console.log` to print results.

## Example Usage

Here is an example of how the classes should work:

```typescript
const fragileLuggage = new FragileLuggage(
  10,
  "Box with fragile items",
  Priority.Normal,
  100
);
const regularLuggage = new RegularLuggage(
  30,
  "Luggage full of clothes",
  Priority.Priority
);
const carryOnLuggage = new CarryOnLuggage(
  6,
  "Luggage with personal items",
  Priority.Urgent
);

const list = new ListOfLuggages();
list.insertLuggage(fragileLuggage);
list.insertLuggage(regularLuggage);

list.printAllLuggages();
list.priceOfEachLuggage();

console.log(list.totalPrice());
console.log(list.getFragileLuggageWithInsurance());
```

## Optional Challenges

To further challenge yourself, implement the following:

1. Method to remove a luggage from the list.
2. Method to update the weight of a luggage.
3. Method to update the insurance value of fragile luggage.
4. Method to sort luggages by priority.

**Happy coding! 🚀**
