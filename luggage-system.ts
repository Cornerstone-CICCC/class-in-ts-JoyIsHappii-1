//Enum: Priority
enum Priority {
    Normal,
    Priority,
    Urgent
}

//Luggage Types
class Luggage {
    protected weight: number;
    private description: string;
    protected priority: Priority;
    protected readonly fee: number = 5.20;

    constructor(weight: number, description: string, priority: Priority) {
        this.weight = weight;
        this.description = description;
        this.priority = priority;
    }

    getWeight(): number {
        return this.weight;
    }

    getDescription(): string {
        return this.description;
    }

    getPriority(): Priority {
        return this.priority;
    }

    getFee(): number {
        return this.fee;
    }

    getPrice(): number {
        return 0;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }

    toString(): string {
        return `Luggage: ${this.description} (${this.weight}kg)`;
    }
}

// Regular Luggage
class RegularLuggage extends Luggage {
    constructor(weight: number, description: string, priority: Priority) {
        super(weight, description, priority);
    }
    getPrice(): number {
        if (this.getWeight() <= 23) {
            return 0;
        } else {
            const extraWeight = this.getWeight() - 23;
            switch (this.getPriority()) {
                case Priority.Normal:
                    return this.getFee() * extraWeight;
                case Priority.Priority:
                    return this.getFee() * 5 * extraWeight;
                case Priority.Urgent:
                    return this.getFee() * 10 * extraWeight;
                default:
                    return 0;
            }
        }
    }
    toString(): string {
        return `Regular Luggage: ${this.getDescription()} (${this.getWeight()}kg)`;
    }
}

// Fragile Luggage
class FragileLuggage extends Luggage {
    private insurance: number;
    constructor(weight: number, description: string, priority: Priority, insurance: number) {
        super(weight, description, priority);
        this.insurance = insurance;
    }
    getPrice(): number {
        switch (this.getPriority()) {
            case Priority.Normal:
                return this.insurance;
            case Priority.Priority:
                return this.getFee() * 5 + this.insurance;
            case Priority.Urgent:
                return this.getFee() * 10 + this.insurance;
            default:
                return this.insurance;
        }
    }
    getInsuranceValue(): number {
        return this.insurance;
    }
    setInsuranceValue(value: number): void {
        this.insurance = value;
    }
    setWeight(weight: number): void {
        this.weight = weight;
    }
    toString(): string {
        return `Fragile Luggage: ${this.getDescription()} (${this.getWeight()}kg, Insurance: $${this.insurance})`;
    }
}

// Carry-on Luggage
class CarryOnLuggage extends Luggage {
    constructor(weight: number, description: string, priority: Priority) {
        super(weight, description, priority);
    }
    getPrice(): number {
        if (this.getWeight() <= 5) {
            return 0;
        } else {
            const extraWeight = this.getWeight() - 5;
            return this.getFee() * 3 * extraWeight;
        }
    }
    toString(): string {
        return `Carry-on Luggage: ${this.getDescription()} (${this.getWeight()}kg)`;
    }
}

// ListOfLuggages class to manage a list of luggages
class ListOfLuggages {
    private luggages: Luggage[] = [];

    insertLuggage(luggage: Luggage): void {
        this.luggages.push(luggage);
    }

    printAllLuggages(): void {
        this.luggages.forEach(luggage => {
            console.log(luggage.toString());
        });
    }

    priceOfEachLuggage(): void {
        this.luggages.forEach(luggage => {
            console.log(`${luggage.toString()} - Price: $${luggage.getPrice()}`);
        });
    }

    totalPrice(): number {
        return this.luggages.reduce((sum, luggage) => sum + (typeof luggage.getPrice === 'function' ? luggage.getPrice() : 0), 0);
    }

    getFragileLuggageWithInsurance(): { count: number, totalInsurance: number } {
        let count = 0;
        let totalInsurance = 0;
        this.luggages.forEach(luggage => {
            if (luggage instanceof FragileLuggage) {
                count++;
                totalInsurance += luggage.getInsuranceValue();
            }
        });
        return { count, totalInsurance };
    }

    //Method to remove a luggage from the list.
    removeLuggage(luggage: Luggage): void {
        this.luggages = this.luggages.filter(l => l !== luggage);
    };

    sortByPriority(): void {
        this.luggages.sort((a, b) => a.getPriority() - b.getPriority());
    }
}

// Example usage
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



// --- BEFORE EDITING ---
console.log("--- Before editing ---");
const list = new ListOfLuggages();
list.insertLuggage(fragileLuggage);
list.insertLuggage(regularLuggage);
list.insertLuggage(carryOnLuggage);
list.printAllLuggages();
list.priceOfEachLuggage();
console.log("Total price:", list.totalPrice());
console.log("Fragile luggage count and insurance:", list.getFragileLuggageWithInsurance());

// --- AFTER EDITING ---
console.log("--- After editing ---");

// Remove regular and carry-on luggage
list.removeLuggage(regularLuggage);
list.removeLuggage(carryOnLuggage);

// Update the weight of fragile luggage using the setter method
fragileLuggage.setWeight(15);

// Update the insurance value of fragile luggage
fragileLuggage.setInsuranceValue(150);

// Sort luggages by priority (add a method to ListOfLuggages for encapsulation)
list.sortByPriority();

// Print all luggages after edits
list.printAllLuggages();