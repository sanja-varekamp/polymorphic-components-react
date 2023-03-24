export {};

type Vowels = {
  a: "a";
  e: "e";
  i: "i";
  o: "o";
  u: "u";
};

// defines a type based on the original type Vowels, BUT only picks 2 values from it.
type FavoriteVowels = Pick<Vowels, "a" | "o">;

// defines a type based on the original type Vowels, but omits the mentioned values.
type LeastFavoriteVowels = Omit<Vowels, "a" | "o">;

//keyof of some type T gives you a new type that is a union of literal types and these literal types are the names of the properties of T. The resulting type is a subtype
type VowelsObject = keyof FavoriteVowels;

const myVowels: VowelsObject = "a";
